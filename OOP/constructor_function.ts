//that's how js convert the classes syntax
//need to define the this key word any explicity

interface BankAccount {
  customerName: string;
  amount: number;
  accountNumber: number;
  logger: (key: string) => void;
  dipost: (amount: number) => void;
}
function BankAccount(this: any, customerName: string, amount: number = 0) {
  this.customerName = customerName;
  this.amount = amount;
  this.accountNumber =
    Math.floor(Math.random() * 9_000_0000_000) + 1_000_0000_000;
  this.logger = function (key: string) {
    console.log(this[key]);
  };
  this.dipost = (amount: number) => {
    this.amount += amount;
  };
}

const customer1 = new (BankAccount as any)("aman", 1000) as BankAccount;
customer1.customerName = "sid";
console.log(customer1.customerName);
customer1.logger("amount");
customer1.dipost(200);
customer1.logger("amount");
