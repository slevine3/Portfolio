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
            <label htmlFor="subject">Subject: </label>
            <input id="subject" type="text" name="subject" />
            <label htmlFor="name">Name: </label>
            <input id="subject" type="text" name="name" />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" />
            <label htmlFor="message">Message: </label>
            <textarea className="textarea" name="message"></textarea>

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
