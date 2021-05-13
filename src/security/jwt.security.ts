import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export function createToken(id: Number, username: String, fullname: String, type: Number){

    const token = jwt.sign({
        id:  id,
        username: username,
        fullname: fullname,
        type: type
    }, process.env.SECRET_TOKEN, {
        algorithm: 'HS256',
        expiresIn: 604800
    });

    return token;

}

export function validToken(token : string){

    try{
        
        const isValid = jwt.verify(token, process.env.SECRET_TOKEN);

        if(isValid){
            return true;
        }

    }catch(error){
        return false;
    }

}   

interface ReadToken{
    id: any
    username: any
    fullname: any
    type: any
    iat: any
    exp: any
}

export function readToken(token: string){
    
    const tokenData : ReadToken = (jwt.decode(token) as any)
    return tokenData;
    
}

