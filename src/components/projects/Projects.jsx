import Item from "./Item";
import "./style.css";
import mealMateImg from '../../assets/react-native.png';
import springBoot from '../../assets/spring-boot.png';
import aspDotNet from '../../assets/asp-mvc.jpg';
import mern from '../../assets/Mern.png';
import aws from '../../assets/aws.png';
import aws2 from '../../assets/Aws-padok.png';
import aws3 from '../../assets/aws3.jpg';

export default function Projects() {
    const projects = [
        {
          title: "MealMate",
          description: "A React Native application for finding restaurants using the Yelp API.",
          imgSrc: mealMateImg,
          path: "/mealMate"
        },
        {
          title: "SpringSocial",
          description: "A Spring Boot microservice-based social platform with advanced features for scalability.",
          imgSrc: springBoot, 
          path: "/springSocial"
        },
        {
          title: "Online Shop",
          description: "An ASP.NET MVC Core advanced online shop facilitating a comprehensive user shopping experience.",
          imgSrc: aspDotNet,
          path: "/netOnlineShop" 

        },
        {
          title: "SwiftScheduler",
          description: "A MERN stack web app for dance academy scheduling, enabling organized sessions for students, staff, and management.",
          imgSrc: mern,
          path: "/swiftScheduler" 
        },
        {
          title: "Upcoming!",
          description: "An innovative employee directory web app, architectured with AWS services including S3, EC2, and DynamoDB for robust, scalable network infrastructure.",
          imgSrc: aws,
          path: "" 
        },
        {
          title: "Text2Speech",
          description: "Experience cloud-native text-to-voice conversion with AWS Polly. Transform text inputs into lifelike voices for a personalized user experience.",
          imgSrc: aws2,
          path: "/text2speech" 
        },
        {
          title: "Email Service",
          description: "Discover my event-driven email delivery project with AWS, automating dispatch upon CSV uploads to S3 using SNS, Lambda, DynamoDB, and SES for reliable scalability.",
          imgSrc: aws3,
          path: "/emailService" 
        }
        
      ];
    
      return (
        <div className="portfolio">
          <h1 className="portfolio-title">Portfolio</h1>
          <hr className="portfolio-divider" />
          <div className="portfolio-items">
            {projects.map((project, i) => (
              <Item key={i} {...project} />
            ))}
          </div>
        </div>
      );
    

}
