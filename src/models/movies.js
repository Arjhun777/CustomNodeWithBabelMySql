import mongoose from 'mongoose';
import Joi from 'joi';

const movieListSchema = new mongoose.Schema({
    movieTitle: {
        type: String,
        required: true
    },
    movieDescription: String,
    movieReleaseDate: Date,
    gener: [String],
    rating: Number
});
const MovieList = mongoose.model('MoviesList', movieListSchema);

const validateMovies = (requestData) => {
    const schema = {
        movieTitle: Joi.string().required(),
        movieDescription: Joi.string(),
        movieReleaseDate: Joi.date(),
        gener: Joi.array().items(Joi.string()),
        rating: Joi.number()
    }
    return Joi.validate(requestData, schema);
}

export {
    validateMovies,
    MovieList
}