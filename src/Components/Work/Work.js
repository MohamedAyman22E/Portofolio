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
        <Logo>WORK</Logo>
        <Center>
          <Grid>
            {(document.querySelector("html").lang === "en"
              ? En
              : document.querySelector("html").lang === "fr"
              ? Fr
              : document.querySelector("html").lang === "sp"
              ? Sp
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
