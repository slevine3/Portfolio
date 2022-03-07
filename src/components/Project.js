import Climber_Nation from "./Images/climberNation.PNG";
import Memory_Game from "./Images/MemoryGame.PNG";

export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div className="project_title">
        <h1>MY LATEST PROJECTS</h1>
      </div>
      <div className="all_project_container">
        <div className="project_display_conatainer">
          <h2 style={{ textAlign: "center" }}>Climber Nation</h2>
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
          <h2 style={{ textAlign: "center" }}>Memory Game</h2>
          <div>
            <a href="https://slevine3.github.io/MemoryGame/">
              <img
                className="project_image"
                src={Memory_Game}
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
                href="https://github.com/slevine3/MemoryGame"
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
