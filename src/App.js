import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Technology } from "./components/Technology";

import "./components/NavBar.css";
import "./components/Home.css";
import "./components/About.css";
import "./components/Project.css";
import "./components/Contact.css";
import "./components/Technology.css";

import LogRocket from "logrocket";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    LogRocket.init(process.env.REACT_APP_LOG_ROCKET);
  });
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Technology />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
