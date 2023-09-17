import './AboutMe.css';
import TitleWithLine from '../TitleWithLine/TitleWithLine';
import foto from '../../images/about-me-img.jpg';

const AboutMe = () => (
  <section className="about-me page__element">
    <TitleWithLine text="Студент" />
    <article className="about-me__container">
      <img className="about-me__photo" src={foto} alt="Мой портрет"></img>
      <h3 className="about-me__name">Дмитрий</h3>
      <p className="about-me__spec">Фронтенд-разработчик, 28 лет</p>
      <p className="about-me__discription">
        Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, закончил факультет информационных технологий МИРЭиА. У&nbsp;меня
        есть собака и&nbsp;попугай. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно
        начал кодить. С&nbsp;2016 года работал в&nbsp;ГК &laquo;Росатом&raquo;. После того,
        как прошёл курс по&nbsp;<nobr>веб-разработке</nobr>, начал заниматься{' '}
        <nobr>фриланс-заказами</nobr> и&nbsp;ушёл с&nbsp;постоянной работы
      </p>
      <a
        className="about-me__link"
        href="https://github.com/UshakovDmitry"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </article>
  </section>
);

export default AboutMe;