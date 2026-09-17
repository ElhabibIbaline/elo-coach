import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { virelangueParId } from "../../data/virelangues";
import { enregistrerExercice } from "../../utils/progression";

function formaterTemps(ms) {
  const totalSecondes = ms / 1000;
  const minutes = Math.floor(totalSecondes / 60);
  const secondes = (totalSecondes % 60).toFixed(1);
  return `${String(minutes).padStart(2, "0")}:${secondes.padStart(4, "0")}`;
}

function ArticulationDetail() {
  const { id } = useParams();
  const virelangue = virelangueParId(id);
  const [enMarche, setEnMarche] = useState(false);
  const [tempsEcoule, setTempsEcoule] = useState(0);
  const [repetitions, setRepetitions] = useState(0);
  const [maitrise, setMaitrise] = useState(false);
  const debutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (enMarche) {
      debutRef.current = Date.now() - tempsEcoule;
      intervalRef.current = setInterval(() => {
        setTempsEcoule(Date.now() - debutRef.current);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enMarche]);

  if (!virelangue) {
    return (
      <div className="learning-page">
        <p>Virelangue introuvable.</p>
        <Link className="back-link" to="/exercices/articulation">← Retour à l'articulation</Link>
      </div>
    );
  }

  function reinitialiser() {
    setEnMarche(false);
    setTempsEcoule(0);
    setRepetitions(0);
  }

  function marquerMaitrise() {
    enregistrerExercice("virelangue");
    setMaitrise(true);
  }

  return (
    <div className="learning-page">
      <Link className="back-link" to="/exercices/articulation">← Retour à l'articulation</Link>

      <div className="sprint-question" style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <span className={`glossary-card__tag`} style={{ background: "#f1e9ff", color: "#6d3fc0" }}>
          {virelangue.difficulte} · cible : {virelangue.cible}
        </span>
        <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.1rem)", lineHeight: 1.4 }}>{virelangue.texte}</h2>

        <div className="jeu-chrono" style={{ fontSize: "2rem", margin: "1.5rem 0 0.5rem" }}>{formaterTemps(tempsEcoule)}</div>
        <p style={{ color: "#69758b", marginTop: 0 }}>{repetitions} répétition{repetitions !== 1 ? "s" : ""} réussie{repetitions !== 1 ? "s" : ""}</p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
          <button className="home-button home-button--primary" onClick={() => setEnMarche((v) => !v)}>
            {enMarche ? "Mettre en pause" : "Démarrer le chrono"}
          </button>
          <button className="home-button home-button--secondary" onClick={() => setRepetitions((r) => r + 1)}>
            + Répétition réussie
          </button>
          <button className="home-button home-button--secondary" onClick={reinitialiser}>
            Réinitialiser
          </button>
        </div>

        <div style={{ marginTop: "2rem" }}>
          {maitrise ? (
            <p style={{ color: "#087c65", fontWeight: 700 }}>✓ Ajouté à ta progression</p>
          ) : (
            <button className="jour-carte__bouton" onClick={marquerMaitrise}>
              Marquer ce virelangue comme réussi
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticulationDetail;
