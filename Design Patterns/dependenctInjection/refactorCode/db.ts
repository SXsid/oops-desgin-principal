import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  user: "your_user",
  host: "localhost",
  database: "your_db",
  password: "your_password",
  port: 5432,
});

export default pool;
