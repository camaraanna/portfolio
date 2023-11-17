import React, { useRef } from "react";
import { useInView } from "framer-motion";
import "../../Styles/footer.css";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // const myElementRef = useRef(null);

  // const applyTransformStyle = () => {
  //   const element = myElementRef.current;

  //   if (element) {
  //     element.style.transform = "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  //     element.style.transformStyle = "preserve-3d";
  //   }
  // };

  return (
    <>
      <footer class="section section-footer">
        <div class="container">
          <div class="w-layout-grid  grid-footer">
            <div id="w-node-_49160295-3c52-5cde-45e7-5ea421453d4f-21453d4c" class="w-layout-vflex footer-item">
              <a href="#" class="nav-brand w-inline-block">
                <img src="/assets/img/651a739a566fb29d3d95e7c1_logo__field--black.svg" loading="lazy" alt="Field logo" class="footer-logo" />
              </a>
            </div>
            <div id="w-node-_49160295-3c52-5cde-45e7-5ea421453d57-21453d4c" class="w-layout-vflex footer-item">
              <div class="footer-social-list">
                <div class="social-list-item">
                  <a href="/admin/style-guide">Style Guide</a>
                </div>
                <div class="social-list-item">
                  <a href="/admin/instructions">Instructions</a>
                </div>
                <div class="social-list-item">
                  <a href="/admin/licenses">Licenses</a>
                </div>
                <div class="social-list-item">
                  <a href="/admin/changelog">Changelog</a>
                </div>
                <div class="social-list-item">
                  <div>
                    Powered by{" "}
                    <a href="https://webflow.com" target="_blank" class="link-underline">
                      Webflow
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-_49160295-3c52-5cde-45e7-5ea421453d86-21453d4c" class="line"></div>
          </div>
        </div>
        <div class="container" ref={ref}>
          <img
            src="/assets/img/651acd1196050c6d3fc73630_img__footer-text.svg"
            loading="lazy"
            data-w-id="e1e4448b-52b9-0d48-8c3e-5879cf15aeb8"
            alt="Julian Kennedy 2023"
            class="footer-image"
            style={{
              transform: isInView ? "none" : "translateY(200px)",

              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          />
        </div>
      </footer>
      <a href="mailto:hello@yourdomain.com?subject=You've%20Got%20Mail!" className="contact-button w-inline-block">
        <div className="button-icons-wrapper">
          <div className="button-icons">
            <img src="/assets/img/651d2c1ed335df8b3a678cc7_icon__mail--white.svg" loading="lazy" alt="Contact" className="icon-m" />
            <img src="/assets/img/651d2c1ed335df8b3a678cc7_icon__mail--white.svg" loading="lazy" alt="Contact" className="icon-m icon-m-reveal" />
          </div>
        </div>
      </a>
    </>
  );
};
export default Footer;
