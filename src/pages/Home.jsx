import { NavBar, Profile } from "../components/components";
import "./home.css";
import aboutMeImg from "../assets/aboutMe.webp";

const Home = () => {
  return (
    <div id="homepage">
      <header id="header">
        <div className="backgroundImg"></div>
        <NavBar />
        <Profile />
      </header>

      <section id="section">
        <div id="aboutMe">
          <img
            src={aboutMeImg}
            alt="imagem gerada por IA de um homem usando um computador"
            className="aboutMeImg"
          />

          <div className="aboutMeContent">
            <h2 className="aboutMeTitle">Sobre mim</h2>

            <p className="aboutMeSubtitle">
              Atualmente estou no 3º Período do curso de Sistemas para internet na
              UNICAP - Universidade Católica De Pernambuco - e atuando em projetos
              web como Desenvolvedor Frontend.
              <span>
                Desenvolvo páginas web modernas e resolvo problemas de usuários
                usando as principais tecnologias do mercado atual. Busco sempre
                a Alta performance , Responsividade, Acessibilidde, SEO,
                Manutenção e a Melhor solução para o seu produto.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
