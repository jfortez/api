const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/api", require("./routes/index"));

app.listen(port, (data) => {
  console.log(`Server running on port  http://localhost:${port}...`);
});
