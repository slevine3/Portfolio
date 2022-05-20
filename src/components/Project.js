import Climber_Nation from "./Images/climberNation.PNG";
import Wordle from "./Images/wordle.PNG";
import fashionfirst from "./Images/fashionfirst.PNG";
import admindashboard from "./Images/admindashboard.PNG"

export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div className="project_title">
        <h1>MY LATEST PROJECTS</h1>
      </div>
        <div className="project_row">
          <div className="project_display_container">
            <div className="img_wrap">
              <img
                className="project_image"
                src={fashionfirst}
                alt="Climber_Nation"
              ></img>

              <div className="img_overlay image_overlay_blur">
                <a
                  href="https://fashionfirst.herokuapp.com/"
                  className="img_title"
                >
                  FashionFirst
                </a>
                <a
                  href="https://fashionfirst.herokuapp.com/"
                  className="img_description"
                >
                  Full stack e-commerce application for clothing
                </a>
              </div>
            </div>

            <div className="project_links">
              <div>
                <a
                  className="project_subtitle"
                  href="https://fashionfirst.herokuapp.com/"
                >
                  <h3>Live Site</h3>
                </a>
              </div>
              <div>
                <a
                  className="project_subtitle"
                  href="https://www.loom.com/looms/videos"
                >
                  <h3>Demo Video</h3>
                </a>
              </div>
              <div>
                <a
                  className="project_subtitle"
                  href="https://github.com/slevine3/Fashion-First"
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
                src={admindashboard}
                alt="Climber_Nation"
              ></img>

              <div className="img_overlay image_overlay_blur">
                <a
                  href="https://climber-nation.herokuapp.com/"
                  className="img_title"
                >
                  FashionFirst - Admin Dashboard
                </a>
                <a
                  href="https://climber-nation.herokuapp.com/"
                  className="img_description"
                >
                  Tool for viewing data analytics and performing CRUD
                  operations.
                </a>
              </div>
            </div>

            <div className="project_links">
              <div>
                <a
                  className="project_subtitle"
                  href="http://www.google.com"
                >
                  <h3>Live Site</h3>
                </a>
              </div>
              <div>
                <a
                  className="project_subtitle"
                  href="https://www.loom.com/share/98717cfa741b4f34ba07a32ac76ea7e5"
                >
                  <h3>Demo Video</h3>
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
        </div>
        <div className="project_row">
        
          <div className="project_display_container">
            <div className="img_wrap">
              <img
                className="project_image"
                src={Climber_Nation}
                alt="Climber_Nation"
              ></img>

              <div className="img_overlay image_overlay_blur">
                <a
                  href="https://climber-nation.herokuapp.com/"
                  className="img_title"
                >
                  Climber Nation
                </a>
                <a
                  href="https://climber-nation.herokuapp.com/"
                  className="img_description"
                >
                  Full stack web application to assist rock climbing enthusiasts
                  in finding climbing partners.
                </a>
              </div>
            </div>

            <div className="project_links">
              <div>
                <a
                  className="project_subtitle"
                  href="https://climber-nation.herokuapp.com/"
                >
                  <h3>Live Site</h3>
                </a>
              </div>
              <div>
                <a
                  className="project_subtitle"
                  href="https://www.loom.com/share/98717cfa741b4f34ba07a32ac76ea7e5"
                >
                  <h3>Demo Video</h3>
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
              <img className="project_image" src={Wordle} alt="Wordle"></img>

              <div className="img_overlay image_overlay_blur">
                <a
                  href="https://slevine3.github.io/Wordle/"
                  className="img_title"
                >
                  Wordle Clone
                </a>
                <a
                  href="https://slevine3.github.io/Wordle/"
                  className="img_description"
                >
                  Fully functioning game built with vanilla Javascript
                </a>
              </div>
            </div>

            <div className="project_links">
              <div>
                <a
                  className="project_subtitle"
                  href="https://slevine3.github.io/Wordle/"
                >
                  <h3>Live Site</h3>
                </a>
              </div>
              <div>
                <a
                  className="project_subtitle"
                  href="https://www.loom.com/share/42e9bfe2e1884a3fafc297f25dd0e8e0"
                >
                  <h3>Demo Video</h3>
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
