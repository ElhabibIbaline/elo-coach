// Exercices d'intonation et de projection : sans analyse audio automatique,
// mais avec des consignes précises pour travailler seul devant un miroir ou en s'enregistrant.
export const VOIX = [
  {
    id: "meme-phrase-emotions",
    titre: "Une phrase, plusieurs émotions",
    duree: "3 min",
    description: "Travaille l'expressivité : le sens d'une phrase change complètement selon l'intonation.",
    phrase: "Je crois que c'est une très bonne idée.",
    consigne: "Dis cette phrase successivement : comme si tu étais enthousiaste, puis sceptique, puis en colère, puis épuisé. Exagère volontairement chaque émotion.",
  },
  {
    id: "echelle-hauteur",
    titre: "Échelle de hauteur",
    duree: "2 min",
    description: "Étend la palette de hauteurs que tu utilises naturellement, pour éviter une voix monotone.",
    phrase: "Bonjour, comment allez-vous aujourd'hui ?",
    consigne: "Dis cette phrase 5 fois de suite, en montant à chaque fois un peu plus haut dans les aigus, puis 5 fois en descendant vers le grave.",
  },
  {
    id: "emphase-mot-cle",
    titre: "Mettre l'emphase sur le mot clé",
    duree: "2 min",
    description: "Une bonne intonation guide l'auditeur vers l'information importante de la phrase.",
    phrase: "Ce projet doit être terminé avant vendredi.",
    consigne: "Dis la phrase quatre fois, en appuyant à chaque fois sur un mot différent (\"CE\" projet, \"terminé\", \"avant\", \"VENDREDI\") et remarque comme le sens change.",
  },
  {
    id: "projection",
    titre: "Projection sans forcer",
    duree: "2 min",
    description: "Porter sa voix loin sans crier : c'est une question de souffle et d'appui, pas de force dans la gorge.",
    phrase: "Est-ce que vous m'entendez bien au fond de la salle ?",
    consigne: "Imagine une personne à 10 mètres de toi. Dis la phrase en visant cette personne, en t'appuyant sur ta respiration abdominale, sans forcer sur la gorge.",
  },
  {
    id: "pauses-strategiques",
    titre: "Pauses stratégiques",
    duree: "2 min",
    description: "Le silence bien placé capte l'attention et donne du poids à ce qui suit.",
    phrase: "Nous avons trois options... et une seule est vraiment raisonnable.",
    consigne: "Marque une vraie pause silencieuse d'une seconde à l'endroit des points de suspension, sans meubler avec des \"euh\". Répète jusqu'à ce que la pause te semble naturelle.",
  },
];

export function voixParId(id) {
  return VOIX.find((v) => v.id === id);
}
