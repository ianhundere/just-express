var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails')

/* GET home page. */
// /movie/...

// GET /movie/movieId
router.get('/:movieId', (req, res, next) => {
    const movieId = req.param.movieId
    const results = movieDetails.find((movie) => {
        console.log(movie.id, "======", movieId)
        return movie.id === Number(movieId)
    })
    res.json(results)
})

// GET /movie/top_rated
// POST /movie/{movie_id}/rating
// DELETE /movie/{movie_id}/rating

module.exports = router;
