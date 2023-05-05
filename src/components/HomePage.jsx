import Contact from "./Contact";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Seperator from "./Seperator";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Seperator />
      <Contact />
      <Seperator />
      <Footer />
    </div>
  );
};

export default HomePage;
