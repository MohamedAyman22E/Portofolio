import React from "react";
import styled from "styled-components";
import { DarkThem } from "../global/Thems";
import { useTranslation } from "react-i18next";
const Logo = styled.h1`
  display: inline-block;
  color: ${props => (props.color === "dark" ? DarkThem.body : DarkThem.text)};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 100000;
  @media (max-width: 500px) {
    left: 0.5rem;
  }
`;
const LogoComponents = props => {
  const { t } = useTranslation();

  return <Logo color={props.theme}>{t("Logo")}</Logo>;
};

export default LogoComponents;
