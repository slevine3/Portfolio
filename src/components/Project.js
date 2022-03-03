import Climber_Nation from "./Images/climberNation.PNG";

export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div>
        <h1>MY LATEST PROJECTS</h1>
      </div>

      <div className="project_display_conatainer">
        <div>
          <div className="project_boxes">
            <div>
              <a href="https://www.loom.com/share/98717cfa741b4f34ba07a32ac76ea7e5">
                <img
                  className="project_image"
                  src={Climber_Nation}
                  alt="Climber_Nation"
                ></img>
              </a>

              <h3></h3>
            </div>
          </div>
          <div>
            <a
              className="project_subtitle"
              href="https://github.com/slevine3/Climber-Nation"
            >
              <h3>Climber Nation</h3>
            </a>
          </div>
        </div>

        <div>
          <div className="project_boxes">
            <div>
              <h3 className="project_title">
                <a href="https://www.loom.com/share/bb705a51d5fb4327a4950593590ee2ff">
                  View Demo Video
                </a>
              </h3>
            </div>
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
  );
};
