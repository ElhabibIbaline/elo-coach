import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        <Link to="/" style={{ color: "white" }}>Accueil</Link>
        <Link to="/parcours" style={{ color: "white" }}>Parcours</Link>
        <Link to="/exercices" style={{ color: "white" }}>Exercices</Link>
        <Link to="/enregistrement" style={{ color: "white" }}>Enregistrement</Link>
        <Link to="/progression" style={{ color: "white" }}>Progression</Link>
      </div>
      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", opacity: 0.8 }}>
        Éloquence — coach personnel d'articulation et de prise de parole, usage personnel
      </p>
    </footer>
  );
}

export default Footer;
