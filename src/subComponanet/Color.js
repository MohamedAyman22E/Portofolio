import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { lightThem } from "../global/Thems";

// import "../App.css";
const AllColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000000;
`;
const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.body};
  width: 500px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: ${props => (props.close ? "none" : "block")};
  text-align: center;
  @media (max-width: 525px) {
    width: 450px;
  }
  @media (max-width: 485px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 350px;
  }
  @media (max-width: 360px) {
    width: 330px;
  }
  @media (max-width: 340px) {
    width: 300px;
  }
`;
const CloseIcon = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 30px;
  cursor: pointer;
`;
const Title = styled.div`
  text-align: center;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const AllBtn = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  gap: 10px;
`;
const Next = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  cursor: pointer;
`;
const Prev = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  cursor: pointer;
`;
// change box
const ChangeBox = styled.div`
  display: flex;
  width: 100%;
`;
const BoxFont = styled.div`
  width: 100%;
`;
const BoxColor = styled.div`
  width: 100%;
  display: none;
`;
// change box
const H2 = styled.h2`
  font-size: 30px;
  @media (max-width: 360px) {
    font-size: 25px;
  }
`;
const H3 = styled.h3`
  font-size: 15px;
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;
const FontSize = styled.div`
  position: relative;
  padding: 0 30px;
  margin-top: 10px;
  @media (max-width: 360px) {
    padding: 0 15px;
  }
`;
const TitleFontSize = styled.h3`
  font-size: 25px;
  @media (max-width: 360px) {
    font-size: 20px;
  }
`;
const Change = styled.div`
  background-color: ${props => `rgb(${props.theme.textRgba},.6)`};
  color: ${props => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 30px;
  @media (max-width: 360px) {
    padding: 6px 10px;
  }
`;
const Small = styled.h4`
  font-size: 20px;
`;
const AllSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 80%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.body};
  }
`;
const Span = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.body};
  z-index: 1;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: ${props => props.theme.text};
  }
`;
const Big = styled.h3`
  font-size: 15px;
`;
// font family
const FontFamily = styled.div``;
const AllSpanFontFamily = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 10px;
  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const SpanFamily = styled.div`
  height: 40px;
  border-radius: 2px;
  background-color: var(--bg-Color);
  border: 2px solid #fff;
  line-height: 40px;
  @media (max-width: 360px) {
    font-size: 15px;
  }
  cursor: pointer;
  &.active {
    background-color: #000;
    color: ${props => props.theme.body};
  }
`;
const TitleFontFamily = styled.h2`
  font-size: 30px;
  @media (max-width: 360px) {
    font-size: 20px;
  }
`;
// color
const ColorMenu = styled.div`
  margin-top: 10px;
`;
const ChangeColor = styled.div`
  background-color: ${props => `rgb(${props.theme.textRgba},.6)`};
  color: ${props => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 30px;
  width: 81%;
  margin: 10px auto;
`;
const AllSpanColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  position: relative;
  width: 90%;
  margin: auto;
`;
const SpanColor = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #fff;
  &.add {
    border: 3px solid #000;
  }
  cursor: pointer;
  &:nth-child(1) {
    background-color: #6b4ce6;
  }
  &:nth-child(2) {
    background-color: #e6d14c;
  }
  &:nth-child(3) {
    background-color: #e64c61;
  }
  &:nth-child(4) {
    background-color: #4ce69e;
  }
  &:nth-child(5) {
    background-color: #4cade6;
  }
`;
// background
const BackGroundMenu = styled.div`
  width: 85%;
  margin: auto;
`;
const BackGroundColor = styled.div``;
const AllSpanBackGroundColor = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 13px;
`;
const ColorItem = styled.span`
  height: 40px;
  border-radius: 2px;
  background-color: var(--bg-Color);
  border: 3px solid #fff;
  line-height: 40px;
  &.add {
    border: 3px solid #000;
  }
