import './FilterCheckbox.css';

const FilterCheckbox = () => (
  <div className="checkbox searchform__checkbox">
    <input className="checkbox__button" type="checkbox" id="customCheckbox" />
    <label className="checkbox__label" htmlFor="customCheckbox"></label>
    <p className="checkbox__caption">Короткометражки</p>
  </div>
);

export default FilterCheckbox;
