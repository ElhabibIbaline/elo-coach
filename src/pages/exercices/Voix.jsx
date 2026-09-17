import { useState } from "react";
import { VOIX } from "../../data/voix";
import { enregistrerExercice } from "../../utils/progression";

function Voix() {
  const [faits, setFaits] = useState([]);

  function marquerFait(id) {
    enregistrerExercice("voix");
    setFaits((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Exercices</p>
        <h1>Voix & intonation</h1>
        <p>Sans analyse automatique, mais avec des consignes précises à suivre devant un miroir ou en t'enregistrant.</p>
      </header>

      <div className="astuce-list">
        {VOIX.map((exercice) => {
          const fait = faits.includes(exercice.id);
          return (
            <details key={exercice.id} className="astuce-card">
              <summary>
                <strong>{exercice.titre}</strong>
                <small>{exercice.duree}{fait ? " · ✓ fait aujourd'hui" : ""}</small>
              </summary>
              <div className="astuce-card__body">
                <p>{exercice.description}</p>
                <div className="example-box">
                  <p style={{ fontStyle: "italic", fontWeight: 600 }}>« {exercice.phrase} »</p>
                </div>
                <p>{exercice.consigne}</p>
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

export default Voix;
