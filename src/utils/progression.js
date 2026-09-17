const CLE_STOCKAGE = "eloquence-progression-v1";

function etatParDefaut() {
  return {
    joursActifs: [],
    respirationsFaites: 0,
    echauffementsFaits: 0,
    virelanguesReussis: 0,
    lecturesChronometrees: 0,
    voixFaits: 0,
    improvisationsFaites: 0,
    enregistrementsRealises: 0,
    seancesParcoursTerminees: [],
    semainesTerminees: [],
  };
}

function dateDuJour() {
  const d = new Date();
  const mois = String(d.getMonth() + 1).padStart(2, "0");
  const jour = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mois}-${jour}`;
}

export function chargerProgression() {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    if (!brut) return etatParDefaut();
    return { ...etatParDefaut(), ...JSON.parse(brut) };
  } catch {
    return etatParDefaut();
  }
}

function sauvegarder(etat) {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(etat));
  } catch {
    // stockage indisponible : la progression ne sera pas conservée cette fois
  }
  return etat;
}

function marquerJourActif(etat) {
  const aujourdhui = dateDuJour();
  if (etat.joursActifs.includes(aujourdhui)) return etat;
  return { ...etat, joursActifs: [...etat.joursActifs, aujourdhui] };
}

export function enregistrerExercice(categorie) {
  const champs = {
    respiration: "respirationsFaites",
    echauffement: "echauffementsFaits",
    virelangue: "virelanguesReussis",
    lecture: "lecturesChronometrees",
    voix: "voixFaits",
    improvisation: "improvisationsFaites",
    enregistrement: "enregistrementsRealises",
  };
  const champ = champs[categorie];
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  if (champ) {
    etat = { ...etat, [champ]: etat[champ] + 1 };
  }
  return sauvegarder(etat);
}

export function enregistrerSeanceParcours(seanceId) {
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  if (!etat.seancesParcoursTerminees.includes(seanceId)) {
    etat = { ...etat, seancesParcoursTerminees: [...etat.seancesParcoursTerminees, seanceId] };
  }
  return sauvegarder(etat);
}

export function enregistrerSemaineTerminee(semaineId) {
  let etat = chargerProgression();
  if (!etat.semainesTerminees.includes(semaineId)) {
    etat = { ...etat, semainesTerminees: [...etat.semainesTerminees, semaineId] };
  }
  return sauvegarder(etat);
}

export function calculerSerie(etat) {
  const jours = new Set(etat.joursActifs);
  const curseur = new Date();
  curseur.setHours(0, 0, 0, 0);

  function formater(d) {
    const mois = String(d.getMonth() + 1).padStart(2, "0");
    const jour = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mois}-${jour}`;
  }

  if (!jours.has(formater(curseur))) {
    curseur.setDate(curseur.getDate() - 1);
  }

  let serie = 0;
  while (jours.has(formater(curseur))) {
    serie += 1;
    curseur.setDate(curseur.getDate() - 1);
  }
  return serie;
}

export function totalExercices(etat) {
  return (
    etat.respirationsFaites +
    etat.echauffementsFaits +
    etat.virelanguesReussis +
    etat.lecturesChronometrees +
    etat.voixFaits +
    etat.improvisationsFaites +
    etat.enregistrementsRealises
  );
}

export const BADGES = [
  { id: "premier-pas", titre: "Premier pas", description: "Termine ton premier exercice.", condition: (e) => totalExercices(e) >= 1 },
  { id: "dix-exercices", titre: "Dix exercices", description: "Termine dix exercices au total.", condition: (e) => totalExercices(e) >= 10 },
  { id: "cinquante-exercices", titre: "Habitué de la tribune", description: "Termine cinquante exercices au total.", condition: (e) => totalExercices(e) >= 50 },
  { id: "serie-3", titre: "Trois jours de suite", description: "Reviens t'entraîner trois jours consécutifs.", condition: (e) => calculerSerie(e) >= 3 },
  { id: "serie-7", titre: "Une semaine complète", description: "Reviens t'entraîner sept jours consécutifs.", condition: (e) => calculerSerie(e) >= 7 },
  { id: "serie-30", titre: "Un mois de régularité", description: "Reviens t'entraîner trente jours consécutifs.", condition: (e) => calculerSerie(e) >= 30 },
  { id: "dix-virelangues", titre: "Langue déliée", description: "Réussis dix virelangues.", condition: (e) => e.virelanguesReussis >= 10 },
  { id: "premiere-lecture", titre: "Première lecture chronométrée", description: "Termine ta première lecture à voix haute chronométrée.", condition: (e) => e.lecturesChronometrees >= 1 },
  { id: "premier-enregistrement", titre: "Premier enregistrement", description: "Écoute-toi parler pour la première fois.", condition: (e) => e.enregistrementsRealises >= 1 },
  { id: "cinq-enregistrements", titre: "Auto-critique assidue", description: "Réalise cinq enregistrements.", condition: (e) => e.enregistrementsRealises >= 5 },
  { id: "premiere-improvisation", titre: "Sans filet", description: "Termine ta première improvisation.", condition: (e) => e.improvisationsFaites >= 1 },
  { id: "premiere-semaine", titre: "Première étape du parcours", description: "Termine la première semaine du parcours en 8 semaines.", condition: (e) => e.semainesTerminees.length >= 1 },
  { id: "parcours-complet", titre: "Parcours complet", description: "Termine les huit semaines du parcours.", condition: (e) => e.semainesTerminees.length >= 8 },
];

export function badgesDebloques(etat) {
  return BADGES.filter((b) => b.condition(etat));
}
