import React, { useState } from "react";
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
import Korean from "../../data/Work_Ko";
import Ar from "../../data/Work_Ar";
import Ja from "../../data/Work_Ja";
import Da from "../../data/Work_Da";
import Indonesia from "../../data/Work_In";
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
  flex-direction: column;
  padding: 10rem 3rem;
  gap: 30px;
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
const AllBtn = styled.div`
  z-index: 1;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
const Btn = styled.button`
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 25px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-weight: 600;
  transition: all.1s;
  margin: 5px;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
`;
const Work = () => {
  const { t } = useTranslation();
  const [en, setEn] = useState(En);
  const [fr, setFr] = useState(Fr);
  const [tu, setTu] = useState(Tu);
  const [sp, setSp] = useState(Sp);
  const [ru, setRu] = useState(Ru);
  const [ja, setJa] = useState(Ja);
  const [po, setPo] = useState(Po);
  const [ge, setGe] = useState(Ge);
  const [ch, setCh] = useState(Ch);
  const [korean, setKorean] = useState(Korean);
  const [ar, setAr] = useState(Ar);
  const [da, setDa] = useState(Da);
  const [indonesia, setIndonesia] = useState(Indonesia);
  const [it, setIt] = useState(It);
  const filterItem = category => {
    const newItemEn = En.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemFr = Fr.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemTu = Tu.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemRu = Ru.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemJa = Ja.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemPo = Po.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemGe = Ge.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemCh = Ch.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemKorean = Korean.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemAr = Ar.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemDa = Da.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemIndonesia = Indonesia.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemSp = Sp.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    const newItemIt = It.filter(item => {
      return item.category[0] === category
        ? item
        : item.category[1] === category
        ? item
        : null;
    });
    setEn(newItemEn);
    setFr(newItemFr);
    setTu(newItemTu);
    setSp(newItemSp);
    setRu(newItemRu);
    setJa(newItemJa);
    setPo(newItemPo);
    setGe(newItemGe);
    setCh(newItemCh);
    setKorean(newItemKorean);
    setAr(newItemAr);
    setDa(newItemDa);
    setIndonesia(newItemIndonesia);
    setIt(newItemIt);
    if (category === "all") {
      setEn(En);
      setSp(Sp);
      setFr(Fr);
      setTu(Tu);
      setRu(Ru);
      setJa(Ja);
      setPo(Po);
      setGe(Ge);
      setCh(Ch);
      setKorean(Korean);
      setAr(Ar);
      setDa(Da);
      setIndonesia(Indonesia);
      setIt(It);
    }
  };
  document.querySelectorAll(".filterBtn").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".filterBtn").forEach(x => {
        x.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
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
          <AllBtn>
            <Btn className="filterBtn" onClick={() => filterItem("all")}>
              All
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Js")}>
              Js
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("JQuery")}>
              JQuery
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Sass")}>
              Sass
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("React")}>
              React
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Bootstrap")}>
              Bootstrap
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Tailwind")}>
              Tailwind
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Redux")}>
              Redux
            </Btn>
            <Btn className="filterBtn" onClick={() => filterItem("Small")}>
              Small Project
            </Btn>
          </AllBtn>
          {
            <Grid>
              {(document.querySelector("html").lang === "en"
                ? en
                : document.querySelector("html").lang === "fr"
                ? fr
                : document.querySelector("html").lang === "sp"
                ? sp
                : document.querySelector("html").lang === "ge"
                ? ge
                : document.querySelector("html").lang === "ch"
                ? ch
                : document.querySelector("html").lang === "ko"
                ? korean
                : document.querySelector("html").lang === "ar"
                ? ar
                : document.querySelector("html").lang === "ja"
                ? ja
                : document.querySelector("html").lang === "da"
                ? da
                : document.querySelector("html").lang === "in"
                ? indonesia
                : document.querySelector("html").lang === "it"
                ? it
                : document.querySelector("html").lang === "tu"
                ? tu
                : document.querySelector("html").lang === "ru"
                ? ru
                : document.querySelector("html").lang === "po"
                ? po
                : en
              ).map(item => (
                <WorkContent key={item.id} blog={item} />
              ))}
            </Grid>
          }
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Work;
