import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("../../views/index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



