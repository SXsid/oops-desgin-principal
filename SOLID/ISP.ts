// Combined interface for basic biological needs
interface LivingBeing {
  eat(): void;
  sleep(): void;
}

interface Workable {
  work(): void;
}

// Human implements both interfaces
class BetterHuman implements Workable, LivingBeing {
  work() {
    console.log("Working");
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
}

// Robot only implements what it needs
class BetterRobot implements Workable {
  work() {
    console.log("Working");
  }
}
