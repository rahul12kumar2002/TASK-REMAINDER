const express = require("express");
const connectDB = require("../config/db");
const taskRouter = require("./routes/api/tasks");
const userRouter = require("./routes/api/users");
const authRouter = require("./routes/api/auth");
const profileRouter = require("./routes/api/profile");
const checkOverdue = require("./Cron-job/cron");
var cors = require('cors')
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());

//connecting to Database
connectDB();

//to parse the incoming Request Data
app.use(express.json({ extended: false }));
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("/gibberish420", (req, res) => {
    res.send({ text: "success" });
  });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
checkOverdue();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
