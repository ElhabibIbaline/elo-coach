import { Link } from "react-router-dom";
import { LECTURES, compterMots } from "../../data/lectures";

function Diction() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Exercices</p>
        <h1>Diction & débit</h1>
        <p>
          Lis chaque texte à voix haute en chronométrant ton temps de lecture. L'app calcule ton
          débit en mots par minute et le compare à un rythme cible pour une lecture claire à l'oral.
        </p>
      </header>

      <div className="hub-grid">
        {LECTURES.map((lecture) => (
          <Link key={lecture.id} className="hub-card" to={`/exercices/diction/${lecture.id}`}>
            <div>
              <strong>{lecture.titre}</strong>
              <p>{lecture.source} · {compterMots(lecture.texte)} mots · débit cible ≈ {lecture.debitCible} mots/min</p>
            </div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Diction;
