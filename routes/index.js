var express = require("express");
var router = express.Router();

var axios = require("axios");

const OMDB_API_KEY = process.env.OMDB_API_KEY || "67be9b43";
const OMDB_URL = process.env.OMDB_URL || "http://www.omdbapi.com/";

/* Hello World */
router.get("/", function (req, res, next) {
  // A middleware should either return a response
  // Via the response object, or it should call next()
  next();
});

/* Hello World */
router.get("/", function (req, res, next) {
  res.send("Hello World");
});

/* IMDB Search */
router.get("/search", (req, res, next) => {
  console.log(req);
  const title = req.query.title;
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/get", (req, res, next) => {
  res.send("{name:'sankar'}");
});

/* Single IMDB Movie */
router.get("/imdb/:imdbId", (req, res, next) => {
  const imdbId = req.params.imdbId;
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
