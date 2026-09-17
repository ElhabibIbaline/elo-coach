import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { semaineParId } from "../data/parcours";
import {
  chargerProgression,
  enregistrerExercice,
  enregistrerSeanceParcours,
  enregistrerSemaineTerminee,
} from "../utils/progression";

function lienTache(tache) {
  switch (tache.type) {
    case "respiration":
      return "/exercices/respiration";
    case "echauffement":
      return "/exercices/echauffement";
    case "virelangue":
      return `/exercices/articulation/${tache.id}`;
    case "lecture":
      return `/exercices/diction/${tache.id}`;
    case "voix":
      return "/exercices/voix";
    case "structuration":
      return `/exercices/structuration#${tache.id}`;
    case "improvisation":
      return "/exercices/improvisation";
    case "enregistrement":
      return "/enregistrement";
    default:
      return "/exercices";
  }
}

function ParcoursSemaine() {
  const { semaineId } = useParams();
  const semaine = semaineParId(semaineId);
  const [etat, setEtat] = useState(chargerProgression);

  if (!semaine) {
    return (
      <div className="learning-page">
        <p>Semaine introuvable.</p>
        <Link className="back-link" to="/parcours">← Retour au parcours</Link>
      </div>
    );
  }

  function marquerJourTermine(jour) {
    let nouvelEtat = enregistrerSeanceParcours(jour.id);
    const typesUniques = [...new Set(jour.taches.map((t) => t.type))];
    typesUniques.forEach((type) => {
      nouvelEtat = enregistrerExercice(type);
    });
    const tousLesJoursFaits = semaine.jours.every((j) => nouvelEtat.seancesParcoursTerminees.includes(j.id));
    if (tousLesJoursFaits) {
      nouvelEtat = enregistrerSemaineTerminee(semaine.id);
    }
    setEtat(nouvelEtat);
  }

  return (
    <div className="learning-page">
      <Link className="back-link" to="/parcours">← Retour au parcours</Link>
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Semaine {semaine.numero}</p>
        <h1>{semaine.titre}</h1>
        <p>{semaine.objectif}</p>
      </header>

      <ol className="jour-liste">
        {semaine.jours.map((jour, index) => {
          const termine = etat.seancesParcoursTerminees.includes(jour.id);
          return (
            <li key={jour.id} className={`jour-carte${termine ? " jour-carte--terminee" : ""}`}>
              <div className="jour-carte__entete">
                <span className="jour-carte__numero">Jour {index + 1}</span>
                {termine && <span className="jour-carte__statut">✓ fait</span>}
              </div>
              <h2>{jour.titre}</h2>
              <ul className="jour-taches">
                {jour.taches.map((tache) => (
                  <li key={`${tache.type}-${tache.id}`}>
                    <Link to={lienTache(tache)}>{tache.label}</Link>
                  </li>
                ))}
              </ul>
              {!termine && (
                <button className="jour-carte__bouton" onClick={() => marquerJourTermine(jour)}>
                  Marquer cette séance comme terminée
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ParcoursSemaine;
