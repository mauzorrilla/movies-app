import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserStatus from "../../components/UserStatus";
import { portraitPath } from "../../constants/service";
import { USER } from "../../constants/storage";
import { findMovie } from "../../controllers/moviesController";
import { getFromStorage } from "../../helpers/storage";
import "./style.css";

function Detalles() {
  const { id } = useParams();
  const [estado, setEstado] = useState({});
  const [usuario, setUsuario] = useState("");

  const {
    backdrop_path,
    title,
    overview,
    vote_average,
    vote_count,
    spoken_languages,
  } = estado;

  const fetchResenha = useCallback(async () => {
    const movie = await findMovie(id);
    setEstado(movie);
  }, [id]);

  useEffect(() => {
    fetchResenha(id);
  }, [id, fetchResenha]);

  useEffect(() => {
    const localStorageUser = getFromStorage(USER);
    setUsuario(localStorageUser);
  }, []);

  return (
    <div>
      <div className="user-widget-2">
        <UserStatus userName={usuario} />
      </div>

      <div className="title-container">
        <div className="btn-group">
          <div className="btn btn-primary">
            <img className="btn-img" src="/pngwing.com.png" alt="" />
            {vote_average} Valoración
          </div>
          <div className="btn btn-primary">
            <img className="btn-img" src="/pngegg.png" alt="none" />
            {vote_count} Votos
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <h4 className="description">{overview}</h4>
        <h3 className="title-idioma">Idiomas:</h3>
        <div style={{ display: "flex" }}>
          {spoken_languages?.map(({ name }, index) => (
            <h3
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 5,
                marginTop: -7,
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              {index === spoken_languages.length - 1 ? `${name}.` : `${name},`}
            </h3>
          ))}
        </div>
      </div>

      <div>
        <img
          className="portada"
          src={`${portraitPath}${backdrop_path}`}
          alt="portada"
        />
      </div>
    </div>
  );
}

export default Detalles;
