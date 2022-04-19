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

  const [gitTitle, setGitTitle] = useState({ display: "none" });
  const [gitHeight, setGitHeight] = useState(null);

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

  const handleCssEnter = () => {
    setCssTitle({ display: "block" });
    setCssHeight({ height: "80px" });
  };
  const handelCssLeave = () => {
    setCssTitle({ display: "none" });
    setCssHeight({ height: "60px" });
  };

  const handleReactEnter = () => {
    setReactTitle({ display: "block" });
    setReactHeight({ height: "80px" });
  };
  const handleReactLeave = () => {
    setReactTitle({ display: "none" });
    setReactHeight({ height: "60px" });
  };

  const handleReduxEnter = () => {
    setReduxTitle({ display: "block" });
    setReduxHeight({ height: "80px" });
  };
  const handleReduxLeave = () => {
    setReduxTitle({ display: "none" });
    setReduxHeight({ height: "60px" });
  };

  const handleNodeEnter = () => {
    setNodeTitle({ display: "block" });
    setNodeHeight({ height: "80px" });
  };
  const handleNodeLeave = () => {
    setNodeTitle({ display: "none" });
    setNodeHeight({ height: "60px" });
  };

  const handlePostgresEnter = () => {
    setPostgresTitle({ display: "block" });
    setPostgresHeight({ height: "80px" });
  };
  const handlePostgresLeave = () => {
    setPostgresTitle({ display: "none" });
    setPostgresHeight({ height: "60px" });
  };

  const handleHerokuEnter = () => {
    setHerokuTitle({ display: "block" });
    setHerokuHeight({ height: "80px" });
  };
  const handleHerokuLeave = () => {
    setHerokuTitle({ display: "none" });
    setHerokuHeight({ height: "60px" });
  };

  const handleGitEnter = () => {
    setGitTitle({ display: "block" });
    setGitHeight({ height: "80px" });
  };
  const handleGitLeave = () => {
    setGitTitle({ display: "none" });
    setGitHeight({ height: "60px" });
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
            <h4 style={javascriptTitle}>JavaScript</h4>
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
            <img
              onMouseEnter={() => handleCssEnter()}
              onMouseLeave={() => handelCssLeave()}
              style={cssHeight}
              src={css_logo}
              alt="css-logo"
            ></img>
            <h4 style={cssTitle}>CSS</h4>
          </div>
        </div>
        <div className="logo">
          <div className="logo_box">
            <img
              onMouseEnter={() => handleReactEnter()}
              onMouseLeave={() => handleReactLeave()}
              style={reactHeight}
              src={react_logo}
              alt="react-logo"
            ></img>
            <h4 style={reactTitle}>React</h4>
          </div>

          <div className="logo_box">
            <img
              onMouseEnter={() => handleReduxEnter()}
              onMouseLeave={() => handleReduxLeave()}
              style={reduxHeight}
              src={redux_logo}
              alt="redux-logo"
            ></img>
            <h4 style={reduxTitle}>Redux</h4>
          </div>

          <div className="logo_box">
            <img
              onMouseEnter={() => handleNodeEnter()}
              onMouseLeave={() => handleNodeLeave()}
              style={nodeHeight}
              src={node_logo}
              alt="node-logo"
            ></img>
            <h4 style={nodeTitle}>Node.js</h4>
          </div>
        </div>
        <div className="logo">
          <div className="logo_box">
            <img
              onMouseEnter={() => handlePostgresEnter()}
              onMouseLeave={() => handlePostgresLeave()}
              style={postgresHeight}
              className="postgres_logo"
              src={postgres_logo}
              alt="postgres-logo"
            ></img>
            <h4 style={postgresTitle}>Postgres</h4>
          </div>
          <div className="logo_box">
            <img
              onMouseEnter={() => handleHerokuEnter()}
              onMouseLeave={() => handleHerokuLeave()}
              style={herokuHeight}
              src={heroku_logo}
              alt="heroku-logo"
            ></img>
            <h4 style={herokuTitle}>Heroku</h4>
          </div>
          <div className="logo_box">
            <img
              onMouseEnter={() => handleGitEnter()}
              onMouseLeave={() => handleGitLeave()}
              style={gitHeight}
              src={github_logo}
              alt="heroku-logo"
            ></img>
            <h4 style={gitTitle}>Github</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
