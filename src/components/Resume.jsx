import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2011 - 2013",
      title: "BTS Assistant Manager",
      place: "Lycée Jules Siegfried, Paris",
      desc: "Formation en gestion administrative, communication, et organisation d'activités professionnelles.",
    },
    {
      yearRange: "2009 - 2011",
      title: "Bac Sciences et Technologies de la Gestion",
      place: "Lycée Sophie Germain, Paris",
      desc: "Formation en économie, gestion et communication pour le développement de compétences polyvalentes.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - Présent",
      title: "Développeuse Web en formation",
      place: "OpenClassrooms",
      desc: "Création de projets complets, intégration de maquettes en HTML/CSS, développement d'applications React et gestion de bases de données MongoDB.",
    },
  ];

  const skills = [
    {
      name: "SEO",
      percent: 70,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 75,
    },
    {
      name: "MongoDB",
      percent: 60,
    },
    {
      name: "Responsive Design",
      percent: 90,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Résumé
          </h2>
          <p
            className={
              "text-9 fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Mon parcours
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end */}
        <div className="row gx-5">
          {/* Education */}
          <div className="col-md-6">
            <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
              Formation
            </h2>
            {educationDetails.map((value, index) => (
              <div
                key={index}
                className={
                  "bg-white rounded p-4 mb-4 " +
                  (darkTheme ? "bg-dark" : "bg-white border")
                }
              >
                <p className="badge bg-primary text-2 fw-400">
                  {value.yearRange}
                </p>
                <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                  {value.title}
                </h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>
                  {value.place}
                </p>
                <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Experience */}
          <div className="col-md-6">
            <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
              Expérience
            </h2>
            {experienceDetails.map((value, index) => (
              <div
                key={index}
                className={
                  "bg-white rounded p-4 mb-4 " +
                  (darkTheme ? "bg-dark" : "bg-white border")
                }
              >
                <p className="badge bg-primary text-2 fw-400">
                  {value.yearRange}
                </p>
                <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                  {value.title}
                </h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>
                  {value.place}
                </p>
                <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Skills */}
        <h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>
          Mes compétences
        </h2>
        <div className="row gx-5">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6">
              <p
                className={
                  "fw-500 text-start mb-2 " +
                  (darkTheme ? "text-light" : "text-dark")
                }
              >
                {skill.name}{" "}
                <span className="float-end">{skill.percent}%</span>
              </p>
              <div
                className={
                  "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                }
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: skill.percent + "%" }}
                  aria-valuenow={skill.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Télécharger CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
