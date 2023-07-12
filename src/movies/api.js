import { convertImage } from "@/utils/utils";

export const getNowPlaying = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    const movie = data.results[Math.floor(Math.random() * data.results.length)];
    return movie;
  } catch (error) {
    console.log("API request failed", error);

    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    const movies = data.results.slice(0, 4);
    return movies;
  } catch (error) {
    console.log("API request failed", error);

    throw error;
  }
};

export const addMovie = async ({ image, title }) => {
  const moviesArr = JSON.parse(localStorage.getItem("myMovies")) ?? [];
  const minYear = 1900;
  const maxYear = 2023;

  const imgData = await convertImage(image);

  const movie = {
    id: crypto.randomUUID(),
    backdrop_path: imgData,
    title: title,
    vote_average: (Math.random() * 9 + 1).toFixed(1),
    release_date: Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear,
  };

  moviesArr.push(movie);
  localStorage.setItem("myMovies", JSON.stringify(moviesArr));
};

export const getMyMovies = () => {
  const myMovies = JSON.parse(localStorage.getItem("myMovies"));
  return myMovies;
};
