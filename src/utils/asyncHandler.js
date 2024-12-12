const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch( (err)  => next(err))
    }
}


export { asyncHandler }

/* this one using try cath 
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: true,
            message: error.message
        })
    }
}
*/

//for understanding of above function
// const asyncHandler = (func) => {
//     async () => {}
// }