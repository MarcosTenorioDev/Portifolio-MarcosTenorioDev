import "./navBar.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav id="navBar">
        <div className="navContent">
          <div className="logo">
            &lt;MARCOS&gt; <span> &lt;/TENORIO&gt;</span>
          </div>

          <div className="links">
            <Link>Sobre mim</Link>
            <Link>Projetos</Link>
            <Link>Experiência</Link>
            <Link>Contato</Link>
          </div>

          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <Hamburger rounded />
          </div>

          <ul id={isOpen ? "menuNav" : "menuNavClose"}>
            <a href="#">
              <li className="menuLink">Sobre mim</li>
            </a>
            <a href="#">
              <li className="menuLink">Projetos</li>
            </a>
            <a href="#">
              <li className="menuLink">Experiência</li>
            </a>
            <a href="#">
              <li className="menuLink">Contato</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
