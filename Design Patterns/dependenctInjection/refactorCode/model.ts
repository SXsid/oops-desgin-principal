import pool from "./db";

interface IDatabaseModel {
  findAdmin(email: string): Promise<any>;
  insertAdmin(email: string, name: string): Promise<any>;
}

class DatabaseModel implements IDatabaseModel {
  private pool: any;

  constructor(pool: any) {
    this.pool = pool;
  }

  async findAdmin(email: string) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      return result;
    } catch (error) {
      console.error("Database error in findAdmin:", error);
      throw new Error("Failed to fetch admin");
    } finally {
      client.release();
    }
  }

  async insertAdmin(email: string, name: string) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        "INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *",
        [email, name]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Database error in insertAdmin:", error);
      throw new Error("Failed to insert admin");
    } finally {
      client.release();
    }
  }
}

export default new DatabaseModel(pool);
