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
        console.log(`Holla my name is ${this.name}, I am the owner of this gas station`)
    }
}

class Owner extends Person {
    constructor(name) {
        super(name)
        this.employeeList = [];
    }
    setEmployeeIn = name => {
        this.employeeList.push(name)
        name.setEmployee(true)
        console.log(`${name.getName()} successfully entered into work`)
    };
    setEmployeeOut = name => {
        for (let i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i] == name) {
                console.log(`${name.getName()} managed to get out of his job`)
                this.employeeList.splice(i, 1)
            }
            name.setEmployee(false)
        }
    }

    getEmployeeList = () => {
        return this.employeeList;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name)
        this.employee = false;
        this.transactionList = [];
        this.CASH = 0;
        // this.nameListTransaction = [];
    }
    setEmployee = boole => this.employeeList = boole;
    setTransactionList = (customer, fuel, station) => this.transactionList.push({
        name: customer,
        fuel: fuel,
        station: station
    });
    setCash = cash => this.CASH += cash;

    getEmployee = () => {
        return this.employeeList;
    }
    getTransactionList = () => {
        return this.transactionList;
    }
    getCash = () => {
        return this.CASH;
    }

    greeting = () => {
        console.log(`Holla my name is ${this.name}, I am the employee of this gas station`)
    }

    refuel = (customer, fuel, station) => {
        if (this.getEmployee()) {
            if (station.getShelter() > fuel) {
                if (customer.getTankCapacity() > fuel + customer.getTankFilled()) {
                    let amountTemp = fuel * 10000;
                    let amount = amountTemp;
                    customer.SetTankFilled(fuel)
                    customer.setPurchaseTime()
                    station.setShelter(-fuel)
                    station.chargingWarning()
                    if (customer.getMember()) {
                        if (amount >= 100000) {
                            let totalDisc = 0.1 * amount;
                            let totalAmount = amount - totalDisc
                            this.setCash(totalAmount);
                            this.setTransactionList(customer.getName(), fuel, station.getName(), totalAmount)
                            console.log(`the transaction was successfully carried out by an officer named ${this.getName()}`)
                            console.log(`Your total transaction is ${amount}, you get 10% discount because you are already a member, your total payment is ${totalAmount}`)
                        } else if (amount >= 20000 && amount < 100000) {
                            let totalDisc = 0.1 * amount;
                            let totalAmount = amount - totalDisc
                            this.setCash(totalAmount);
                            this.setTransactionList(customer.getName(), fuel, station.getName(), totalAmount)
                            console.log(`the transaction was successfully carried out by an officer named ${this.getName()}`)
                            console.log(`Your total transaction is ${amount}, you get 2,5% discount because you are already a member, your total payment is ${totalAmount}`)
                        } else {
                            this.setCash(amount);
                            this.setTransactionList(customer.getName(), fuel, station.getName(), amount)
                            console.log(`the transaction was successfully carried out by an officer named ${this.getName()}`)
                            console.log(`Your total transaction is ${amount}, you are already a member, your total payment is ${amount}`)
                        }
                    } else if (customer.getPurchaseTimes() == 3) {
                        customer.setMember(true);
                        this.setCash(amount);
                        this.setTransactionList(customer.getName(), fuel, station.getName(), amount)
                        console.log(`the transaction was successfully carried out by an officer named ${this.getName()}`)
                        console.log(`Your total transaction is ${amount}, your total payment is ${amount} \n you are now a member, starting the next purchase you are entitled to a discount`)
                    } else {
                        this.setCash(amount)
                        this.setTransactionList(customer.getName(), fuel, station.getName(), amount)
                        console.log(`the transaction was successfully carried out by an officer named ${this.getName()}`)
                        console.log(`Your total transaction is ${amount}, your total payment is ${amount}`)
                    }
                } else {
                    console.log(`the vehicle fuel tank is not enough, please reduce your purchase`)
                }
            } else {
                console.log(`fuel is not enough, please order a refueling station or go to next station`)
            }
        } else {
            console.log(`you are not a worker !!, please contact the owner first`)
        }
    }
}

class Customer extends Person {
    constructor(name, tankCapacity) {
        super(name)
        this.member = false;
        this.PURCHASE_TIMES = 0
        this.tankCapacity = tankCapacity;
        this.TANK = 1; // karena gamungkin pas ngisi itu kosong
    }
    setMember = member => this.member = member;
    setPurchaseTime = () => this.PURCHASE_TIMES++;
    setTankCapacity = capacity => this.tankCapacity = capacity;
    SetTankFilled = capacity => this.TANK += capacity

    getMember = () => {
        return this.member;
    }
    getPurchaseTimes = () => {
        return this.PURCHASE_TIMES;
    }
    getTankCapacity = () => {
        return this.tankCapacity;
    }
    getTankFilled = () => {
        return this.TANK;
    }

    getTotalFuelSpent = (distance) => {
        const DISTANCE_PER_LITER = 10 // Asumsi 10Km membutuhkan 1 liter
        let TOTAL_FUEL_WILL_USED = distance / DISTANCE_PER_LITER;
        this.SetTankFilled(-TOTAL_FUEL_WILL_USED)
        console.log(`the fuel used for ${distance}KM is ${TOTAL_FUEL_WILL_USED} Liter, your remaining fuel ${this.getTankFilled()} liter`)
        if (this.getTankFilled() > 1) {
            console.log(`you still have a lo                                                                                                                                                           t of fuel`)
        } else {
            console.log(`Your remaining 1 liter of fuel is less, please refill it at the nearest fueling station`)
        }
    }
}

const station = new Station('StationOne')
const jono = new Owner('Jono');
const alex = new Employee('Alex');
const boni = new Customer('Boni', 20)

console.log(`=================================================================================`);
jono.greeting();
jono.setEmployeeIn(alex);
console.log(`=================================================================================`);
alex.greeting()
alex.refuel(boni, 10, station)
console.log(`=================================================================================`);
alex.refuel(boni, 10, station)