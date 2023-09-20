import "./accordion.css";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

import { Accordion as AccordionChakra} from "@chakra-ui/accordion";

const Accordion = () => {
  const item = [
    {
      company: "Inox tech",
      role: "Suporte de TI",
      timeInWork: "5 meses",
     description: "Atuei como Jovem Aprendiz na função de auxiliar de suporte de TI. Tive várias atribuições diferentes, desde o treinamento de usuários para o uso do sistema, como resolução de problemas de rede, configurações de computadores linux e windows, configuração de servidores utilizando Hyper-V, trabalhando na análise do tráfego de rede para achar possíveis problemas, etc.",
    },
    {
      company: "Porto Digital",
      role: "Residência Tecnológica",
      timeInWork: "4 meses",
      description: "Participei da solução de um problema da Ferreira-Costa, em parceria com a residência tecnológica do porto digital. Criamos uma aplicação fullstack e participei atuando principalmente na parte do Front-end, auxiliando os demais integrantes e participando da criação das funcionalidades desde a ideação/prototipação, ao desenvolvimento e análises de PR. Você pode ver o projeto nos cards acima.",
    },
    {
      company: "Porto Digital",
      role: "Residência Tecnológica",
      timeInWork: "atual",
      description: "Atualmente estou participando da residência tecnológica do porto digital em parceria com o Jornal do Comércio, estamos trabalhando na construção de uma api backend de notícias utilizando Lavravel(PHP) e Docker, apartir disso, uma integração com uma aplicação Front-End usando React.JS e mobile com React-Native.",
    },
  ];

  return (
    <>
      <AccordionChakra id="accordion" allowToggle>
        {item.map((item) => {
          return (
            <AccordionItem className="accordionItem">
              <h2>
                <AccordionButton className="accordionButton">
                  <div className="accordionTitle">
                    <span>{item.company}</span>
                    <span>{item.role}</span>
                    <span>{item.timeInWork}</span>
                  </div>
                  <AccordionIcon w={40} h={40}/>
                </AccordionButton >
              </h2>
              <AccordionPanel className="accordionPanel">
                {item.description}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </AccordionChakra>
    </>
  );
};

export default Accordion;
