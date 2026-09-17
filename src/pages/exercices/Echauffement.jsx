import { useState } from "react";
import { ECHAUFFEMENT } from "../../data/echauffement";
import { enregistrerExercice } from "../../utils/progression";

function Echauffement() {
  const [faits, setFaits] = useState([]);

  function marquerFait(id) {
    enregistrerExercice("echauffement");
    setFaits((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Exercices</p>
        <h1>Échauffement vocal</h1>
        <p>À faire avant tout exercice d'articulation ou de lecture, comme un sportif s'échauffe avant l'effort.</p>
      </header>

      <div className="astuce-list">
        {ECHAUFFEMENT.map((exercice) => {
          const fait = faits.includes(exercice.id);
          return (
            <details key={exercice.id} className="astuce-card">
              <summary>
                <strong>{exercice.titre}</strong>
                <small>{exercice.duree}{fait ? " · ✓ fait aujourd'hui" : ""}</small>
              </summary>
              <div className="astuce-card__body">
                <p>{exercice.description}</p>
                <ol className="step-list">
                  {exercice.etapes.map((etape, index) => (
                    <li key={index}><p>{etape}</p></li>
                  ))}
                </ol>
                <button className="jour-carte__bouton" onClick={() => marquerFait(exercice.id)}>
                  {fait ? "Refaire cet exercice" : "Marquer comme fait"}
                </button>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

export default Echauffement;
