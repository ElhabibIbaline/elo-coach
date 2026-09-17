import { Link } from "react-router-dom";
import { PARCOURS } from "../data/parcours";
import { chargerProgression } from "../utils/progression";

function Parcours() {
  const etat = chargerProgression();

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Le parcours</p>
        <h1>Huit semaines pour progresser en éloquence</h1>
        <p>
          Chaque semaine a un objectif précis et cinq séances de 10 à 15 minutes. Suis l'ordre la
          première fois, puis reviens librement sur les semaines qui t'intéressent.
        </p>
      </header>

      <div className="semaine-grid">
        {PARCOURS.map((semaine) => {
          const joursTermines = semaine.jours.filter((j) => etat.seancesParcoursTerminees.includes(j.id)).length;
          const complet = joursTermines === semaine.jours.length;
          const pourcentage = Math.round((joursTermines / semaine.jours.length) * 100);
          return (
            <Link key={semaine.id} to={`/parcours/${semaine.id}`} className="semaine-card">
              <div className="semaine-card__entete">
                <span className="semaine-card__numero">Semaine {semaine.numero}</span>
                {complet && <span className="semaine-card__badge">✓ terminée</span>}
              </div>
              <h2>{semaine.titre}</h2>
              <p>{semaine.objectif}</p>
              <div className="flashcard-progress" style={{ marginBottom: 0 }}>
                <div className="flashcard-progress__bar"><div style={{ width: `${pourcentage}%` }} /></div>
                <span>{joursTermines} / {semaine.jours.length}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Parcours;
