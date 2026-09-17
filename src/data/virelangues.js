// Virelangues traditionnels français (domaine public / folklore), classés par difficulté
// pour travailler l'articulation des consonnes et voyelles qui posent le plus de problèmes.
export const VIRELANGUES = [
  { id: "chasseur", texte: "Un chasseur sachant chasser sait chasser sans son chien.", difficulte: "facile", cible: "ch / s" },
  { id: "poisson", texte: "Poisson sans boisson est poison.", difficulte: "facile", cible: "s / p" },
  { id: "douches", texte: "Douze douches douces.", difficulte: "facile", cible: "d / ou" },
  { id: "tonton", texte: "Tonton, ton thé t'a-t-il ôté ta toux ?", difficulte: "facile", cible: "t" },
  { id: "piano", texte: "Piano, panier, pyjama : dis ces trois mots trois fois de suite, de plus en plus vite.", difficulte: "facile", cible: "p" },
  { id: "cerises", texte: "Ces cerises sont si sûres qu'on ne sait pas si c'en sont.", difficulte: "moyen", cible: "s / c" },
  { id: "tortues", texte: "Trois tortues trottaient sur trois toits très étroits.", difficulte: "moyen", cible: "tr" },
  { id: "dragon", texte: "Un dragon gradé dégrade un gradé dragon.", difficulte: "moyen", cible: "d / g" },
  { id: "excuses", texte: "Je veux et j'exige d'exquises excuses.", difficulte: "moyen", cible: "x / z" },
  { id: "saucissons", texte: "Combien de sous sont ces six saucissons-ci ? Ces six saucissons-ci sont six sous.", difficulte: "moyen", cible: "s / si" },
  { id: "rat-riz", texte: "Rat vit riz, rat mit patte à ras, riz cuit, rat mit patte au riz.", difficulte: "moyen", cible: "r" },
  { id: "didon", texte: "Didon dîna, dit-on, du dos d'un dodu dindon.", difficulte: "moyen", cible: "d" },
  { id: "pie-oie-hibou", texte: "Où niche la pie ? La pie niche haut. Où niche l'oie ? L'oie niche bas. Où niche l'hibou ? L'hibou niche ni haut ni bas.", difficulte: "moyen", cible: "voyelles nasales" },
  { id: "archiduchesse", texte: "Les chaussettes de l'archiduchesse sont-elles sèches, archi-sèches ?", difficulte: "difficile", cible: "ch / s" },
  { id: "scies-cypres", texte: "Si six scies scient six cyprès, six cent six scies scient six cent six cyprès.", difficulte: "difficile", cible: "s / si" },
  { id: "fisc", texte: "Le fisc fixe exprès chaque taxe fixe excessive exclusivement au luxe et à l'acquis.", difficulte: "difficile", cible: "x / ks" },
  { id: "natacha", texte: "Natacha n'attacha pas son chat Pacha qui s'échappa. Cela fâcha Sacha qui chassa Pacha.", difficulte: "difficile", cible: "ch / s / a" },
  { id: "loup-mouton", texte: "Le loup glouton engloutit le mouton bien dodu, dodu le mouton, dodu comme un pardessus.", difficulte: "difficile", cible: "l / ou" },
  { id: "rats-graisse", texte: "Cinq gros rats grillent dans la grosse graisse grasse.", difficulte: "difficile", cible: "r / gr" },
  { id: "cypres-encore", texte: "Seize chaises sèchent, seize jacinthes jaunissent, cela fait trente-deux choses qui changent en même temps.", difficulte: "difficile", cible: "s / ch / j" },
];

export function virelangueParId(id) {
  return VIRELANGUES.find((v) => v.id === id);
}
