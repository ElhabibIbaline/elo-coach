import { useEffect, useRef, useState } from "react";
import { VIRELANGUES } from "../data/virelangues";
import { LECTURES } from "../data/lectures";
import { enregistrerExercice } from "../utils/progression";

const CRITERES = [
  "Articulation claire, sans mots avalés",
  "Débit régulier, ni trop rapide ni trop lent",
  "Volume suffisant, voix bien projetée",
  "Pauses respectées, pas de \"euh\" pour combler le silence",
];

const TEXTES = [
  { id: "libre", label: "Improviser librement (pas de texte)", texte: null },
  ...VIRELANGUES.map((v) => ({ id: `virelangue-${v.id}`, label: `Virelangue — ${v.texte.slice(0, 40)}...`, texte: v.texte })),
  ...LECTURES.map((l) => ({ id: `lecture-${l.id}`, label: `Lecture — ${l.titre}`, texte: l.texte })),
];

function Enregistrement() {
  const [texteId, setTexteId] = useState("libre");
  const [micDisponible, setMicDisponible] = useState(true);
  const [enregistrement, setEnregistrement] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [criteresCoches, setCriteresCoches] = useState([]);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);

  const texteChoisi = TEXTES.find((t) => t.id === texteId);

  useEffect(() => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      setMicDisponible(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function demarrer() {
    setErreur(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      recorder.start();
      mediaRecorderRef.current = recorder;
      setEnregistrement(true);
      setCriteresCoches([]);
    } catch {
      setErreur("Le micro n'a pas pu être activé. Vérifie que tu as autorisé l'accès au micro pour ce site, et que tu es bien sur localhost ou en HTTPS.");
    }
  }

  function arreter() {
    mediaRecorderRef.current?.stop();
    setEnregistrement(false);
  }

  function basculerCritere(critere) {
    setCriteresCoches((prev) => (prev.includes(critere) ? prev.filter((c) => c !== critere) : [...prev, critere]));
  }

  function marquerFait() {
    enregistrerExercice("enregistrement");
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">S'enregistrer</p>
        <h1>Studio d'enregistrement</h1>
        <p>
          S'écouter parler est l'un des meilleurs moyens de progresser : on entend ses propres tics
          bien mieux qu'en parlant. Rien n'est envoyé nulle part, l'enregistrement reste sur cet appareil
          le temps de la session.
        </p>
      </header>

      {!micDisponible && (
        <div className="method-warning">
          <strong>Micro indisponible</strong>
          <p>
            Ton navigateur ne permet pas d'accéder au micro ici. C'est souvent le cas quand l'app est
            ouverte depuis un appareil mobile via l'adresse réseau locale (http) plutôt qu'en
            localhost ou en HTTPS — les navigateurs bloquent le micro hors contexte sécurisé. Essaie
            depuis le PC en localhost.
          </p>
        </div>
      )}

      {micDisponible && (
        <>
          <div className="jeu-configuration">
            <label htmlFor="choix-texte" style={{ display: "block", fontWeight: 700, marginBottom: "0.5rem" }}>
              Que veux-tu lire ou dire ?
            </label>
            <select
              id="choix-texte"
              value={texteId}
              onChange={(e) => setTexteId(e.target.value)}
              style={{ width: "100%", padding: "0.7rem", borderRadius: "0.6rem", border: "1px solid #dfe4ec" }}
            >
              {TEXTES.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>

            {texteChoisi?.texte && (
              <p style={{ marginTop: "1rem", fontSize: "1.05rem", lineHeight: 1.7 }}>{texteChoisi.texte}</p>
            )}
          </div>

          <div className="sprint-question" style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {!enregistrement ? (
                <button className="home-button home-button--primary" onClick={demarrer}>
                  ● Démarrer l'enregistrement
                </button>
              ) : (
                <button className="home-button home-button--primary" onClick={arreter}>
                  ■ Arrêter l'enregistrement
                </button>
              )}
            </div>

            {erreur && <p style={{ color: "#a12e26", marginTop: "1rem" }}>{erreur}</p>}

            {audioUrl && !enregistrement && (
              <div style={{ marginTop: "1.5rem" }}>
                <audio controls src={audioUrl} style={{ width: "100%" }} />
              </div>
            )}
          </div>

          {audioUrl && !enregistrement && (
            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <h2>Auto-évaluation</h2>
              <p>Réécoute-toi et coche ce que tu as réussi :</p>
              <div className="final-checks">
                <div>
                  {CRITERES.map((critere) => (
                    <label key={critere}>
                      <input
                        type="checkbox"
                        checked={criteresCoches.includes(critere)}
                        onChange={() => basculerCritere(critere)}
                      />
                      {critere}
                    </label>
                  ))}
                </div>
              </div>
              <button className="jour-carte__bouton" style={{ marginTop: "1.25rem" }} onClick={marquerFait}>
                Ajouter cet enregistrement à ma progression
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Enregistrement;
