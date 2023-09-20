import "./IconContact.css";

const IconContact = (props) => {
  return (
    <div className="iconContact">
      <i>
        <img src={props.img} alt={props.name} className="iconImg" />
      </i>
      <p className="nameIcon">{props.name}</p>
      {props.name == "Redes Sociais" ? (
        <div className="socialMediaImgBox">
          <a href={props.descriptionImgLink} target="blank">
            <img
              src={props.descriptionImg}
              alt={props.name}
              className="socialMediaImg"
            />
          </a>
          <a href={props.descriptionImgLink1} target="blank">
            <img
              src={props.descriptionImg1}
              alt={props.name}
              className="socialMediaImg"
            />
          </a>
          <a href={props.descriptionImgLink2} target="blank">
            <img
              src={props.descriptionImg2}
              alt={props.name}
              className="socialMediaImg"
            />
          </a>
        </div>
      ) : (
        <p className="descriptionIcon">{props.description}</p>
      )}
    </div>
  );
};

export default IconContact;
