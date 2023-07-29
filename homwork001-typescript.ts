

// Create an interface called Taxable which contains a function that takes bonus as its parameter.
interface Taxable {
    tax(bonus: number): number;
}

// Create gender by using Type alias 
type Gender = 'male' | 'female';

// Create a Person class that contains the following properties (name, gender, age, display()) 
// and declare those properties as private
class Person {
    private name: string;
    private gender: Gender;
    private age: number;

    constructor(name: string, gender: Gender, age: number) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    // private display() : void{}
    public display(): void {
        // should check gender condition here!
        if(this.gender == "male"){
            console.log(`${this.name} is ${this.gender} and he is ${this.age} years old.`);
        }
        else{
            console.log(`${this.name} is ${this.gender} and she is ${this.age} years old.`);
        }
    }
}

// Create another class which is called Employee that extends and implements 
// from the above class and interface respectively and 
// this class contains position, salary, tax, netSalary, displayEmployee() 
// as its own properties, and overrides a function from the interface above.
class Employee extends Person implements Taxable {
    private position: string;
    private salary: number;

    constructor(name: string, gender: Gender, age: number, position: string, salary: number) {
        super(name, gender, age);
        this.position = position;
        this.salary = salary;
    }

    tax(bonus: number): number {
        const taxRate = 0.1; // 10%
        const taxAmount = (this.salary + bonus) * taxRate;
        return taxAmount;
    }

    public netSalary(bonus: number): number {
        const taxAmount = this.tax(bonus);
        return this.salary + bonus - taxAmount;
    }

    displayEmployee(): void {
        console.log(`${this.position} : ${this.salary}$`)
        this.display();
    }
}


const employee = new Employee('John', 'male', 28, 'Software Engineering', 5000);
const bonus = 500;
console.log()
employee.displayEmployee();
console.log(`The tax is : ${employee.tax(bonus)}$`);
console.log(`The net salary is : ${employee.netSalary(bonus)}$`);
console.log()

console.log("------------")

console.log()
const employee1 = new Employee('Mary', 'female', 30, 'Software Engineering', 5000);
const bonus1 = 0;
employee1.displayEmployee();
console.log(`The tax is : ${employee1.tax(bonus1)}$`);
console.log(`The net salary is : ${employee1.netSalary(bonus1)}$`);

/**
 * OUTPUT
 * Software Engineering : 5000$
John is male and he is 28 years old.   
The tax is : 550$
The net salary is : 4950$

Software Engineering : 5000$
Mary is female and she is 30 years old.
The tax is : 500$
The net salary is : 4500$
 */


// ----------------------------------------------------------------

// // Type aliases
// type userName = string;
// type userId = string | number // union type
// type Person = {
//     id : userId;
//     name : userName;
//     gender : string;
//     age : number;
//     isWebDev : boolean;
// }

//using interface, does not require equal sign

// interface Person{
//     id : userId,
//     name : userName,
//     gender : string,
//     age : number,
//     isWebDev : boolean
// }

// const user : Person = {
//     id : "1001",
//     name : "mony",
//     gender : "male",
//     age : 20,
//     isWebDev : true
// }

// console.log("\n")
// console.log(user);
// console.log("\n")