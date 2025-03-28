import { Router, Request, Response } from "express";
import { authenticateUser } from "./service";
const router = Router();

router.post("/auth", async (req: Request, res: Response) => {
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

export default router;
