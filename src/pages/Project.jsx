import Pizza from "../assets/projects/pizza.jpg";
import Password from "../assets/projects/password.jpg";
import Todo from "../assets/projects/todo.jpg";
import RandomUser from "../assets/projects/randomUser.jpg";
import Movie from "../assets/projects/movie.jpg";
import Unit from "../assets/projects/unitMeasure.jpg";
import "../styles/Projects.scss";

function Project() {
  return (
    <>

    <div className="project-h1"><h1>Projects</h1> </div>
  
      <div className="project">
      
        <div className="image">
          <img src={Pizza} alt="pizza" width={300} />
        </div>
        <div className="image">
          <img src={Movie} alt="Movie" width={300} />
        </div>
        <div className="image">
          <img src={Todo} alt="todo" width={300} />
        </div>
        <div className="image">
          <img src={Unit} alt="unit" width={300} />
        </div>
        <div className="image">
          <img src={Password} alt="password" width={300} />
        </div>
        <div className="image">
          <img src={RandomUser} alt="random" width={300} />
        </div>
      </div>
    </>
  );
}

export default Project;
