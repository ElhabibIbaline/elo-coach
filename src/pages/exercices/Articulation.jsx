import { useState } from "react";
import { Link } from "react-router-dom";
import { VIRELANGUES } from "../../data/virelangues";

const NIVEAUX = ["tous", "facile", "moyen", "difficile"];

function Articulation() {
  const [niveau, setNiveau] = useState("tous");
  const filtres = niveau === "tous" ? VIRELANGUES : VIRELANGUES.filter((v) => v.difficulte === niveau);

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Exercices</p>
        <h1>Articulation</h1>
        <p>
          Répète chaque virelangue lentement en articulant exagérément, puis accélère progressivement
          sans perdre la clarté. Astuce : un bouchon en liège ou un crayon tenu entre les dents force
          à exagérer l'ouverture de la bouche.
        </p>
      </header>

      <div className="glossary-filters" style={{ marginBottom: "1.5rem" }}>
        {NIVEAUX.map((n) => (
          <button
            key={n}
            className={`glossary-chip${niveau === n ? " glossary-chip--active" : ""}`}
            onClick={() => setNiveau(n)}
          >
            {n === "tous" ? "Tous les niveaux" : n.charAt(0).toUpperCase() + n.slice(1)}
          </button>
        ))}
      </div>

      <div className="glossary-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {filtres.map((virelangue) => (
          <Link key={virelangue.id} to={`/exercices/articulation/${virelangue.id}`} className="glossary-card" style={{ display: "block" }}>
            <div style={{ padding: "1.1rem 1.3rem" }}>
              <span className={`glossary-card__tag glossary-card__tag--${virelangue.difficulte}`} style={tagStyle(virelangue.difficulte)}>
                {virelangue.difficulte}
              </span>
              <p style={{ margin: "0.7rem 0 0", color: "#172033", fontWeight: 600 }}>{virelangue.texte}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function tagStyle(difficulte) {
  if (difficulte === "facile") return { background: "#dcf5ed", color: "#087c65" };
  if (difficulte === "moyen") return { background: "#fff7df", color: "#92720a" };
  return { background: "#ffe3e0", color: "#a12e26" };
}

export default Articulation;
