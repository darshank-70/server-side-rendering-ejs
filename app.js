const express = require("express");
const ejs = require("ejs");
app = express();
const blogs = [
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req);
  res.redirect(301, "/blogs");
});
app.get("/blogs", (req, res) => {
  console.log(req.url);
  console.log(req);
  res.render("blogs", { blogs });
});
app.get("/about", (req, res) => {
  console.log(req.url);
  console.log(req);
  res.render("about", { hostname: req.hostname });
});
app.get("/add-blog", (req, res) => {
  console.log(req.url);
  console.log(req);
  res.render("addblog", { hostname: req.hostname });
});
app.get("/profile", (req, res) => {
  console.log(req.url);
  console.log(req);
  res.render("profile", { hostname: req.hostname });
});
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(4555, () => console.log("Listening on PORT 4555"));
