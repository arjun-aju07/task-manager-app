class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(message) // it invokes the parent class (i.e) Error class constructor
        this.statusCode = statusCode // creating a status code property
    }
}

const createCustomError = (message, statusCode) => (
    new CustomAPIError(message, statusCode)
)

export {
    CustomAPIError,
    createCustomError
}