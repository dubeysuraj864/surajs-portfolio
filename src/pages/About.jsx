import "../styles/About.scss";
import Developer from "../assets/enjoy.jpg";
import Image2 from "../assets/image2.jpg";

function About() {
  return (
    <>
 
      <div className="about">
      <h1>About</h1>
        <div className="box-container">
          <div className="box-main-left">
            <div className="container-left">
              <div className="box">
                {" "}
                <span class="icon1 icon material-symbols-outlined">speed</span>
                <span className="icon-name">Fast</span>
                <p>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
              <div className="box">
                <span class="icon2 icon material-symbols-outlined">
                  devices
                </span>{" "}
                <span className="icon-name">Responsive</span>
                <p>My layouts will work on any device, big or small</p>
              </div>
            </div>
            <div className="container-right">
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
                <p>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
          <div className="box-main-right">
            <img src={Image2} alt="image2" width={450} />
          </div>
        </div>

        <div className="skills">
          <div className="left">
            <img className="my-image" src={Developer} alt="me" width={350} />
            <h2>Who's this guy?</h2>
            <p>
              I'm a Front-End Developer based in New Delhi, India. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div className="right">
            <h1>Skills</h1>
            <div className="html progress">HTML</div>
            <div className="css progress">CSS/SCSS</div>
            <div className="react progress">React</div>
            <div className="vue progress">Vue</div>
            <div className="js progress">JavaScript</div>
            <div className="Node progress">Node.js</div>
            <div className="express progress">Express</div>
            <div className="mongo progress">MongoDB</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
