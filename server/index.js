import express, { urlencoded } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRoutes from "./routes/authRoutes.js";
import "dotenv/config";

const app = express();

// MIDDLEWARES
// it scans request and protects server
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// Routes

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, () => {
  console.log("Server started at", process.env.PORT);
});

app.use("/auth", AuthRoutes);