`;
const Color = ({ SetColorMenu }) => {
  const [changeBackGround, setChangeBackGround] = useState();
  const [changeColor, setChangeColor] = useState();
  const handelClickNextOne = () => {
    document.querySelector(".font").style.display = "none";
    document.querySelector(".color").style.display = "block";
    document.querySelector(".quran").style.display = "none";
  };
  const handelClickPrevOne = () => {
    document.querySelector(".font").style.display = "block";
    document.querySelector(".color").style.display = "none";
    document.querySelector(".quran").style.display = "none";
  };
  const handelClickNextTwo = () => {
    document.querySelector(".font").style.display = "none";
    document.querySelector(".color").style.display = "none";
    document.querySelector(".quran").style.display = "block";
  };

  // backGround
  const colors = [
    "#2d3436",
    "#4834d4",
    "#be2eda",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
    "#30336b",
    "#30336b",
  ];
  document.querySelectorAll(".allSpan span").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".allSpan span").forEach(x => {
        x.classList.remove("add");
        x.style.border = "3px solid #fff";
      });
      e.classList.add("add");
      e.style.border = "3px solid #000";
      let currentBackGround = window
        .getComputedStyle(e)
        .getPropertyValue("background-color");
      lightThem.body = currentBackGround;
      setChangeBackGround(currentBackGround);
      localStorage.setItem("BackGround", currentBackGround);
      if (localStorage.getItem("BackGround")) {
        document.querySelector("body").style.backgroundColor =
          localStorage.getItem("BackGround");
      }
    });
  });
  // color
  document.querySelectorAll(".colChange span").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".colChange span").forEach(x => {
        x.classList.remove("add");
        x.style.border = "3px solid #fff";
      });
      e.classList.add("add");
      e.style.border = "3px solid #000";
      let changeColor = window
        .getComputedStyle(e)
        .getPropertyValue("background-color");
      lightThem.text = changeColor;
      setChangeColor(changeColor);
      localStorage.setItem("Color", changeColor);
      if (localStorage.getItem("Color")) {
        document.querySelector("body").style.color =
          localStorage.getItem("Color");
      }
    });
  });
  useEffect(() => {
    document.body.style.backgroundColor = changeBackGround;
  }, [changeBackGround, changeColor]);
  document.querySelectorAll(".allFontSize span").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".allFontSize span").forEach(x => {
        x.classList.remove("active");
      });
      let fontSize;
      if (e.classList.contains("font-size-1")) {
        fontSize = "12px";
        e.classList.add("active");
      } else if (e.classList.contains("font-size-2")) {
        fontSize = "14px";
        e.classList.add("active");
      } else if (e.classList.contains("font-size-3")) {
        fontSize = "16px";
        e.classList.add("active");
      } else if (e.classList.contains("font-size-4")) {
        fontSize = "18px";
        e.classList.add("active");
      } else if (e.classList.contains("font-size-5")) {
        fontSize = "20px";
        e.classList.add("active");
      }
      document.querySelector("html").style.fontSize = fontSize;
      window.localStorage.setItem("fontSize", fontSize);
      if (window.localStorage.getItem("fontSize")) {
        document.querySelector("body").style.fontSize =
          window.localStorage.getItem("fontSize");
      }
    });
  });
  // font family
  document.querySelectorAll(".fontFamily div").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".fontFamily div").forEach(x => {
        x.classList.remove("active");
      });
      let fontFamily;
      if (e.classList.contains("font-family-1")) {
        fontFamily = "'Dancing Script', cursive";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-2")) {
        fontFamily = "'Shadows Into Light', cursive";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-3")) {
        fontFamily = "'Permanent Marker', cursive";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-4")) {
        fontFamily = "'Bodoni Moda', serif";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-5")) {
        fontFamily = "'Licorice', cursive";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-6")) {
        fontFamily = "'Kaushan Script', cursive";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-7")) {
        fontFamily = "'Rubik Scribble',system-ui";
        e.classList.add("active");
      } else if (e.classList.contains("font-family-8")) {
        fontFamily = "'Amatic SC', sans-serif";
        e.classList.add("active");
      }
      localStorage.setItem("fontFamily", fontFamily);
      if (localStorage.getItem("fontFamily")) {
        document.querySelector("body").style.fontFamily =
          localStorage.getItem("fontFamily");
      }
    });
  });
  // quran

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 0.3, delay: 0.1 }}
    >
      <AllColor>
        <Box>
          <CloseIcon>
            <IoClose onClick={() => SetColorMenu(false)} />
          </CloseIcon>
          <Title>
            <H2>Custom Your View </H2>
            <H3>Mange Your Font Size ,Color,BackGround and Quran</H3>
          </Title>
          <ChangeBox>
            <BoxFont className="font">
              <FontSize>
                <TitleFontSize>Font Size</TitleFontSize>
                <Change>
                  <Small>Aa</Small>
                  <AllSpan className="allFontSize">
                    <Span className="font-size-1"></Span>
                    <Span className="font-size-2 "></Span>
                    <Span className="font-size-3 active"></Span>
                    <Span className="font-size-4"></Span>
                    <Span className="font-size-5"></Span>
                  </AllSpan>
                  <Big>Aa</Big>
                </Change>
                <FontFamily>
                  <TitleFontFamily>Font Family</TitleFontFamily>
                  <AllSpanFontFamily className="fontFamily">
                    <SpanFamily
                      className="font-family-1 active"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      Dancing
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-2"
                      style={{ fontFamily: "'Shadows Into Light', cursive" }}
                    >
                      Shadows
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-3"
                      style={{ fontFamily: "'Permanent Marker', cursive" }}
                    >
                      Permanent
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-4"
                      style={{ fontFamily: "'Bodoni Moda', serif" }}
                    >
                      Bodoni
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-5"
                      style={{ fontFamily: "'Licorice', cursive" }}
                    >
                      Licorice
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-6"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      Kaushan
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-7"
                      style={{ fontFamily: "'Rubik Scribble',system-ui" }}
                    >
                      Rubik
                    </SpanFamily>
                    <SpanFamily
                      className="font-family-8"
                      style={{ fontFamily: "'Amatic SC', sans-serif" }}
                    >
                      Amatic
                    </SpanFamily>
                  </AllSpanFontFamily>
                </FontFamily>
              </FontSize>
              <AllBtn>
                <Next onClick={handelClickNextOne}>Next</Next>
              </AllBtn>
            </BoxFont>
            <BoxColor className="color">
              <ColorMenu>
                <TitleFontSize>color</TitleFontSize>
                <ChangeColor>
                  <AllSpanColor className="colChange">
                    <SpanColor></SpanColor>
                    <SpanColor></SpanColor>
                    <SpanColor></SpanColor>
                    <SpanColor></SpanColor>
                    <SpanColor></SpanColor>
                  </AllSpanColor>
                </ChangeColor>
              </ColorMenu>
              <AllBtn>
                <Next onClick={handelClickNextTwo}>Next</Next>
                <Prev onClick={handelClickPrevOne}> Prev</Prev>
              </AllBtn>
              <BackGroundMenu>
                <TitleFontSize>Background color</TitleFontSize>
                <BackGroundColor>
                  <AllSpanBackGroundColor className="allSpan">
                    {colors.map((color, index) => (
                      <ColorItem
                        key={index}
                        style={{ background: color }}
                      ></ColorItem>
                    ))}
                  </AllSpanBackGroundColor>
                </BackGroundColor>
              </BackGroundMenu>
            </BoxColor>
          </ChangeBox>
        </Box>
      </AllColor>
    </motion.div>
  );
};

export default Color;
