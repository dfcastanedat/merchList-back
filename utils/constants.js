export const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
};

export const DB_URI = process.env.DB_URI || "mongodb+srv://root:1234@cluster0.rgnxd.mongodb.net/Practice?retryWrites=true&w=majority";

export const PORT = process.env.PORT || 3001;