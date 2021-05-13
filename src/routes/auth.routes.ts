import express from 'express';
import loginController from '../controllers/login.controller';

const authRoute = express.Router();

authRoute.post('/login', loginController.createLogin, );
authRoute.post('/logout', loginController.createLogout);

export default authRoute;