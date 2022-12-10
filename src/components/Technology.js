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

export const Technology = () => {
  return (
    <div id="technologies" className="technology_container">
      <div>
        <h1 className="technology_title">TECHNOLOGY STACK</h1>
      </div>
      <div className="logo_container">
        <div className="logo">
          <div className="logo_box">
            <img src={js_logo} alt="js_-logo"></img>
            <h4>JavaScript</h4>
          </div>

          <div className="logo_box">
            <img src={html_logo} alt="html-logo"></img>
            <h4>HTML5</h4>
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
            <img src={aws_logo} alt="aws-logo"></img>
            <h4>AWS</h4>
          </div>
          <div className="logo_box">
            <img
              className="mongoDB-logo"
              src={mongo_logo}
              alt="mongoDB-logo"
            ></img>
            <h4>MongoDB</h4>
          </div>
          <div className="logo_box">
            <img src={firebase_logo} alt="firebase-logo"></img>
            <h4>Firebase</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
