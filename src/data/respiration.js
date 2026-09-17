// Exercices de respiration : base de tout travail vocal. Une respiration abdominale
// (par le diaphragme plutôt que par les épaules) donne plus d'air, plus de contrôle
// du débit, et une voix plus stable quand on parle en public.
export const RESPIRATION = [
  {
    id: "abdominale",
    titre: "Respiration abdominale",
    duree: "3 min",
    description:
      "La base : apprendre à respirer avec le ventre plutôt qu'avec les épaules pour avoir plus de souffle et une voix plus stable.",
    etapes: [
      "Assieds-toi ou tiens-toi debout, dos droit, épaules relâchées.",
      "Pose une main sur le ventre, une main sur la poitrine.",
      "Inspire lentement par le nez : seule la main sur le ventre doit se soulever, pas celle sur la poitrine.",
      "Expire lentement par la bouche en rentrant légèrement le ventre.",
      "Répète 10 respirations lentes en te concentrant uniquement sur le mouvement du ventre.",
    ],
  },
  {
    id: "quatre-sept-huit",
    titre: "Respiration 4-7-8",
    duree: "2 min",
    description: "Une technique de contrôle du souffle très utilisée pour calmer le stress avant une prise de parole.",
    etapes: [
      "Inspire par le nez en comptant mentalement jusqu'à 4.",
      "Bloque ta respiration en comptant jusqu'à 7.",
      "Expire lentement par la bouche en comptant jusqu'à 8.",
      "Répète le cycle 4 fois.",
    ],
  },
  {
    id: "costale",
    titre: "Respiration costale",
    duree: "3 min",
    description: "Travaille l'ouverture des côtes pour augmenter ta capacité pulmonaire disponible pour parler.",
    etapes: [
      "Place tes mains sur les côtés des côtes, coudes légèrement écartés.",
      "Inspire en sentant les côtes s'écarter sous tes mains, sans lever les épaules.",
      "Expire en laissant les côtes revenir doucement, en gardant le buste ouvert.",
      "Répète 8 fois, lentement.",
    ],
  },
  {
    id: "ancrage",
    titre: "Ancrage postural",
    duree: "2 min",
    description: "Une posture stable et ancrée au sol donne une voix plus posée et plus assurée — le trac se loge souvent dans des jambes tendues.",
    etapes: [
      "Debout, pieds écartés à la largeur du bassin, poids réparti sur les deux pieds.",
      "Relâche les genoux (ne les verrouille pas), laisse les épaules descendre.",
      "Imagine des racines qui partent de tes pieds vers le sol.",
      "Respire 5 fois calmement dans cette posture avant de commencer à parler.",
    ],
  },
  {
    id: "coherence-cardiaque",
    titre: "Cohérence cardiaque express",
    duree: "3 min",
    description: "Utile juste avant une prise de parole stressante : régule le rythme cardiaque et calme la voix.",
    etapes: [
      "Inspire par le nez pendant 5 secondes.",
      "Expire par la bouche pendant 5 secondes.",
      "Continue ce rythme régulier pendant 3 minutes (environ 18 respirations).",
    ],
  },
];

export function respirationParId(id) {
  return RESPIRATION.find((r) => r.id === id);
}
