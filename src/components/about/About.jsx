
import './style.css'; 
export const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <br></br>
      <section className="bio">
        <h2>Get to Know Me</h2>
        <p>Hello there! I&apos;m Yeganeh, but you can call me Venus if you like. Fresh out of George Brown College in the heart of Toronto, I&apos;m a new grad with a zest for coding over morning coffee, exploring new places, and cracking complex problems. As a Full Stack Developer with a penchant for backend magic, I&apos;ve recently ventured into the clouds—AWS clouds, to be precise. There, I&apos;m sharpening my skills and knowledge, ready to architect solutions that soar.</p>
      </section>

      {/* <section className="resume">
        <h2>Resume</h2>
        <p><a href="path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a></p>
      </section> */}

      <section className="cover-letter">
        <h2>Cover Letter</h2>
        <p>Dear Hiring Manager,</p>
        <br></br>

        <p>I am thrilled to apply for the Solutions Architect Intern role at AWS, currently advancing my expertise through the AWS Cloud Solutions Architect Professional Certificate on Coursera. This rigorous program has deepened my grasp of cloud infrastructure, covering essentials, architecture solutions, and data lakes, which complements my practical knowledge in [Java/Python/C++] gained from George Brown College.</p>

        <p>Eager to apply this contemporary education to real-world scenarios, I am committed to fostering innovation and effective problem-solving at AWS. My goal is to contribute to the design and deployment of scalable architectures that empower businesses, a pursuit that aligns perfectly with AWS&apos;s visionary work.</p>

        <p>Thank you for considering my application. I look forward to the chance to discuss how my educational background and burgeoning technical skills will be an asset to the AWS team.</p>
        <br></br>
        <p>Warm regards,</p>

        <p>Yeganeh Daneshparvar</p>

      </section>

      
    </div>
  );
};

export default AboutMe;
