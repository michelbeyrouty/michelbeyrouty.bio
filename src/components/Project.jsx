import Article from "./Article";
import { Articles } from "../constants";

const Project = () => {
  return (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects I work on when i am bored</h2>
        {Articles.map((article) => (
          <Article
            key={article.name}
            title={article.title}
            name={article.name}
            extraTitle={article.extraTitle}
            extraList={article.extraList}
            image={article.image}
            reverse={article.reverse}
            paragraph={article.paragraph}
            projectLink={article.projectLink}
            type={article.type}
          />
        ))}
      </section>
    </div>
  );
};

export default Project;
