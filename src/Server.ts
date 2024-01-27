import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import figuresRoutes from './routes/figuresRoutes';
import userRoutes from './routes/userRoutes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/public-figure', figuresRoutes);
server.use('/user', userRoutes);

export default server;


