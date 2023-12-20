import express from "express";
import { json } from "express";
import chalkMassage from "./lib/chalk.js";
import "./DB/mongooseClient.js";
import cors from 'cors';
import errHandler from './middleware/errHandler.js';
import ringRouter from "./routes/ringRoute.js";
import aboutRouter from "./routes/aboutRoute.js";
import headlineRouter from './routes/headlineRoute.js'

const server = express();

server.use(json());

server.use(cors({exposedHeaders: "authorization"}));

const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    return res.send("Success! connected to mongoose");
});

server.use('/about', aboutRouter)
server.use('/ring', ringRouter);
server.use('/headline', headlineRouter)

server.use(errHandler)

server.listen(PORT, () => chalkMassage(`green`, `Server up on port ${PORT}!`));