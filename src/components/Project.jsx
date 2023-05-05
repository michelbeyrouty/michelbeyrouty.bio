import Article from "./Article";

const Project = () => {
  return (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects I work on when i am bored</h2>
        <Article />
        <Article reverse={true} />
        <Article />
      </section>
    </div>
  );
};

export default Project;
