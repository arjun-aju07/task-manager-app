const asyncWrapper = (fn) => (
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (e) {
            next(e) // passing the error to the next middleware
        }
    }
)

export default asyncWrapper