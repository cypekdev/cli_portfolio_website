import "./QualificationCard.css"

export default function QualificationCard({ title, issuer, date, description }) {
  return (
    <div className="qualification-card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="footer">
        <span className="issuer">{issuer}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}
