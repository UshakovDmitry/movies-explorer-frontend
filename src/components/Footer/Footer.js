import './Footer.css';

const Footer = () => (
  <footer className="footer page__element">
    <p className="footer__capture">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__underline">
      <p className="footer__year">© {new Date().getFullYear().toString()}</p>
      <nav className="footer__links">
        <a
          className="footer__link"
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a className="footer__link" href="https://github.com/UshakovDmitry" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;