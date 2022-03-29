import Climber_Nation from "./Images/climberNation.PNG";
import Wordle from "./Images/wordle.PNG";

export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div className="project_title">
        <h1>MY LATEST PROJECTS</h1>
      </div>
      <div className="all_project_container">
        <div className="project_display_container">
       
          <div className="img_wrap">
            <img
              className="project_image"
              src={Climber_Nation}
              alt="Climber_Nation"
            ></img>

            <div class="img_overlay image_overlay_blur">
              <a href="https://climber-nation.herokuapp.com/" className="img_title">
                Climber Nation
              </a>
              <a href="https://climber-nation.herokuapp.com/" className="img_description">
                Full stack web application to assist rock climbing enthusiasts
                in finding climbing partners.
              </a>
            </div>
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
        <div className="project_display_container">
         
          <div className="img_wrap">
            <img
              className="project_image"
              src={Wordle}
              alt="Climber_Nation"
            ></img>

            <div class="img_overlay image_overlay_blur">
            <a href="https://slevine3.github.io/Wordle/" class="img_title">
                Wordle Clone
              </a>
              <a href="https://slevine3.github.io/Wordle/" class="img_description">
                Fully functioning game built with vanilla Javascript
              </a>
            </div>
          </div>

          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="https://www.loom.com/my-videos"
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
