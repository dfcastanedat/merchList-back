export const error = (res, status, message, stack) => {
    return res.status(status).json({
        success: false,
        code: status,
        data: stack,
        message: message
    })
}