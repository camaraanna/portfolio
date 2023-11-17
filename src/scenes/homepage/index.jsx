import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Headline from "../../components/headline";
import SelectedWork from "../../components/selectedWork";
import Navbar from "../navbar";

export const HomePage = () => {
  const { scrollY } = useScroll();

  // Adjust the easing function for smoother animation
  const y1 = useTransform(scrollY, [0, 300], [0, 300]);
  const y2 = useTransform(scrollY, [0, 20], [0, -230]);

  return (
    <>
      <div>
        <motion.div style={{ y: y1, ease: "easeInOut" }}>
          <Headline style={{ ease: "easeInOut" }}/>
        </motion.div>

        <motion.div style={{ y: y2, ease: "easeInOut"}}>
          <SelectedWork />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
