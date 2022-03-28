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
  const [hoverJavascript, setHoverJavascript] = useState("none");
  const [hoverHTML, setHoverHTML] = useState("none");
  const [hoverCSS, setHoverCSS] = useState("none");
  const [hoverReact, setHoverReact] = useState("none");
  const [hoverRedux, setHoverRedux] = useState("none");
  const [hoverNode, setHoverNode] = useState("none");
  const [hoverPostgres, setHoverPostgres] = useState("none");
  const [hoverHeroku, setHoverHeroku] = useState("none");
  const [hoverGit, setHoverGit] = useState("none");


  return (
    <div id="technologies" className="technology_container">
      <div>
        <h1 className="technology_title">TECHNOLOGY STACK</h1>
      </div>
      <div className="logo_container">
        <div className="logo">
          <div className="logo_box">
            <img
              onMouseEnter={() => setHoverJavascript("block")}
              onMouseLeave={() => setHoverJavascript("none")}
              src={js_logo}
              alt="js_-logo"
            ></img>
            <h4 style={{ display: hoverJavascript }}>Javascript</h4>
          </div>

          <div className="logo_box">
            <img
              onMouseEnter={() => setHoverHTML("block")}
              onMouseLeave={() => setHoverHTML("none")}
              src={html_logo}
              alt="html-logo"
            ></img>
            <h4 style={{ display: hoverHTML }}>HTML5</h4>
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
