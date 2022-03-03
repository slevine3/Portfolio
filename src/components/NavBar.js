import resume from "./Resume/Sam-Levine_Resume.pdf";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [navContainerClass, setNavContainerClass] = useState(null);
  const [navBar, setNavBar] = useState(null);
  const [homeClass, setHomeClass] = useState(null);
  const [aboutClass, setAboutClass] = useState(null);
  const [projectClass, setProjectClass] = useState(null);
  const [contactClass, setContactClass] = useState(null);

  const controlNavbar = () => {

    if (window.scrollY >= 0 && window.scrollY < 20) {
      setNavContainerClass("nav_container1");
      setNavBar("nav_bar1");
      setHomeClass("home_style");
      setProjectClass(null);
      setAboutClass(null);
      setContactClass(null);
    } else if (window.scrollY > 20 && window.scrollY < 300) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass("home_style");
      setAboutClass(null);
      setProjectClass(null);
      setContactClass(null);
    } else if (window.scrollY > 300 && window.scrollY < 900) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass("about_style");
      setProjectClass(null);
      setContactClass(null);
    } else if (window.scrollY > 900 && window.scrollY < 1500) {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass(null);
      setProjectClass("project_style");
      setContactClass(null);
    } else {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
      setHomeClass(null);
      setAboutClass(null);
      setProjectClass(null);
      setContactClass("contact_style");
    }
  };

  useEffect(() => {
    controlNavbar();
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <div className={navContainerClass}>
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
        <div className="nav_link">
          <div>
            <a href="Resume/Sam-Levine_Resume.pdf" download={resume}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
