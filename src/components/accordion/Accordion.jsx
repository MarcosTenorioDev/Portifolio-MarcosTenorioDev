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
      description: "asdaasdasdasdasdsd aasdasdasdasds aasdasdasdasdssas  as as  a aasdasdasdasds as aasdasdasdasdsaasdasdasdasds aasdasdasdasds",
    },
    {
      company: "Porto Digital",
      role: "Residência Tecnológica",
      timeInWork: "4 meses",
      description: "asdasd asd asd asd asd asd asd asdasdasd asd asd asd",
    },
    {
      company: "Porto Digital",
      role: "Residência Tecnológica",
      timeInWork: "atual",
      description: "asdasd asd asd asd asd asd asd asdasdasd asd asd asd",
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
