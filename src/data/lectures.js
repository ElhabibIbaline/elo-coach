// Textes courts à lire à voix haute pour travailler le débit et les pauses.
// Extraits courts de fables de La Fontaine (domaine public) + textes neutres originaux.
export const LECTURES = [
  {
    id: "corbeau-renard",
    titre: "Le Corbeau et le Renard (extrait)",
    source: "Jean de La Fontaine",
    debitCible: 130,
    texte:
      "Maître Corbeau, sur un arbre perché, tenait en son bec un fromage. Maître Renard, par l'odeur alléché, lui tint à peu près ce langage : Et bonjour, Monsieur du Corbeau, que vous êtes joli, que vous me semblez beau !",
  },
  {
    id: "cigale-fourmi",
    titre: "La Cigale et la Fourmi (extrait)",
    source: "Jean de La Fontaine",
    debitCible: 130,
    texte:
      "La Cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine, la priant de lui prêter quelque grain pour subsister jusqu'à la saison nouvelle.",
  },
  {
    id: "lievre-tortue",
    titre: "Le Lièvre et la Tortue (extrait)",
    source: "Jean de La Fontaine",
    debitCible: 130,
    texte:
      "Rien ne sert de courir ; il faut partir à point. Le Lièvre et la Tortue en sont un témoignage. Gagerais-tu, dit celle-ci, que tu n'atteindras pas sitôt que moi ce but ? Sitôt, es-tu sage ? repartit l'animal léger, ma commère, il vous faut purger avec quatre grains d'ellébore.",
  },
  {
    id: "presentation",
    titre: "Se présenter clairement",
    source: "Texte d'entraînement",
    debitCible: 120,
    texte:
      "Bonjour, je m'appelle... et je suis heureux de vous présenter aujourd'hui un projet qui me tient particulièrement à cœur. Je vais commencer par vous expliquer le contexte, puis je détaillerai les trois grandes étapes de ce travail, avant de conclure sur les résultats obtenus.",
  },
  {
    id: "annonce-neutre",
    titre: "Annonce neutre",
    source: "Texte d'entraînement",
    debitCible: 120,
    texte:
      "Mesdames et messieurs, votre attention s'il vous plaît. La réunion débutera dans quelques instants dans la salle principale. Nous vous remercions de bien vouloir prendre place et d'éteindre vos téléphones portables pendant toute la durée de la présentation.",
  },
  {
    id: "argumentaire",
    titre: "Court argumentaire",
    source: "Texte d'entraînement",
    debitCible: 115,
    texte:
      "Je pense que cette solution est la meilleure, pour trois raisons précises. D'abord, elle coûte moins cher à mettre en place. Ensuite, elle est plus simple à comprendre pour tout le monde. Enfin, elle peut être déployée rapidement, dès la semaine prochaine.",
  },
];

export function lectureParId(id) {
  return LECTURES.find((l) => l.id === id);
}

export function compterMots(texte) {
  return texte.trim().split(/\s+/).filter(Boolean).length;
}
