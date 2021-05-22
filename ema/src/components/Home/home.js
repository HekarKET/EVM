import React from "react";
import "./style.css";
import Footer from "./Footer";
import Features from "./Features";
import { RecentEvent } from "./recentEvent";
import { content, recentEvent } from "./database";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="content">
            <h1> Event Management Platform </h1>
            <p>
              Event Management platform helps event planners better build,
              measure and grow their events with a people-first approach. Plus,
              we have a comprehensive blog (covered below).
            </p>
            <span>
              <button>
                <a href="http://localhost:4000/aac112cb-441c-44a0-97f1-e2b067a4f355">
                  Stream
                </a>{" "}
              </button>
            </span>
          </div>
          <img
            className="desktop"
            src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            alt="Event"
          />
          <img
            className="mobile"
            src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            alt="Event"
          />
        </div>
      </header>

      <main>
        

        <div className="container">
        
          <h1>We’re different</h1>
          <div className="list-features">
            <ul>
              {content.map((con) => (
                <Features
                  key={con.id}
                  title={con.title}
                  logo={con.img}
                  content={con.content}
                />
              ))}
            </ul>
          </div>

          <h1>Recent Events</h1>
          <div className="recent-event">
          
            {recentEvent.map((event) => (
              <RecentEvent
                key={event.id}
                style={event.style}
                title={event.title}
                discription={event.description}
                imgSrc={event.imgSrc}
              />
            ))}
          </div>
         

          <div className="banner">
            <h1> Find out more about how we work</h1>
            <button>
              {" "}
              <Link to="/about">About</Link>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
