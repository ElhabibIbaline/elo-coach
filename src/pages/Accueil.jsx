import { Link } from "react-router-dom";
import { PARCOURS, prochaineSeance, semaineParId } from "../data/parcours";
import { VIRELANGUES } from "../data/virelangues";
import { LECTURES } from "../data/lectures";
import { calculerSerie, chargerProgression } from "../utils/progression";

function Accueil() {
  const etat = chargerProgression();
  const serie = calculerSerie(etat);
  const seance = prochaineSeance(etat.seancesParcoursTerminees);
  const semaine = seance ? semaineParId(seance.semaineId) : null;

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <p className="home-eyebrow">Coach personnel d'éloquence</p>
          <h1 id="home-title">Articule plus clairement, exprime-toi avec plus d'aisance.</h1>
          <p className="home-lead">
            Un parcours en 8 semaines et des exercices concrets — respiration, articulation,
            diction, structuration du discours — pour progresser un peu chaque jour, en français.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button--primary" to="/parcours">
              Voir le parcours <span aria-hidden="true">→</span>
            </Link>
            <Link className="home-button home-button--secondary" to="/exercices">
              Explorer les exercices
            </Link>
          </div>
          <dl className="home-stats" aria-label="Contenu disponible">
            <div><dt>{PARCOURS.length}</dt><dd>semaines de parcours</dd></div>
            <div><dt>{VIRELANGUES.length}</dt><dd>virelangues</dd></div>
            <div><dt>{LECTURES.length}</dt><dd>textes de lecture</dd></div>
            <div><dt>7</dt><dd>catégories d'exercices</dd></div>
          </dl>
        </div>

        <aside className="session-card" aria-labelledby="session-title">
          <div className="session-card__topline">
            <span className="session-card__badge">10-15 min</span>
            <span>Séance du jour</span>
            {serie > 0 && (
              <Link to="/progression" className="session-card__streak">
                🔥 {serie} {serie > 1 ? "jours" : "jour"}
              </Link>
            )}
          </div>
          {seance ? (
            <>
              <h2 id="session-title">{seance.titre}</h2>
              <ol className="session-steps">
                {seance.taches.map((tache, index) => (
                  <li key={`${tache.type}-${tache.id}-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><strong>{tache.label}</strong><small>Semaine {semaine?.numero} — {semaine?.titre}</small></div>
                  </li>
                ))}
              </ol>
              <Link className="session-card__link" to={`/parcours/${seance.semaineId}`}>
                Lancer cette séance <span aria-hidden="true">→</span>
              </Link>
            </>
          ) : (
            <>
              <h2 id="session-title">Parcours terminé !</h2>
              <p>Tu as terminé les huit semaines. Continue à pratiquer librement dans les exercices.</p>
              <Link className="session-card__link" to="/exercices">
                Voir les exercices <span aria-hidden="true">→</span>
              </Link>
            </>
          )}
        </aside>
      </section>

      <section className="home-section" aria-labelledby="resources-title">
        <div className="home-section__heading">
          <div>
            <p className="home-eyebrow">Choisir son entraînement</p>
            <h2 id="resources-title">Que veux-tu travailler aujourd'hui ?</h2>
          </div>
          <p>Alterne respiration, articulation et mise en situation pour progresser régulièrement.</p>
        </div>

        <div className="resource-grid">
          <Link className="resource-card" to="/exercices/respiration">
            <span className="resource-card__number">01</span>
            <div><h3>Respiration & posture</h3><p>La base de toute voix posée : respirer avec le ventre, pas les épaules.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card" to="/exercices/echauffement">
            <span className="resource-card__number">02</span>
            <div><h3>Échauffement vocal</h3><p>Détendre mâchoire et lèvres avant d'articuler.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--course" to="/exercices/articulation">
            <span className="resource-card__number">03</span>
            <div><h3>Articulation</h3><p>{VIRELANGUES.length} virelangues classés par difficulté.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--exam" to="/exercices/diction">
            <span className="resource-card__number">04</span>
            <div><h3>Diction & débit</h3><p>Lectures chronométrées pour maîtriser ton rythme.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card" to="/exercices/voix">
            <span className="resource-card__number">05</span>
            <div><h3>Voix & intonation</h3><p>Sortir d'une voix plate : hauteur, emphase, projection.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--course" to="/exercices/structuration">
            <span className="resource-card__number">06</span>
            <div><h3>Structurer son discours</h3><p>Méthode PREP, plan en trois parties, pitch de 60 secondes.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--exam" to="/exercices/improvisation">
            <span className="resource-card__number">07</span>
            <div><h3>Improvisation</h3><p>Parler sans préparation sur un sujet tiré au hasard.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card" to="/enregistrement">
            <span className="resource-card__number">08</span>
            <div><h3>S'enregistrer</h3><p>S'écouter parler pour progresser par auto-évaluation.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="method-banner" aria-labelledby="method-title">
        <div>
          <p className="home-eyebrow">La bonne méthode</p>
          <h2 id="method-title">Un peu chaque jour vaut mieux que beaucoup une fois.</h2>
          <p>10 à 15 minutes de pratique régulière transforment durablement l'articulation et l'aisance à l'oral.</p>
        </div>
        <Link className="home-button home-button--light" to="/parcours">
          Découvrir le parcours en 8 semaines
        </Link>
      </section>
    </div>
  );
}

export default Accueil;
