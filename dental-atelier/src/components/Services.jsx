import React, { useEffect, useRef } from "react";
import "./Services.css";

import zirconiaImage from "../assets/images/gallery-6.png";
import implantImage from "../assets/images/gallery-5.png";
import veneersImage from "../assets/images/gallery-1.png";
import fullArchImage from "../assets/images/gallery-4.png";

const services = [
  {
    category: "MULTI-LAYER",
    eyebrow: "MULTI-LAYERED TRANSLUCENT • UP TO 1.200 A MP",
    title: "Zirconia Crowns & Bridges",
    description:
      "Surgically milled monolithic and micro-cutback anterior & posterior bridges, mimicking genuine enamel refractive index with seamless marginal adaptation.",
    image: zirconiaImage,
  },
  {
    category: "IMPLANTOLOGY",
    eyebrow: "CUSTOM TITANIUM + ZIRCONIA BASE",
    title: "Crowns Over Implants",
    description:
      "Bespoke screw-retained and custom abutment restorations tailored to emergence profiles with zero passive strain on fixture interfaces.",
    image: implantImage,
  },
  {
    category: "HAUTE ESTHETICS",
    eyebrow: "0.2MM ULTRA-THIN FELDSPATHIC & E.MAX PRESS",
    title: "Master Veneers",
    description:
      "Individually hand-stratified porcelain veneers featuring opalescent halos, polychromatic mamelons, and contact-less feather margins.",
    image: veneersImage,
  },
  {
    category: "FULL ARCH HYBRID",
    eyebrow: "HYBRID MONOLITHIC TITANIUM BAR ARCH",
    title: "All-on-X Full Arch Solutions",
    description:
      "Definitive immediate-load full arch prosthetics with bio-mimetic gingival aesthetics and computerized passive titanium beam architecture.",
    image: fullArchImage,
  },
];

function ServiceCard({ service }) {
  return (
    <article className="service-card">

      <div className="service-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          className="service-image"
        />

        <span className="service-image-label">
          {service.category}
        </span>
      </div>

      <div className="service-card-content">

        <div className="service-card-eyebrow">
          {service.eyebrow}
        </div>

        <h3 className="service-card-title">
          {service.title}
        </h3>

        <p className="service-card-description">
          {service.description}
        </p>

      </div>
    </article>
  );
}

function Service() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const section = servicesRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("services-visible");

          // Run animation only once
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
      className="services-section"
      ref={servicesRef}
    >
      <div className="services-container">

        {/* SECTION HEADER */}
        <header className="services-header">

          <div className="services-heading-wrapper">

            <span className="services-label">
              SERVICES AND FACILITIES
            </span>

            <h2 className="services-title">
              Bespoke Restorative Craftsmanship
            </h2>

          </div>

          <p className="services-intro">
            Sub-micron seating accuracy meets master dental artistry across
            <br className="desktop-only" />
            single-unit aesthetics and full-arch biomechanics.
          </p>

        </header>


        {/* SERVICE CARDS */}
        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Service;