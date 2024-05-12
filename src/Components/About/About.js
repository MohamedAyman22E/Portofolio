import React from "react";
import { DarkThem } from "../../global/Thems";
import styled, { keyframes } from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import imgMan from "../../assets/Images/spaceman.png";
import { useTranslation } from "react-i18next";
const SkillContainer = styled.div`
  background-color: ${props => props.theme.body};
`;
const Box = styled.div`
  padding: 0px 10%;
  height: 100vh;
  z-index: 2;
`;
const Main = styled.div`
  border: 2px solid ${props => props.theme.body};
  color: ${props => props.theme.body};
  width: 45%;
  padding: 40px;
  font-family: "Ubuntu Mono", monospace;
  position: absolute;
  top: 35%;
  left: 37%;
  transform: translate(-50%, -20%);
  z-index: 1;
  backdrop-filter: blur(20px);
  height: ${document.querySelector("html").lang === "ar"
    ? "340px"
    : document.querySelector("html").lang === "fr"
    ? "420px"
    : document.querySelector("html").lang === "sp"
    ? "400px"
    : document.querySelector("html").lang === "ge"
    ? "480px"
    : document.querySelector("html").lang === "in"
    ? "430px"
    : document.querySelector("html").lang === "it"
    ? "385px"
    : document.querySelector("html").lang === "po"
    ? "400px"
    : document.querySelector("html").lang === "tu"
    ? "420px"
    : document.querySelector("html").lang === "da"
    ? "400px"
    : document.querySelector("html").lang === "ru"
    ? "400px"
    : document.querySelector("html").lang === "ch"
    ? "330px"
    : document.querySelector("html").lang === "Ko"
    ? "420px"
    : document.querySelector("html").lang === "ja"
    ? "450px"
    : "380px"};
  @media (max-width: 1230px) {
    height: ${document.querySelector("html").lang === "en" ? "420px" : null};
  }
  @media (max-width: 1000px) {
    height: ${document.querySelector("html").lang === "ar"
      ? "400px"
      : document.querySelector("html").lang === "fr"
      ? "440px"
      : document.querySelector("html").lang === "ge"
      ? "500px"
      : document.querySelector("html").lang === "in"
      ? "500px"
      : document.querySelector("html").lang === "it"
      ? "410px"
      : document.querySelector("html").lang === "tu"
      ? "430px"
      : document.querySelector("html").lang === "ja"
      ? "470px"
      : "400px"};
  }

  @media (max-width: 880px) {
    height: ${document.querySelector("html").lang === "tu"
      ? "470px"
      : document.querySelector("html").lang === "ja"
      ? "480px"
      : document.querySelector("html").lang === "ge"
      ? "540px"
      : document.querySelector("html").lang === "sp"
      ? "440px"
      : "400px"};
  }
  @media (max-width: 800px) {
    left: 43%;
    width: 50%;
  }
  @media (max-width: 658px) {
    left: 52%;
    width: 60%;
  }
  @media (max-width: 495px) {
    height: ${document.querySelector("html").lang === "ko"
      ? "460px"
      : document.querySelector("html").lang === "ja"
      ? "440px"
      : document.querySelector("html").lang === "ge"
      ? "560px"
      : "450px"};
  }
  @media (max-width: 470px) {
    height: ${document.querySelector("html").lang === "fr"
      ? "460px"
      : document.querySelector("html").lang === "ge"
      ? "550px"
      : document.querySelector("html").lang === "it"
      ? "400px"
      : document.querySelector("html").lang === "tu"
      ? "500px"
      : document.querySelector("html").lang === "ru"
      ? "400px"
      : document.querySelector("html").lang === "ko"
      ? "500px"
      : document.querySelector("html").lang === "ja"
      ? "490px"
      : document.querySelector("html").lang === "sp"
      ? "480px"
      : "470px"};
  }
  @media (max-width: 421px) {
    padding: 20px;
    height: ${document.querySelector("html").lang === "fr"
      ? "440px"
      : document.querySelector("html").lang === "sp"
      ? "520px"
      : document.querySelector("html").lang === "ge"
      ? "570px"
      : document.querySelector("html").lang === "it"
      ? "440px"
      : document.querySelector("html").lang === "po"
      ? "450px"
      : document.querySelector("html").lang === "tu"
      ? "520px"
      : document.querySelector("html").lang === "ko"
      ? "530px"
      : document.querySelector("html").lang === "ja"
      ? "500px"
      : "485px"};
  }
  @media (max-width: 392px) {
    height: ${document.querySelector("html").lang === "fr"
      ? "480px"
      : document.querySelector("html").lang === "sp"
      ? "580px"
      : document.querySelector("html").lang === "ge"
      ? "600px"
      : document.querySelector("html").lang === "it"
      ? "520px"
      : document.querySelector("html").lang === "po"
      ? "470px"
      : document.querySelector("html").lang === "tu"
      ? "550px"
      : document.querySelector("html").lang === "ru"
      ? "400px"
      : document.querySelector("html").lang === "ch"
      ? "400px"
      : document.querySelector("html").lang === "ko"
      ? "540px"
      : document.querySelector("html").lang === "ja"
      ? "520px"
      : "510px"};
    top: ${document.querySelector("html").lang === "ge" ? "30%" : "35%"};
  }
`;
const Ul1 = styled.h2`
  font-size: calc(0.5em + 0.9vw);
  line-height: 30px;
  margin-top: ${document.querySelector("html").lang === "ar"
    ? "30px"
    : document.querySelector("html").lang === "fr"
    ? "40px"
    : document.querySelector("html").lang === "sp"
    ? "40px"
    : document.querySelector("html").lang === "ge"
    ? "40px"
    : document.querySelector("html").lang === "in"
    ? "40px"
    : document.querySelector("html").lang === "it"
    ? "35px"
    : document.querySelector("html").lang === "po"
    ? "40px"
    : document.querySelector("html").lang === "tu"
    ? "40px"
    : document.querySelector("html").lang === "da"
    ? "40px"
    : document.querySelector("html").lang === "ru"
    ? "40px"
    : document.querySelector("html").lang === "ch"
    ? "40px"
    : document.querySelector("html").lang === "Ko"
    ? "40px"
    : document.querySelector("html").lang === "ja"
    ? "40px"
    : "40px"};
  margin-bottom: 10px;
  @media (max-width: 960px) {
    margin-top: ${document.querySelector("html").lang === "ge"
      ? "30px"
      : document.querySelector("html").lang === "it"
      ? "40px"
      : document.querySelector("html").lang === "fr"
      ? "30px"
      : document.querySelector("html").lang === "ja"
      ? "30px"
      : document.querySelector("html").lang === "sp"
      ? "20px"
      : "40px"};
  }
  @media (max-width: 820px) {
    margin-top: ${document.querySelector("html").lang === "it"
      ? "30px"
      : document.querySelector("html").lang === "ja"
      ? "25px"
      : document.querySelector("html").lang === "fr"
      ? "20px"
      : document.querySelector("html").lang === "ja"
      ? "10px"
      : "35px"};
  }
  @media (max-width: 490px) {
    margin-top: ${document.querySelector("html").lang === "sp"
      ? "10px"
      : "40px"};
  }
  @media (max-width: 490px) {
    margin-top: ${document.querySelector("html").lang === "po"
      ? "20px"
      : document.querySelector("html").lang === "ja"
      ? "20px"
      : document.querySelector("html").lang === "fr"
      ? "15px"
      : document.querySelector("html").lang === "ge"
      ? "20px"
      : "40px"};
  }
  @media (max-width: 330px) {
    margin-top: ${document.querySelector("html").lang === "po"
      ? "20px"
      : document.querySelector("html").lang === "tu"
      ? "20px"
      : document.querySelector("html").lang === "ko"
      ? "25px"
      : document.querySelector("html").lang === "ja"
      ? "10px"
      : document.querySelector("html").lang === "fr"
      ? "5px"
      : "40px"};
  }
`;
const Logo = styled.h3`
  font-size: calc(7em + 4vw);
  position: fixed;
  top: 2.5rem;
  left: 100px;
  color: ${props => props.theme.body};
  opacity: 0.1;
  @media (max-width: 800px) {
    font-size: calc(6em + 4vw);
    top: 2.9rem;
  }
  @media (max-width: 700px) {
    font-size: calc(5em + 4vw);
    top: 3.1rem;
  }
  @media (max-width: 600px) {
    font-size: calc(4em + 4vw);
    top: 3.3rem;
  }
  @media (max-width: 500px) {
    font-size: calc(3em + 4vw);
    top: 3.5rem;
  }
  @media (max-width: 400px) {
    font-size: calc(2em + 4vw);
    top: 3.7rem;
  }
`;
const animate = keyframes`
  0%,100%{
    top: 40px;
  right: 120px;
  }
  50%{
    top: 80px;
  right: 80px;
  }
`;
const SpaceMan = styled.div`
  position: absolute;
  top: 80px;
  right: 80px;
  animation: ${animate} 5s linear infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;
const MySkills = () => {
  const { t } = useTranslation();
  return (
    <SkillContainer theme={DarkThem}>
      <Box>
        <PowerButton />
        <Logo>{t("About")}</Logo>
        <LogoComponents theme={"light"} />
        <SocialIcon theme={"light"} />
        <Main
          style={{
            direction:
              document.querySelector("html").lang === "ar" ? "rtl" : "ltr",
          }}
        >
          <Ul1>{t("AboutUL1")}</Ul1>
          <Ul1>{t("AboutUL2")}</Ul1>
          <Ul1>{t("AboutUL3")}</Ul1>
        </Main>
        <SpaceMan>
          <img src={imgMan} alt="" />
        </SpaceMan>
      </Box>
    </SkillContainer>
  );
};

export default MySkills;
