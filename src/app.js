const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("App running on PORT", PORT);
});
