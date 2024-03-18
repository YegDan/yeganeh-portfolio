
import "./mealmate.css"
export default function SpringSocial() {
  return (
    <div className="project-container">
      <h2 className="project-title">Microservice-Based Social Platform: SpringSocial</h2>
      <p className="project-duration">October 2023 - December 2023</p>
      <p className="project-institution">George Brown College | Toronto, Ontario</p>
      <ul className="project-details">
        <li>Developed a Spring Boot microservice-based platform with advanced scalability and robustness features.</li>
        <li>Implemented Spring Cloud for inter-service communication with Eureka for service discovery.</li>
        <li>Configured Spring Cloud Gateway for efficient request routing and security groundwork.</li>
        <li>Implemented Circuit Breaker pattern with Resilience4J and monitored services using Spring Actuator and Zipkin.</li>
        <li>Containerized services with Docker and managed deployments with Docker Compose.</li>
        <li>Secured endpoints and managed identity with Keycloak, enhancing user security.</li>
      </ul>
    </div>
  )
}
