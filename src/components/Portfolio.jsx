import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = ({ classicHeader, darkTheme }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "HTML,CSS",
    BRAND: "Javascript",
    PHOTOS: "React",
    PLANNING: "Project Management",
    SEO: "SEO, Performance, Accessibility",
    BANKING: "React, Redux, Node.js",
  };

  const projectsData = [
    {
      title: "Booki - Travel Agency Homepage",
      projectInfo:
        "Dans ce projet, vous créerez la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Vous intégrerez l'interface responsive en suivant des maquettes Figma pour mobile, tablette et desktop. Ce projet vous aide à développer des compétences essentielles en design responsive.",
      client: "Booki",
      technologies: "HTML, CSS",
      industry: "Web Development",
      date: "Janvier 2024",
      url: {
        name: "www.booki.com",
        link: "https://www.booki.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/Booki",
        twitter: "http://www.twitter.com/Booki",
        google: "http://www.google.com/Booki",
        instagram: "http://www.instagram.com/Booki",
        mail: "mailto:support@booki.com",
      },
      thumbImage: "images/projects/booki-homepage.jpg",
      sliderImages: [
        "images/projects/booki-homepage.jpg",
        "images/projects/booki-tablet.jpg",
        "images/projects/booki-mobile.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Optimisez le référencement d'un site de photographe",
      projectInfo:
        "Dans ce projet, vous travaillerez en tant que développeur freelance pour optimiser le référencement d’un site, en améliorant sa performance et son accessibilité. Vous identifieriez les problèmes de chargement et de référencement, puis proposeriez des recommandations pour améliorer la vitesse de chargement, la structure du code et le référencement. En utilisant des outils comme Lighthouse et Wave, vous appliquerez des améliorations pour optimiser le site pour les moteurs de recherche.",
      client: "Nina Carducci",
      technologies: "SEO, Performance, Accessibilité",
      industry: "Web Development",
      date: "Juillet 2024",
      url: {
        name: "www.ninacarducci.com",
        link: "https://www.ninacarducci.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/NinaCarducci",
        twitter: "http://www.twitter.com/NinaCarducci",
        google: "http://www.google.com/NinaCarducci",
        instagram: "http://www.instagram.com/NinaCarducci",
        mail: "mailto:support@ninacarducci.com",
      },
      thumbImage: "images/projects/nina-carducci-seo.jpg",
      sliderImages: [
        "images/projects/nina-carducci-seo.jpg",
        "images/projects/nina-carducci-audit.jpg",
        "images/projects/nina-carducci-report.jpg",
      ],
      categories: [filters.SEO],
    },
    {
      title: "OhmyFood - Mobile-First Site with CSS Animations",
      projectInfo:
        "Dans ce projet, vous améliorerez l'interface mobile d'un site en utilisant des animations CSS et en appliquant une approche mobile-first. Vous utiliserez SASS pour structurer le CSS et versionnerez le projet avec Git et GitHub. Ce projet vise à enrichir l'expérience utilisateur à travers des animations et à garantir une interface responsive sur tous les appareils.",
      client: "OhmyFood",
      technologies: "HTML, CSS, SASS",
      industry: "Web Development",
      date: "Mars 2024",
      url: {
        name: "www.ohmyfood.com",
        link: "https://www.ohmyfood.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/OhmyFood",
        twitter: "http://www.twitter.com/OhmyFood",
        google: "http://www.google.com/OhmyFood",
        instagram: "http://www.instagram.com/OhmyFood",
        mail: "mailto:support@ohmyfood.com",
      },
      thumbImage: "images/projects/ohmyfood-homepage.jpg",
      sliderImages: [
        "images/projects/ohmyfood-homepage.jpg",
        "images/projects/ohmyfood-mobile.jpg",
        "images/projects/ohmyfood-desktop.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Architecte d'intérieur - Dynamic Web Page",
      projectInfo:
        "Dans ce projet, vous créerez une page web dynamique pour le site d'une architecte d'intérieur. Vous utiliserez JavaScript pour manipuler le DOM et gérer les événements utilisateur. Vous développerez une page de présentation des travaux de l'architecte, une page de connexion pour l'administrateur et une modale pour uploader de nouveaux médias. Ce projet vous permettra de communiquer avec une API et d'intégrer des fonctionnalités dynamiques sur le site.",
      client: "Architecte d'intérieur",
      technologies: "HTML, CSS, JavaScript",
      industry: "Web Development",
      date: "Mai 2024",
      url: {
        name: "www.architectedinterieur.com",
        link: "https://www.architectedinterieur.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/ArchitectedInterieur",
        twitter: "http://www.twitter.com/ArchitectedInterieur",
        google: "http://www.google.com/ArchitectedInterieur",
        instagram: "http://www.instagram.com/ArchitectedInterieur",
        mail: "mailto:support@architectedinterieur.com",
      },
      thumbImage: "images/projects/architectedinterieur-homepage.jpg",
      sliderImages: [
        "images/projects/architectedinterieur-homepage.jpg",
        "images/projects/architectedinterieur-login.jpg",
        "images/projects/architectedinterieur-upload.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Qwenta - Menu Maker Site Planning",
      projectInfo:
        "Dans ce projet, vous serez chargé de planifier le développement du site 'Menu Maker' pour un client restaurateur. Vous rédigerez les spécifications techniques du projet, en analysant les besoins fonctionnels et en structurant les tâches de développement dans un tableau Kanban. Vous effectuerez également une veille technologique pour suivre les tendances pertinentes, et vous préparerez une présentation de la solution technique à soumettre au client.",
      client: "Qwenta",
      technologies: "Project Management, SQL, NoSQL, React",
      industry: "Web Development",
      date: "Juin 2024",
      url: {
        name: "www.qwenta.com",
        link: "https://www.qwenta.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/Qwenta",
        twitter: "http://www.twitter.com/Qwenta",
        google: "http://www.google.com/Qwenta",
        instagram: "http://www.instagram.com/Qwenta",
        mail: "mailto:support@qwenta.com",
      },
      thumbImage: "images/projects/qwenta-menu-maker.jpg",
      sliderImages: [
        "images/projects/qwenta-menu-maker.jpg",
        "images/projects/qwenta-kanban.jpg",
        "images/projects/qwenta-presentation.jpg",
      ],
      categories: [filters.PLANNING],
    },
    {
      title: "Kasa - Real Estate Rentals Web App",
      projectInfo:
        "Ce projet consiste à développer une application web pour la location immobilière, en utilisant React et React Router. Vous intégrerez une galerie d'images, un design responsive basé sur des maquettes Figma, et des menus collapsibles. Ce projet vous permettra de gérer des données JSON pour afficher des annonces et d'implémenter des animations CSS pour une expérience utilisateur interactive.",
      client: "Kasa",
      technologies: "React, CSS, JSON, React Router",
      industry: "Web Development",
      date: "Novembre 2024",
      url: {
        name: "www.kasa.com",
        link: "https://www.kasa.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/Kasa",
        twitter: "http://www.twitter.com/Kasa",
        google: "http://www.google.com/Kasa",
        instagram: "http://www.instagram.com/Kasa",
        mail: "mailto:support@kasa.com",
      },
      thumbImage: "images/projects/kasa-homepage.jpg",
      sliderImages: [
        "images/projects/kasa-homepage.jpg",
        "images/projects/kasa-gallery.jpg",
        "images/projects/kasa-mobile.jpg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "ArgentBank - Banking Application Front-End",
      projectInfo:
        "Dans ce projet, vous travaillerez sur le développement front-end d’une application bancaire en utilisant React et Redux. Vous intégrerez le front-end avec le back-end via des appels API REST et créerez une expérience utilisateur dynamique et réactive. Vous utiliserez Node.js pour exécuter le code côté serveur et Swagger pour modéliser les interactions avec les données des transactions.",
      client: "ArgentBank",
      technologies: "React, Redux, Node.js, Swagger",
      industry: "Web Development",
      date: "Novembre 2024",
      url: {
        name: "www.argentbank.com",
        link: "https://www.argentbank.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/ArgentBank",
        twitter: "http://www.twitter.com/ArgentBank",
        google: "http://www.google.com/ArgentBank",
        instagram: "http://www.instagram.com/ArgentBank",
        mail: "mailto:support@argentbank.com",
      },
      thumbImage: "images/projects/argentbank-homepage.jpg",
      sliderImages: [
        "images/projects/argentbank-homepage.jpg",
        "images/projects/argentbank-dashboard.jpg",
        "images/projects/argentbank-mobile.jpg",
      ],
      categories: [filters.BANKING],
    },
  ];

  useEffect(() => {
    const images = document.querySelectorAll(".portfolio-item img");
    images.forEach((img) => {
      img.onload = () => {
        setimagesLoaded((prev) => prev + 1);
      };
    });

    if (imagesLoaded === images.length) {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
        filter: filterKey,
      });
    }
  }, [imagesLoaded, filterKey]);

  return (
    <div className={`portfolio ${darkTheme ? "dark" : "light"}`}>
      <div className="portfolio-filters">
        <button onClick={() => setFilterKey("*")}>Tous</button>
        <button onClick={() => setFilterKey(filters.DESIGN)}>Design</button>
        <button onClick={() => setFilterKey(filters.BRAND)}>Brand</button>
        <button onClick={() => setFilterKey(filters.PHOTOS)}>Photos</button>
        <button onClick={() => setFilterKey(filters.PLANNING)}>Planning</button>
        <button onClick={() => setFilterKey(filters.SEO)}>SEO</button>
        <button onClick={() => setFilterKey(filters.BANKING)}>Banking</button>
      </div>

      <div className="portfolio-items">
        {projectsData.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img
              src={project.thumbImage}
              alt={project.title}
              className="portfolio-item-image"
            />
            <h3>{project.title}</h3>
            <button
              className="details-button"
              onClick={() => setSelectedProjectDetails(project)}
            >
              Voir les détails
            </button>
          </div>
        ))}
      </div>

      {selectedProjectDetails && (
        <ProjectDetailsModal
          project={selectedProjectDetails}
          closeModal={() => setSelectedProjectDetails(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
