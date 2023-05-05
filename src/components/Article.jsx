const Article = ({
  reverse,
  title,
  name,
  extraTitle,
  extraList,
  paragraph,
  projectLink,
  image,
  type,
}) => {
  return (
    <article className={reverse ? "reverse" : ""}>
      <div className="text">
        <h4>{title}</h4>
        <h3>{name}</h3>
        <p className="blackbox">
          {paragraph[0]}
          <a href={projectLink} target="_blank" rel="noreferrer">
            {type}
          </a>
          {paragraph[1]}
        </p>
        <h4>{extraTitle}</h4>
        <ul>
          {extraList.map((extra) => (
            <li key={extra}>{extra}</li>
          ))}
        </ul>
      </div>
      <img src={`./assets/${image}`} alt={`Screenshot of ${image}`} />
    </article>
  );
};

export default Article;
