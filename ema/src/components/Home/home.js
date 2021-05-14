import React from "react";
import Event from "./events";
import "./style.css";

const Home = () => {
  const Events = [
    {
      title: "Anniversary",
      imgSrc:
        "https://images.unsplash.com/photo-1481653125770-b78c206c59d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Birthday Party",
      imgSrc:
        "https://images.unsplash.com/photo-1562967005-a3c85514d3e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "House party",
      imgSrc:
        "https://images.unsplash.com/photo-1511885219431-09810b0f4003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    },
  ];
  return (
    <React.Fragment>
      <header>
        <div className="main-content">
          <h1>
            {" "}
            <i>Event Manager</i>{" "}
          </h1>
          <p> Stream your event</p>
        </div>
        <div className="navbar">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="left-content">
          <p>Welcome to our site</p>
          <p>Click on the button below to stream an event</p>
          <button id="stream-event">
            {" "}
            <a href="http://localhost:4000">Stream event</a>{" "}
          </button>
        </div>
        <div className="right-content">
          <div className="search">
            <input type="text" placeholder="search" />
            <button id="search"> Search </button>
          </div>

          <div className="recent-event">
            {Events.map((event) => (
              <Event title={event.title} imgSrc={event.imgSrc} />
            ))}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
