import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/headline.css";

export const Headline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="headline">
        <div className="w-layout-grid grid grid-hero">
          <div id="w-node-a3a997de-fd90-ec5d-5db4-6d4bffe6d991-9f7e3d2e" className="subheader">
            Camara Anna —
          </div>
          <div id="w-node-c1102154-8068-f0d7-58be-2254d5c6fd7c-9f7e3d2e" className="hero-heading-lines">
            <div className="hero-heading-line">
              <div  className="hero-heading-line" >
                <h1 className="display-xl">Illustrator &amp;</h1>
              </div>
              <div className="hero-heading-line">
                <h1 data-w-id="c994d533-eb6e-1c2c-a80a-c8394185ab3e" className="display-xxl">
                  Visual designer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Headline;
