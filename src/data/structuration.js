// Contenu méthodologique : trois méthodes classiques et publiques de structuration
// d'un discours, reformulées ici (pas de copie d'un ouvrage protégé).
export const STRUCTURATION = [
  {
    id: "prep",
    numero: 1,
    titre: "La méthode PREP",
    resume: "Une structure en quatre temps pour répondre clairement à une question ou défendre une idée, très utilisée en réunion ou en entretien.",
    etapes: [
      { lettre: "P", nom: "Point", description: "Annonce ton idée principale en une phrase claire, sans détour." },
      { lettre: "R", nom: "Raison", description: "Explique en une ou deux phrases pourquoi tu penses cela." },
      { lettre: "E", nom: "Exemple", description: "Illustre avec un exemple concret, un chiffre ou une anecdote courte." },
      { lettre: "P", nom: "Point (rappel)", description: "Reformule ton idée de départ pour boucler la boucle." },
    ],
    exemple: "\"Je pense qu'on devrait passer cette réunion en 15 minutes (Point). On perd du temps sur des sujets qui n'intéressent pas tout le monde (Raison). Par exemple, hier on a passé 10 minutes sur un point qui ne concernait que deux personnes (Exemple). C'est pourquoi je propose un format plus court (Point).\"",
  },
  {
    id: "plan-trois-parties",
    numero: 2,
    titre: "Le plan en trois parties",
    resume: "La structure la plus universelle pour un exposé ou une présentation : introduction, développement, conclusion.",
    etapes: [
      { lettre: "1", nom: "Introduction", description: "Capte l'attention (une question, un chiffre surprenant) et annonce clairement le sujet et le plan." },
      { lettre: "2", nom: "Développement", description: "Découpe en 2 ou 3 idées maximum, chacune avec un exemple. Au-delà, l'auditoire décroche." },
      { lettre: "3", nom: "Conclusion", description: "Résume l'essentiel en une phrase et termine sur une ouverture ou un appel à l'action." },
    ],
    exemple: "Pour une présentation de 5 minutes : 30 secondes d'introduction, 3-4 minutes de développement (2 idées maximum), 30 secondes de conclusion.",
  },
  {
    id: "pitch-60",
    numero: 3,
    titre: "Le pitch de 60 secondes",
    resume: "Savoir présenter une idée, un projet ou soi-même en une minute, sans détour ni hésitation.",
    etapes: [
      { lettre: "1", nom: "Qui / Quoi (10s)", description: "Qui tu es ou de quoi tu parles, en une phrase." },
      { lettre: "2", nom: "Le problème (15s)", description: "Quel besoin ou quelle question ton sujet adresse-t-il ?" },
      { lettre: "3", nom: "La solution (25s)", description: "Ce que tu proposes concrètement, avec un exemple si possible." },
      { lettre: "4", nom: "L'appel à l'action (10s)", description: "Ce que tu attends de ton interlocuteur : une question, un rendez-vous, une décision." },
    ],
    exemple: "Utile pour un entretien, une présentation de projet, ou se présenter en réseau professionnel. L'objectif n'est pas de tout dire, mais de donner envie d'en savoir plus.",
  },
];

export function structurationParId(id) {
  return STRUCTURATION.find((s) => s.id === id);
}
