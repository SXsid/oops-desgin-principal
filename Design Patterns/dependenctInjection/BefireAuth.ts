import express from "express";
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  user: "your_user",
  host: "localhost",
  database: "your_db",
  password: "your_password",
  port: 5432,
});

const authenticateUser = async (email, name) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      return result.rows[0]; // User exists, log in
    } else {
      const insertRes = await client.query(
        "INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *",
        [email, name]
      );
      return insertRes.rows[0]; // New user created
    }
  } finally {
    client.release();
  }
};

const app = express();
app.use(express.json());

app.post("/auth", async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required" });
  }

  try {
    const user = await authenticateUser(email, name);
    res.json({ message: "Logged in", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
