const express = require("express");
const cors=require("cors");
const app = express();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors({origin:'http://localhost:3000'}))


app.get("/home", function (req, res) {
  res.json({ msg: "Hiiii Kashinath" });
});
const Users = require("./routes/UserRoutes");
app.use("/api/", Users);

PORT = process.env.PORT || 8085;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT} `);
});
