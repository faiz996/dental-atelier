import "./Gallery.css";
import React, { useEffect, useRef } from "react";

import galleryMain from "../assets/images/gallery-1.png";
import galleryPatient from "../assets/images/gallery-2.png";
import galleryTechnician from "../assets/images/gallery-3.png";
import galleryProsthetic from "../assets/images/gallery-4.png";
import galleryImplant from "../assets/images/gallery-5.png";

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const section = galleryRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("gallery-visible");
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
      className="atelier-gallery"
      ref={galleryRef}
    >
      <header className="gallery-heading">
        <span className="gallery-eyebrow">
          GALLERY
        </span>

        <h2 className="gallery-title">
          Atelier Gallery
        </h2>

        <p className="gallery-subtitle">
          Pure Biomimetic Form
        </p>

        <p className="gallery-description">
          Pure visual craft recorded under studio cross-polarized and
          <br className="gallery-desktop-break" />
          ambient atelier lighting.
        </p>
      </header>

      <div className="gallery-grid">

        <figure className="gallery-item gallery-item-main">
          <img
            src={galleryMain}
            alt="Dental veneers displayed on dark marble"
            loading="lazy"
          />
        </figure>

        <figure className="gallery-item gallery-item-patient">
          <img
            src={galleryPatient}
            alt="Smiling dental patient"
            loading="lazy"
          />
        </figure>

        <figure className="gallery-item gallery-item-technician">
          <img
            src={galleryTechnician}
            alt="Dental technician working with a ceramic restoration"
            loading="lazy"
          />
        </figure>

        <figure className="gallery-item gallery-item-prosthetic">
          <img
            src={galleryProsthetic}
            alt="Dental prosthetic displayed in a laboratory"
            loading="lazy"
          />
        </figure>

        <figure className="gallery-item gallery-item-implant">
          <img
            src={galleryImplant}
            alt="Ceramic dental implant restoration"
            loading="lazy"
          />
        </figure>

      </div>
    </section>
  );
}

export default Gallery;