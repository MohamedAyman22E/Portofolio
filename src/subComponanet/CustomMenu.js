import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "./Color";
import { FaAngleRight } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import img1 from "../assets/Flag/Flag_of_the_United_States.svg.png";
import img2 from "../assets/Flag/Flag_of_France.svg.webp";
import img3 from "../assets/Flag/Flag_of_Spain.svg.webp";
import img4 from "../assets/Flag/Flag_of_Germany.svg.png";
import img5 from "../assets/Flag/Flag_of_Indonesia.svg.png";
import img6 from "../assets/Flag/Flag_of_Italy.svg.webp";
import img7 from "../assets/Flag/Flag_of_Portugal.svg.webp";
import img8 from "../assets/Flag/pngtree-turkish-flag-png-image_6135788.png";
import img9 from "../assets/Flag/Flag_of_Denmark.svg.png";
import img10 from "../assets/Flag/Flag_of_Russia.svg.png";
import img11 from "../assets/Flag/Flag_of_the_People's_Republic_of_China.svg.png";
import img12 from "../assets/Flag/Flag_of_North_Korea.svg.png";
import img13 from "../assets/Flag/Flag_of_Japan.svg.png";
import img14 from "../assets/Flag/Flag_of_Egypt.svg.png";
const Menu = styled.div`
  position: absolute;
  width: 300px;
  border-radius: 10px;
  background-color: ${props => props.theme.text};
  box-shadow: 0 0 5px ${props => props.theme.body};
  color: ${props => props.theme.body};
  padding: 15px;
  z-index: 100000000000000000000000000;
  @media (max-width: 800px) {
    width: 250px;
  }
  @media (max-width: 700px) {
    width: 240px;
  }
  @media (max-width: 600px) {
    width: 220px;
  }
  @media (max-width: 500px) {
    width: 200px;
  }
  @media (max-width: 400px) {
    width: 150px;
  }
`;
const Chose = styled.div`
  margin: 0px 0;
  padding: 0px 12px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  .Links {
    position: relative;
    display: flex;
  }
  .Setting {
    display: flex;
    align-items: center;
  }
  @media (max-width: 800px) {
    font-size: 17px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const IconRight = styled.span``;
const Arrow = styled.div`
  display: flex;
  align-items: center;
`;
const Hidden = styled.div`
  position: absolute;
  right: -200px;
  top: 45%;
  transform: translate(5%, -50%);
  background-color: ${props => props.theme.text};
  box-shadow: 0 0 5px ${props => props.theme.body};
  color: ${props => props.theme.body};
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: none;
  transition: all.3s;
  padding: 15px;
  overflow: auto;
  ${Chose}:hover & {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    width: 150px;
    height: 260px;
    transform: translate(-20%, -50%);
    top: 50%;
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 240px;
    transform: translate(-60%, -50%);
  }
`;
const Name = styled.div`
  margin: 15px 0;
  padding: 7px 12px;
  border-radius: 5px;
  cursor: pointer;
`;
const NameTwo = styled(Link)`
  margin: 5px 0;
  padding: 7px 12px;
  border-radius: 5px;
  text-decoration: none;
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
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 10px 0;
`;
const Icon = styled.span`
  margin-top: 7px;
`;
const Img = styled.span`
  width: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 100%;
  }
