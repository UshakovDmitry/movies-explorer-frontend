import './Portfolio.css';

const Portfolio = () => (
  <section className="portfolio page__element">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__container">
      <li className="portfolio__item">
        <p className="portfolio__text">Статичный сайт</p>
        <a
          className="portfolio__arrow"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          ↗
        </a>
      </li>
      <li className="portfolio__item">
        <p className="portfolio__text">Адаптивный сайт</p>
        <a
          className="portfolio__arrow"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          ↗
        </a>
      </li>
      <li className="portfolio__item">
        <p className="portfolio__text">Одностраничное приложение</p>
        <a
          className="portfolio__arrow"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          ↗
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;