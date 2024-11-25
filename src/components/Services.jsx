import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // Détails des services
  const services = [
    {
      name: "Création de sites web modernes",
      desc: "Développement de sites web responsives utilisant les dernières technologies comme JavaScript, React, et HTML/CSS.",
      icon: "fas fa-code",
    },
    {
      name: "Applications React",
      desc: "Conception et développement d'applications web dynamiques et performantes avec React et Redux.",
      icon: "fas fa-layer-group",
    },
    {
      name: "Optimisation pour les moteurs de recherche (SEO)",
      desc: "Amélioration de la visibilité de votre site sur les moteurs de recherche grâce à des techniques d'optimisation avancées.",
      icon: "fas fa-search",
    },
    {
      name: "Maintenance et support",
      desc: "Gestion des mises à jour, correction de bugs, et assistance technique pour garantir la continuité de vos services.",
      icon: "fas fa-tools",
    },
    {
      name: "Refonte d'interface utilisateur (UI/UX)",
      desc: "Modernisation et optimisation de l'expérience utilisateur pour rendre votre site plus intuitif et attrayant.",
      icon: "fas fa-pencil-alt",
    },
    {
      name: "Conseils et analyse de projets",
      desc: "Analyse des besoins et recommandations pour définir les solutions web les plus adaptées à vos objectifs.",
      icon: "fas fa-chart-line",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* En-tête */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50 opacity-1" : "text-light opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9 fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Ce que je propose
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* En-tête fin */}
        {/* Contenu début */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Contenu fin */}
      </div>
    </section>
  );
};

export default Services;
