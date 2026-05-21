import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware to parse JSON bodies
app.use(express.json()); // this middleware will parse the JSON bodies: req.body
app.use(rateLimiter); // apply rate limiting middleware to all routes
// Middleware use case: authentication check
/**
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
*/

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
    });
});
