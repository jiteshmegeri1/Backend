const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
// const { default: VerifyToken } = require("./config/VerifyToken");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors({ origin: "http://localhost:3000" }));

// app.use(VerifyToken);

app.post("/Login", async (req, res) => {
  let data = [];
  let key=null;
  try {
    data = await Login(req.body);
     key= await Authencticate(JSON.parse(JSON.stringify(data)));
   
    res.json({ msg: "Succesfull", data: data ,Key:key});
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
});

const Users = require("./routes/UserRoutes");

const { Login } = require("./models/UserModels");
const Authenticator = require("./config/VerifyToken");
const { Authencticate } = require("./config/Authenticator");
//app.use(Authenticator.VerifyToken);
app.use("/api/", Users);

PORT = process.env.PORT || 8085;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT} `);
});
