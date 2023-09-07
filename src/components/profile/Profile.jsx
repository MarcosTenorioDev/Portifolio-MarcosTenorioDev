import "./profile.css";
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'

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
          <button className="btnDownloadCv">Baixar CV</button>

          <div className="profileIconsBox">
            <i><a href="https://github.com/MarcosTenorioDev" target="blank"><img src={github} alt="Logo do github" /></a></i>
            <i><a href="https://www.linkedin.com/in/marcostenoriodev/" target="blank"><img src={linkedin} alt="Logo do linkedin" /></a></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
