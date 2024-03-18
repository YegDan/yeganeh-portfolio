
import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/portfolio">My Portfolio</Link>
            </li>
            <li>
                <Link to="/about-me">About Me</Link>
            </li>
            <li>
                <Link to="/credentials">Academic Credentials</Link>
            </li>
            <li>
                <Link to="/experience">Work Experience</Link>
            </li>
        </ul>
    </nav>
  )
}
