require('dotenv').config();

const TMDB_TOKEN = process.env.TMDB_TOKEN;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDB_TOKEN,
  },
};

const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

const OpenAI_key = process.env.REACT_APP_GEMINI_API_KEY;

module.exports = {
  API_OPTIONS,
  IMG_CDN_URL,
  OpenAI_key,
};
