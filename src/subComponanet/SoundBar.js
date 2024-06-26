import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Quran1 from "../assets/audio/003.mp3";
import Quran2 from "../assets/audio/Abdul Basit Abdul Samad.mp3";
import Quran3 from "../assets/audio/Abdul Rahman Al Majid.mp3";
import Quran4 from "../assets/audio/Abdul Rahman Al-Shahat.mp3";
import Quran5 from "../assets/audio/Abdullrahman Alsudais.mp3";
import Quran6 from "../assets/audio/Maher Almaikulai.mp3";
import Quran7 from "../assets/audio/Muhammad Al-Minshawy.mp3";
import Quran8 from "../assets/audio/Muhammad Al-Tablawi.mp3";
import Quran9 from "../assets/audio/Naser Al Katamy.mp3";
import Quran10 from "../assets/audio/Yasser Al Dosary.mp3";
import { useTranslation } from "react-i18next";
const Box = styled.div`
  position: fixed;
  top: 3rem;
  left: 15rem;
  z-index: 1111100000000000;
  @media (max-width: 850px) {
    left: 15rem;
  }
  @media (max-width: 600px) {
    top: 24rem;
    left: 2rem;
  }
  @media (max-width: 500px) {
    left: 0.5rem;
  }
`;
const AllLine = styled.div`
  cursor: pointer;
  display: flex;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.8s;
  }
  & > *:nth-child(5) {
    animation-delay: 1s;
  }
  & > *:nth-child(6) {
    animation-delay: 1.2s;
  }
`;
const play = keyframes`
0%,100%{
    transform: scaleY(1);
}
50%{
    transform: scaleY(2);
}
`;
const Line = styled.span`
  background-color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.body};
  animation: ${play} 2s ease infinite;
  animation-play-state: ${props => (props.click ? "running" : "paused")};
  height: 10px;
  width: 2px;
  margin: 0 0.1rem;
`;
const BoxQuran = styled.div`
  background-color: #000;
  box-shadow: 0 0 5px rgba(0, 0, 0.5);
  height: 150px;
  overflow-y: auto;
  margin-top: 20px;
  padding: 15px 10px;
  border-radius: 10px;
  display: none;
  ${Box}:hover & {
    display: block;
  }
`;
const SpanQuran = styled.span`
  margin: 5px 0;
  padding: 7px 12px;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  color: ${props => props.theme.body};
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;
const SoundBar = props => {
  const { t } = useTranslation();
  const [q1, setQ1] = useState([Quran1]);
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  useEffect(() => {
    const QuranS = [
      Quran1,
      Quran2,
      Quran3,
      Quran4,
      Quran5,
      Quran6,
      Quran7,
      Quran8,
      Quran9,
      Quran10,
    ];
    document.querySelectorAll(".SpanQuranChange").forEach((e, Q) => {
      e.addEventListener("click", () => {
        document.querySelectorAll(".SpanQuranChange").forEach(x => {
          setQ1(null);
          x.classList.remove("active");
        });
        e.classList.add("active");
        setQ1(QuranS[Q]);
      });
    });
  }, [q1]);
  return (
    <Box>
      <AllLine onClick={() => handelClick()}>
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
      </AllLine>
      <audio className="aud" src={q1} ref={ref}></audio>
      <BoxQuran
        style={{
          direction:
            document.querySelector("html").lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <SpanQuran className=" SpanQuranChange ">{t("FaresAbbad")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AbdulBasit")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AlMajid")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AlShahat")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("Alsudaisi")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("Almaikulai")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AlMinshawy")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AlTablawi")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange "> {t("AlKatamy")}</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">
          {t("YasserAlDosary")}
        </SpanQuran>
      </BoxQuran>
    </Box>
  );
};
export default SoundBar;
