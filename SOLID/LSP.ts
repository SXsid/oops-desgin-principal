// Base class representing a Bird
class Bird {
  fly(): string {
    return "I can fly";
  }
}

// Penguin is a Bird that cannot fly (problematic example - violates LSP)
class PenguinBad extends Bird {
  fly(): string {
    throw new Error("I can't fly"); // Violates LSP because it breaks expected behavior
  }
}

// Better approach - Refactor to follow LSP

//this will act as the base class for all the flying bird
interface IFlyable {
  fly(): string;
}

interface ISwimmable {
  swim(): string;
}

// Base class for all birds
class BetterBird {
  eat(): string {
    return "I can eat";
  }
}

// Flying bird implementation
class FlyingBird extends BetterBird implements IFlyable {
  fly(): string {
    return "I can fly";
  }
}

// Penguin implementation
class Penguin extends BetterBird implements ISwimmable {
  swim(): string {
    return "I can swim";
  }
}

// Usage example
function makeBirdFly(bird: IFlyable) {
  console.log(bird.fly());
}

// This works fine
const sparrow = new FlyingBird();
makeBirdFly(sparrow); // Output: "I can fly"

// This won't even compile - which is good!
// const penguin = new Penguin();
// makeBirdFly(penguin); // Type error: Penguin doesn't implement IFlyable
