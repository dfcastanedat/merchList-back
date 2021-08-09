import mongoose from "mongoose";

/**
 * Database connection
 */
export const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
