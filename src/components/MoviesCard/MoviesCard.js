import "./MoviesCard.css";
import isSavedIcon from "../../images/isSaved.svg";
import isNotSavedIcon from "../../images/isNotSavedIcon.svg";
import deleteIcon from "../../images/deletefilm.svg";
import { parseDuration } from "../../utils/helpers";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';


const MoviesCard = ({ data, handleLikeMovie, isSaved }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = isSaved ? false : data.owners.includes(currentUser._id);
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return handleLikeMovie(data);
  };

  // return (
  //   <li className="movie">
  //       <a className="movie__link" href={data.trailerLink} target="_blank" rel="noreferrer noopener">

  //     <header className="movie__header">
  //       <h2 className="movie__name">{data.nameRU}</h2>
  //       <p className="movie__duration">{parseDuration(data.duration)}</p>
  //     </header>
  //     <div className="movie__body">
  //       <img className="movie__poster" src={data.image} alt="Постер к фильму" />
  //     </div>
  //     <footer className="movie__footer">
  //       {isSaved ? (
  //         <img className="movie__btn" src={deleteIcon} alt="Удалить" onClick={handleClick} />
  //       ) : isSaved ? (
  //         <img className="movie__btn" src={isNotSavedIcon} alt="Сохранить" onClick={handleClick} />
  //       ) : (
  //         <img className="movie__btn" src={isSavedIcon} alt="Сохранено" onClick={handleClick} />
  //       )}
  //     </footer>
  //     </a>
  //   </li>
  // );

  return (
    <li className="movie">
      <a
        className="movie__link"
        href={data.trailerLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        <header className="movie__header">
          <h2 className="movie__name">{data.nameRU}</h2>
          <p className="movie__duration">{parseDuration(data.duration)}</p>
        </header>
        <div className="movie__body">
          <img
            className="movie__poster"
            src={data.image}
            alt="Постер к фильму"
          />
        </div>
        <footer className="movie__footer">
          {isSaved ? (
            <button className="movie__btn">
              <img src={deleteIcon} alt="Удалить" onClick={handleClick} />
            </button>
          ) : isLiked ? (
            <button className="movie__btn">
              <img src={isSavedIcon} alt="Сохранено" onClick={handleClick} />
            </button>
          ) : (
            <button className="movie__btn">
              <img src={isNotSavedIcon} alt="Сохранить" onClick={handleClick} />
            </button>
          )}
        </footer>
      </a>
    </li>
  );
};

export default MoviesCard;
