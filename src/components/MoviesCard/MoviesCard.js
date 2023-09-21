import "./MoviesCard.css";
import isSavedIcon from "../../images/isSaved.svg";
import isNotSavedIcon from "../../images/isNotSavedIcon.svg";
import deleteIcon from "../../images/deletefilm.svg";



const MoviesCard = ({ name, img, duration, isSaved, isOwner }) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const time = hours ? `${hours}ч ${minutes}м` : `${minutes}м`;

  return (
    <li className="movie">
      <header className="movie__header">
        <h2 className="movie__name">{name}</h2>
        <p className="movie__duration">{time}</p>
      </header>
      <div className="movie__body">
        <img className="movie__poster" src={img} alt="Постер к фильму" />
      </div>
      <footer className="movie__footer">
        {isOwner ? (
          <button className="movie__btn">
            <img src={deleteIcon} alt="Удалить" />
          </button>
        ) : isSaved ? (
          <button className="movie__btn">
            <img src={isNotSavedIcon} alt="Сохранить" />
          </button>
        ) : (
          <button className="movie__btn">
            <img src={isSavedIcon} alt="Сохранено" />
          </button>
        )}
      </footer>
    </li>
  );
};


export default MoviesCard;
