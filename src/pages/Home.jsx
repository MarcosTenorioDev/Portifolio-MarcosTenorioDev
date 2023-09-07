import { NavBar, Profile } from "../components/components";
import "./home.css";

const Home = () => {
  return (
    <div id="homepage">
      <header id="header">
        <div className="backgroundImg"></div>
        <NavBar />
        <Profile />
      </header>
    </div>
  );
};

export default Home;
