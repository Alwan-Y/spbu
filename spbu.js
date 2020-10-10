class Station {
    constructor(name) {
        this.name = name;
        this.shelter = 100;
    }
    setName = name => this.name = name;
    setShelter = amount => this.shelter += amount;

    getName = () => {
        return this.name;
    }
    getShelter = () => {
        return this.shelter;
    }

    chargingWarning = () => {
        if (this.shelter < 10) {
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
    }
    setEmployee = boole => this.employeeList = boole;
    setTransactionList = transaction => this.transactionList.push(transaction);

    getEmployee = () => {
        return this.employeeList;
    }
    getTransactionList = () => {
        return this.transactionList;
    }
}

class Customer extends Person {
    constructor(name, origin, tankCapacity, amount) {
        super(name, origin)
        this.member = false;
        this.PURCHASE_TIMES = 0
        this.tankCapacity = tankCapacity;
        this.amount = amount;
        this.tankFilled = 1; // karena gamungkin pas ngisi itu kosong
    }
    setMember = member => this.member = member;
    setPurchaseList = () => this.PURCHASE_TIMES++;
    setTankCapacity = capacity => this.tankCapacity = capacity;
    setAmount = amount => this.amount = amount;
    SetTankFilled = capacity => this.SetTankFilled += capacity

    getName = () => {
        return this.getName;
    }
    getMembber = () => {
        return this.member;
    }
    getPurchaseList = () => {
        return this.PURCHASE_TIMES;
    }
    getTankCapacity = () => {
        return this.tankCapacity;
    }
    getAmount = () => {
        return this.amount;
    }
    getTankFilled = () => {
        return this.tankFilled;
    }
}