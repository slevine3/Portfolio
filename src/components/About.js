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
          specialized in building scalable and user-friendly web applications.
          <br></br>
          <br></br>
          In my previous role, I worked as a Full Stack Web Developer at
          Shoesonline, where I developed an intuitive admin panel using React
          with TypeScript and Redux. I also maintained microservices
          architecture and optimized communication between components.
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
