import React, { useState, useEffect } from "react";
import SlidersComponent from "../../components/SlidersComponent";
import UserStatus from "../../components/UserStatus";
import { portraitPath } from "../../constants/service";
import { USER } from "../../constants/storage";
import { discover, moviesPopular } from "../../controllers/moviesController";
import { getFromStorage } from "../../helpers/storage";
import string from "../../constants/es";
import "./Home.styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [usuario, setUsuario] = useState("");
  const [movies, setMovies] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [portada, setPortada] = useState("");
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [animationStatus, setAnimationStatus] = useState("fade-in");
  const navigate = useNavigate();

  const fetchMovies = async () => {
    const moviesResult = await discover();
    setMovies(moviesResult.results);
  };

  const fetchPopular = async () => {
    const popularsResult = await moviesPopular();
    setPopulars(popularsResult.results);
  };

  const onClickMovie = (portadaUrl, titulo, description) => {
    setAnimationStatus("fade-out");
    setTimeout(() => {
      setAnimationStatus("fade-in");
      const imgSrc = `${portraitPath}${portadaUrl}`;
      setPortada(imgSrc);
      setTitle(titulo);
      setDescripcion(description);
    }, 1000);
  };

  useEffect(() => {
    const localStorageUser = getFromStorage(USER);
    setUsuario(localStorageUser);
  }, []);

  useEffect(() => {
    fetchMovies();
    fetchPopular();
  }, []);

  useEffect(() => {
    if (populars.length > 0) {
      const { backdrop_path, title, overview } = populars[0];
      setPortada(`${portraitPath}${backdrop_path}`);
      setTitle(title);
      setDescripcion(overview);
    }
  }, [populars]);

  const handleDoubleClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <>
      <div className="user-widget">
        <UserStatus userName={usuario} />
      </div>
      {!!portada && (
        <img
          className={`portada ${animationStatus}`}
          src={portada}
          alt="portada"
        />
      )}
      <div className={`title-container ${animationStatus}`}>
        <p className="title">{title}</p>
        <h4 className="description">{descripcion}</h4>
      </div>
      <div className="sliders">
        <SlidersComponent
          title={string.titulo_1}
          data={populars}
          onClick={onClickMovie}
          onDoubleClick={handleDoubleClick}
        />
        <SlidersComponent
          title={string.titulo_2}
          data={movies}
          onClick={onClickMovie}
          onDoubleClick={handleDoubleClick}
        />
      </div>
    </>
  );
};

export default Home;
