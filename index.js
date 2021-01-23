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
      content: 'In Nightwatchers, we return to the small fictional town of Black Otter Bay where a sinister presence is lurking in the adjacent forests. A fast-paced read, Nightwatchers casts unique characters amidst the stark beauty of Minnesota’s Northshore. The legend of Manitou coincides with the action, intensifying the mystery and intrigue. It plays on the reader’s deepest fear: that is, what’s out there in the dark, watching you?',
    },
    {
      id: 2, 
      title: "Black Otter Bay",
      img: '/static/media/blackotterbay.12ef28be.png',
      content: "The tranquility of a remote shoreline is shattered when Abby Simon witnesses the cover-up to a murder. But her whole world is thrown into turmoil when the murderer discovers her identity. The ensuing chase hurtles from the fog-enshrouded Northshore to the glittering lights of downtown Duluth. A character driven mystery, Black Otter Bay is suffused in the stark beauty of Lake Superior’s Northshore. Rich in storytelling and steeped in the legends and grandeur of Lake Superior, Black Otter Bay is a subtly suspenseful yet non-violent cabin (or anywhere) must-read.", 
    },
    {
      
      id: 3, 
      title: 'Beware of Cat',
      img: '/static/media/beware.f11e2a3c.png',      
      content: 'Celebrating the triumphs in everyday life and demonstrating the danger of trusting first impressions, Beware of Cat reveals the inner workings of an ordinary place of extraordinary interest. "While it’s possible to learn many details of people’s lives from the mail they receive, most of what I’ve discovered has come from talking to people. It can’t be helped. Walk through someone’s life once a day, year after year after year, and you’re bound to learn a few things.”-Vincent Wyckoff',
    }
   
  ];
  setTimeout(() => {
    res.json(works);
  }, 5000);

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
    /*img:*/
    content: `Born and raised in Columbia Heights, Minnesota, Vince dedicated a career to the U.S. Postal Service. His first book, Beware of Cat, and Other Encounters of a Letter Carrier, celebrates the stories of people on his route. Prior to that, he served a tour of duty in the U.S. Army, and attended the University of Minnesota. For a short time he lived on the Northshore of Lake Superior, from which he developed the background for Black Otter Bay, his first work of fiction, and a finalist for the 2016 Midwest Book Award. His stories have been published in several local periodicals, as well as the anthology, Home. Recently nominated for two awards, Nightwatchers is the sequel to Black Otter Bay. Vince and his wife, Sybil, are longtime residents of south Minneapolis. They have three children and six grandchildren.
  `,
    quotes:
      "“The world needs more wise and gentle voices like Vince Wyckoff’s.” - Lorna Landvik",
  };
  setTimeout(() => {
    res.json(info);
  }, 5000);
});

//4. Events Data
app.get("/events", (req, res) => {
  let events = [{
    id: 1,
    key: 1, 
    img: '/static/media/beware.f11e2a3c.png',
    title: "Coming Soon",
    date: "",
    content: 'Check back soon for upcoming reading events!',
    anchor:"/events" 
  }];
  res.json(events);
});


/* module.exports.handler = serverless(app); */


app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
}); 
