import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Html-Css",
    BRAND: "Javascript",
    PHOTOS: "React",
  };

  const projectsData = [
    {
      title: "Booki - Agence de voyage Homepage",
      projectInfo:
        "Dans ce projet, j'ai crée la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Integration de l'interface responsive en suivant des maquettes Figma pour mobile, tablette et desktop. Ce projet développe des compétences essentielles en design responsive.",
      client: "Booki",
      technologies: "HTML5, CSS3",
      date: "Janvier 2024",
      url: {
        name: "www.booki.com",
        link: "https://github.com/mimi93300/P3_Booki.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/bookilogo.webp",
      sliderImages: [
        "images/projects/booki1.webp",
        "images/projects/booki2.webp",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Nina Carducci - Optimisation et référencement d'un site de photographe",
      projectInfo:
        "Dans ce projet, j'ai travaillé en tant que développeur freelance pour optimiser le référencement d’un site, en améliorant sa performance et son accessibilité. Identification des problèmes de chargement et de référencement, proposition de recommandations pour améliorer la vitesse de chargement, la structure du code et le référencement. Utilisation des outils comme Lighthouse et Wave, Application d'améliorations pour optimiser le site pour les moteurs de recherche.",
      client: "Nina Carducci",
      technologies: "SEO, Performance, Accessibilité",
      date: "Juillet 2024",
      url: {
        name: "www.nina-carducci.com",
        link: "https://github.com/mimi93300/P9NinaCarducci.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/ninalogo.webp",
      sliderImages: [
        "images/projects/nina.webp",
        "images/projects/nina2.webp",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "OhmyFood - Site mobile avec animation CSS",
      projectInfo:
        "Dans ce projet, j'ai amelioré l'interface mobile d'un site en utilisant des animations CSS et en appliquant une approche mobile-first. Utilisation de SASS pour structurer le CSS et versionner le projet avec Git et GitHub. Ce projet vise à enrichir l'expérience utilisateur à travers des animations et à garantir une interface responsive sur tous les appareils.",
      client: "OmyFood",
      technologies: "HTML, CSS, SASS",
      industry: "Web Development",
      date: "Mars 2024",
      url: {
        name: "www.ohmyfood.com",
        link: "https://github.com/mimi93300/P4Ohmyfood.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/ohmyfoodlogo.webp",
      sliderImages: [
        "images/projects/ohmyfood1.webp",
        "images/projects/ohmyfood2.webp",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Architecte d'intérieur - Page Web Dynamique",
      projectInfo:
        "Dans ce projet, vous créerez une page web dynamique pour le site d'une architecte d'intérieur. Vous utiliserez JavaScript pour manipuler le DOM et gérer les événements utilisateur. Vous développerez une page de présentation des travaux de l'architecte, une page de connexion pour l'administrateur et une modale pour uploader de nouveaux médias. Ce projet vous permettra de communiquer avec une API et d'intégrer des fonctionnalités dynamiques sur le site.",
      client: "Sophie Bluel",
      technologies: "HTML, CSS, JavaScript",
      industry: "Web Development",
      date: "Mai 2024",
      url: {
        name: "www.sophie-bluel.com",
        link: "https://github.com/mimi93300/P6_SophieBluel.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/sophie-bluellogo.webp",
      sliderImages: [
        "images/projects/sophie-bluel1.webp",
        "images/projects/sophie-bluel2.webp",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Qwenta - Plannification d'un site de Menu Maker",
      projectInfo:
        "Dans ce projet, vous serez chargé de planifier le développement du site 'Menu Maker' pour un client restaurateur. Vous rédigerez les spécifications techniques du projet, en analysant les besoins fonctionnels et en structurant les tâches de développement dans un tableau Kanban. Vous effectuerez également une veille technologique pour suivre les tendances pertinentes, et vous préparerez une présentation de la solution technique à soumettre au client.",
      client: "Qwenta",
      technologies: "Project Management, SQL, NoSQL, React",
      industry: "Web Development",
      date: "Juin 2024",
      url: {
        name: "www.qwenta.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/qwentalogo.webp",
      sliderImages: [
        "images/projects/qwenta1.webp",
        "images/projects/qwenta2.webp",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Kasa - Application de location immobilière",
      projectInfo:
        "Ce projet consiste à développer une application web pour la location immobilière, en utilisant React et React Router. Vous intégrerez une galerie d'images, un design responsive basé sur des maquettes Figma, et des menus collapsibles. Ce projet vous permettra de gérer des données JSON pour afficher des annonces et d'implémenter des animations CSS pour une expérience utilisateur interactive.",
      client: "Kasa",
      technologies: "React, CSS, JSON, React Router",
      industry: "Web Development",
      date: "Novembre 2024",
      url: {
        name: "www.kasa.com",
        link: "https://github.com/mimi93300/Projet-8kasa.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.webp",
      sliderImages: [
        "images/projects/kasa1.webp",
        "images/projects/kaza2.webp",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "ArgentBank - Front End d'une application bancaire",
      projectInfo:
        "Dans ce projet, j'ai travaillé sur le développement front-end d’une application bancaire en utilisant React et Redux. Integration du front-end avec le back-end via des appels API REST et creation d'une expérience utilisateur dynamique et réactive. Utilisation de Node.js pour exécuter le code côté serveur et Swagger pour modéliser les interactions avec les données des transactions.",
      client: "ArgentBank",
      technologies: "React, Redux, Node.js, Swagger",
      industry: "Web Development",
      date: "Novembre 2024",
      url: {
        name: "www.argentbank.com",
        link: "https://github.com/mimi93300/ArgentBank-website.git",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/argentBankLogo.webp",
      sliderImages: [
        "images/projects/bnk1.webp",
        "images/projects/bnk2.webp",
      ],
      categories: [filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Mes Projets
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                Tout
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="#"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
