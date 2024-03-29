import { useState, useEffect } from "react";
import sam_logo from "./Images/sam_logo.png";

const NavBar = () => {
  const [navContainerClass, setNavContainerClass] = useState(null);
  const [navBar, setNavBar] = useState(null);
  const [homeClass, setHomeClass] = useState(null);
  const [aboutClass, setAboutClass] = useState(null);
  const [technologiesClass, setTechnologiesClass] = useState(null);
  const [projectClass, setProjectClass] = useState(null);
  const [contactClass, setContactClass] = useState(null);

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY < 20) {
      setNavContainerClass("nav_container1");
      setNavBar("nav_bar1");
      setHomeClass("home_style");
      setProjectClass(null);
      setAboutClass(null);
      setContactClass(null);
      setTechnologiesClass(null);
    } else if (window.scrollY >= 20 && window.scrollY < 300) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass("home_style");
      setAboutClass(null);
      setProjectClass(null);
      setContactClass(null);
      setTechnologiesClass(null);
    } else if (window.scrollY >= 300 && window.scrollY < 1000) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass("about_style");
      setProjectClass(null);
      setContactClass(null);
      setTechnologiesClass(null);
    } else if (window.scrollY >= 1000 && window.scrollY < 1600) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass(null);
      setProjectClass(null);
      setContactClass(null);
      setTechnologiesClass("technologies_style");
    } else if (window.scrollY >= 1600 && window.scrollY < 3200) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass(null);
      setProjectClass("project_style");
      setContactClass(null);
      setTechnologiesClass(null);
    } else if (window.scrollY >= 3200) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass(null);
      setProjectClass(null);
      setContactClass("contact_style");
      setTechnologiesClass(null);
    }
  };

  useEffect(() => {
    controlNavbar();
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <div className={navContainerClass}>
      <div>
        <a href="#home">
          <img className="nav_logo" src={sam_logo} alt="logo"></img>
        </a>
      </div>
      <div className={navBar}>
        <div className="nav_link">
          <div>
            <a className={homeClass} href="#home">
              Home
            </a>
          </div>
        </div>
        <div className="nav_link">
          <div>
            <a className={aboutClass} href="#about">
              About
            </a>
          </div>
        </div>

        <div className="nav_link">
          <div>
            <a className={technologiesClass} href="#technologies">
              Technologies
            </a>
          </div>
        </div>
        <div className="nav_link">
          <div>
            <a className={projectClass} href="#project">
              Projects
            </a>
          </div>
        </div>

        <div className="nav_link">
          <div>
            <a className={contactClass} href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="nav_link"></div>
      </div>
    </div>
  );
};
export default NavBar;
