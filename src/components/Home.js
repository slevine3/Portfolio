import { useState, useEffect } from "react";
import resume from "./Resume/Sam-Levine_Resume.pdf";
import { saveAs } from "file-saver";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const words = ["<Programmer />", "Developer", "Problem Solver."];

  const saveFile = () => {
    saveAs(resume);
  };

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
        
        <p className="home_title">Hi, I'm Sam Levine</p>

        <div className="home_subtitle">
   
          <p className="typewritter">
            {" "}
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}{" "}
          </p>
        </div>
       <div className="button_container">
       <button className="button-11" onClick={saveFile} download={resume}>
            Download Resume
          </button>
     
        
       </div>
  
      </div>     
    </div>
  );
};
