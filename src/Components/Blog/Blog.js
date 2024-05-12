import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import Card from "./Card";
import img from "../../assets/svg/clipart-dodecagon-connections-512x512-ef2e.png";
import { motion } from "framer-motion";
import En from "../../data/Blog_En";
import Fr from "../../data/Blog_Fr";
import Sp from "../../data/Blog_Sp";
import Ge from "../../data/Blog_Ge";
import In from "../../data/Blog_In";
import It from "../../data/Blog_It";
import Po from "../../data/Blog_Po";
import Tu from "../../data/Blog_Tu";
import Da from "../../data/Blog_Da";
import Ru from "../../data/Blog_Ru";
import Ch from "../../data/Blog_Ch";
import Ko from "../../data/Blog_Ko";
import Ja from "../../data/Blog_Ja";
import Ar from "../../data/Blog_Ar";
const WorkContainer = styled.div`
  background-color: ${props => props.theme.text};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;
const MainWork = styled(motion.ul)`
  position: fixed;
  top: 20%;
  left: calc(10rem + 15vw);
  display: flex;
  gap: 30px;
`;
const Rotate = styled.span`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  background-color: ${props => props.theme.body};
  border-radius: 50%;
`;
const Logo = styled.h2`
  font-weight: 700;
  font-size: 210px;
  position: fixed;
  top: 12%;
  right: 6%;
  color: ${props => props.theme.body};
  opacity: 0.1;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const Work = () => {
  const ref = useRef(null);
  const rotateRef = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      rotateRef.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <WorkContainer>
      <PowerButton />
      <LogoComponents theme={"light"} />
      <SocialIcon theme={"light"} />
      <Logo>BLOG</Logo>
      <MainWork ref={ref} variants={container} initial="hidden" animate="show">
        {(document.querySelector("html").lang === "en"
          ? En
          : document.querySelector("html").lang === "fr"
          ? Fr
          : document.querySelector("html").lang === "sp"
          ? Sp
          : document.querySelector("html").lang === "ge"
          ? Ge
          : document.querySelector("html").lang === "ar"
          ? Ar
          : document.querySelector("html").lang === "ja"
          ? Ja
          : document.querySelector("html").lang === "ch"
          ? Ch
          : document.querySelector("html").lang === "ko"
          ? Ko
          : document.querySelector("html").lang === "tu"
          ? Tu
          : document.querySelector("html").lang === "in"
          ? In
          : document.querySelector("html").lang === "it"
          ? It
          : document.querySelector("html").lang === "po"
          ? Po
          : document.querySelector("html").lang === "da"
          ? Da
          : document.querySelector("html").lang === "ru"
          ? Ru
          : En
        ).map(item => (
          <Card key={item} data={item} />
        ))}
      </MainWork>
      <Rotate ref={rotateRef}>
        <img src={img} alt="" style={{ width: 80, height: 80 }} />
      </Rotate>
    </WorkContainer>
  );
};

export default Work;
