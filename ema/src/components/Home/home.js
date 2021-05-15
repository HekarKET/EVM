import React from "react";
import "./style.css";
import snappy_process from "./images/icon-snappy-process.svg";
import price from './images/icon-affordable-prices.svg'
import people from './images/icon-people-first.svg'
import Features from './Features'
import { Link } from "react-router-dom";





const Home = () => {
  const content = [
    {'id':1,'title':'Snappy Process','content':'Our application process can be    completed in minutes, not hours. Don’t get stuck filling in tedious forms.','img':snappy_process},
    {'id':2,'title':'Free Prices','content':`We don't want you worrying about high monthly costs. We have free service, but we still offer the best coverage possible`,'img':price},
    {'id':3,'title':'People First','content':'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.','img':people}
  
  
  
  ]
  
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

          <div className="banner">
            <h1> Find out more about how we work</h1>
            <button>
              {" "}
              <Link to="/about">About</Link>
            </button>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="last">
            <span className="logo">
              <strong>EVENT MANAGER</strong>{" "}
            </span>

            <ul>
              <li>
                <i className="fab fa-facebook-square fa-lg"></i>
              </li>
              <li>
                <i className="fab fa-twitter-square fa-lg"></i>
              </li>
              <li>
                <i className="fab fa-github-square fa-lg"></i>
              </li>
              <li>
                <i className="fab fa-instagram-square fa-lg"></i>
              </li>
            </ul>
          </div>

          <hr />

          <ul>
            <li>
              <small>Our company</small>
              <ul>
                <li>
                  <small> How we work</small>
                </li>
                <li>
                  <small> Why Insure?</small>
                </li>
                <li>
                  <small> View plans</small>
                </li>
                <li>
                  <small> Reviews</small>
                </li>
              </ul>
            </li>
            <li>
              <small> Help me</small>
              <ul>
                <li>
                  <small> FAQ</small>
                </li>
                <li>
                  <small> Terms of use</small>
                </li>
                <li>
                  <small> Privacy policy</small>
                </li>
                <li>
                  <small> Cookies</small>
                </li>
              </ul>
            </li>
            <li>
              <small> Contact</small>
              <ul>
                <li>
                  <small> Sales</small>
                </li>
                <li>
                  <small> Support</small>
                </li>
                <li>
                  <small> Live chat</small>
                </li>
              </ul>
            </li>
            <li>
              <small> Others</small>
              <ul>
                <li>
                  <small> Careers</small>
                </li>
                <li>
                  <small>Press</small>
                </li>
                <li>
                  <small>Licenses</small>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
