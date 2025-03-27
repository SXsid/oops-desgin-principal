class Config {
  static dbuser = "db user";
  static dbPassword = "db user";
  static secretkey = "my scerer passwrod";
}

const configObject = new Config();
console.log(Config.secretkey);
