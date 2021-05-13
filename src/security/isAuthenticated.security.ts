import { Request, Response, NextFunction } from 'express';
import { validToken } from './jwt.security';

export default function isAuthenticated(request: Request, response: Response, next: NextFunction){

    const token = request.headers.authorization;

    if(token == undefined){
        return response.status(401).json({
            status: 401,
            description: 'Unauthorized', 
            message: 'Você precisa informar o TOKEN para acessar qualquer API.', 
        });
    }

    if(!validToken(token) ){
        return response.status(401).json({
            status: 401,
            description: 'Unauthorized', 
            message: 'Token inválido.', 
            invalid_token: token
        });
    }

    next();
}