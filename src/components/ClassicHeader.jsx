import React from "react";
import { useState } from "react";
import { Tooltip } from "./Tooltip"; // Importation d'un composant Tooltip pour afficher des infos au survol des icônes sociales
import { Link } from "react-scroll"; // Importation de Link pour un défilement fluide (smooth scroll) entre les sections du site

const ClassicHeader = ({ handleNavClick }) => {
  const [stickyHeader, setStickyHeader] = useState(false); // État pour gérer l'en-tête collant qui se fixe en haut de la page
  const [isNavModalClose, setIsNavModalClose] = useState(true); // État pour gérer l'ouverture/fermeture du menu de navigation mobile

  // Fonction pour vérifier le défilement de la page et appliquer la classe sticky
  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||  // Si la position du scroll est supérieure à 180px
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true); // Applique l'effet "sticky" pour l'en-tête
      } else {
        setStickyHeader(false); // Retire l'effet "sticky" quand on est en haut de la page
      }
    }
  };

  // Ajout de l'écouteur de défilement au chargement de la page
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop); // Active la fonction de vérification lors du défilement
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Barre de navigation */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " +
          (stickyHeader ? "sticky-on" : "") // Ajoute la classe sticky-on si l'en-tête est fixé
        }
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
              className="logo"
              to="home"  // Lien vers la section "home"
              title="Mariam"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true); // Ferme le menu mobile lorsque l'on clique sur le logo
              }}
            >
              <img src="images/logo-light.png" alt="Simone" />
            </Link>
            {/* Fin du logo */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            {/* Bouton du menu mobile */}
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose); // Change l'état du menu mobile
              }}
              className={
                isNavModalClose
                  ? "navbar-toggler ms-auto"
                  : "navbar-toggler ms-auto show" // Affiche ou masque le menu en fonction de l'état
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            {/* Menu de navigation */}
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? "collapse navbar-collapse justify-content-center "
                  : "show navbar-collapse justify-content-center" // Affiche ou masque le menu en fonction de l'état
              }
            >
              <ul className="navbar-nav">
                {/* Liste des liens de navigation */}
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="home"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true); // Ferme le menu mobile lorsque l'on clique sur un lien
                    }}
                  >
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true); // Ferme le menu mobile lorsque l'on clique sur un lien
                    }}
                  >
                    À propos
                  </Link>
                </li>
                {/* Autres liens similaires */}
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Ce que je fais
                  </Link>
                </li>
                {/* ... */}
                {/* <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="testimonial" // Lien vers la section Témoignages
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Témoignages
                  </Link>
                </li> */}
                {/* ... */}
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            {/* Icônes sociales */}
            <ul className="social-icons social-icons-light">
              <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="http://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li>
              {/* Autres icônes sociales */}
              <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="http://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </Tooltip>
              </li>
              {/* ... */}
            </ul>
          </div>
        </div>
      </nav>
      {/* Fin de la barre de navigation */}
    </header>
  );
};

export default ClassicHeader;
