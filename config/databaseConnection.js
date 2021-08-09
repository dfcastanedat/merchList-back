import mongoose from "mongoose";

/**
 * Database connection
 */
export default (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
