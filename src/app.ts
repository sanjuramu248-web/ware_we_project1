import express from "express";
import cors from "cors";
import requestRoutes from "./routes/requestRoutes";

const app = express();

app.use(cors());
app.use(express.json({limit: "16mb"}));
app.use(express.urlencoded({limit: "16kb", extended: true}))
app.use('/api', requestRoutes);

export { app };