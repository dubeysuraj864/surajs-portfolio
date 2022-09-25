import "../styles/Home.scss";
import coverImage from "../assets/coverImage.jpg";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-main">
      <div className="home">
        <div className="left">
          <img src={coverImage} alt="coverImage" width={450} />
        </div>
        <div className="right">
          <h1>Hi, I'm Suraj!</h1>
          <h1>Front-End Developer</h1>
          <p>
            Creative Technologist Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet. Check my
            Work
          </p>
          <button className="check-my-work">Check my Work</button>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
