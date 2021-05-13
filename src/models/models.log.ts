import fs from 'fs';
import path from 'path';

interface Config{
    user: String,
    type: String, 
    message: String
}

async function log(config : Config){

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const archive = `${year}_${month.toString().length == 1 ? "0"+month : month}_${day.toString().length == 1 ? "0"+day : day}.log`

    const exists = fs.existsSync(path.join(__dirname, '../logs/' + archive));

    if(exists){

        const text = fs.readFileSync(path.join(__dirname, '../logs/'+archive), { encoding: 'utf-8' })

        fs.writeFileSync(path.join(__dirname, '../logs/'+archive), `${text}\n > ${config.type}: [${config.user} - ${date.toLocaleString('pt-Br')}] - ${config.message}`)     
        
    }else{

        try{
            fs.writeFileSync(path.join(__dirname, '../logs/'+archive), `:: LOG - ${archive} ::\n\n > ${config.type}: [${config.user} - ${date.toLocaleString('pt-Br')}] - ${config.message}`)
        }catch(err){
            console.log(err)
        }

    }

}

export default log;

