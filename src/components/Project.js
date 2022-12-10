import Climber_Nation from "./Images/climberNation.PNG";
import Wordle from "./Images/wordle.PNG";
import fashionfirst from "./Images/fashionfirst.PNG";
import admindashboard from "./Images/admindashboard.PNG";
import schoolDismissal from "./Images/School_Dismissal.PNG";
import taskScheduler from "./Images/task_scheduler.PNG";

export const Project = () => {
  return (
    <div id="project" className="project_container">
      <div className="project_title">
        <h1>LATEST PROJECTS</h1>
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
                Full stack ecommerce web application for clothes shopping
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
                href="https://fashionfirst-admin-dashboard.netlify.app/"
                className="img_title"
              >
                FashionFirst - Admin Dashboard
              </a>
              <a
                href="https://fashionfirst-admin-dashboard.netlify.app/"
                className="img_description"
              >
                Tool for viewing live data analytics and performing CRUD
                operations.
              </a>
            </div>
          </div>

          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="https://fashionfirst-admin-dashboard.netlify.app/"
              >
                <h3>Live Site</h3>
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
      </div>
      <div className="project_row">
        <div className="project_display_container">
          <div className="img_wrap">
            <img
              className="project_image"
              src={schoolDismissal}
              alt="Climber_Nation"
            ></img>

            <div className="img_overlay image_overlay_blur">
              <a
                href="https://school-dismissal-system.herokuapp.com/"
                className="img_title"
              >
                School Dismissal System
              </a>
              <a
                href="https://school-dismissal-system.herokuapp.com/"
                className="img_description"
              >
                Full stack component built as a tool for parents to report
                dismissal times to the school
              </a>
            </div>
          </div>

          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="https://school-dismissal-system.herokuapp.com/"
              >
                <h3>Live Site</h3>
              </a>
            </div>

            <div>
              <a
                className="project_subtitle"
                href="https://github.com/slevine3/School_Dismissal_System"
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
              src={taskScheduler}
              alt="Climber_Nation"
            ></img>

            <div className="img_overlay image_overlay_blur">
              <a
                href="http://daily-task-scheduler.herokuapp.com/"
                className="img_title"
              >
                Daily Task Scheduler
              </a>
              <a
                href="http://daily-task-scheduler.herokuapp.com/"
                className="img_description"
              >
                Full stack web component for scheduling tasks and automating
                email delivery
              </a>
            </div>
          </div>

          <div className="project_links">
            <div>
              <a
                className="project_subtitle"
                href="http://daily-task-scheduler.herokuapp.com/"
              >
                <h3>Live Site</h3>
              </a>
            </div>

            <div>
              <a
                className="project_subtitle"
                href="https://github.com/slevine3"
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
export default Project;
