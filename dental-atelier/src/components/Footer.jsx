import React, { useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    // Enables the hidden animation states only when JS is ready
    footer.classList.add("footer-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            footer.classList.add("footer-visible");
          });

          // Animate only once
          observer.unobserve(footer);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-container">

        {/* =====================================================
            BRAND AREA
        ===================================================== */}
        <div className="footer-brand-area">

          <div className="footer-brand">
            THE DENTAL
            <br />
            ATELIER
          </div>

          <div className="footer-divider" aria-hidden="true"></div>

          <div className="footer-lab">
            Abu Dhabi Dental
            <br />
            Laboratory
          </div>

        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <nav
          className="footer-navigation"
          aria-label="Footer navigation"
        >
          <div className="footer-nav-row">

            <a href="/" className="footer-nav-link">
              HOME
            </a>

            <a href="/about" className="footer-nav-link">
              ABOUT US
            </a>

            <a href="/services" className="footer-nav-link">
              SERVICE &amp; FACILITIES
            </a>

            <a href="/gallery" className="footer-nav-link">
              GALLERY
            </a>

          </div>

          <a
            href="/contact"
            className="footer-contact-link"
          >
            CONTACT
          </a>
        </nav>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}
        <div className="footer-copyright">
          © 2026 The Dental Atelier. All rights
          <br className="copyright-break" />
          reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;