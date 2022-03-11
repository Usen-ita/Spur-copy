const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");

dotenv.config();

const db = process.env.MONGO_URL;

console.log("db url: " + db);
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err);
    console.log("Connected to MongoDB\n" + db);
  }
);

const conSuccess = mongoose.connection;
conSuccess.once("open", (_) => {
  console.log("Database connected:", db);
});

conSuccess.on("error", (err) => {
  console.error("connection error:", err);
});

console.log("after conect");
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    console.log(`\n\n\t--${req.body.filename}----\n\n`);
    cb(null, req.body.filename);
  },
});

const upload = multer({ storage: storage });
app.post("/spur-backend/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/spur-backend/auth", authRoute);
app.use("/spur-backend/users", userRoute);
app.use("/spur-backend/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
