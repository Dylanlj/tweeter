"use strict";

// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const Mongo         = require("mongodb");
const MongoClient   = Mongo.MongoClient;
const MONGODB_URI   = "mongodb://127.0.0.1:27017/tweeter";
const sassMiddleware = require('node-sass-middleware');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(sassMiddleware({
  src: '../public/styles',
  dest: '../public/css',
  prefix: '/css'
}))
app.use(express.static("public"));

//connecting to our mongo tweeter database
MongoClient.connect(MONGODB_URI, (err, mongoInstance) => {
  if (err) throw err;
  console.log(`Successfully connected to DB: ${MONGODB_URI}`);  
  let db = mongoInstance;

  // The `data-helpers` module provides an interface to the database of tweets.
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});