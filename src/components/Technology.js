import html_logo from "./Images/html-logo.png";
import css_logo from "./Images/css-logo.png";
import react_logo from "./Images/react-logo.png";
import redux_logo from "./Images/redux-logo.png";
import js_logo from "./Images/js-logo.png";
import node_logo from "./Images/node-logo.png";
import postgres_logo from "./Images/postgres-logo.png";
import heroku_logo from "./Images/heroku-logo.png";
import github_logo from "./Images/github-logo.png";

import { useState } from "react";
//1. Hide Technology names - Display on hover of image.
//2. On hover make image icon larger
//3. Explore secondary fonts for additional text (look for Sans - Serif)
//4. Add 3 more logo icons in technology stack.
//5. Try to figure out how to add cursor trail

export const Technology = () => {
  const [javascriptTitle, setJavascriptTitle] = useState({ display: "none" });
  const [javascriptHeight, setJavascriptHeight] = useState(null);

  const [htmlTitle, setHtmlTitle] = useState({ display: "none" });
  const [htmlHeight, setHtmlHeight] = useState(null);

  const [cssTitle, setCssTitle] = useState({ display: "none" });
  const [cssHeight, setCssHeight] = useState(null);

  const [reactTitle, setReactTitle] = useState({ display: "none" });
  const [reactHeight, setReactHeight] = useState(null);

  const [reduxTitle, setReduxTitle] = useState({ display: "none" });
  const [reduxHeight, setReduxHeight] = useState(null);

  const [nodeTitle, setNodeTitle] = useState({ display: "none" });
  const [nodeHeight, setNodeHeight] = useState(null);

  const [postgresTitle, setPostgresTitle] = useState({ display: "none" });
  const [postgresHeight, setPostgresHeight] = useState(null);

  const [herokuTitle, setHerokuTitle] = useState({ display: "none" });
  const [herokuHeight, setHerokuHeight] = useState(null);

  const handleJavascriptEnter = () => {
    setJavascriptTitle({ display: "block" });
    setJavascriptHeight({ height: "80px" });
  };
  const handleJavascriptLeave = () => {
    setJavascriptTitle({ display: "none" });
    setJavascriptHeight({ height: "60px" });
  };

  const handleHtmlEnter = () => {
    setHtmlTitle({ display: "block" });
    setHtmlHeight({ height: "80px" });
  };
  const handleHtmlLeave = () => {
    setHtmlTitle({ display: "none" });
    setHtmlHeight({ height: "60px" });
  };

  return (
    <div id="technologies" className="technology_container">
      <div>
        <h1 className="technology_title">TECHNOLOGY STACK</h1>
      </div>
      <div className="logo_container">
        <div className="logo">
          <div className="logo_box">
            <img
              onMouseEnter={() => handleJavascriptEnter()}
              onMouseLeave={() => handleJavascriptLeave()}
              style={javascriptHeight}
              src={js_logo}
              alt="js_-logo"
            ></img>
            <h4 style={javascriptTitle}>Javascript</h4>
          </div>

          <div className="logo_box">
            <img
              onMouseEnter={() => handleHtmlEnter()}
              onMouseLeave={() => handleHtmlLeave()}
              style={htmlHeight}
              src={html_logo}
              alt="html-logo"
            ></img>
            <h4 style={htmlTitle}>HTML5</h4>
          </div>

          <div className="logo_box">
            <img src={css_logo} alt="css-logo"></img>
            <h4>CSS</h4>
          </div>
        </div>
        <div className="logo">
          <div className="logo_box">
            <img src={react_logo} alt="react-logo"></img>
            <h4>React</h4>
          </div>

          <div className="logo_box">
            <img src={redux_logo} alt="redux-logo"></img>
            <h4>Redux</h4>
          </div>

          <div className="logo_box">
            <img src={node_logo} alt="node-logo"></img>
            <h4>Node.js</h4>
          </div>
        </div>
        <div className="logo">
          <div className="logo_box">
            <img
              className="postgres_logo"
              src={postgres_logo}
              alt="postgres-logo"
            ></img>
            <h4>Postgres</h4>
          </div>
          <div className="logo_box">
            <img src={heroku_logo} alt="heroku-logo"></img>
            <h4>Heroku</h4>
          </div>
          <div className="logo_box">
            <img src={github_logo} alt="heroku-logo"></img>
            <h4>Github</h4>
          </div>
        </div>
        <div className="logo">
          <div className="logo_box">
            <img
              className="postgres_logo"
              src={postgres_logo}
              alt="postgres-logo"
            ></img>
            <h4>Postgres</h4>
          </div>
          <div className="logo_box">
            <img src={heroku_logo} alt="heroku-logo"></img>
            <h4>Heroku</h4>
          </div>
          <div className="logo_box">
            <img src={github_logo} alt="heroku-logo"></img>
            <h4>Github</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
