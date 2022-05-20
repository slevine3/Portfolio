import html_logo from "./Images/html-logo.png";
import css_logo from "./Images/css-logo.png";
import react_logo from "./Images/react-logo.png";
import redux_logo from "./Images/redux-logo.png";
import js_logo from "./Images/js-logo.png";
import node_logo from "./Images/node-logo.png";
import postgres_logo from "./Images/postgres-logo.png";
import heroku_logo from "./Images/heroku-logo.png";
import github_logo from "./Images/github-logo.png";
import aws_logo from "./Images/aws-logo.png";
import firebase_logo from "./Images/firebase_logo.png";
import mongo_logo from "./Images/mongo_logo.png";

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

  const [awsTitle, setAwsTitle] = useState({ display: "none" });
  const [awsHeight, setAwsHeight] = useState(null);

  const [firebaseTitle, setFirebaseTitle] = useState({ display: "none" });
  const [firebaseHeight, setFirebaseHeight] = useState(null);

  const [mongoTitle, setMongoTitle] = useState({ display: "none" });
  const [mongoHeight, setMongoHeight] = useState({
    width: "auto",
    height: "40px",
  });

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
  const handleAwsEnter = () => {
    setAwsTitle({ display: "block" });
    setAwsHeight({ height: "80px" });
  };
  const handleAwsLeave = () => {
    setAwsTitle({ display: "none" });
    setAwsHeight({ height: "60px" });
  };

  const handleFirebaseEnter = () => {
    setFirebaseTitle({ display: "block" });
    setFirebaseHeight({ height: "80px" });
  };
  const handleFireBaseLeave = () => {
    setFirebaseTitle({ display: "none" });
    setFirebaseHeight({ height: "60px" });
  };

  const handleMongoEnter = () => {
    setMongoTitle({ display: "block" });
    setMongoHeight({ height: "45px", width: "auto" });
  };
  const handleMongoLeave = () => {
    setMongoTitle({ display: "none" });
    setMongoHeight({ height: "40px", width: "auto" });
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
        <div className="logo">
          <div className="logo_box">
            <img
              onMouseEnter={() => handleAwsEnter()}
              onMouseLeave={() => handleAwsLeave()}
              style={awsHeight}
              src={aws_logo}
              alt="aws-logo"
            ></img>
            <h4 style={awsTitle}>AWS</h4>
          </div>
          <div className="logo_box">
            <img
              onMouseEnter={() => handleMongoEnter()}
              onMouseLeave={() => handleMongoLeave()}
              style={mongoHeight}
              src={mongo_logo}
              alt="mongoDB-logo"
            ></img>
            <h4 style={mongoTitle}>MongoDB</h4>
          </div>
          <div className="logo_box" >
            <img
              onMouseEnter={() => handleFirebaseEnter()}
              onMouseLeave={() => handleFireBaseLeave()}
              style={firebaseHeight}
              src={firebase_logo}
              alt="firebase-logo"
            ></img>
            <h4 style={firebaseTitle}>Firebase</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
