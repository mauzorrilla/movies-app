import axiosFetch from ".";
import { token } from "../constants/service";

const discover = async () => {
  return axiosFetch
    .get(`/discover/movie?${token}&page=6`)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const moviesPopular = async () => {
  return axiosFetch
    .get(`/movie/popular?${token}`)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const findMovie = async (id) => {
  return axiosFetch
    .get(`/movie/${id}?${token}`)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export { discover, moviesPopular, findMovie };
