import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright & Mentions Légales
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Texte d'exemple provenant de l'industrie de l'impression et de la composition. Lorem Ipsum est le texte standard utilisé dans l'industrie de l'impression depuis les années 1500, lorsqu'un imprimeur inconnu a pris un ensemble de caractères et les a mélangés pour créer un spécimen de texte.
            </p>
            <ul className="lh-lg">
              <li>
                Exemple de texte juridique ou d'information pertinente à afficher ici.
              </li>
              <li>
                Liste des droits d'auteur ou des responsabilités légales.
              </li>
              <li>
                Autres informations sur les termes et conditions ou autres clauses importantes.
              </li>
              <li>
                Une autre mention légale ou condition supplémentaire.
              </li>
              <li>
                Informations sur la politique de confidentialité ou de traitement des données personnelles.
              </li>
              <li>
                Mentions légales concernant les responsabilités du site web.
              </li>
              <li>
                Autres conditions ou exigences légales en fonction du domaine d'application.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
