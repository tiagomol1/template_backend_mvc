interface Interface{
    [key: string]: any;
    code?: Number
    type?: Number
    detail?: String
    description?: String
}

export default class httpStatus {

    private status : Interface = {
        [200]:{ code: 200, type: 1, detail: 'success', description: "Ok" },
        [201]:{ code: 201, type: 1, detail: 'success', description: "Created" },
        [203]:{ code: 203, type: 1, detail: 'success', description: "Non-Authoritative Information" },
        [204]:{ code: 204, type: 1, detail: 'error', description: "No Content" },
        [400]:{ code: 400, type: 0, detail: 'error', description: "Bad Request" },
        [401]:{ code: 401, type: 0, detail: 'error', description: "Unauthorized" },
        [404]:{ code: 404, type: 0, detail: 'error', description: "Not Found" }
    } 
    private option: any;

    constructor(option : String | Number){
        this.option = option
    }
    
    get statusDetail(){
       const details : Interface = (this.status as any)[this.option] === {} ? this.status[200] : (this.status as any)[this.option]
       return details
    }

}
