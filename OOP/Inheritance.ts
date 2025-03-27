interface IAccount {
  getName: () => string;
  getAmount: () => number;
}

interface ISavingAccount extends IAccount {
  getPersonalLoan: () => void;
}

class Account implements IAccount {
  private name: string;
  private amount: number;
  private accountId: number;
  constructor(name: string, amount: number = 0) {
    this.accountId = Date.now();
    this.amount = amount;
    this.name = name;
  }
  getName = () => {
    return this.name;
  };

  getAmount = () => this.amount;
}

const acc1 = new Account("sid");
console.log(acc1.getName());

class SavingAccount extends Account implements ISavingAccount {
  constructor(name: string, amount: number = 0) {
    super(name, amount);
  }

  getPersonalLoan = () => "calll mangaer for loan";
}
const sAcc1 = new SavingAccount("aman", 1000);
console.log(sAcc1.getPersonalLoan());

class CurrentAccount {}
