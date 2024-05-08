import React from "react";
import styled from "styled-components";
import videoMe from "../../assets/video/07bf80f9847c4a89bcc02f22615681aa.webm";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Box = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 65vw;
  height: 55vh;
  transform: translate(-50%, -50%);
  background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      center bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      center top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1000000000;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  @media (max-width: 630px) {
    flex-direction: column-reverse;
    background: linear-gradient(
          to right,
          ${props => props.theme.body}100%,
          ${props => props.theme.text}0%
        )
        bottom,
      linear-gradient(
          to right,
          ${props => props.theme.body}100%,
          ${props => props.theme.text}100%
        )
        right;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  @media (max-width: 630px) {
    width: 100%;
  }
`;
const Text = styled.div`
  padding: 30px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${props => props.theme.body};
  font-size: calc(1em + 1.5vw);
  h3 {
    font-size: calc(0.5em + 1.5vw);
  }
  h6 {
    color: ${props => `rgb(${props.theme.bodyRgba},.6)`};
  }
  @media (max-width: 630px) {
    color: ${props => props.theme.text};
    h6 {
      color: ${props => props.theme.text};
    }
    padding: 30px 12px;
  }
`;
const Video = styled.div`
  position: absolute;
  bottom: -20%;
  left: 60px;
  video {
    width: 300px;
  }
  @media (max-width: 1060px) {
    left: 20px;
  }
  @media (max-width: 1010px) {
    bottom: -18%;
    left: 0px;
  }
  @media (max-width: 913px) {
    bottom: -15%;

    video {
      width: 250px;
    }
  }
  @media (max-width: 712px) {
    bottom: -10%;

    video {
      width: 220px;
    }
  }
  @media (max-width: 630px) {
    bottom: -158px;
    left: 12%;
    video {
      width: 300px;
    }
  }
  @media (max-width: 440px) {
    bottom: -85px;
    video {
      width: 223px;
    }
  }
  @media (max-width: 345px) {
    left: -2%;
    bottom: -85px;
    video {
      width: 223px;
    }
  }
`;
const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>{t("Hi")}</h1>
          <h3>{t("Name")}</h3>
          <h6>{t("Details")}</h6>
        </Text>
      </SubBox>
      <SubBox className="Two">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Video>
            <video src={videoMe} autoPlay loop></video>
          </Video>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Hero;
