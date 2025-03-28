//it to insure a common instance is used everytime

//1) directly exposing the object

class Logger {
  log(msg: string) {
    console.log(`[LOG]: ${msg}`);
  }

  warn(msg: string) {
    console.warn(`[WARN]: ${msg}`);
  }

  error(msg: string) {
    console.error(`[ERROR]: ${msg}`);
  }
  Info(msg: string) {
    console.info(`[ERROR]: ${msg}`);
  }
}

export default new Logger();

//2)

class Redis {
  private static instance: Redis;
  private constructor() {
    //try to connet to reist
  }
  static getInstance(): Redis {
    //if the instance isn't there call constructre
    if (!Redis.instance) Redis.instance = new Redis();
    return Redis.instance;
  }
}

const R1 = Redis.getInstance();
const R2 = Redis.getInstance();
console.log(R1 === R2);
