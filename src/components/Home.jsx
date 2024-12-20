import React from "react";
import Typewriter from "typewriter-effect";
import videobg from "../videos/home.mp4";

const Home = ({
  classicHeader,
  darkTheme,
  handleNavClick,
  useVideoBackground,
}) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* Fond dynamique : vidéo ou image */}
        {useVideoBackground ? (
          <div className="player hero-bg parallax">
            <video
              src={videobg}
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            ></video>
          </div>
        ) : (
          <div
            className="hero-bg parallax"
            style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
          ></div>
        )}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  Bienvenue
                </p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "Je suis Développeuse Web.",
                        "Je suis Intégratrice Web.",
                        "Je crée des expériences numériques modernes.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  basé à Paris, en France.{" "}
                  {/* Changez par votre localisation */}
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Travaillons Ensemble {/* Adaptez ce texte */}
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
