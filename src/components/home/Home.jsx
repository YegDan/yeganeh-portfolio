
import "./style.css";

import Typewriter from "typewriter-effect";
import myImgUrl from "../../assets/port-img.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  const myName = "Yeganeh Daneshparvar";
  const myProfession = [
    "I'm an AWS Cloud Practitioner and Full Stack Developer.",
    "I thrive on problem-solving and continuous learning in cloud technologies.",
    "Explore my work demonstrating practical, scalable web and mobile solutions."
  ];
  const myDescription = "“He who conquers himself is the mightiest warrior.” - Confucius ";

  const backgroundStyle = {
    backgroundImage: `url(${myImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100%' 
  };

  return (
    <section id="home" className="home">
      <div className="intro_sec d-block d-lg-flex align-items-center">
        <div className="h_bg-image order-1 order-lg-2 h-100" style={backgroundStyle}></div>
        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
          <div className="align-self-center">
            <div className="intro mx-auto">
              <h2 className="mb-1x">{myName}</h2>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: myProfession,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p className="mb-1x">{myDescription}</p>
              <div className="intro_btn-action pb-5">
                <Link className="ac_btn btn"
                  to="./portfolio">
                  My Portfolio
                </Link>
                <Link className="ac_btn btn"
                  to="./about-me">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
