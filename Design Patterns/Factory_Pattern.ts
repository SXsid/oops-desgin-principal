//all the object creation on the cenrtlized setting

class Employee {
  public name: string;
  public type: "Developer" | "Tester" | "Customer Support";
  constructor(name: string, type: "Developer" | "Tester" | "Customer Support") {
    this.name = name;
    this.type = type;
  }
  say() {
    console.log(`This is ${this.name} and i am a ${this.type}`);
  }
}
class Developer extends Employee {
  constructor(name: string) {
    super(name, "Developer");
  }
}
class Tester extends Employee {
  constructor(name: string) {
    super(name, "Tester");
  }
}
class CustomerSupport extends Employee {
  constructor(name: string) {
    super(name, "Customer Support");
  }
}
enum EmployeeType {
  Developer = 1,
  Tester = 2,
  CustomerSupport = 3,
}

//create object inn centralized way
class EmoloyeeFactory {
  createNewObject(name: string, type: EmployeeType): Employee {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      case 3:
        return new CustomerSupport(name);
      default:
        throw new Error("Invalid employee type");
    }
  }
}

const employee = new EmoloyeeFactory();

const employeesArray: (Developer | Tester | CustomerSupport)[] = [];
employeesArray.push(
  employee.createNewObject("sudhnshu", EmployeeType.Developer)
);
employeesArray.push(employee.createNewObject("harsh", EmployeeType.Tester));
employeesArray.push(
  employee.createNewObject("Nirmal", EmployeeType.CustomerSupport)
);

employee.createNewObject("Rajesh", EmployeeType.Tester);
//bind the funciton with the object
employeesArray.forEach((emp) => emp.say());
