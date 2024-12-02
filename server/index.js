
import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config.js';
import visitas from './routes/visitas.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app=express();

app.listen(PORT);
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use(morgan("dev"))
app.use(express.json());
app.use(cookieParser());
app.use("/api",visitas);
console.log("abierto puerto  http://localhost:"+PORT);
