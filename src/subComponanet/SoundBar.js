import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Quran1 from "../assets/audio/003.mp3";
import Quran2 from "../assets/audio/Yasser Al Dosary.mp3";
import Quran3 from "../assets/audio/Naser Al Katamy.mp3";
import Quran4 from "../assets/audio/Muhammad Al-Tablawi.mp3";
import Quran5 from "../assets/audio/Muhammad Al-Minshawy.mp3";
import Quran6 from "../assets/audio/Maher Almaikulai.mp3";
const Box = styled.div`
  position: fixed;
  top: 3rem;
  left: 7rem;
  z-index: 1111100000000000;
  @media (max-width: 850px) {
    left: 7rem;
  }
  @media (max-width: 500px) {
    left: 5.5rem;
  }
  @media (max-width: 450px) {
    left: 4.5rem;
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
    const QuranS = [Quran1, Quran2, Quran3, Quran4, Quran5, Quran6];
    document.querySelectorAll(".SpanQuranChange").forEach((e, Q) => {
      e.addEventListener("click", () => {
        document.querySelectorAll(".SpanQuranChange").forEach(() => {
          setQ1(null);
        });
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
      <BoxQuran>
        <SpanQuran className=" SpanQuranChange ">Fares Abbad</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">Yasser Al Dosary</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">Naser Al Katamy</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">Al-Tablawi</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">Al-Minshawy</SpanQuran>
        <SpanQuran className=" SpanQuranChange ">Almaikulai</SpanQuran>
      </BoxQuran>
    </Box>
  );
};
export default SoundBar;
