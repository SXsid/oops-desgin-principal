//it's used to create an abstrction level to segration the hight level code with the low levell class in our cse the ocntroller and the db layer

class mySql {
  create(tableName: string, ...values: string[]) {
    //execute add query
  }
}

class UserController {
  constructor(private db: mySql) {}
  addUser(...values: string[]) {
    this.db.create("useer", ...values);
  }
}
//here to add the user in db we highlt depedn on the mysql

//corerct way

// have a common level of abstracton

interface Database {
  create(tableName: string, ...values: string[]): void;
}

//now we case swtich anything which can the only conditon is it have all the fucnion that is in databasee interface
class DIP_mySql implements Database {
  create(tableName: string, ...values: string[]) {
    //execute add query
  }
}

//for example

class PostgresSql implements Database {
  create(tableName: string, ...values: string[]) {
    //execute add query
  }
}

class DIP_UserController {
  constructor(private db: Database) {}
  add(...values: string[]) {
    this.db.create("useer", ...values);
  }
}

const mysqlObject = new DIP_mySql();
const pgObject = new PostgresSql();

const userObject = new DIP_UserController(mysqlObject);
//a new user is saved in mysql db
userObject.add("john", "doe", "919292991");
const postObject = new DIP_UserController(pgObject);
//i added a new post in the psogtrre db (user contoller donse care which db it aas)
postObject.add("my daily life", "on suday 29 marjch ...");
