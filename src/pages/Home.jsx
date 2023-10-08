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
  postgreesql,
  tailwind,
  typescript,
  java,
} from "../components/icons";

import{
  nutri,
  contentAI,
  ativamente,
  ferreiraCosta,
  decodificador,
  javaDefault,
} from '../components/pages'
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail.svg";
import user from "../assets/icons/user.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import wpp from "../assets/wpp.svg";
import aboutMeImg from "../assets/aboutMe.webp";
import "./home.css";

const Home = () => {
  const cards = [
    {
      name: "Nutri.io",
      img: nutri,
      techs: [react, CSS, javascript, HTML],
      description:
        "Criação de dietas personalizadas com base em parâmetros pessoais utilizando inteligência artificial e um chatbot para tirar suas dúvidas em relação a alimentação",
      deploy: "https://nutri-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev/Nutri.io",
    },
    {
      name: "Content.Ai",
      img: contentAI,
      techs: [react, tailwind, typescript, prisma, nodejs],
      description:
        "Aplicação fullstack que transcreve vídeos em texto, com funcionalidades de criar resumos, títulos e descrições para YouTube, descrições para TikTok e Instagram.",
      deploy: "https://content-io.vercel.app/",
      repo: "https://github.com/MarcosTenorioDev/Content.AI",
    },
    {
      name: "Clinica-Ativamente",
      img: ativamente,
      techs: [react, HTML, CSS, javascript],
      description:
        "Freelance de uma landing page feita para uma clínica de psicologia com funcionalidade de agendamento de sessões de psicoterapia",
      deploy: "https://clinica-ativamente.vercel.app/",
      repo: "https://github.com/JocaCavalcanti/clinicaAtivamente",
    },
    {
      name: "OMS-Ferreira-Costa",
      img: ferreiraCosta,
      techs: [react, nodejs, typescript, javascript, postgreesql],
      description:
        "Sistema de Gerenciamento de Pedidos (OMS) da empresa Ferreira Costa. Este projeto fullstack foi desenvolvido durante a residência do porto digital",
      deploy: "https://oms-ferreira-costa.vercel.app/Home",
      repo: "https://github.com/MarcosTenorioDev/oms-ferreira-costa",
    },
    {
      name: "Decodificador",
      img: decodificador,
      techs: [HTML, CSS, javascript],
      description:
        "Decodificador com funcionalidades de codificar uma mensagem e decodificá-la utilizando javascript",
      deploy: "https://marcostenoriodev.github.io/Programa-ONE/",
      repo: "https://github.com/MarcosTenorioDev/Programa-ONE",
    },
    {
      name: "Gestão de RH",
      img: javaDefault,
      techs: [java],
      description:
        "Sistema simples desenvolvido em Java para auxiliar na gestão de funcionários de uma empresa. Ele permite carregar, cadastrar, classificar, pesquisar e listar funcionários com base no salário",
      deploy: "https://github.com/MarcosTenorioDev/sistema_gestao_rh",
      repo: "https://github.com/MarcosTenorioDev/sistema_gestao_rh",
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
      descriptionimgLink: "https://github.com/MarcosTenorioDev",
      descriptionimgLink1: "https://www.linkedin.com/in/marcostenoriodev/",
      descriptionimgLink2:
        "https://api.whatsapp.com/send?phone=5581983062703&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F",
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
            <h2 className="title" id="aboutMeTitle">Sobre mim</h2>

            <p className="aboutMeSubtitle">
              Atualmente estou no 3º Período do curso de Sistemas para internet
              na UNICAP - Universidade Católica De Pernambuco - e atuando em
              projetos web como Desenvolvedor Frontend.
              <span>
                Desenvolvo páginas web modernas e resolvo problemas de usuários
                usando as principais tecnologias do mercado atual. Busco sempre
                a Alta performance, Responsividade, Acessibilidde, SEO,
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