`;
const CustomMenu = () => {
  const [ShowMenu, SetShowMenu] = useState(false);
  const [colorMenu, SetColorMenu] = useState(false);
  const { t } = useTranslation();
  let menu = document.querySelector(".shareMenu");
  let shareMenu = document.querySelectorAll(".hidden");
  const handelContextMenu = e => {
    SetShowMenu(true);
    e.preventDefault();
    let x = e.offsetX,
      y = e.offsetY,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      cmWidth = menu.offsetWidth,
      cmHeight = menu.offsetHeight;
    shareMenu.forEach(e => {
      if (x > winWidth - cmWidth - e.offsetWidth) {
        e.style.left = "-200px";
      } else {
        e.style.left = "";
        e.style.right = "-200px";
      }
    });
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.style.visibility = "visible";
  };
  const handelClick = () => {
    SetShowMenu(false);
  };
  useEffect(() => {
    document.addEventListener("click", handelClick);
    document.addEventListener("contextmenu", handelContextMenu);
    return () => {
      document.removeEventListener("click", handelClick);
      document.removeEventListener("contextmenu", handelContextMenu);
    };
  });
  // Full Screen
  const toggleFullScreen = () => {
    const isFullScreen = document.fullscreenElement;
    const element = document.querySelector("body");
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  };
  // Language
  const { i18n } = useTranslation();
  console.log(i18n.language);
  const changeAr = () => {
    i18n.changeLanguage("ar");
    document.querySelector("html").lang = "ar";
  };
  const changeEn = () => {
    i18n.changeLanguage("en");
    document.querySelector("html").lang = "en";
  };
  const changeFr = () => {
    i18n.changeLanguage("fr");
    document.querySelector("html").lang = "fr";
  };
  const changeSp = () => {
    i18n.changeLanguage("sp");
    document.querySelector("html").lang = "sp";
  };
  const changeGe = () => {
    i18n.changeLanguage("ge");
    document.querySelector("html").lang = "ge";
  };
  const changeIn = () => {
    i18n.changeLanguage("in");
    document.querySelector("html").lang = "in";
  };
  const changeIt = () => {
    i18n.changeLanguage("it");
    document.querySelector("html").lang = "it";
  };
  const changePo = () => {
    i18n.changeLanguage("po");
    document.querySelector("html").lang = "po";
  };
  const changeTu = () => {
    i18n.changeLanguage("tu");
    document.querySelector("html").lang = "tu";
  };
  const changeRu = () => {
    i18n.changeLanguage("ru");
    document.querySelector("html").lang = "ru";
  };
  const changeKo = () => {
    i18n.changeLanguage("ko");
    document.querySelector("html").lang = "ko";
  };
  const changeJa = () => {
    i18n.changeLanguage("ja");
    document.querySelector("html").lang = "ja";
  };
  const changeCh = () => {
    i18n.changeLanguage("ch");
    document.querySelector("html").lang = "ch";
  };
  const changeDa = () => {
    i18n.changeLanguage("da");
    document.querySelector("html").lang = "da";
  };
  document.querySelectorAll(".Lang").forEach(lanX => {
    lanX.addEventListener("click", () => {
      document.querySelectorAll(".Lang").forEach(lanY => {
        lanY.classList.remove("active");
      });
      lanX.classList.add("active");
    });
  });
  console.log(document.querySelector("html").lang);
  useEffect(() => {
    window.localStorage.setItem("language", i18n.language);
    document.querySelector("html").lang =
      window.localStorage.getItem("language");
  }, [i18n.language]);
  return (
    <div>
      <div
        style={{
          display: ShowMenu ? "block" : "none",
          position: "absolute",
          zIndex: 1000000000000000000,
        }}
      >
        <Menu className="shareMenu">
          <Chose onClick={toggleFullScreen}>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>{t("FullScreen")}</Name>
            </Arrow>
            <IconRight>
              <BsFullscreen />
            </IconRight>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>{t("Path")}</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo to="/">{t("Main")}</NameTwo>
              <NameTwo to="/say">{t("SayHi")}</NameTwo>
              <NameTwo to="/work">{t("WorkLink")}</NameTwo>
              <NameTwo to="/blog">{t("Work")}</NameTwo>
              <NameTwo to="/about">{t("About")}</NameTwo>
              <NameTwo to="/skills">{t("Skills")}</NameTwo>
            </Hidden>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>{t("Language")}</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo className="Lang" onClick={() => changeAr()}>
                <Img>
                  <img src={img14} alt="" />
                  <span>{t("Arabic")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeEn()}>
                <Img>
                  <img src={img1} alt="" />
                  <span>{t("English")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeFr()}>
                <Img>
                  <img src={img2} alt="" />
                  <span>{t("French")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeSp()}>
                <Img>
                  <img src={img3} alt="" />
                  <span>{t("Spanish")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeGe()}>
                <Img>
                  <img src={img4} alt="" />
                  <span>{t("German")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeIn()}>
                <Img>
                  <img src={img5} alt="" />
                  <span>{t("Indonesian")}</span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeIt()}>
                <Img>
                  <img src={img6} alt="" />
                  <span>{t("Italian")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changePo()}>
                <Img>
                  <img src={img7} alt="" />
                  <span>{t("Portugal")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeTu()}>
                <Img>
                  <img src={img8} alt="" />
                  <span>{t("Turkish")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeDa()}>
                <Img>
                  <img src={img9} alt="" />
                  <span>{t("Danish")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeRu()}>
                <Img>
                  <img src={img10} alt="" />
                  <span>{t("Russian")} </span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeCh()}>
                <Img>
                  <img src={img11} alt="" />
                  <span>{t("Chinese")}</span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeKo()}>
                <Img>
                  <img src={img12} alt="" />
                  <span>{t("Korean")}</span>
                </Img>
              </NameTwo>
              <NameTwo className="Lang" onClick={() => changeJa()}>
                <Img>
                  <img src={img13} alt="" />
                  <span>{t("Japanese")}</span>
                </Img>
              </NameTwo>
            </Hidden>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>{t("Communication")}</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo>Ar</NameTwo>
              <NameTwo>En</NameTwo>
              <NameTwo>Fr</NameTwo>
              <NameTwo>Ch</NameTwo>
              <NameTwo>Ru</NameTwo>
              <NameTwo>Ar</NameTwo>
              <NameTwo>En</NameTwo>
              <NameTwo>Fr</NameTwo>
              <NameTwo>Ch</NameTwo>
              <NameTwo>Ru</NameTwo>
            </Hidden>
          </Chose>
          <Line></Line>
          <Chose className="Setting" onClick={() => SetColorMenu(true)}>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>{t("Setting")}</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
          </Chose>
        </Menu>
      </div>
      {colorMenu ? (
        <Color colorMenu={colorMenu} SetColorMenu={SetColorMenu} />
      ) : null}
    </div>
  );
};
export default CustomMenu;
