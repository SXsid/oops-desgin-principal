class privateAccount {
  private name: string;
  private amount: number;
  private accountId: number;
  constructor(name: string, amount: number = 0) {
    this.accountId = Date.now();
    this.amount = amount;
    this.name = name;
  }
  //getter setter function
  set Name(newName: string) {
    this.name = newName;
  }
  get Name() {
    return this.name;
  }
  get Amount() {
    return this.amount;
  }
}

const acc = new privateAccount("sid");
console.log(acc.Amount);
acc.Name = "harsh";
console.log(acc.Name);
