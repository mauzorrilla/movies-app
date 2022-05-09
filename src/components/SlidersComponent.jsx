import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { imagePath } from "../constants/service";
import "./styles.css";

const SlidersComponent = (props) => {
  const { title, data, onClick, onDoubleClick } = props;

  const handleClick = (portadaUrl, title, descripcion) => {
    onClick(portadaUrl, title, descripcion);
  };

  const handleDoubleClick = (id) => {
    onDoubleClick(id);
  };

  return (
    <div>
      <h4 className="slider-title">{title}</h4>
      <ScrollMenu itemClassName="mt-5">
        {data.map((movie) => (
          <div
            onClick={() =>
              handleClick(movie.backdrop_path, movie.title, movie.overview)
            }
            onDoubleClick={() => handleDoubleClick(movie.id)}
          >
            <img
              className="movie-img"
              src={`${imagePath}${movie.poster_path}`}
              alt="AN"
            />
            <h4 className="img-edit">{movie.title}</h4>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default SlidersComponent;
