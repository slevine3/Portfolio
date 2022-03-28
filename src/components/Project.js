import Climber_Nation from "./Images/climberNation.PNG";
import Wordle from "./Images/wordle.PNG";

//1. On image hover add transparency/opacity with caption of project.
//2. Change Wordle Clone links to link to Wordle project instead of memory game
export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div className="project_title">
        <h1>MY LATEST PROJECTS</h1>
      </div>
      <div className="all_project_container">
        <div className="project_display_conatainer">
          <h2 className="project_name">Climber Nation</h2>
          <div>
            <a href="https://climber-nation.herokuapp.com/">
              <img
                className="project_image"
                src={Climber_Nation}
                alt="Climber_Nation"
              ></img>
            </a>
          </div>

          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="https://www.loom.com/share/98717cfa741b4f34ba07a32ac76ea7e5"
              >
                <h3>Live Demo</h3>
              </a>
            </div>
            <div>
              <a
                className="project_subtitle"
                href="https://github.com/slevine3/Climber-Nation"
              >
                <h3>Source Code</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="project_display_conatainer">
          <h2 className="project_name">Wordle Clone</h2>
          <div>
            <a href="https://slevine3.github.io/Wordle/">
              <img
                className="project_image"
                src={Wordle}
                alt="Climber_Nation"
              ></img>
            </a>
          </div>
          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="https://www.loom.com/share/bb705a51d5fb4327a4950593590ee2ff"
              >
                <h3>Live Demo</h3>
              </a>
            </div>
            <div>
              <a
                className="project_subtitle"
                href="https://github.com/slevine3/Wordle"
              >
                <h3>Source Code</h3>
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
