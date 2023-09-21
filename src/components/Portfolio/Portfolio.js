import './Portfolio.css';

const Portfolio = () => (
  <section className="portfolio page__element">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__container">
      <li className="portfolio__item">
        <a
          className="portfolio__link"
          href="https://github.com/UshakovDmitry/Portfolio-HTML"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Статичный сайт</p>
          <span className="portfolio__arrow">↗</span>
        </a>
      </li>
      <li className="portfolio__item">
        <a
          className="portfolio__link"
          href="https://github.com/UshakovDmitry/Mesto-JS"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Адаптивный сайт</p>
          <span className="portfolio__arrow">↗</span>
        </a>
      </li>
      <li className="portfolio__item">
        <a
          className="portfolio__link"
          href="https://github.com/UshakovDmitry/mesto-react"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Одностраничное приложение</p>
          <span className="portfolio__arrow">↗</span>
        </a>
      </li>
    </ul>
  </section>
);


export default Portfolio;