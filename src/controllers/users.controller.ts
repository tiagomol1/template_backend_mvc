import { Request, Response } from 'express';
import { readToken } from '../security/jwt.security';
import { responseRead } from '../models/models.response';
import { users } from '../models/models.sql.commands';
import log from '../models/models.log';

export function index(request : Request, response : Response){

    const token = request.headers.authorization;
    const tokenData = readToken(token);

    log({user: tokenData.username, message: 'Realizou consulta de usuários', type: 'Success'})

    response.status(200).json(responseRead({status: 200, table: 'Usuários', data: users()}))

}

export function create(){

}

export function remove(){
    
}

export function update(){
    
}