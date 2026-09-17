// Banque de sujets pour s'entraîner à parler sans préparation, technique classique
// utilisée en art oratoire (Toastmasters, débat) pour vaincre l'hésitation.
export const SUJETS_IMPROVISATION = [
  "Le meilleur conseil qu'on m'ait donné",
  "Pourquoi j'aime (ou déteste) les lundis",
  "Un voyage qui m'a marqué",
  "Ce que je changerais dans ma ville",
  "Une compétence que tout le monde devrait apprendre",
  "Mon plat préféré et pourquoi",
  "La technologie qui a le plus changé ma vie",
  "Un livre ou un film qui m'a fait réfléchir",
  "Ce que je ferais avec une semaine de vacances surprise",
  "Le métier que je referais si je recommençais tout",
  "Une décision difficile que j'ai prise récemment",
  "Ce que représente la réussite pour moi",
  "Un défaut que je considère comme une qualité",
  "La dernière fois que j'ai appris quelque chose de nouveau",
  "Pourquoi il faut (ou non) se lever tôt",
  "Une tradition familiale qui compte pour moi",
  "Ce que je dirais à la version de moi il y a dix ans",
  "L'objet du quotidien que je ne pourrais pas remplacer",
  "Ma définition d'une bonne journée",
  "Un sujet sur lequel j'ai changé d'avis",
  "Ce qui me motive à me lever le matin",
  "La qualité la plus importante chez un collègue",
  "Une peur que j'ai surmontée",
  "Ce que j'aimerais apprendre dans les cinq prochaines années",
  "Le rôle de l'humour dans la vie de tous les jours",
  "Une règle que je m'impose et que je ne romps jamais",
  "Ce que je pense du télétravail",
  "Un conseil que je donnerais à quelqu'un qui débute dans mon métier",
  "La dernière fois où j'ai aidé quelqu'un",
  "Ce que représente pour moi une équipe qui fonctionne bien",
  "Un endroit où je me sens toujours calme",
  "La différence entre être occupé et être productif",
  "Ce que je pense de la routine",
  "Une erreur qui m'a appris quelque chose d'important",
  "Le rôle de l'échec dans la réussite",
  "Ce que je changerais dans mon organisation quotidienne",
  "Une personne qui m'inspire et pourquoi",
  "Ce que signifie pour moi bien communiquer",
  "Un sujet d'actualité qui m'intéresse en ce moment",
  "La meilleure façon de convaincre quelqu'un selon moi",
];

export function sujetAleatoire(exclureIndex) {
  let index = Math.floor(Math.random() * SUJETS_IMPROVISATION.length);
  if (SUJETS_IMPROVISATION.length > 1 && index === exclureIndex) {
    index = (index + 1) % SUJETS_IMPROVISATION.length;
  }
  return { sujet: SUJETS_IMPROVISATION[index], index };
}
