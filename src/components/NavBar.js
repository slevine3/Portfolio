import resume from "./Resume/Sam-Levine_Resume.pdf";
import { useState, useEffect } from "react";
export const NavBar = () => {
  const [navContainerClass, setNavContainerClass] = useState(null);
  const [navBar, setNavBar] = useState(null);


  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setNavContainerClass("nav_container1");
      setNavBar("nav_bar1");

    } else {
      setNavContainerClass("nav_container2");
      setNavBar("nav_bar2");
 
    }
  };

  useEffect(() => {
    controlNavbar();
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <div className={navContainerClass}>
      <div className="logo">
        <a href="/">*</a>
      </div>
      <div className={navBar}>
        <div className="nav_link">
          <div>
            <a href="#home">
              Home
            </a>
          </div>
        </div>
        <div className="nav_link">
          <div>
            <a  href="#about">
              About
            </a>
          </div>
        </div>

        <div className="nav_link">
          <div>
            <a href="#project">
              Projects
            </a>
          </div>
        </div>

        <div className="nav_link">
          <div>
            <a href="#contact">
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
