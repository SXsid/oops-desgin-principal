import express from "express";
import authRouter from "./controller";
const app = express();
app.use(express.json());
app.user("/api/v1/admin", authRouter);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
