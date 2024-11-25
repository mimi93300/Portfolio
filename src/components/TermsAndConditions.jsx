import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
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
              Conditions générales et politique de confidentialité
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Fermer"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Bienvenue dans notre section des conditions générales et de la
              politique de confidentialité. Nous attachons une grande
              importance à votre vie privée et à votre compréhension de nos
              pratiques.
            </p>
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Conditions d'utilisation
            </h3>
            <p>
              En utilisant notre site, vous acceptez nos conditions d'utilisation, 
              qui incluent le respect de nos règles concernant l'accès et l'utilisation des services.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie I – Informations collectées et contrôlées
            </h5>
            <p>
              Nous collectons des informations personnelles uniquement lorsque
              cela est nécessaire pour fournir nos services, comme votre nom,
              votre adresse e-mail, et vos préférences utilisateur.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie II – Informations traitées pour votre compte
            </h5>
            <p>
              Nous pouvons traiter des informations supplémentaires pour fournir
              des fonctionnalités spécifiques, comme l'historique des
              transactions ou les données analytiques nécessaires à
              l'amélioration de nos services.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie III – Généralités
            </h5>
            <p>
              Toutes les données collectées sont sécurisées et utilisées dans
              le respect des réglementations applicables. Nous ne partagerons
              jamais vos informations personnelles sans votre consentement.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Politique de confidentialité
            </h3>
            <p>
              Votre confidentialité est importante pour nous. Cette section
              explique comment nous utilisons et protégeons vos données
              personnelles.
            </p>
            <ol className="lh-lg">
              <li>
                Nous utilisons vos informations pour personnaliser votre
                expérience sur notre site.
              </li>
              <li>
                Nous ne partageons vos données qu'avec des partenaires
                approuvés, si nécessaire pour le service.
              </li>
              <li>
                Vous avez le droit de demander l'accès ou la suppression de vos
                données personnelles.
              </li>
              <li>
                Nous suivons les normes de sécurité les plus strictes pour
                protéger vos données.
              </li>
              <li>
                Notre politique est régulièrement mise à jour pour se
                conformer aux réglementations en vigueur.
              </li>
              <li>
                Si vous avez des questions concernant notre politique de
                confidentialité, contactez notre service client.
              </li>
              <li>
                En continuant à utiliser notre site, vous acceptez nos
                conditions générales et notre politique de confidentialité.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
