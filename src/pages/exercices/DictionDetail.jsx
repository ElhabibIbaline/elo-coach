import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lectureParId, compterMots } from "../../data/lectures";
import { enregistrerExercice } from "../../utils/progression";

function DictionDetail() {
  const { id } = useParams();
  const lecture = lectureParId(id);
  const [enMarche, setEnMarche] = useState(false);
  const [tempsEcoule, setTempsEcoule] = useState(0);
  const [resultat, setResultat] = useState(null);
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

  if (!lecture) {
    return (
      <div className="learning-page">
        <p>Texte introuvable.</p>
        <Link className="back-link" to="/exercices/diction">← Retour à la diction</Link>
      </div>
    );
  }

  const nombreMots = compterMots(lecture.texte);

  function terminerLecture() {
    setEnMarche(false);
    const minutes = tempsEcoule / 60000;
    if (minutes <= 0) return;
    const debit = Math.round(nombreMots / minutes);
    let appreciation = "Bon rythme, proche de la cible.";
    if (debit > lecture.debitCible * 1.15) appreciation = "Un peu rapide : ralentis et marque des pauses entre les phrases.";
    if (debit < lecture.debitCible * 0.85) appreciation = "Un peu lent : essaie de gagner en fluidité sans te presser.";
    setResultat({ debit, appreciation });
    enregistrerExercice("lecture");
  }

  function recommencer() {
    setEnMarche(false);
    setTempsEcoule(0);
    setResultat(null);
  }

  return (
    <div className="learning-page">
      <Link className="back-link" to="/exercices/diction">← Retour à la diction</Link>

      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">{lecture.source} · débit cible ≈ {lecture.debitCible} mots/min</p>
        <h1>{lecture.titre}</h1>
      </header>

      <div className="lesson-section">
        <p style={{ fontSize: "1.15rem", lineHeight: 1.9 }}>{lecture.texte}</p>
      </div>

      <div className="sprint-question" style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <div className="jeu-chrono" style={{ fontSize: "2rem" }}>{(tempsEcoule / 1000).toFixed(1)} s</div>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
          {!resultat && (
            <>
              <button className="home-button home-button--primary" onClick={() => setEnMarche((v) => !v)}>
                {enMarche ? "Mettre en pause" : "Démarrer la lecture"}
              </button>
              <button className="home-button home-button--secondary" onClick={terminerLecture}>
                J'ai terminé
              </button>
            </>
          )}
          {resultat && (
            <button className="home-button home-button--secondary" onClick={recommencer}>
              Recommencer
            </button>
          )}
        </div>

        {resultat && (
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#122044" }}>{resultat.debit} mots/minute</p>
            <p style={{ color: "#69758b" }}>{resultat.appreciation}</p>
            <p style={{ color: "#087c65", fontWeight: 700 }}>✓ Ajouté à ta progression</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DictionDetail;
