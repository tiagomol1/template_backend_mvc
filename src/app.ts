import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes';
import { errors } from 'celebrate';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api/v1', routes);
app.use(errors())


export default app;
