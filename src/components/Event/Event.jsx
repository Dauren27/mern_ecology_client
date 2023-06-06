import React from "react";
import cl from "./Event.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, API_URL_TWO } from "../../http";

const Event = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className={cl.box}>
      <img
        src={`${API_URL_TWO}/${event.picture}`}
        alt=""
      />
      <div className={cl.content}>
        <h3>
          {event.date} / {event.time}
        </h3>
        <h3
          onClick={() => navigate(`/events/${event._id}`)}
          className={cl.title}
        >
          {event.title}
        </h3>
        {/* <p>{event.text}</p> */}
        <button
          onClick={() => navigate(`/events/${event._id}`)}
          className="btn"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Event;
