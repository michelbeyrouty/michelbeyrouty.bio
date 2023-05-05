import Contact from "./Contact";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Seperator from "./Seperator";
import Project from "./Project";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Seperator />
      <Project />
      <Seperator />
      <Contact />
      <Seperator />
      <Footer />
    </div>
  );
};

export default HomePage;
