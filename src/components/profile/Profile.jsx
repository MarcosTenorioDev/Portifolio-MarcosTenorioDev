import "./profile.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import profileImg from "../../assets/profileImg.webp";
import bigHexagon from "../../assets/bigHexagon.svg";
import smallHexagon from "../../assets/smallHexagon.svg";
import curriculo from "../../assets/curriculo.pdf";

const Profile = () => {
  return (
    <div id="profile">
      <div className="profileData">
        <div className="profileIntro">
          <h2 className="subtitleProfile">Prazer, me chamo</h2>
          <h1 id="titleProfile">
            MARCOS TENORIO <span> Desenvolvedor Web</span>
          </h1>
        </div>
        <div className="profileLinks">
          <a href={curriculo} target="blank">
            <button className="btnDownloadCv">Baixar CV</button>
          </a>

          <div className="profileIconsBox">
            <i>
              <a href="https://github.com/MarcosTenorioDev" target="_blank">
                <img src={github} alt="Logo do github" />
              </a>
            </i>
            <i>
              <a
                href="https://www.linkedin.com/in/marcostenoriodev/"
                target="_blank"
              >
                <img src={linkedin} alt="Logo do linkedin" />
              </a>
            </i>
          </div>
        </div>
      </div>
      <div className="profileImgContainer">
        <div className="profileImgBox">
          <div className="imgBox">
            <img
              src={profileImg}
              alt="Imagem de MarcosTenorioDev"
              className="imgProfile"
            />
          </div>
          <div className="effectContainer">
            <i className="effect1">
              <img src={bigHexagon} alt="hexagono" className="bigHexagon" />
            </i>
            <i className="effect2">
              <img src={smallHexagon} alt="hexagono" className="smallHexagon" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
