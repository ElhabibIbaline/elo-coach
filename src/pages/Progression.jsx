import { useState } from "react";
import { Link } from "react-router-dom";
import { BADGES, calculerSerie, chargerProgression, totalExercices } from "../utils/progression";

function Progression() {
  const [etat, setEtat] = useState(chargerProgression);
  const serie = calculerSerie(etat);

  function reinitialiser() {
    if (!window.confirm("Réinitialiser toute ta progression (séries, badges, statistiques) ? Cette action est irréversible.")) {
      return;
    }
    try {
      localStorage.removeItem("eloquence-progression-v1");
    } catch {
      // stockage indisponible, rien à effacer
    }
    setEtat(chargerProgression());
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Ta progression</p>
        <h1>Séries et badges</h1>
        <p>Chaque exercice ou séance du parcours fait avancer ta série et débloque des badges. Reviens régulièrement pour ne pas la casser.</p>
      </header>

      <div className="streak-banner">
        <span className="streak-banner__flame" aria-hidden="true">🔥</span>
        <div>
          <strong>{serie}</strong>
          <span>{serie > 1 ? "jours consécutifs" : "jour actif"}</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-tile"><dt>{totalExercices(etat)}</dt><dd>exercices au total</dd></div>
        <div className="stat-tile"><dt>{etat.respirationsFaites}</dt><dd>respirations faites</dd></div>
        <div className="stat-tile"><dt>{etat.echauffementsFaits}</dt><dd>échauffements faits</dd></div>
        <div className="stat-tile"><dt>{etat.virelanguesReussis}</dt><dd>virelangues réussis</dd></div>
        <div className="stat-tile"><dt>{etat.lecturesChronometrees}</dt><dd>lectures chronométrées</dd></div>
        <div className="stat-tile"><dt>{etat.voixFaits}</dt><dd>exercices de voix</dd></div>
        <div className="stat-tile"><dt>{etat.improvisationsFaites}</dt><dd>improvisations</dd></div>
        <div className="stat-tile"><dt>{etat.enregistrementsRealises}</dt><dd>enregistrements</dd></div>
        <div className="stat-tile"><dt>{etat.semainesTerminees.length} / 8</dt><dd>semaines terminées</dd></div>
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>Badges ({BADGES.filter((b) => b.condition(etat)).length} / {BADGES.length})</h2>
      <div className="badge-grid">
        {BADGES.map((badge) => {
          const debloque = badge.condition(etat);
          return (
            <div key={badge.id} className={`badge-card${debloque ? "" : " badge-card--verrouille"}`}>
              <span className="badge-card__icon" aria-hidden="true">{debloque ? "🏆" : "🔒"}</span>
              <strong>{badge.titre}</strong>
              <p>{badge.description}</p>
            </div>
          );
        })}
      </div>

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Continuer la série</p>
          <h2>Fais un exercice ou avance dans le parcours aujourd'hui.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--primary" to="/parcours">Voir le parcours</Link>
          <Link className="home-button home-button--light" to="/exercices">Faire un exercice</Link>
        </div>
      </section>

      <button className="progression-reset" onClick={reinitialiser}>Réinitialiser ma progression</button>
    </div>
  );
}

export default Progression;
