const Article = ({ reverse }) => {
  return (
    <article className={reverse ? "reverse" : ""}>
      <div className="text">
        <h4>Latest Project</h4>
        <h3>Game Fox</h3>
        <p className="blackbox">
          {`Built and Deployed a very simple Tamagotchi `}
          <a href="http://gamefox.michelbeyrouty.bio/">game</a>{" "}
          {` on my private virtual server hosted in Digital Ocean.`}
        </p>
        <h4>Technologies used include:</h4>
        <ul>
          <li>JS</li>
          <li>HTML</li>
          <li>Parcel</li>
          <li>Docker</li>
          <li>Nginx</li>
          <li>Ubuntu</li>
        </ul>
      </div>
      <img src="./assets/gamefox.png" alt="Screenshot of the Wall of Wonder." />
    </article>
  );
};

export default Article;
