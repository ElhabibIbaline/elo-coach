import { Link, NavLink } from "react-router-dom";

function classeLien({ isActive }) {
  return `site-nav__link${isActive ? " site-nav__link--active" : ""}`;
}

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navigation principale">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand">
          <svg className="site-nav__logo" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
            <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Éloquence
        </Link>
        <div className="site-nav__links">
          <NavLink to="/" end className={classeLien}>Accueil</NavLink>
          <NavLink to="/parcours" className={classeLien}>Parcours</NavLink>
          <NavLink to="/exercices" className={classeLien}>Exercices</NavLink>
          <NavLink to="/enregistrement" className={classeLien}>Enregistrement</NavLink>
          <NavLink to="/progression" className={classeLien}>Progression</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
