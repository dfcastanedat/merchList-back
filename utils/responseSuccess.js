import { STATUS_CODES } from "./constants";

export const success = (res, status, data, message) => {
    return res.status(status).json({
        success: true,
        code: status,
        data: data,
        message: message
    })
}

export const emptySuccess = (res, status = STATUS_CODES.OK) => {
    return res.status(status).json({
        success: true,
        code: status,
    });
}