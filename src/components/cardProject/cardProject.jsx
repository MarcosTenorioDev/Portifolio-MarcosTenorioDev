import "./cardProject.css";

const CardProject = (props) => {
  return (
    <div id="card">
      <div className="cardImgContainer">
        <img src={props.img} className="imgCard" alt={props.name} />
      </div>
      <div className="projectTitleBox">
        <h3 className="projectTitle">{props.name}</h3>
      </div>

      <div className="projectTechs">
        {props.techs.map((techs) => (
          <img src={techs} alt={techs} className="techImgCard" />
        ))}
      </div>

      <div className="projectDescriptionBox">
        <p className="projectDescription">{props.description}</p>
      </div>

      <div className="projectButtons">
        <a href={props.deploy} target="blank">
          <button className="cardButton" id="primaryBtn">
            Visite o site
          </button>
        </a>
        <a href={props.repo} target="blank">
          <button className="cardButton" id="secondaryBtn">
            Repositório
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardProject;
