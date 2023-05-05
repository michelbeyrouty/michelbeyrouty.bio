import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <footer>
      <h2>Michel Beyrouty &middot; Software Engineer</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/michelbeyrouty"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fab fa-linkedin" aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/michelbeyrouty"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fab fa-github-square" aria-hidden="true">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:michelbeyrouty@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2023 Michel Beyrouty. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Contact;
