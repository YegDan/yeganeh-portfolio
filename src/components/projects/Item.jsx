
import { Link } from "react-router-dom";
import "./style.css";
// eslint-disable-next-line react/prop-types
export default function Item({ title, description, imgSrc, path}) {
  return (
    <div className="project-item">
        <div className="project-image-wrapper">
            <img src={imgSrc} alt={title} className="project-image" />
        </div>
        <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={path} className="view-project-button">View Project</Link>
        </div>
    </div>
  )
}
