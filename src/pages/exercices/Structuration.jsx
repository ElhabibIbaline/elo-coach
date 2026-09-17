import { Link } from "react-router-dom";
import { STRUCTURATION } from "../../data/structuration";
import { enregistrerExercice } from "../../utils/progression";

function Structuration() {
  function marquerLu() {
    enregistrerExercice("structuration");
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--method">
        <div>
          <p className="home-eyebrow">Exercices</p>
          <h1>Structurer son discours</h1>
          <p>Trois méthodes simples et éprouvées pour organiser ses idées avant de parler, à l'oral comme à l'écrit.</p>
        </div>
      </header>

      <div className="method-layout">
        <nav className="method-toc" aria-label="Sommaire des méthodes">
          <span>Sommaire</span>
          {STRUCTURATION.map((methode) => (
            <a key={methode.id} href={`#${methode.id}`}>{methode.titre}</a>
          ))}
        </nav>

        <article className="method-content">
          {STRUCTURATION.map((methode) => (
            <section key={methode.id} className="lesson-section" id={methode.id}>
              <span className="lesson-number">{String(methode.numero).padStart(2, "0")}</span>
              <h2>{methode.titre}</h2>
              <p>{methode.resume}</p>
              <ol className="step-list">
                {methode.etapes.map((etape, index) => (
                  <li key={index}>
                    <strong>{etape.lettre} — {etape.nom}</strong>
                    <p>{etape.description}</p>
                  </li>
                ))}
              </ol>
              <div className="example-box">
                <span>Exemple</span>
                <p>{methode.exemple}</p>
              </div>
            </section>
          ))}

          <div className="lesson-action">
            <Link className="home-button home-button--primary" to="/enregistrement" onClick={marquerLu}>
              M'entraîner en m'enregistrant
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Structuration;
