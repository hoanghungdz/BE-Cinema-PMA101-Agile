const express = require('express');
const router = express.Router();
const MovieController = require('../../controllers/MovieController');
// Movie
router.get('/get-movie-by-page', new MovieController().getMovieByPage);
router.get('/get-movie', new MovieController().getAllMovie);

module.exports = router;