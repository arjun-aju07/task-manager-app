import { CustomAPIError } from '../errors/custom-error.js'

// https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) { // instanceof will check if err is an object instance of CustomAPIError class
        return res.status(err.statusCode).json({ message: err.message })
    }

    return res.status(500).json({ message: err })
}

export default errorHandler