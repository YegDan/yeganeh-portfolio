
import './swiftScheduler.css'
import calendar from '../../../assets/Calendar.png'
import profile from '../../../assets/Profile.png'
import home from '../../../assets/Home.png'
import swifts1 from '../../../assets/swiftS1.png'
import swifts2 from '../../../assets/swiftS2.png'
import swifts3 from '../../../assets/swiftS3.png'
export default function SwiftScheduler() {
  return (
    <div className="swift-scheduler">
      <h2 className="swift-scheduler-title">SwiftScheduler</h2>
      <section className="project-section">
        <h3>Project Summary</h3>
        <p>SwiftScheduler is a web-based dance academy scheduling application. It streamlines the administrative tasks of scheduling for students, instructors, and administrators, optimizing the management of classes and resources within the academy.</p>
      </section>

      <section className="project-section">
        <h3>Project Vision</h3>
        <p>The vision of SwiftScheduler is to become the central solution for scheduling challenges within dance academies. It aims to facilitate efficient class bookings, instructor shift coordination, and a user-friendly registration process that serves the needs of the entire dance community.</p>
       
      </section>

      <section className="project-section">
        <h3>Project Requirements</h3>
        <p>The application will provide:</p>
         <ul>
          <li>Providing a user-friendly registration system on a first-come, first serve basis</li>
          <li>Collecting user feedback on classes, instructors to improve overall performance</li>
          <li>Attendance tracking features</li>
          <li>Studio space reservations/class enrollment</li>
          <li>Calendar integration for real-time scheduling updates.</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Project Plan</h3>
        <p>This project has started in September 2023 and is planned to conclude by April 2024. It follows a structured agile approach for development, with periodic reviews, team meetings, and sprints to ensure alignment with the project goals .</p>
      </section>

      <section className="project-section">
        <h3>Requirments Analysis and Design</h3>
        <p>A dance academy scheduling web app developed using the MERN stack, providing a centralized and streamlined scheduling system for students, teachers, and administrators within an academy.</p>
      </section>

      <section className="project-section">
        <h3>Wireframes/Mockups</h3>
        <p>Originally conceived as a React Native mobile app, SwiftScheduler was transformed into a web app using the MERN stack to better meet project goals. Although our initial designs reflect a mobile approach, the final implementation has been optimized for the web.</p>
        <img src={calendar} alt="Wireframe-calendar-page" className="projectImage" />
        <img src={profile} alt="Wireframe-profile-page" className="projectImage" />
        <img src={home} alt="Wireframe-home-page" className="projectImage" />
        
      </section>

      <section className="project-section">
        <h3>Status Report</h3>
        <ul>
          <li>
            <strong>UI Development:</strong> Developed and implemented a dynamic UI that differentiates between student and teacher profiles, providing tailored functionalities for each user type. Design phase for student homepages, profile pages, and calendar is in progress.
          </li>
          <br/>
          <li>
            <strong>Backend Development:</strong> Exposed and constructed backend routes to enable teachers to post classes with logic to check classroom availability. Aiming for completion and integration in the upcoming sprint.
          </li>
          <br/>
          <li>
            <strong>Security and Authentication:</strong> Successfully integrated backend authentication routes for secure sign-ins. Established robust token generation with advanced encryption for heightened security.
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h3>System Implementation</h3>
        
        <img src={swifts1} alt="Wireframe-calendar-page" className="projectImage" />
        <img src={swifts2} alt="Wireframe-profile-page" className="projectImage" />
        <img src={swifts3} alt="Wireframe-home-page" className="projectImage" />
        
      </section>


      
      

      
    </div>
    
  
  )
}
