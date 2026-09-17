import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Parcours from "./pages/Parcours";
import ParcoursSemaine from "./pages/ParcoursSemaine";
import Exercices from "./pages/Exercices";
import Respiration from "./pages/exercices/Respiration";
import Echauffement from "./pages/exercices/Echauffement";
import Articulation from "./pages/exercices/Articulation";
import ArticulationDetail from "./pages/exercices/ArticulationDetail";
import Diction from "./pages/exercices/Diction";
import DictionDetail from "./pages/exercices/DictionDetail";
import Voix from "./pages/exercices/Voix";
import Structuration from "./pages/exercices/Structuration";
import Improvisation from "./pages/exercices/Improvisation";
import Enregistrement from "./pages/Enregistrement";
import Progression from "./pages/Progression";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/parcours/:semaineId" element={<ParcoursSemaine />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/exercices/respiration" element={<Respiration />} />
          <Route path="/exercices/echauffement" element={<Echauffement />} />
          <Route path="/exercices/articulation" element={<Articulation />} />
          <Route path="/exercices/articulation/:id" element={<ArticulationDetail />} />
          <Route path="/exercices/diction" element={<Diction />} />
          <Route path="/exercices/diction/:id" element={<DictionDetail />} />
          <Route path="/exercices/voix" element={<Voix />} />
          <Route path="/exercices/structuration" element={<Structuration />} />
          <Route path="/exercices/improvisation" element={<Improvisation />} />
          <Route path="/enregistrement" element={<Enregistrement />} />
          <Route path="/progression" element={<Progression />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
