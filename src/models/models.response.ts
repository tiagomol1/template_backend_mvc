import httpStatus from './models.http';

interface Config{
    status: any
    table: String
    data?: any
    message?: String
}

export function responseCreate(config: Config){

    const statusDetail = new httpStatus(config.status).statusDetail;
    let message : String;

    if(config.message !== undefined && config.message !== null){
        message = config.message 
    }else{
        message = statusDetail.type === 1 ? `Sucesso ao realizar cadastro de ${config.table}` : `Erro ao realizar cadastro de ${config.table}`
    }

    return {
        status: statusDetail.code,
        description: statusDetail.description,
        message: message,
        data: config.data
    }

}

export function responseDelete(config: Config){

    const statusDetail = new httpStatus(config.status).statusDetail;
    let message : String;

    if(config.message !== undefined && config.message !== null){
        message = config.message 
    }else{
        message = statusDetail.type === 1 ? `Sucesso ao realizar cadastro de ${config.table}` : `Erro ao realizar cadastro de ${config.table}`
    }

    return {
        status: statusDetail.code,
        description: statusDetail.description,
        message: message,
        data: config.data
    }

}

export function responseUpdate(config: Config){

    const statusDetail = new httpStatus(config.status).statusDetail;
    let message : String;

    if(config.message !== undefined && config.message !== null){
        message = config.message 
    }else{
        message = statusDetail.type === 1 ? `Sucesso ao realizar a alteração de ${config.table}` : `Erro ao realizar a alteração de ${config.table}`
    }

    return {
        status: statusDetail.code,
        description: statusDetail.description,
        message: message,
        data: config.data
    }

}

export function responseRead(config: Config){
    
    const statusDetail = new httpStatus(config.status).statusDetail;
    let message : String;

    if(config.message !== undefined && config.message !== null){
        message = config.message 
    }else{
        message = statusDetail.type === 1 ? `Busca de ${config.table} realizada com sucesso` : `Erro ao realizar busca de ${config.table}`
    }

    return {
        status: statusDetail.code,
        description: statusDetail.description,
        message: message,
        data: config.data
    }


}
