import linkedin_logo from "./Images/linkedin.png";
import github_logo from "./Images/github-logo.png";
export const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <div>
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact_info_container">
        <div>
          <form
            action="https://formsubmit.co/7c1a3dcf72e09b552a05205cc108fd0a"
            method="POST"
            className="contact_form"
          >
            <lable htmlFor="subject">Subject: </lable>
            <input type="text" name="subject"></input>
            <lable htmlFor="name">Name: </lable>
            <input type="text" name="name"></input>
            <lable htmlFor="email">Email: </lable>
            <input type="email" name="email"></input>
            <lable htmlFor="message">Message: </lable>
            <textarea name="message"></textarea>

            <button className="button-12">Submit</button>
          </form>
        </div>
        <div className="contact_logos">
          <div>
            <a href="https://www.linkedin.com/in/sam-levine-965696119/">
              <img src={linkedin_logo} alt="LinkedIn logo"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/slevine3">
              <img src={github_logo} alt="Github logo"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
