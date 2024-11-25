import React from "react";
import resumeFile from "../documents/resume.pdf";

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Titre */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            À propos de moi
          </h2>
          <p
            className={
              "text-9 fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Apprenez à me connaître
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Fin du titre */}
        <div className="row gy-5">
          {/* Contenu de "À propos" */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              Je suis <span className="text-primary">Mariam Dibaga,</span> Développeuse Web et Intégratrice
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Basée à Paris, je suis une passionnée du web en phase de finalisation de ma formation en développement et intégration web. J’aime concevoir des sites web responsifs et intuitifs qui répondent aux besoins des utilisateurs.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Au fil de mon parcours, j'ai développé mes compétences en HTML, CSS, JavaScript et React. Je m’efforcerai de fournir un travail de qualité tout en respectant les délais et les exigences des clients. La collaboration et la résolution de problèmes sont au cœur de mon approche professionnelle.
            </p>
          </div>
          {/* Fin du contenu "À propos" */}
          {/* Détails personnels */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Nom :</span>Mariam D
                </li>
                <li>
                  <span className="fw-600 me-2">Email :</span>
                  <a href="mailto:mariame.dibaga@gmail.com">
                    mariam.dibaga@gmail.com
                  </a>
                </li>
                <li>
                  <span className="fw-600 me-2">Localisation :</span>Paris, France
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          {/* Fin des détails personnels */}
        </div>
        {/* Compteurs de projets */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12 mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Années d'apprentissage
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12 mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>9</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projets réalisés
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12 mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>12</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Certifications obtenues
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fin des compteurs */}
      </div>
    </section>
  );
};

export default AboutUs;

