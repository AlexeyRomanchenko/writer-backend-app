const express = require("express");
const app = express();
const port = 3000; //oooh Fancy!! a variable for the port!

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  //throw new Error("Went wrong try again later");
  res.send("About");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
