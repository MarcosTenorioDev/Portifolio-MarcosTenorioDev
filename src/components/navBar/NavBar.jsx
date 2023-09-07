import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        </div>
      </nav>
    </>
  );
};
export default NavBar;
