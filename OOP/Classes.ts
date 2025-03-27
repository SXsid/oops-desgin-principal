interface IAutomobile {
  getName: () => string;
  getType: () => string;
  getNoOfWheels: () => number;
}

class Automobile implements IAutomobile {
  private name: string;
  private type: string;
  private noOfwheels: number;

  constructor(name: string, type: string, noOfwheels: number = 4) {
    this.name = name;
    this.type = type;
    this.noOfwheels = noOfwheels;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getNoOfWheels() {
    return this.noOfwheels;
  }
}

const carObject = new Automobile("Sedan", "CAR");

console.log(carObject.getName());
console.log(carObject.getType());
console.log(carObject.getNoOfWheels());
