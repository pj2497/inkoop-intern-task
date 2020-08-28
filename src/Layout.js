import React, { useState } from "react";
import Card from "./Card";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
import "./Layout.css";
import Timepicker from "react-time-picker";

function Layout() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("12:00PM");
  const [events, setEvents] = useState([
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      type: "event type A",
      date: "25-08-2020",
      time: "20:00 PM",
    },
    {
      title: "Ut enim ad minim veniam, quis nostrud",
      type: "event type B",
      date: "26-08-2020",
      time: "12:00 PM",
    },
    {
      title: "Ut enim ad minim veniam, quis nostrud exercitation",
      type: "event type B",
      date: "27-08-2020",
      time: "13:00 PM",
    },
    {
      title: "Duis aute irure dolor in reprehenderit ",
      type: "event type ",
      date: "28-08-2020",
      time: "14:00 PM",
    },
    {
      title: "xcepteur sint occaecat cupidatat non proident",
      type: "event type B",
      date: "29-08-2020",
      time: "15:00 PM",
    },
    {
      title: " deserunt mollit anim id est laborum",
      type: "event type A",
      date: "30-08-2020",
      time: "16:00 PM",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addToArray = (event) => {
    setModalOpen(false);
    event.preventDefault();
    setEvents({
      ...events,
      title: eventName,
      type: eventType,
      date: eventDate,
      time: eventTime,
    });
  };

  return (
    <div className="layout">
      <div className="events">
        {events.map((even) => {
          return (
            <Card
              title={even.title}
              type={even.type}
              date={even.date}
              time={even.time}
            />
          );
        })}
      </div>

      <button
        className="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        ADD EVENT
      </button>

      <Modal isOpen={modalOpen}>
        <h2 className="item">ADD EVENT</h2>
        <div className="item">
          <h4>Event Name</h4>
          <input
            type="text"
            placeholder="Event name..."
            value={eventName}
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
        </div>

        <div className="item">
          <h4>Event Type</h4>
          <select
            style={{ width: "180px" }}
            value={eventType}
            onChange={(event) => setEventType(event.target.value)}
          >
            <option value="event A">event A</option>
            <option value="event B">event B</option>
            <option value="event C">event C</option>
          </select>
        </div>

        <div className="item">
          <h4>Event Date</h4>
          <input
            type="date"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
          />
        </div>

        <div className="item">
          <h4>Time Slot</h4>
          <Timepicker
            value={eventTime}
            onChange={(event) => setEventTime(event.target.value)}
          />
        </div>

        <div className="item">
          <button
            className="button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            CANCEL
          </button>
          <button className="button" type="submit" onClick={addToArray}>
            ADD
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Layout;
