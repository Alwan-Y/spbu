class GasStation {
    constructor(name, owner) {
        this.name = name;
        this.employeeList = [];
        this.owner = owner;
    }
    setName = name => this.name = name;
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

    getName = () => {
        return this.name;
    }
    getEmployeeList = () => {
        return this.employeeList;
    }
    getOwner = () => {
        return this.owner;
    }
}
class Person {
    constructor(name, origin) {
        this.name = name;
        this.origin = origin;
    }
    setName = name => this.name = name;
    setOrigin = origin => this.origin = origin;

    getName = () => {
        return this.name;
    }
    getOrigin = () => {
        return this.origin;
    }
}

class Owner extends person {
    constructor(name, origin) {
        super(name, origin)
    }
}

class Employee extends person {
    constructor(name, origin) {
        super(name, origin)
    }
}

class Customer extends Person {
    constructor(name, origin) {
        super(name, origin)
    }
}