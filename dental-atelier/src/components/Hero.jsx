import React, { useEffect, useRef } from "react";
import "./Hero.css";

import heroTeeth from "../assets/images/hero1.png";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroSection = heroRef.current;

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroSection.classList.add("hero-visible");
          } else {
            heroSection.classList.remove("hero-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
      id="home"
      className="atelier-hero"
      ref={heroRef}
    >
      <div className="hero-container">

        {/* =========================================
            LEFT IMAGE
        ========================================= */}

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src={heroTeeth}
              alt="Dental restoration"
              className="hero-teeth"
            />
          </div>
        </div>


        {/* =========================================
            RIGHT CONTENT
        ========================================= */}

        <div className="hero-content">

          {/* TITLE */}

          <h1 className="hero-title">
            <span className="title-line">
              Precision <span className="gold-text">Crafted.</span>
            </span>

            <span className="title-line">
              Beautifully Restored.
            </span>
          </h1>


          {/* DESCRIPTION */}

          <p className="hero-description">
            Advanced digital dental solutions combining precision
            technology, expert craftsmanship, and exceptional
            aesthetics.
          </p>


          {/* BUTTON */}

          <a
            href="#contact"
            className="hero-button"
          >
            <span>PLACE YOUR ORDER NOW</span>
          </a>

        </div>

      </div>
    </main>
  );
}

export default Hero;