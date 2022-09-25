import "../styles/About.scss";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
    

      <div className="box-container">
        <div className="box">
          {" "}
          <span class="icon1 icon material-symbols-outlined">speed</span>
          
          <span className="icon-name">Fast</span>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="box">
          <span class="icon2 icon material-symbols-outlined">
            devices
          </span>{" "}
          
          <span className="icon-name">Responsive</span>
          <p>My layouts will work on any device, big or small</p>
        </div>
        <div className="box">
          <span class="icon3  icon material-symbols-outlined">
            tips_and_updates
          </span>{" "}
          <span className="icon-name">Intuitive</span>
          
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="box">
          {" "}
          <span class="icon4 icon material-symbols-outlined">
            rocket_launch
          </span>{" "}
          <span className="icon-name">Dynamic</span>
          <p>Websites don't have to be static, I love making pages come to life.</p>
        </div>
      </div>

    <div className="skills">
        
    </div>

    </div>
  );
}

export default About;
