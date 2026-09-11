import { useEffect, useRef } from "react";
import "./About.css";
import profileImage from "../assets/images/about.png";

function AboutUs() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("about-visible");

            // Run animation only once
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="about-us"
      id="about-us"
      ref={aboutRef}
    >
      <div className="about-us-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="about-us-content">

          {/* EYEBROW */}
          <span className="about-eyebrow">
            ABOUT US
          </span>

          {/* HEADING */}
          <h2 className="about-title">

            <span className="about-title-line">
              <span className="about-title-inner">
                Where Bio-Mechanics
              </span>
            </span>

            <span className="about-title-line">
              <span className="about-title-inner">
                Become Living Sculpture.
              </span>
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="about-description">
            Every curve, mamelon, and micro-texture is rendered by
            hand under surgical loupes. We sculpt authentic optical
            refraction, replicating the opalescent vitality of natural
            youth.
          </p>

          {/* QUOTE */}
          <blockquote className="about-quote">

            <span className="quote-line"></span>

            <p>
              “True luxury in dental artistry is indistinguishable
              <br className="quote-desktop-break" />
              from nature itself.”
            </p>

          </blockquote>

          {/* STATISTICS */}
          <div className="about-statistics">

            <div className="about-stat about-stat-1">

              <div className="stat-value">
                1.54 RI
              </div>

              <div className="stat-label">
                NATURAL REFRACTION INDEX
              </div>

            </div>

            <div className="statistics-divider"></div>

            <div className="about-stat about-stat-2">

              <div className="stat-value">
                0.3 mm
              </div>

              <div className="stat-label">
                MINIMAL PREP TOLERANCE
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT PROFILE CARD
        ================================================= */}

        <article className="about-profile-card">

          <img
            src={profileImage}
            alt="Dental Atelier CEO"
            className="about-profile-image"
          />

          <div className="profile-overlay"></div>

          <div className="profile-information">

            <div className="profile-person">

              <span className="profile-role">
                CEO
              </span>

              <h3>
                Mr. Samer Ali
              </h3>

            </div>

            <span className="profile-location">
              ABU DHABI, UAE
            </span>

          </div>

        </article>

      </div>
    </section>
  );
}

export default AboutUs;