import React, { useEffect, useState } from "react";
import cl from "./EventIdPage.module.scss";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { $api, API_URL, API_URL_TWO } from "../../http";

const EventIdPage = () => {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [isRegistrated, setIsRegistrated] = useState(false);
  const getEvent = async () => {
    try {
      const { data } = await $api.get(`/event/${params.id}`);
      setEvent(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <Layout>
      <div className={cl.event}>
        <div className="container">
          {event ? (
            <div className={cl.event__content}>
              <div className={cl.left}>
                <img src={`${API_URL_TWO}/${event.picture}`} alt="" />
              </div>
              <div class={cl.right}>
                <h1>{event.title}</h1>
                <p>{event.text}</p>
                <h3>
                  <span>Дата:</span> {event.date}
                </h3>
                <h3>
                  <span>Время:</span> {event.time}
                </h3>
                <h3>
                  <span>Место проведения:</span> {event.address}
                </h3>
                {/* <h3>
                <span>Номер телефона:</span> +996 702 271 103
              </h3> */}
                <button
                  href="#"
                  class="btn"
                  onClick={() => setIsRegistrated(true)}
                >
                  Записаться
                </button>
                {isRegistrated && (
                  <p className={cl.success}>Вы успешно записались на событие</p>
                )}
              </div>
            </div>
          ) : (
            <h1>Загрузка...</h1>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EventIdPage;
