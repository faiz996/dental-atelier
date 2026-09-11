import "./Contact.css";
import React, { useEffect, useRef } from "react";

import contactMap from "../assets/images/contact-map.png";

import phoneIcon from "../assets/icons/phone.png";
import locationIcon from "../assets/icons/location.png";
import emailIcon from "../assets/icons/email.png";
import callIcon from "../assets/icons/call.png";
import directionsIcon from "../assets/icons/directions.png";

function ReachUs() {
  const reachUsRef = useRef(null);

  useEffect(() => {
    const section = reachUsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reach-visible");
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
      className="reach-us"
      ref={reachUsRef}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="reach-us-header">
        <p className="reach-us-eyebrow">
          GLOBAL PRESENCE &amp; CONCIERGE
        </p>

        <h1 className="reach-us-title">Reach Us</h1>

        <p className="reach-us-description">
          Please be free to contact us anytime. We will be pleased to assist
          <br className="desktop-break" />
          you and present our bespoke dental services.
        </p>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="reach-us-content">

        {/* ===================================================
            MAP
        =================================================== */}
        <div className="reach-map">
          <img
            src={contactMap}
            alt="Abu Dhabi location map"
            className="reach-map-image"
          />
        </div>

        {/* ===================================================
            CONTACT CARD
        =================================================== */}
        <article className="contact-card">

          <div className="contact-card-header">
            <p className="contact-eyebrow">
              CONTACT INFO
            </p>

            <h2>Abu Dhabi</h2>

            <p className="contact-description">
              Please be free to contact us anytime. We will be pleased to
              assist you and present our dental services.
            </p>
          </div>

          <div className="contact-divider" />

          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <div className="contact-details">

            {/* Phone */}
            <div className="contact-row">
              <div className="contact-icon-box">
                <img
                  src={phoneIcon}
                  alt=""
                  className="contact-icon"
                />
              </div>

              <div className="contact-row-content">
                <p className="contact-label">
                  DUBAI BRANCH
                </p>

                <a
                  href="tel:+97143427576"
                  className="contact-value phone-value"
                >
                  +971(4)342-7576
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-row">
              <div className="contact-icon-box">
                <img
                  src={locationIcon}
                  alt=""
                  className="contact-icon"
                />
              </div>

              <div className="contact-row-content">
                <p className="contact-label">
                  ADDRESS
                </p>

                <p className="contact-value address-value">
                  Century Plaza Rd. - Abu Dhabi - UAE
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-row">
              <div className="contact-icon-box">
                <img
                  src={emailIcon}
                  alt=""
                  className="contact-icon"
                />
              </div>

              <div className="contact-row-content">
                <p className="contact-label">
                  DIRECT EMAIL
                </p>

                <a
                  href="mailto:info@qualident-online.com"
                  className="contact-value email-value"
                >
                  info@qualident-online.com
                </a>
              </div>
            </div>

          </div>

          <div className="contact-divider bottom-divider" />

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}
          <div className="contact-actions">

            <a
              href="tel:+97143427576"
              className="contact-button call-button"
            >
              <img
                src={callIcon}
                alt=""
                className="button-icon"
              />

              <span>CALL ATELIER</span>
            </a>

            <a
              href="#"
              className="contact-button directions-button"
            >
              <img
                src={directionsIcon}
                alt=""
                className="button-icon"
              />

              <span>GET DIRECTIONS</span>
            </a>

          </div>

        </article>
      </div>
    </section>
  );
}

export default ReachUs;