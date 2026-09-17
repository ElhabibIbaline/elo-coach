// Échauffements vocaux : à faire avant tout exercice d'articulation ou de lecture,
// comme un sportif s'échauffe avant l'effort. Ils détendent la mâchoire, les lèvres
// et la gorge pour une voix plus libre et moins fatiguée.
export const ECHAUFFEMENT = [
  {
    id: "baillement",
    titre: "Bâillement contrôlé",
    duree: "1 min",
    description: "Détend la mâchoire et ouvre le pharynx, ce qui donne plus d'espace de résonance à la voix.",
    etapes: [
      "Provoque un bâillement volontaire, bouche grande ouverte.",
      "Laisse le son sortir librement pendant le bâillement.",
      "Répète 4 à 5 fois en relâchant un peu plus la mâchoire à chaque fois.",
    ],
  },
  {
    id: "humming",
    titre: "Humming (bourdonnement)",
    duree: "2 min",
    description: "Fait vibrer les résonateurs du visage et échauffe les cordes vocales en douceur, sans forcer.",
    etapes: [
      "Bouche fermée, fais un son \"mmm\" continu et grave.",
      "Sens la vibration sur les lèvres et le nez.",
      "Fais varier doucement la hauteur du son, du grave à l'aigu puis retour.",
      "Continue 1 à 2 minutes sans forcer sur le volume.",
    ],
  },
  {
    id: "sirenes",
    titre: "Sirènes vocales",
    duree: "1 min",
    description: "Assouplit la voix sur toute son étendue, utile pour éviter une voix monotone à l'oral.",
    etapes: [
      "Sur un son \"ou\" ou \"a\", monte du grave vers l'aigu comme une sirène.",
      "Redescends ensuite vers le grave, toujours de façon fluide.",
      "Répète 5 fois en gardant le son continu, sans à-coups.",
    ],
  },
  {
    id: "levres",
    titre: "Résonance labiale (lèvres qui vibrent)",
    duree: "1 min",
    description: "Le classique \"bruit de moteur\" des acteurs : détend les lèvres et régule le flux d'air.",
    etapes: [
      "Laisse tes lèvres vibrer librement en soufflant (comme un cheval qui s'ébroue).",
      "Ajoute un peu de voix pendant que les lèvres vibrent.",
      "Fais varier la hauteur pendant que ça vibre, comme une sirène.",
      "Continue 30 à 60 secondes.",
    ],
  },
  {
    id: "machoire",
    titre: "Détente de la mâchoire",
    duree: "1 min",
    description: "Une mâchoire crispée limite l'ouverture de la bouche et donc la clarté de l'articulation.",
    etapes: [
      "Masse doucement les articulations de la mâchoire, juste devant les oreilles.",
      "Ouvre et ferme la bouche lentement 5 fois en grand.",
      "Fais de petits cercles avec la mâchoire, dans un sens puis dans l'autre.",
    ],
  },
];

export function echauffementParId(id) {
  return ECHAUFFEMENT.find((e) => e.id === id);
}
