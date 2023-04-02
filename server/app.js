import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import "express-async-errors";
dotenv.config();

const app = express();
app.use(express.json());
app.disable('x-powered-by')
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("tiny"));
}
app.get("/", (req, res) => {
    res.json({ msg: "hahaha" });
});
// middlewares
app.use(notFoundMiddleware);

const PORT = process.env.port || 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`server listening on the ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start()