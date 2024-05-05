import React from "react";
import { lightThem } from "../../global/Thems";
import styled from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import { Design, Develope } from "../AllSvg/AllSvg";
import { useTranslation } from "react-i18next";
const SkillContainer = styled.div`
  background-color: ${props => props.theme.body};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10%;
  height: 100vh;
  z-index: 2;
  @media (max-width: 1085px) {
    height: 100%;
  }
`;
const AllMain = styled.div`
  gap: 150px;
  display: flex;
  align-items: center;
  @media (max-width: 1085px) {
    gap: 30px;
    flex-direction: column;
    margin-top: 100px;
  }
`;
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  width: 50%;
  height: 400px;
  padding: 40px;
  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  @media (max-width: 1080px) {
    padding: 40px 20px;
  }
  @media (max-width: 920px) {
    width: 50%;
    height: 370px;
    padding: 20px;
  }
  @media (max-width: 790px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  img {
    width: 50px;
  }

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }
`;
const Span = styled.h2`
  font-size: calc(0.5em + 1.5vw);
  font-weight: 600;
`;
const Disc = styled.p`
  margin: 20px 0;
  line-height: 30px;
  font-size: calc(0.5em + 1.2vw);
`;
const Ul1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  li {
    margin: 10px 0;
    font-size: calc(0.5em + 1.2vw);

    font-weight: 600;
    transform: translateX(40px);
  }
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: calc(0.5em + 1.2vw);
`;
const Skill = styled.h3`
  font-size: calc(0.5em + 1.2vw);
  margin: 10px 0;
  transform: translateX(30px);
  line-height: 30px;
  @media (max-width: 1030px) {
    transform: translateX(20px);
  }
  @media (max-width: 670px) {
    transform: translateX(0px);
  }
`;
const Logo = styled.h3`
  font-size: calc(7em + 4vw);
  position: fixed;
  bottom: -3rem;
  right: 400px;
  color: ${props => props.theme.text};
  opacity: 0.1;
  @media (max-width: 800px) {
    right: 300px;
  }
  @media (max-width: 680px) {
    bottom: -2.5rem;
    font-size: calc(5em + 4vw);
    right: 200px;
  }
  @media (max-width: 570px) {
    bottom: -1.5rem;
    font-size: calc(4em + 4vw);
  }
  @media (max-width: 420px) {
    right: 200px;
  }
`;
const MySkills = () => {
  const { t } = useTranslation();
  return (
    <SkillContainer theme={lightThem}>
      <Box>
        <PowerButton />
        <Logo>{t("Skills")}</Logo>
        <LogoComponents theme={"dark"} />
        <SocialIcon theme={"dark"} />
        <AllMain>
          <Main>
            <Title>
              <Design width={40} height={40} />
              <Span>{t("Designer")}</Span>
            </Title>

            <Disc>{t("DescriptionDesign")}</Disc>
            <Ul1>
              <H2>{t("H2Design")}</H2>
              <ul>
                <li>{t("Li1WebDesign")}</li>
                <li>{t("Li2WebDesign")}</li>
              </ul>
            </Ul1>
            <Ul1>
              <H2>{t("ScendWebDesign")}</H2>
              <ul>
                <li>{t("Figma")}</li>
              </ul>
            </Ul1>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} />
              <Span
              // style={{
              //   fontSize: `${
              //     document.querySelector("html").lang === "ge"
              //       ? "20px"
              //       : "calc(0.5em + 1.5vw)"
              //   }`,
              // }}
              >
                {t("FrontEnd")}
              </Span>
            </Title>

            <Disc>{t("DescriptionFront")}</Disc>
            <Ul1>
              <H2> {t("H2Front")}</H2>
              <Skill>{t("SkillsFront")}</Skill>
            </Ul1>
            <Ul1>
              <H2> {t("Li2WebFront")}</H2>
              <Skill>{t("Git")}</Skill>
            </Ul1>
          </Main>
        </AllMain>
      </Box>
    </SkillContainer>
  );
};

export default MySkills;
