import { app } from "./app";
import dotenv from "dotenv";
import { initORM } from "./db";

dotenv.config()

initORM()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err: any) => {
        console.log("failed to connect with server", err)
    })