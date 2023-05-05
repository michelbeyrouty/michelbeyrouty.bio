import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <FontAwesomeIcon icon={faTerminal} fade />
              <span> Michel Beyrouty</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michelbeyrouty"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="sr-only"> LinkedIn </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/michelbeyrouty"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span className="sr-only"> Github </span>
          </a>
        </li>
        <li>
          <a
            className="button"
            href="https://drive.google.com/file/d/1HDr6BAfzLlR3r7Ueav6fsK1VYMDOnDwH/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
