import React from "react";
import cl from "./Project.module.scss";
import Layout from "../../Layout/Layout";

const CleaningProject = () => {
  return (
    <Layout>
      <div className={cl.project}>
        <div className="container">
          <div className={cl.project__content}>
            <h1>Переработка мусора</h1>
            <p>
              Уборка мусора: Важная миссия Экологического фонда "Бишкек Эко"
              <br />
              Экологический фонд "Бишкек Эко" придает огромное значение уборке
              мусора и активно вовлечен в инициативы по очистке окружающей среды
              в городе Бишкек и его прилегающих территориях. Мы осознаем, что
              борьба с мусором является неотъемлемой частью защиты окружающей
              среды и сохранения ее красоты и здоровья.
              <br />
              Уборка мусора имеет множество преимуществ и положительных эффектов
              для окружающей среды и общества. Вот некоторые из них:
              <br />
            </p>
            <p className={cl.text__item}>
              1. Сохранение природы и дикой жизни: Мусор может иметь серьезное
              негативное влияние на природу и дикую природу. Сброшенные отходы
              могут заражать водные и наземные экосистемы, отравлять животных и
              разрушать их места обитания. Регулярная уборка мусора помогает
              защитить и сохранить биоразнообразие и природные ресурсы.
              <br />
              2. Улучшение качества воздуха и воды: Неразложившийся мусор и его
              сгорание могут приводить к загрязнению воздуха и водных ресурсов.
              Сбор и утилизация мусора помогают снизить уровень загрязнения и
              поддерживать более чистую и здоровую среду для всех живых существ.
              <br />
              3. Создание здоровой городской среды: Чистые и аккуратные
              общественные места способствуют улучшению качества жизни горожан.
              Уборка мусора в городских районах, парках, скверах и других
              общественных местах способствует созданию приятной и безопасной
              атмосферы для жителей и посетителей.
              <br />
              4. Поддержка экологического сознания: Уборка мусора является
              прямым показателем нашей ответственности и уважения к окружающей
              среде. Регулярные мероприятия по уборке мусора способствуют
              формированию экологического сознания в обществе и мотивируют людей
              быть ответственными и заботиться о окружающей среде.
              <br />
            </p>
            <p>
              "Бишкек Эко" активно организует мероприятия по уборке мусора,
              вовлекая сообщество, добровольцев и партнеров. Мы проводим
              информационные кампании, обучаем общественность правильному
              сортированию и утилизации отходов, и стараемся поддерживать
              чистоту и благополучие нашей прекрасной природы.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CleaningProject;
