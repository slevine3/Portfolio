import profile_pic from "./Images/new_profile_pic.png";
export const About = () => {
  return (
    <div id="about" className="about_container">
      <div>
        <h1 className="about_title">ABOUT ME</h1>
      </div>
      <div className="about_body">
        <div className="about_description">
          I'm Sam Levine, a web developer based in Tzrufa, Israel. With
          expertise in technologies like React, Node.js, and MongoDB, I
          specialize in building scalable and user-friendly web applications.
          <br></br>
          <br></br>
          Currently, I work as a Part-Time Software Engineer at Manteca.ai,
          where I utilize React with TypeScript to integrate algorithms into a 3rd party SaaS financial company platform.
          <br></br>
          <br></br>I hold a degree in Economics from Queens College and completed a prestigious full-stack web development program
          at Developers Institute.
        </div>
        <div className="profile_pic_container">
          <img
            className="profile_pic"
            src={profile_pic}
            alt="profile_picture"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default About;
