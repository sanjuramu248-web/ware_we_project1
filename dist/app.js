import express from "express";
import cors from "cors";
import requestRoutes from "./routes/requestRoutes";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', requestRoutes);
export { app };
