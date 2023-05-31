class CustomError extends Error {

    //message is error message and code is status code
    constructor(message, code) {
        super(message)
        this.code = code
    }

}

module.exports = CustomError