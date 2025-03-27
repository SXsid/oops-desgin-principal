interface CustomerAccount {
  customerName: string;
  amount: number;
  accountNumber: number;
  logger: (key: string) => void;
  deposit: (amount: number) => void;
}

function CustomerAccount(this: any, customerName: string, amount: number = 0) {
  this.customerName = customerName;
  this.amount = amount;
  this.accountNumber =
    Math.floor(Math.random() * 9_000_0000_000) + 1_000_0000_000;
}

//this is automically get bind with the object it is claling
CustomerAccount.prototype.deposit = function (amount: number) {
  this.amount += amount;
};
CustomerAccount.prototype.logger = function (key: string) {
  console.log(this[key]);
};
const account1 = new (CustomerAccount as any)("aman", 1000) as CustomerAccount;
account1.deposit(900);
account1.logger("amount");
