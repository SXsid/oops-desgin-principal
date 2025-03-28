class privateAccount {
  //_privateName teh _ is the conention
  private _name: string;
  private _amount: number;
  protected accountId: number;
  constructor(name: string, amount: number = 0) {
    this.accountId = Date.now();
    this._amount = amount;
    this._name = name;
  }
  //getter setter function
  set Name(newName: string) {
    this._name = newName;
  }
  get Name() {
    return this._name;
  }
  get Amount() {
    return this._amount;
  }
}

class TestAccount extends privateAccount {
  constructor(name: string) {
    super(name);
  }

  //protected can be acced from the child class
  get account() {
    return this.accountId;
  }
}
const TA1 = new TestAccount("test101");
//TA1.accountId  is not allowd
console.log(TA1.account);

const acc = new privateAccount("sid");

console.log(acc.Amount);
acc.Name = "harsh";
console.log(acc.Name);
