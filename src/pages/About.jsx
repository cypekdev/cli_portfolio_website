import "./About.css"
import ZS10Logo from "../assets/zs10-logo-white.png"
import GlobodainLogo from "../assets/globodain_logo.png"
import Technologies from "../components/Technologies"
import IntroductionImage from "../components/IntroductionImage"
import QualificationCard from "../components/QualificationCard"
import ExperienceCard from "../components/ExperienceCard"

export default function About() {
  return (
    <>
      <section id="introduction-section" className="container">
        <div className="text-content">
          <span className="greeting-text">Hello, there's Cyprian!</span>
          <br/>
          <h1 className="title">Curiosity-Driven<br/>Engineer</h1>
          <p>
            For me, building is a way to understand the world. Every project is both a challenge and an opportunity to learn.
          </p>
        </div>
        <div className="image-content">
          <IntroductionImage />
        </div>
      </section>

      
      <section id="experience" className="container"> 
        <h2>Experience</h2>

        <ExperienceCard
          logoSrc={GlobodainLogo}
          position="Apprenticeship - Python Developer"
          period="2025.05 - 2025.06"
          description="Contributed to improving the structure of the code that, integrated with AI, operates on databases"
        />

        <ExperienceCard
          logoSrc={ZS10Logo}
          position="Website Designer, Developer, Copywriter"
          period="2023.05 - present"
          description="Designed and developed the school's website using Wordpress, ensuring a responsive and user-friendly experience."
        />
      </section>


      <section id="qualifications" className="container">
        <h2>Qualifications</h2>
        <div className="cards-container">
          <QualificationCard
            title="INF.03"
            issuer="OKE Jaworzno"
            date="2024.08"
            description="Creating and administering websites, web application and database" />

        </div>

        <Technologies />
      </section>


      <section id="interests" className="container">
        <h2>Interests</h2>
        <p>
          I’m a curious maker with a passion for technology, engineering, and human-centered design.
        </p>
        <p>
          I love to tinker — programming microcontrollers on Arduino and Raspberry Pi, and designing physical components in CAD software.
        </p>
        <p>
          I’m fascinated by neuroscience and self-development, constantly exploring how people think, learn, and create.
        </p>
        <p>
          Beyond technology, I enjoy being around people, working in teams, and singing in a choir, where collaboration and harmony are at the heart of every performance.  
        </p>
      </section>
    </>
  )
}