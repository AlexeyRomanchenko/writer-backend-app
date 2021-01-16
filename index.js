const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(cors());

app.set("port", process.env.PORT || 3001); //comment out when upload into Lambda

app.get("/", (req, res) => {
  res.render("index.html");
});

//1. Works 

app.get('/works', (req, res) => {
  const works = [
    {
      id: 1,
      title: "Nightwatchers", 
      img: '/static/media/nightwatchers.e2144658.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      
      id: 2, 
      title: 'Beware of Cat',
      img: '/static/media/beware.f11e2a3c.png',      
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.", 
    },
    {
      title: "Black Otter Bay", 
      id: 3, 
      img: '/static/media/blackotterbay.12ef28be.png',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.", 
    }
  ];
  res.json(works);
});

//2. Works by ID - 

app.get('/shops/work/:id', (req, res)=> {
  console.log(req.params.id);
  const stores = [ 
      {shop_name: 'Once Upon a Crime', 
      shop_logo:'https://onceuponacrimebooks.indielite.org/sites/onceuponacrimebooks.indielite.org/files/logo_address_1.jpg', 
      shop_link:'https://onceuponacrimebooks.indielite.org/book/9781682011126'},

      {shop_name: 'Amazon', 
      shop_logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', 
      shop_link:'https://www.amazon.com/-/es/Vincent-Wyckoff/dp/1682011127/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='},
      
      {shop_name: 'Barnes and Noble',
      shop_logo:'https://happycards.com/wp-content/uploads/2020/09/barnes-noble-logo.png', 
      shop_link:'https://www.barnesandnoble.com/w/nightwatchers-vincent-wyckoff/1136403992'},
];
res.json(stores); 
});


//3. Bio Information for home page

app.get("/card/info", (req, res) => {
  let info = {
    header: "Vincent Wyckoff",
    content: `Vincent has been writing since the age of fifteen, when he
      first read William Faulkner. He knew then and there he would be a
      writer. He wrote every day during his lunch hour at a local coffee shop while working as a mail carrier, 
      and published his frist book of short stories in 200x. When he's not writing novels, he's either building things
      in his workshop or painting. Vince Wyckoff has been writing since the age of fifteen, when he
      first read William Faulkner. He knew then and there he would be a
      writer. When he's not writing novels, he's either building things
      in his workshop or painting`,
    quotes:
      "“The world needs more wise and gentle voices like Vince Wyckoff’s.” - Lorna Landvik",
  };
  res.json(info);
});

//4. Excerpt Data





//5. Events Data
app.get("/events", (req, res) => {
  let events = [{
    id: 1,
    key: 1, 
    img: '/static/media/beware.f11e2a3c.png',
    title: "Reading at Barnes & Noble",
    date: "January 31, 2021",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    anchor:"/events" 
  }];
  res.json(events);
});


/* module.exports.handler = serverless(app); */


app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
}); 
