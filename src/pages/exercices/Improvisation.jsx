import { useEffect, useRef, useState } from "react";
import { sujetAleatoire } from "../../data/improvisation";
import { enregistrerExercice } from "../../utils/progression";

const DUREES = [60, 120];

function Improvisation() {
  const [{ sujet, index }, setTirage] = useState(() => sujetAleatoire(-1));
  const [duree, setDuree] = useState(60);
  const [restant, setRestant] = useState(60);
  const [enMarche, setEnMarche] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!enMarche) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setRestant((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          setEnMarche(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [enMarche]);

  function nouveauSujet() {
    setTirage(sujetAleatoire(index));
    setRestant(duree);
    setEnMarche(false);
  }

  function changerDuree(d) {
    setDuree(d);
    setRestant(d);
    setEnMarche(false);
  }

  function terminer() {
    setEnMarche(false);
    enregistrerExercice("improvisation");
  }

  const urgence = enMarche && restant <= 10;

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Exercices</p>
        <h1>Improvisation</h1>
        <p>Tire un sujet, laisse quelques secondes pour réfléchir à un plan très court, puis parle sans t'arrêter jusqu'à la fin du chrono.</p>
      </header>

      <div className={`jeu-barre${urgence ? " jeu-barre--urgence" : ""}`}>
        <span className="jeu-chrono">{restant}s</span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {DUREES.map((d) => (
            <button
              key={d}
              className={`glossary-chip${duree === d ? " glossary-chip--active" : ""}`}
              style={{ background: duree === d ? undefined : "transparent", color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              onClick={() => changerDuree(d)}
            >
              {d}s
            </button>
          ))}
        </div>
      </div>

      <div className="sprint-question" style={{ textAlign: "center" }}>
        <h2>{sujet}</h2>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
          <button className="home-button home-button--primary" onClick={() => setEnMarche((v) => !v)} disabled={restant === 0}>
            {enMarche ? "Mettre en pause" : "Démarrer"}
          </button>
          <button className="home-button home-button--secondary" onClick={nouveauSujet}>
            Nouveau sujet
          </button>
        </div>

        {restant === 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 700, color: "#122044" }}>Temps écoulé !</p>
            <button className="jour-carte__bouton" onClick={terminer}>
              Marquer cette improvisation comme terminée
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Improvisation;
