const clientErrors = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED : 401,
    NOT_FOUND:404,
})

const serverErros = Object.freeze({
    INTERNAL_SERVER_EROR : 500 , 
     NOT_IMPLEMENTED : 501 ,
     
})

const  successCodes = Object.freeze({
    CREATED : 201 ,
    OK :200,
})

module.exports = {
    clientErrors,
    serverErros,
    successCodes
}