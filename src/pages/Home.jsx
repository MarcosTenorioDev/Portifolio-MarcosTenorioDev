import {
  NavBar,
  Profile,
  CardProject,
  Accordion,
  FloatIcon,
  FormsContact,
  IconContact,
} from "../components/components";
import {
  react,
  HTML,
  CSS,
  prisma,
  nodejs,
  javascript,
} from "../components/icons";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail.svg";
import user from "../assets/icons/user.svg";
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import wpp from '../assets/wpp.svg'

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
  const icons = [
    {
      name: "Ligue para mim",
      img: phone,
      description: "+55 (81) 98306-2703",
    },
    {
      name: "Localização",
      img: location,
      description: "Recife-PE",
    },
    {
      name: "Email",
      img: mail,
      description: "marcostenorio2003@gmail.com",
    },
    {
      name: "Redes Sociais",
      img: user,
      descriptionimgLink:"https://github.com/MarcosTenorioDev",
      descriptionimgLink1:"https://www.linkedin.com/in/marcostenoriodev/",
      descriptionimgLink2:"https://api.whatsapp.com/send?phone=5581983062703&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F",
      descriptionImg: github,
      descriptionImg1: linkedin,
      descriptionImg2: wpp,
    },
  ];

  return (
    <div id="homepage">
      <FloatIcon />
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

      <section id="section">
        <div id="contact">
          <h2 className="title">Entre em contato</h2>
          <div className="contactSectionContent">
            <div className="detailsContact">
              
              <h3 className="contactTitle">
                Gostaria de contratar meus serviços ?
              </h3>
              <h4 className="contactSub">Será um prazer te ajudar</h4>
              <div className="iconsBox">
                {icons.map((icon) => (
                  <IconContact
                    name={icon.name}
                    img={icon.img}
                    description={icon.description}
                    descriptionImgLink={icon.descriptionimgLink}
                    descriptionImgLink1={icon.descriptionimgLink1}
                    descriptionImgLink2={icon.descriptionimgLink2}
                    descriptionImgLink3={icon.descriptionimgLink3}
                    descriptionImg={icon.descriptionImg}
                    descriptionImg1={icon.descriptionImg1}
                    descriptionImg2={icon.descriptionImg2}
                    descriptionImg3={icon.descriptionImg3}
                  />
                ))}
              </div>
            </div>
            <FormsContact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
