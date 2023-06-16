import React from "react";
import { Link } from "react-router-dom";
import cl from "./Hero.module.scss";
const Hero = () => {
  return (
    <div>
      <section className={cl.hero} id="home">
        <div className="container">
          <p className={`${"section-subtitle"} ${cl.section__subtitle}`}>
            <img
              src="/images/subtitle-img-white.png"
              width="32"
              height="7"
              alt="Wavy line"
            />

            <span>Добро пожаловать Бишкек-Эко</span>
          </p>

          <h2 className={`${"h1"} ${cl.hero__title}`}>
            Бережём природу - <strong>бережём и родину свою</strong>
          </h2>

          <p className={cl.hero__text}>
            Sit amet consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua suspendisse ultrices
            gravida.
          </p>
          <Link to="/donate">
            <button className="btn btn-primary">
              <span>Донаты</span>

              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            </button>
          </Link>
        </div>
      </section>
      <section className={`${"section"} ${cl.features}`}>
        <div className="container">
          <ul className={cl.features__list}>
            <li className={cl.features__item}>
              <div className={cl.item__icon}>
                <ion-icon name="shield-checkmark-outline"></ion-icon>
              </div>

              <div>
                <h3 className={`${"h4"} ${cl.item__title}`}>Защита животных</h3>

                <p className={cl.item__text}>
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li className={cl.features__item}>
              <div className={cl.item__icon}>
                <ion-icon name="water-outline"></ion-icon>
              </div>

              <div>
                <h3 className={`${"h4"} ${cl.item__title}`}>Безопасная вода</h3>

                <p className={cl.item__text}>
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li className={cl.features__item}>
              <div className={cl.item__icon}>
                <ion-icon name="leaf-outline"></ion-icon>
              </div>

              <div>
                <h3 className={`${"h4"} ${cl.item__title}`}>
                  Экологическая экономия
                </h3>

                <p className={cl.item__text}>
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li className={cl.features__item}>
              <div className={cl.item__icon}>
                <ion-icon name="snow-outline"></ion-icon>
              </div>

              <div>
                <h3 className={`${"h4"} ${cl.item__title}`}>Экология</h3>

                <p className={cl.item__text}>
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
