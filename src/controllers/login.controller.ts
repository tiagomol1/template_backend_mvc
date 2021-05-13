import { Request, Response} from 'express';
import log from '../models/models.log';
import sql from '../models/models.sql.commands';
import { createToken } from '../security/jwt.security'


export default {

    createLogin(request : Request, response : Response){
        const { username, password } = request.body;
        
        log({user: 'anonimous', message: 'Consulta no banco de dados', type: 'Success'})
        const result = sql(username);

        const token = createToken(result[0].id, result[0].username, result[0].fullname, result[0].type)
        log({user: username, message: 'Token de acesso criado, login realizado.', type: 'Success'})

        return response.status(201).json({
            status: 201,
            description: 'Created', 
            message: 'Token de acesso.', 
            access_token: token
        })

    },

    createLogout(request : Request, response : Response){
        const token = request.params;
    }

}