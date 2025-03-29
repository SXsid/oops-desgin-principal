//before approch
class Discount {
  giveDiscount(customerType: "normal" | "premiun") {
    switch (customerType) {
      case "normal":
        return 10;
      case "premiun":
        return 20;
    }
  }
}
const discount = new Discount();
console.log(
  "thise normal cusotemr get discount of:",
  discount.giveDiscount("normal")
);

//if we want to add discount for one more type of custoemr then
/**
 * logic will cahgne and we add
 * custoemrType='normal'|'premium'|'gold'
 * and the switch case logic also chagnd which is bad cause for every chagne we have to modify are relible codebase
 * therefor ocp come into pictture
 */

interface Icustomer {
  giveDiscount(): number;
}

class NormalCustomer implements Icustomer {
  giveDiscount(): number {
    return 10;
  }
}
class PremiumCustomer implements Icustomer {
  giveDiscount(): number {
    return 20;
  }
}

class OCP_Discount {
  //this is good exampel of liscov substitut
  giveDiscount(customerType: Icustomer): number {
    return customerType.giveDiscount();
  }
}

const ocp_discount1 = new OCP_Discount();
console.log(
  "ocp normal discoutn:",
  ocp_discount1.giveDiscount(new PremiumCustomer())
);

//now i want to add a new type of custoemr

//simply add a new  class

class GoldCustomer implements Icustomer {
  giveDiscount(): number {
    return 30;
  }
}

console.log(
  "new gold cusomer dicount using name discount objct wihtout modifying existing code base:",
  ocp_discount1.giveDiscount(new GoldCustomer())
);
