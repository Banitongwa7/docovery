"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import avatar from './../public/male-avatar.png'
import socialTeam from "@/utils/socialTeam";


export default function Home() {
  const toggle = useRef<HTMLDivElement>(null);
  const [iconDisplay, setIconDisplay] = useState(false);

  const handleShow = () => {
    toggle.current?.classList.toggle("show");
    if (toggle.current?.classList.contains("show")) {
      setIconDisplay(true);
    } else {
      setIconDisplay(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/docovery_white.png"
              alt="logo"
              className="logo"
              width={18786}
              height={8334}
              priority={true}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleShow}
          >
            {iconDisplay ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>

          <div ref={toggle} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#homepage" className="nav-link smoothScroll">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Nos Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link contact">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="hero hero-bg d-flex justify-content-center align-items-center"
        id="homepage"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1 className="text-white" data-aos="fade-up">
                  Nous créons la solution qui repond à vos besoins
                </h1>

                <a href="#footer" className="custom-btn btn-bg btn mt-3">
                  Nous contacter
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div
                className="hero-image"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src="/test.png"
                  alt="working girl"
                  className="img-fluid"
                  width={1060}
                  height={885}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-padding pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto col-md-10 col-12">
              <div className="about-info">
                <h2 className="mb-4 text-center" data-aos="fade-up">
                  A propos de <strong>Docovery</strong>
                </h2>

                <p className="mb-0" data-aos="fade-up">
                  Docovery est une entreprise qui offre des services en{" "}
                  <strong>développement informatique</strong>. Nous croyons que
                  la technologie peut être utilisée pour améliorer la vie des
                  gens et des entreprises, et nous sommes déterminés à aider nos
                  clients à atteindre leurs objectifs grâce à{" "}
                  <strong>nos compétences</strong> et notre{" "}
                  <strong>expertise</strong>. Nous sommes spécialisés dans la
                  création des solutions informatiques et nous proposons
                  également des formations pour aider nos clients à mieux
                  comprendre et à utiliser leur technologie. Nous sommes fiers
                  de notre engagement envers la qualité et la satisfaction de
                  nos clients.
                </p>
              </div>

              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src="/office.png"
                  className="img-fluid"
                  alt="office"
                  width={1377}
                  height={678}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-padding pb-0" id="services">
        <div className="container">
          <div className="row">
            <h2 className="mb-4 text-center" data-aos="fade-up">
              Nos <strong>services</strong>
            </h2>
            <div className="container mt-5" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-person" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Accompagnement</h4>
                    </div>

                    <div className="text">
                      <span>
                        Nous vous accompagnons dans la clarification de votre
                        idée pour mieux appréhender le cœur de votre projet.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-pencil" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Conception</h4>
                    </div>

                    <div className="text">
                      <span>
                        Représenter son projet est une méthode efficace pour sa
                        construction. Docovery se charge de vous aider à mieux
                        conceptualiser votre projet.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-code" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Dévéloppement</h4>
                    </div>

                    <div className="text">
                      <span>
                        {
                          "L'équipe talentueuse de Docovery crée des solutions sur mesure pour votre projet."
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-house" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Service après vente</h4>
                    </div>

                    <div className="text">
                      <span>
                        Un support continu est assuré par le service après-vente
                        dédié, résolvant rapidement toute question ou
                        préoccupation.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-tools" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Maintenance</h4>
                    </div>

                    <div className="text">
                      <span>
                        Un service de maintenance proactif effectue des
                        contrôles réguliers et applique les mises à jour
                        nécessaires pour maintenir votre système en parfait état
                        de fonctionnement.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="box-part text-center">
                    <i className="bi bi-book" aria-hidden="true"></i>

                    <div className="title">
                      <h4>Formation</h4>
                    </div>

                    <div className="text">
                      <span>
                        Des formations personnalisées adaptées à vos besoins
                        spécifiques vous permettent de maîtriser pleinement vos
                        outils technologiques.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonial section-padding">
          <div className="container">
               <div className="row">

                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="client-image" data-aos="fade-up">
                          <Image src={avatar} className="img-fluid w-75 h-75" alt="website" width={916} height={836} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-7 col-12">
                      <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Client satisfait </h4>

                      <div className="quote" data-aos="fade-up" data-aos-delay="200"></div>

                      <h5 className="mb-4" data-aos="fade-up" data-aos-delay="300">{"Je suis absolument ravi de l'application développée par Docovery ! C'est exactement ce que je cherchais. L'interface est conviviale et intuitive, rendant l'utilisation de l'application simple et agréable. Encore une fois, un grand merci pour cette expérience client remarquable !"}</h5>

                      <p data-aos="fade-up" data-aos-delay="400">
                        <strong>John Doe</strong>

                        <span className="mx-1">/</span>

                        <small>Amani (CEO)</small>
                      </p>
                    </div>

               </div>
          </div>
     </section>


     <div className="container cont-team mb-5">
      <div className="row justify-content-center team-items">
        <h2 className="mb-5 text-center" data-aos="fade-up">
          {"L'équipe"} <strong>Docovery</strong>
        </h2>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white d-flex align-items-center justify-content-center ">
            <div className="w-100">
              <Image
                src="/david.png"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center p-4">
              <p className="name">David BANITONGWA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <a href={socialTeam.david.twitter}>
                    <span className="bi bi-twitter"></span>
                  </a>
                </li>
                <li className="icon mx-2">
                  <a href={socialTeam.david.github}>
                    <span className="bi bi-github"></span>
                  </a>
                </li>
                <li className="icon ">
                  <a href={socialTeam.david.linkedin}>
                    <span className="bi bi-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white  d-flex align-items-center justify-content-center">
            <div className="w-100">
              <Image
                src="/omari.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center p-4">
              <p className="name">Omari KAYUMBA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <a href={socialTeam.omari.twitter}>
                    <span className="bi bi-twitter"></span>
                  </a>
                </li>
                <li className="icon mx-2">
                  <a href={socialTeam.omari.github}>
                    <span className="bi bi-github"></span>
                  </a>
                </li>
                <li className="icon ">
                  <a href={socialTeam.omari.linkedin}>
                    <span className="bi bi-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 className="text-white">
              Building <strong>solutions</strong>, Shaping the <strong>future</strong>.
            </h1>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12"
          >
            <h4 className="my-4">Nous contacter</h4>

            <p className="mb-1">
              <i className="bi bi-phone me-2 footer-icon"></i>
              +216 54482172
            </p>

            <p className="mb-1">
              <i className="bi bi-phone me-2 footer-icon"></i>
              +216 56609671
            </p>

            <p>
              <a href="mailto:docovery@outlook.com">
                <i className="bi bi-envelope-fill me-2 footer-icon"></i>
                docovery@outlook.com
              </a>
            </p>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12"
          >
            <h4 className="my-4">Où sommes-nous ?</h4>

            <p className="mb-1">
              <i className="bi bi-home mr-2 footer-icon"></i>
              Tunis, Tunisie
            </p>
          </div>

          <div
            className="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
          >
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} Docovery
            </p>
          </div>

          <div
            className="col-lg-4 mx-lg-auto col-md-6 col-12"
          >
            <ul className="footer-link text-center">
              <li>
                <a href="#">Nous rejoindre</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 mx-lg-auto col-md-6 col-12"
          >
            <ul className="social-icon text-center">
              <li>
                <a href={socialTeam.docovery.instagram} className="bi bi-instagram"></a>
              </li>
              <li>
                <a href={socialTeam.docovery.facebook} className="bi bi-facebook"></a>
              </li>
              <li>
                <a href={socialTeam.docovery.linkedin} className="bi bi-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    </>
  );
}
