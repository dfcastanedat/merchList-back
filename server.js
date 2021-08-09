import express from "express";
import http from "http";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";
import { connectDb } from "./config/databaseConnection.js"
import { DB_URI, PORT } from "./utils/constants.js";

const app = express();

/**
 * Application-level middleware
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

const server = http.Server(app);
connectDb(DB_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    });
export default server;