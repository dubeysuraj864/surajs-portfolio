import "../styles/About.scss";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        cupiditate vero ducimus fugit commodi libero nostrum inventore vel nam
        modi?
      </p>

      <div className="box-container">
        <div className="box">
          {" "}
          <span class="material-symbols-outlined">speed</span>Fast
        </div>
        <div className="box">
        <span class="material-symbols-outlined">
devices
</span> Responsive
        </div>
        <div className="box">
          <span className="Intuitive"></span> Intuitive
        </div>
        <div className="box">
          {" "}
          <span className="Dynamic"></span> Dynamic
        </div>
      </div>
    </div>
  );
}

export default About;
