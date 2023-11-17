import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/SelectedWork.css";

export const SelectedWork = () => {

 
  return (
    <>

        <div style={{ height: "0px" }} class="section-hero-static-visibility"></div>
        <section class="section ">
          <div class="container">
            <div  class=" grid-work-title">
              <div id="w-node-_8a28ff34-b847-5e1b-428a-dcafc446d9b8-9f7e3d2e" class="title">
                <h2 class="display-l">Selected Work</h2>
              </div>
              <div id="social-list" class="social-list">
                <a href="https://linkedin.com" target="_blank" class="link-with-icon w-inline-block">
                  <div>LinkedIn</div>
                  <div class="icon-s w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.724 16.724" fill="currentColor">
                      <path d="M2.922,6.681,6.438,10.2a.8.8,0,0,1,.25.6.854.854,0,0,1-.265.6.888.888,0,0,1-.6.246.8.8,0,0,1-.6-.25L.243,6.428a.79.79,0,0,1-.185-.281.923.923,0,0,1,0-.646A.792.792,0,0,1,.243,5.22L5.22.243A.809.809,0,0,1,5.815,0a.858.858,0,0,1,.609.243.835.835,0,0,1,.258.611.835.835,0,0,1-.258.611l-3.5,3.5h8.221a.861.861,0,0,1,.609,1.466.828.828,0,0,1-.609.248Z" transform="translate(16.724 8.239) rotate(135)"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://behance.net" target="_blank" class="link-with-icon w-inline-block">
                  <div>Behance</div>
                  <div class="icon-s w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.724 16.724" fill="currentColor">
                      <path d="M2.922,6.681,6.438,10.2a.8.8,0,0,1,.25.6.854.854,0,0,1-.265.6.888.888,0,0,1-.6.246.8.8,0,0,1-.6-.25L.243,6.428a.79.79,0,0,1-.185-.281.923.923,0,0,1,0-.646A.792.792,0,0,1,.243,5.22L5.22.243A.809.809,0,0,1,5.815,0a.858.858,0,0,1,.609.243.835.835,0,0,1,.258.611.835.835,0,0,1-.258.611l-3.5,3.5h8.221a.861.861,0,0,1,.609,1.466.828.828,0,0,1-.609.248Z" transform="translate(16.724 8.239) rotate(135)"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://dribbble.com" target="_blank" class="link-with-icon w-inline-block">
                  <div>Dribbble</div>
                  <div class="icon-s w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.724 16.724" fill="currentColor">
                      <path d="M2.922,6.681,6.438,10.2a.8.8,0,0,1,.25.6.854.854,0,0,1-.265.6.888.888,0,0,1-.6.246.8.8,0,0,1-.6-.25L.243,6.428a.79.79,0,0,1-.185-.281.923.923,0,0,1,0-.646A.792.792,0,0,1,.243,5.22L5.22.243A.809.809,0,0,1,5.815,0a.858.858,0,0,1,.609.243.835.835,0,0,1,.258.611.835.835,0,0,1-.258.611l-3.5,3.5h8.221a.861.861,0,0,1,.609,1.466.828.828,0,0,1-.609.248Z" transform="translate(16.724 8.239) rotate(135)"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="container">
            <div style={{ opacity: " 0; -webkit-transform: translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); -moz-transform: translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); -ms-transform: translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); transform: translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} class="projects-collection-list-wrapper w-dyn-list">
              <div role="list" class="grid grid-projects w-dyn-items">
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/walking-home" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img className="img-card"alt="Walking Home" loading="eager" src="/assets/img/bird-01.jpg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>1</div>
                      </div>
                      <h2 class="project-card-heading">Walking Home</h2>
                    </div>
                  </a>
                </div>
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/night-shift" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img   className="img-card" alt="Night Shift" loading="eager" src="/assets/img/a-01-01.jpg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" style={{ display: "none" }} class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>2</div>
                      </div>
                      <h2 class="project-card-heading">Night Shift</h2>
                    </div>
                  </a>
                </div>
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/autumn-streets" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img  className="img-card" alt="Autumn Streets" loading="eager" src="/assets/img/Poste insta-01-01.jpg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" style={{ display: "none" }} class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>3</div>
                      </div>
                      <h2 class="project-card-heading">Autumn Streets</h2>
                    </div>
                  </a>
                </div>
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/icy" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img   className="img-card" alt="Icy" loading="eager" src="/assets/img/651aa72421168f84944f9bbd_thumb__icy.svg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" style={{ display: "none" }} class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>4</div>
                      </div>
                      <h2 class="project-card-heading">Icy</h2>
                    </div>
                  </a>
                </div>
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/under-construction" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img  className="img-card" alt="Under Construction" loading="eager" src="/assets/img/651aa746699873a4df1a7f37_thumb__under-construction.svg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" style={{ display: "none" }} class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>5</div>
                      </div>
                      <h2 class="project-card-heading">Under Construction</h2>
                    </div>
                  </a>
                </div>
                <div id="card" role="listitem" class="project-card-wrapper w-dyn-item">
                  <a href="/project/last-night" class="project-card w-inline-block">
                    <div class="project-card-image">
                      <img  className="img-card" alt="Last Night" loading="eager" src="/assets/img/651aa768f9507b27bd3806ff_thumb__last-night.svg" />
                      <div data-w-id="d7f56395-4a68-e48b-a019-6f47f8ece79e" style={{ display: "none" }} class="project-card-button">
                        <div class="button-icons-wrapper">
                          <div class="button-icons">
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m" />
                            <img src="/assets/img/651abb139a7018a53240f7de_icon__arrow-north-east--black.svg" loading="lazy" alt="" class="icon-m icon-m-reveal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="project-card-details">
                      <div class="project-number">
                        <div>0</div>
                        <div>6</div>
                      </div>
                      <h2 class="project-card-heading">Last Night</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>





            
          </div>
        </section>
   
    </>
  );
};

export default SelectedWork;
