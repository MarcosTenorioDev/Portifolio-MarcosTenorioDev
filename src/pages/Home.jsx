import { NavBar, Profile, CardProject, Accordion } from "../components/components";
import {
  react,
  HTML,
  CSS,
  prisma,
  nodejs,
  javascript,
} from "../components/icons";
import "./home.css";
import aboutMeImg from "../assets/aboutMe.webp";
import teste from "../assets/image.png";

const Home = () => {
  const cards = [
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
    {
      name: "Projeto1",
      img: teste,
      techs: [react, HTML, CSS, prisma, nodejs],
      description:
        " Aqui é a descrição sobre o meu projeto e como ele funciona Aqui é a descrição sobre o meu projeto e como ele funciona",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev",
    },
  ];

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
            <h2 className="title">Sobre mim</h2>

            <p className="aboutMeSubtitle">
              Atualmente estou no 3º Período do curso de Sistemas para internet
              na UNICAP - Universidade Católica De Pernambuco - e atuando em
              projetos web como Desenvolvedor Frontend.
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

      <section id="section">
        <div id="projects">
          <h2 className="title">Projetos</h2>
          <div className="cardsContainer">
            {cards.map((card) => (
              <CardProject
                name={card.name}
                img={card.img}
                techs={card.techs}
                description={card.description}
                deploy={card.deploy}
                repo={card.repo}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="section">
        <div id="experience">
          <h2 className="title">Experiência</h2>
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default Home;
