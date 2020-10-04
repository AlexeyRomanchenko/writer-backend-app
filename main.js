const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/card/info", (req, res) => {
  let info = {
    header: "Wincent Wickoff",
    content:
      "Olutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellu.",
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
