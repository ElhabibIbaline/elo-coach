import { Link } from "react-router-dom";

const CATEGORIES = [
  { to: "/exercices/respiration", titre: "Respiration & posture", description: "Respiration abdominale, ancrage, cohérence cardiaque : la base de toute voix posée." },
  { to: "/exercices/echauffement", titre: "Échauffement vocal", description: "Détendre mâchoire et lèvres, faire vibrer les résonateurs avant de parler." },
  { to: "/exercices/articulation", titre: "Articulation", description: "Une vingtaine de virelangues classés par difficulté pour muscler consonnes et voyelles." },
  { to: "/exercices/diction", titre: "Diction & débit", description: "Lectures chronométrées pour maîtriser ton rythme et tes pauses." },
  { to: "/exercices/voix", titre: "Voix & intonation", description: "Hauteur, emphase, projection : sortir d'une voix plate." },
  { to: "/exercices/structuration", titre: "Structurer son discours", description: "Méthode PREP, plan en trois parties, pitch de 60 secondes." },
  { to: "/exercices/improvisation", titre: "Improvisation", description: "Parler sans préparation sur un sujet tiré au hasard, contre un chrono." },
  { to: "/enregistrement", titre: "S'enregistrer", description: "S'écouter parler pour s'auto-évaluer, sur un texte ou en improvisation." },
];

function Exercices() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Bibliothèque d'exercices</p>
        <h1>Tous les exercices, par catégorie</h1>
        <p>Pratique librement une catégorie, ou suis l'ordre proposé dans le parcours en 8 semaines.</p>
      </header>

      <div className="hub-grid">
        {CATEGORIES.map((categorie) => (
          <Link key={categorie.to} className="hub-card" to={categorie.to}>
            <div>
              <strong>{categorie.titre}</strong>
              <p>{categorie.description}</p>
            </div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Exercices;
