import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

const ProjectDetailsModal = ({ darkTheme, projectDetails }) => {
  // Référence pour le slider
  const sliderRef = useRef();

  // Configuration du slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Remet le slider à la première image lorsque les détails changent
  useEffect(() => {
    if (sliderRef.current) sliderRef.current.slickGoTo(0);
  }, [projectDetails]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div
          className={`modal-content ${darkTheme ? "bg-dark-2 text-light" : ""}`}
        >
          <div className="modal-body">
            {/* Bouton de fermeture */}
            <button
              type="button"
              className={`btn-close ${darkTheme ? "btn-close-white" : ""}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            />

            {/* Contenu de la modale */}
            <div className="container ajax-container">
              {/* Titre du projet */}
              <h2
                className={`text-6 font-weight-600 text-center mb-4 ${
                  darkTheme ? "text-white" : ""
                }`}
              >
                {projectDetails?.title}
              </h2>

              <div className="row g-4">
                {/* Carrousel d'images */}
                <div className="col-md-7">
                  <Slider {...settings} ref={sliderRef}>
                    {/* Image principale */}
                    <div className="item">
                      <img
                        className="img-fluid"
                        alt="Project Thumbnail"
                        src={projectDetails?.thumbImage}
                      />
                    </div>
                    {/* Images supplémentaires */}
                    {projectDetails?.sliderImages?.map((image, index) => (
                      <div className="item" key={index}>
                        <img className="img-fluid" alt="" src={image} />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Détails du projet */}
                <div className="col-md-5">
                  <h4 className={`text-4 font-weight-600 ${darkTheme ? "text-white" : ""}`}>
                    Informations sur le projet :
                  </h4>
                  <p>{projectDetails?.projectInfo}</p>

                  <h4 className={`text-4 font-weight-600 mt-4 ${darkTheme ? "text-white" : ""}`}>
                    Détails :
                  </h4>
                  <ul
                    className={`list-style-2 ${darkTheme ? "list-style-light" : ""}`}
                  >
                    <li>
                      <span className="font-weight-600 me-2">Client :</span>
                      {projectDetails?.client}
                    </li>
                    <li>
                      <span className="font-weight-600 me-2">Technologies :</span>
                      {projectDetails?.technologies}
                    </li>
                    <li>
                      <span className="font-weight-600 me-2">Industrie :</span>
                      {projectDetails?.industry}
                    </li>
                    <li>
                      <span className="font-weight-600 me-2">Date :</span>
                      {projectDetails?.date}
                    </li>
                    <li>
                      <span className="font-weight-600 me-2">URL :</span>
                      <a
                        href={projectDetails?.url?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectDetails?.url?.name}
                      </a>
                    </li>
                  </ul>

                  {/* Liens de partage */}
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">Partager :</div>
                    <div className="col-auto">
                      <ul
                        className={`social-icons ${
                          darkTheme ? "social-icons-muted" : ""
                        }`}
                      >
                        {projectDetails?.socialLinks &&
                          Object.entries(projectDetails.socialLinks).map(
                            ([key, link]) => (
                              <li key={key} className={`social-icons-${key}`}>
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  data-toggle="tooltip"
                                  title={key}
                                >
                                  <i className={`fab fa-${key}`} />
                                </a>
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
