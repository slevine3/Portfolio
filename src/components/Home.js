import Linkedin from "./Images/LinkedinProfile.PNG";
import { useState, useEffect } from "react";
export const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const words = ["Programmer", "Developer", "Problem Solver."];
  // typeWriter
  useEffect(() => {
    const words = ["Programmer", "Developer", "Problem Solver."];
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div id="home" className="home_container">
      <div className="home_body">
        <div>
          <p className="home_title">WELCOME TO MY PORTFOLIO</p>
        </div>

        <div className="home_subtitle">
          <p className="home_name">Sam Levine, </p>
          <p className="typewritter">
            {" "}
            the {`${words[index].substring(0, subIndex)}${
              blink ? "|" : " "
            }`}{" "}
          </p>
        </div>
      </div>
      <div className="home_image">
        <div>
          <img src={Linkedin} className="profile_pic" alt="profile_pic"></img>
        </div>
      </div>
    </div>
  );
};
