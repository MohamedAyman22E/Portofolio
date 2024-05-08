import React from "react";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import styled from "styled-components";
import img from "../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import AnchorContainer from "./Anchor";
import { motion } from "framer-motion";
import En from "../../data/Work_En";
import Fr from "../../data/Work_Fr";
import Sp from "../../data/Work_Sp";
import WorkContent from "./WorkContent";
import { useTranslation } from "react-i18next";
import Ge from "../../data/Work_Ge";
import Ch from "../../data/Work_Ch";
import KO from "../../data/Work_Ko";
import Ar from "../../data/Work_Ar";
import Ja from "../../data/Work_Ja";
import Da from "../../data/Work_Da";
import In from "../../data/Work_In";
import It from "../../data/Work_It";
import Po from "../../data/Work_Po";
import Ru from "../../data/Work_Ru";
import Tu from "../../data/Work_Tu";
const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${props => `rgba(${props.theme.bodyRgba},.8)`};
  padding-bottom: 5rem;
  position: relative;
`;
const Logo = styled.h2`
  font-weight: 700;
  font-size: 110px;
  position: fixed;
  top: 12%;
  left: 6%;
  color: ${props => `rgba(${props.theme.text},.8)`};
  opacity: 0.2;
  @media (max-width: 850px) {
    font-size: 90px;
  }
  @media (max-width: 750px) {
    font-size: 80px;
  }
  @media (max-width: 650px) {
    font-size: 70px;
  }
  @media (max-width: 550px) {
    font-size: 60px;
  }
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 3rem;
`;
const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  z-index: 1;
  width: 90%;
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
  const { t } = useTranslation();

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <PowerButton />
        <LogoComponents theme={"dark"} />
        <SocialIcon theme={"dark"} />
        <AnchorContainer />
        <Logo>{t("Work")}</Logo>
        <Center>
          <Grid>
            {(document.querySelector("html").lang === "en"
              ? En
              : document.querySelector("html").lang === "fr"
              ? Fr
              : document.querySelector("html").lang === "sp"
              ? Sp
              : document.querySelector("html").lang === "ge"
              ? Ge
              : document.querySelector("html").lang === "ch"
              ? Ch
              : document.querySelector("html").lang === "ko"
              ? KO
              : document.querySelector("html").lang === "ar"
              ? Ar
              : document.querySelector("html").lang === "ja"
              ? Ja
              : document.querySelector("html").lang === "da"
              ? Da
              : document.querySelector("html").lang === "in"
              ? In
              : document.querySelector("html").lang === "it"
              ? It
              : document.querySelector("html").lang === "po"
              ? Po
              : document.querySelector("html").lang === "ru"
              ? Ru
              : document.querySelector("html").lang === "tu"
              ? Tu
              : En
            ).map(item => (
              <WorkContent key={item.id} blog={item} />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Work;
