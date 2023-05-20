import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import cors from "cors";
import morgan from 'morgan'
import connectDB from './db/connect.js'
import "express-async-errors";
// importing Routes
import authRoutes from './routes/authRoutes.js'
import conversationRoutes from './routes/conversationRoutes.js'
import gitRoutes from './routes/gigRoutes.js'
import messageRoutes from './routes/messageRoute.js'
import orderRoutes from './routes/orderRoute.js'
import reviewRoutes from './routes/reviewRoute.js'
import userRoutes from './routes/userRoute.js'
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.disable('x-powered-by')
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("tiny"));
}
app.get("/", (req, res) => {
    res.json({ msg: "hahaha" });
});

// routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/conversations", conversationRoutes)
app.use("/api/v1/gigs", gitRoutes)
app.use("/api/v1/messages", messageRoutes)
app.use("/api/v1/orders", orderRoutes)
app.use("/api/v1/reviews", reviewRoutes)
app.use("/api/v1/users", userRoutes)

// middlewares
app.use(notFoundMiddleware);
app.use(errorHandler)
const PORT = process.env.port || 5000;
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