/**
 * Database simulation 
 **/

import db from '../database/db.json';

export default function database(query : String | Number){
    
    return db.users.filter(user => {
        return user.username == query
    });

}

export function users(){
    return db.users
}