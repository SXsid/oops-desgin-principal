class Product {
  public id: number;
  constructor(public name: string, public price: number) {
    this.id = Date.now();
    this.name = name;
    this.price = price;
  }

  display(): Record<string, any> {
    return { ...this };
  }
}

const product1 = new Product("Laptop", 100);

class Book extends Product {
  constructor(
    price: number,
    public authorName: string,
    public bookTitle: string
  ) {
    super("Book", price);
    this.authorName = authorName;
    this.bookTitle = bookTitle;
  }
}

const book1 = new Book(200, "striver", "Data structure and algo");

console.log(book1.display());

class Electronics extends Product {
  constructor(price: number, public brand: string, public model: string) {
    super("Electronic", price);
    this.brand = brand;
    this.model = model;
  }

  //ovewrite the display method
  display() {
    //we can still use the parent define fucniton even tought we override them
    console.log(super.display());
    return {
      name: this.name,
      brand: this.brand,
      mode: this.model,
    };
  }
}

const Electronic1 = new Electronics(2000, "LG", "x1-03");

console.log(Electronic1.display());
