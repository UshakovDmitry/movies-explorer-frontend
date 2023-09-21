import './FilterCheckbox.css';

const FilterCheckbox = () => (
  <label className="checkbox searchform__checkbox">
    <input className="checkbox__button" type="checkbox" id="customCheckbox" />
    <div className="checkbox__label"></div>
    <span className="checkbox__caption">Короткометражки</span>
  </label>
);

export default FilterCheckbox;
