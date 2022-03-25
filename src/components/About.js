import profile_pic from "./Images/new_profile_pic.png"
export const About = () => {
  return (
    <div id="about" className="about_container">
      <div>
        <h1 className="about_title">ABOUT ME</h1>
      </div>
      <div className="about_body">
        <div className="about_description">
          I'm a software engineer based out of Haifa, Israel with a love for
          surfing, rock climbing, logic, and technology. I recently graduated
          from Developers Institute; an internationally recognized coding
          bootcamp where I had the opportunity to sharpen my skills as a
          software engineer.
        </div>
        <div>
          <img className="profile_pic"src={profile_pic} alt="profile picture"></img>
        </div>
      </div>
    </div>
  );
};
