import Article from "./Article";
import { about } from "../constants";

const About = () => {
  return (
    <div className="section-blue">
      <section id="projects">
        <Article
          key={about.name}
          title={about.title}
          name={about.name}
          extraTitle={about.extraTitle}
          extraList={about.extraList}
          image={about.image}
          reverse={about.reverse}
          paragraph={about.paragraph}
          projectLink={about.projectLink}
          type={about.type}
        />
      </section>
    </div>
  );
};

export default About;
