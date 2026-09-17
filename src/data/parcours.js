// Parcours structuré en 8 semaines, du plus fondamental (respiration) au plus avancé
// (improvisation face au trac). Chaque semaine a 5 séances quotidiennes de 10-15 min
// qui pointent vers des exercices précis des autres bibliothèques de données.
export const PARCOURS = [
  {
    id: "semaine-1",
    numero: 1,
    titre: "Respiration & posture",
    objectif: "Poser les bases : une respiration abdominale stable et un ancrage postural qui soutiennent toute prise de parole.",
    jours: [
      { id: "s1-j1", titre: "Découvrir la respiration abdominale", taches: [{ type: "respiration", id: "abdominale", label: "Respiration abdominale" }, { type: "respiration", id: "ancrage", label: "Ancrage postural" }] },
      { id: "s1-j2", titre: "Calmer le stress par le souffle", taches: [{ type: "respiration", id: "quatre-sept-huit", label: "Respiration 4-7-8" }] },
      { id: "s1-j3", titre: "Ouvrir la cage thoracique", taches: [{ type: "respiration", id: "costale", label: "Respiration costale" }] },
      { id: "s1-j4", titre: "Stabiliser avant de parler", taches: [{ type: "respiration", id: "ancrage", label: "Ancrage postural" }, { type: "respiration", id: "coherence-cardiaque", label: "Cohérence cardiaque express" }] },
      { id: "s1-j5", titre: "Révision libre", taches: [{ type: "respiration", id: "abdominale", label: "Respiration abdominale" }, { type: "respiration", id: "costale", label: "Respiration costale" }] },
    ],
  },
  {
    id: "semaine-2",
    numero: 2,
    titre: "Échauffement vocal & résonance",
    objectif: "Détendre mâchoire, lèvres et gorge pour libérer la voix avant d'articuler, comme un sportif s'échauffe avant l'effort.",
    jours: [
      { id: "s2-j1", titre: "Détendre la mâchoire", taches: [{ type: "echauffement", id: "baillement", label: "Bâillement contrôlé" }, { type: "echauffement", id: "machoire", label: "Détente de la mâchoire" }] },
      { id: "s2-j2", titre: "Faire vibrer les résonateurs", taches: [{ type: "echauffement", id: "humming", label: "Humming (bourdonnement)" }] },
      { id: "s2-j3", titre: "Assouplir toute la voix", taches: [{ type: "echauffement", id: "sirenes", label: "Sirènes vocales" }] },
      { id: "s2-j4", titre: "Relâcher les lèvres", taches: [{ type: "echauffement", id: "levres", label: "Résonance labiale" }] },
      { id: "s2-j5", titre: "Enchaîner tout l'échauffement", taches: [{ type: "echauffement", id: "baillement", label: "Bâillement contrôlé" }, { type: "echauffement", id: "humming", label: "Humming" }, { type: "echauffement", id: "sirenes", label: "Sirènes vocales" }] },
    ],
  },
  {
    id: "semaine-3",
    numero: 3,
    titre: "Articulation I — les bases",
    objectif: "Reprendre le contrôle des consonnes et voyelles avec des virelangues simples, lentement puis de plus en plus vite.",
    jours: [
      { id: "s3-j1", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "chasseur", label: "Un chasseur sachant chasser..." }] },
      { id: "s3-j2", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "poisson", label: "Poisson sans boisson..." }] },
      { id: "s3-j3", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "douches", label: "Douze douches douces" }] },
      { id: "s3-j4", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "tonton", label: "Tonton, ton thé..." }] },
      { id: "s3-j5", titre: "Révision de la semaine", taches: [{ type: "virelangue", id: "piano", label: "Piano, panier, pyjama" }] },
    ],
  },
  {
    id: "semaine-4",
    numero: 4,
    titre: "Articulation II — passer la vitesse supérieure",
    objectif: "Attaquer des virelangues plus exigeants. Astuce : un bouchon en liège ou un crayon tenu entre les dents force à exagérer l'articulation.",
    jours: [
      { id: "s4-j1", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "cerises", label: "Ces cerises sont si sûres..." }] },
      { id: "s4-j2", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "tortues", label: "Trois tortues trottaient..." }] },
      { id: "s4-j3", titre: "Virelangue du jour (technique du crayon)", taches: [{ type: "virelangue", id: "dragon", label: "Un dragon gradé dégrade..." }] },
      { id: "s4-j4", titre: "Virelangue du jour", taches: [{ type: "virelangue", id: "archiduchesse", label: "Les chaussettes de l'archiduchesse" }] },
      { id: "s4-j5", titre: "Le grand défi", taches: [{ type: "virelangue", id: "scies-cypres", label: "Si six scies scient six cyprès..." }] },
    ],
  },
  {
    id: "semaine-5",
    numero: 5,
    titre: "Débit & pauses",
    objectif: "Lire à voix haute à un rythme maîtrisé et utiliser le silence, plutôt que de parler trop vite par nervosité.",
    jours: [
      { id: "s5-j1", titre: "Lecture chronométrée", taches: [{ type: "lecture", id: "corbeau-renard", label: "Le Corbeau et le Renard" }] },
      { id: "s5-j2", titre: "Lecture chronométrée", taches: [{ type: "lecture", id: "cigale-fourmi", label: "La Cigale et la Fourmi" }] },
      { id: "s5-j3", titre: "Lecture chronométrée", taches: [{ type: "lecture", id: "lievre-tortue", label: "Le Lièvre et la Tortue" }] },
      { id: "s5-j4", titre: "S'entraîner à se présenter", taches: [{ type: "lecture", id: "presentation", label: "Se présenter clairement" }] },
      { id: "s5-j5", titre: "S'entraîner à une annonce", taches: [{ type: "lecture", id: "annonce-neutre", label: "Annonce neutre" }] },
    ],
  },
  {
    id: "semaine-6",
    numero: 6,
    titre: "Intonation & expressivité",
    objectif: "Sortir d'une voix plate : faire varier hauteur, emphase et projection pour rendre le discours vivant.",
    jours: [
      { id: "s6-j1", titre: "Une phrase, plusieurs émotions", taches: [{ type: "voix", id: "meme-phrase-emotions", label: "Une phrase, plusieurs émotions" }] },
      { id: "s6-j2", titre: "Étendre sa palette", taches: [{ type: "voix", id: "echelle-hauteur", label: "Échelle de hauteur" }] },
      { id: "s6-j3", titre: "Guider l'écoute", taches: [{ type: "voix", id: "emphase-mot-cle", label: "Mettre l'emphase sur le mot clé" }] },
      { id: "s6-j4", titre: "Porter sa voix", taches: [{ type: "voix", id: "projection", label: "Projection sans forcer" }] },
      { id: "s6-j5", titre: "Utiliser le silence", taches: [{ type: "voix", id: "pauses-strategiques", label: "Pauses stratégiques" }] },
    ],
  },
  {
    id: "semaine-7",
    numero: 7,
    titre: "Structurer son discours",
    objectif: "Un message clair repose sur un plan simple. Apprendre la méthode PREP et le pitch de 60 secondes.",
    jours: [
      { id: "s7-j1", titre: "Découvrir la méthode PREP", taches: [{ type: "structuration", id: "prep", label: "Méthode PREP" }] },
      { id: "s7-j2", titre: "Le plan en trois parties", taches: [{ type: "structuration", id: "plan-trois-parties", label: "Plan en trois parties" }] },
      { id: "s7-j3", titre: "Préparer son pitch", taches: [{ type: "structuration", id: "pitch-60", label: "Pitch de 60 secondes" }] },
      { id: "s7-j4", titre: "S'enregistrer en présentant son pitch", taches: [{ type: "enregistrement", id: "pitch", label: "Enregistrer son pitch de 60 secondes" }] },
      { id: "s7-j5", titre: "Révision de la méthode", taches: [{ type: "structuration", id: "prep", label: "Relire la méthode PREP" }] },
    ],
  },
  {
    id: "semaine-8",
    numero: 8,
    titre: "Improvisation & gestion du trac",
    objectif: "Apprendre à parler sans filet sur un sujet imposé, et calmer le trac juste avant de prendre la parole.",
    jours: [
      { id: "s8-j1", titre: "Première improvisation", taches: [{ type: "improvisation", id: "libre", label: "Un sujet, une minute" }] },
      { id: "s8-j2", titre: "Deux sujets d'affilée", taches: [{ type: "improvisation", id: "libre", label: "Deux sujets, une minute chacun" }] },
      { id: "s8-j3", titre: "S'enregistrer en improvisant", taches: [{ type: "improvisation", id: "libre", label: "Improviser" }, { type: "enregistrement", id: "improvisation", label: "S'enregistrer en improvisant" }] },
      { id: "s8-j4", titre: "Calmer le trac avant de parler", taches: [{ type: "respiration", id: "coherence-cardiaque", label: "Cohérence cardiaque" }, { type: "improvisation", id: "libre", label: "Improviser juste après" }] },
      { id: "s8-j5", titre: "Présentation finale", taches: [{ type: "enregistrement", id: "finale", label: "Présentation finale de 2 minutes" }] },
    ],
  },
];

export function semaineParId(id) {
  return PARCOURS.find((s) => s.id === id);
}

export function semaineParNumero(numero) {
  return PARCOURS.find((s) => s.numero === numero);
}

export function tousLesJours() {
  return PARCOURS.flatMap((semaine) => semaine.jours.map((jour) => ({ ...jour, semaineId: semaine.id })));
}

export function prochaineSeance(seancesTerminees) {
  const jours = tousLesJours();
  return jours.find((jour) => !seancesTerminees.includes(jour.id)) ?? null;
}
