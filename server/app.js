import express from 'express';
import tipRouter from './routers/tipRouter.js';
import 'dotenv/config.js';
import mongoose from "mongoose";
import { handler as ssrHandler } from '../dist/server/entry.mjs';
import cors from 'cors';

const app = express(); 
app.use(express.json());
app.use(cors());
app.use('/tip', tipRouter);
const port = 3003;

app.use(ssrHandler);

const connect = async () => {
    try{
        // eslint-disable-next-line no-undef
        await mongoose.connect(process.env.SECRET_MONGO_URI);
        app.listen(port, () =>{
            console.log(`Listening on port ${port}`);
        });
    } catch (err){
        console.error(err);
    }
}

connect();


