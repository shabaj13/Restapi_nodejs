const express = require("express");
require("../src/MongoDB/studentsDB");
const router = require("./routers/crudApi")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("server running");
})