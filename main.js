const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(cors());

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/card/info", (req, res) => {
  let info = {
    header: "Vincent Wickoff",
    content: `Vince Wyckoff has been writing since the age of fifteen, when he
      first read William Faulkner. He knew then and there he would be a
      writer. When he's not writing novels, he's either building things
      in his workshop or painting`,
    quotes:
      "“The world needs more wise and gentle voices like Vince Wyckoff’s.” - Lorna Landvik",
  };
  res.json(info);
});

app.get("/about", (req, res) => {
  //throw new Error("Went wrong try again later");
  res.send("About");
});
console.log(app.get("port"));
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
});
