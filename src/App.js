// import { useEffect, useState } from "react";

import "./components/NavBar.css";
import "./components/Home.css";
import "./components/About.css";
import "./components/Project.css";
import "./components/Contact.css";
import "./components/Technology.css";
// import Loading from "./components/Loading";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Technology from "./components/Technology";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    // <Loading loading={loading}>
    <div>
      <NavBar />
      <Home />
      <About />
      <Technology />
      <Project />
      <Contact />
    </div>
    // </Loading>
  );
};

export default App;
