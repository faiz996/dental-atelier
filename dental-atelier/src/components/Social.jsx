import instagramIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

import "./Social.css";
import React, { useEffect, useRef } from "react";

function SocialAtelier() {
  const socialRef = useRef(null);

  useEffect(() => {
    const section = socialRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("social-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
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
      className="social-atelier"
      ref={socialRef}
    >
      <header className="social-atelier-heading">
        <p className="social-eyebrow">
          DIGITAL DISPATCH &amp; SOCIAL ATELIER
        </p>

        <h1>
          Connect With Our Private Atelier
          <span>Anywhere in the World.</span>
        </h1>

        <p className="social-description">
          Follow our daily case dispatches, master ceramist macro documentation, or message our
          <br className="desktop-description-break" />
          direct chairside laboratory concierge.
        </p>
      </header>

      <div className="social-cards">

        {/* Instagram */}
        <article className="social-card instagram-card">
          <div className="social-card-top">
            <div className="social-icon-box">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </div>

            <span className="social-pill">
              @THEDENTALATELIER
            </span>
          </div>

          <div className="social-card-content">
            <h2>Instagram</h2>

            <div className="social-divider" />

            <a
              href="#"
              className="social-action"
              aria-label="Follow on Instagram"
            >
              <span>FOLLOW ON INSTAGRAM</span>

              <span className="arrow-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </article>

        {/* Facebook */}
        <article className="social-card facebook-card">
          <div className="social-card-top">
            <div className="social-icon-box">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="social-icon"
              />
            </div>

            <span className="social-pill">
              RESTORATIVE COMMUNITY
            </span>
          </div>

          <div className="social-card-content">
            <h2>Facebook</h2>

            <div className="social-divider" />

            <a
              href="#"
              className="social-action"
              aria-label="Join Facebook page"
            >
              <span>JOIN FACEBOOK PAGE</span>

              <span className="arrow-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </article>

        {/* WhatsApp */}
        <article className="social-card whatsapp-card">
          <div className="social-card-top">
            <div className="social-icon-box">
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="social-icon"
              />
            </div>

            <span className="social-pill whatsapp-pill">
              <span className="status-dot" />
              LIVE 24/7 CONCIERGE
            </span>
          </div>

          <div className="social-card-content">
            <h2>WhatsApp Direct</h2>

            <div className="social-divider" />

            <a
              href="#"
              className="social-action"
              aria-label="Message on WhatsApp"
            >
              <span>MESSAGE ON WHATSAPP</span>

              <span className="chat-icon" aria-hidden="true">
                <span />
              </span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default SocialAtelier;