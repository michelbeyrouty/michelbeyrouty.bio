import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="/#projects" smooth>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink to="/about" smooth>
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contact" smooth>
            Contact
          </HashLink>
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
