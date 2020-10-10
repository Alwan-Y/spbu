class Station {
    constructor(name) {
        this.name = name;
        this.shelter = 1000;
    }
    setName = name => this.name = name;
    setShelter = fuel => this.shelter += fuel;

    getName = () => {
        return this.name;
    }
    getShelter = () => {
        return this.shelter;
    }

    chargingWarning = () => {
        if (this.shelter < 50) {
            console.log(`remaining fuel is too little, please ask to be filled`)
        } else {
            console.log(`there is still a lot of fuel left`)
        }
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    setName = name => this.name = name;

    getName = () => {
        return this.name;
    }

    greeting = () => {
        console.log(`Holla my name is ${this.name}`)
    }
}

class Owner extends person {
    constructor(name) {
        super(name)
        this.employeeList = [];
    }
    setEmployeeIn = name => {
        this.employeeList.push(name)
        console.log(`${name.getName()} successfully entered into work`)
    };
    setEmployeeOut = name => {
        for (let i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i] == name) {
                console.log(`${name.getName()} managed to get out of his job`)
                this.employeeList.splice(i, 1)
            }
        }
    }

    getEmployeeList = () => {
        return this.employeeList;
    }
}

class Employee extends person {
    constructor(name) {
        super(name)
        this.employee = false;
        this.transactionList = [];
        this.CASH = 0;
        // this.nameListTransaction = [];
    }
    setEmployee = boole => this.employeeList = boole;
    setTransactionList = transaction => this.transactionList.push(transaction);
    setCash = cash => this.CASH = cash;

    getEmployee = () => {
        return this.employeeList;
    }
    getTransactionList = () => {
        return this.transactionList;
    }
    getCash = () => {
        return this.CASH;
    }

    refuel = (customer, fuel, station) => {
        if(this.getEmployee()){
            if(station.getShelter() > fuel) {
                if(customer.getTankCapacity() > fuel) {
                    customer.SetTankFilled(fuel)
                    customer.setPurchaseTime()
                    this.setTransactionList([customer,fuel])
                    station.setShelter(-fuel)
                } else {
                    console.log(`the vehicle fuel tank is not enough, please reduce your purchase`)
                }
            } else {
                console.log(`fuel is not enough, please order a refueling station`)
            }
        } else {
            console.log(`you are not a worker !!, please contact the owner first`)
        }
    }    
}

class Customer extends Person {
    constructor(name, origin, tankCapacity) {
        super(name, origin)
        this.member = false;
        this.PURCHASE_TIMES = 0
        this.tankCapacity = tankCapacity;
        this.tankFilled = 1; // karena gamungkin pas ngisi itu kosong
    }
    setMember = member => this.member = member;
    setPurchaseTime = () => this.PURCHASE_TIMES++;
    setTankCapacity = capacity => this.tankCapacity = capacity;
    SetTankFilled = capacity => this.SetTankFilled += capacity

    getName = () => {
        return this.getName;
    }
    getMembber = () => {
        return this.member;
    }
    getPurchaseTimes = () => {
        return this.PURCHASE_TIMES;
    }
    getTankCapacity = () => {
        return this.tankCapacity;
    }
    getTankFilled = () => {
        return this.tankFilled;
    }
}

const station = new Station('station 1')