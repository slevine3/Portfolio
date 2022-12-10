import { lazy, Suspense } from "react";

import "./components/NavBar.css";
import "./components/Home.css";
import "./components/About.css";
import "./components/Project.css";
import "./components/Contact.css";
import "./components/Technology.css";

const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const Technology = lazy(() => import("./components/Technology"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Home />
        <About />
        <Technology />
        <Project />
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
