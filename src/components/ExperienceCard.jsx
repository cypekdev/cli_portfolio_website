import "./ExperienceCard.css"

export default function ExperienceCard({ logoSrc, position, period, description }) {
  return (
    <div className="experience-card">
      <img src={logoSrc} alt="Company logo" className="company-logo" />
      <div className="experience-text">
        <div className="experience-header">
          <span className="position">{position}</span>
          <span className="period">{period}</span>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
