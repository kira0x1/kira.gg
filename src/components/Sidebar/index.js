import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#f7a194"></FontAwesomeIcon>
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        to="/about"
        className="about-link"
      >
        <FontAwesomeIcon icon={faUser} color="#f7a194"></FontAwesomeIcon>
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#f7a194"></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/kira0x1">
          <FontAwesomeIcon icon={faGithub} color="#f7a194"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
