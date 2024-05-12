import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 18rem;
  padding: 40px;
  border-radius: 0px 60px;
  list-style: none;
  text-decoration: none;
  border: 2px solid ${props => props.theme.body};
  transition: all.2s;
  height: ${document.querySelector("html").lang === "ar"
    ? "38vh"
    : document.querySelector("html").lang === "fr"
    ? "44vh"
    : document.querySelector("html").lang === "sp"
    ? "38vh"
    : document.querySelector("html").lang === "ge"
    ? "46vh"
    : document.querySelector("html").lang === "in"
    ? "40vh"
    : document.querySelector("html").lang === "po"
    ? "37vh"
    : document.querySelector("html").lang === "ru"
    ? "45vh"
    : document.querySelector("html").lang === "ch"
    ? "34vh"
    : document.querySelector("html").lang === "da"
    ? "38vh"
    : document.querySelector("html").lang === "Ko"
    ? "43vh"
    : document.querySelector("html").lang === "ja"
    ? "43vh"
    : "36vh"};
  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
  @media (max-width: 600px) {
    padding: 30px;
    width: 12rem;
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 25px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Description = styled.p`
  font-weight: 500;
  margin: 25px 0;
  font-size: 19px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.text};
  ${Box}:hover & {
    background-color: ${props => props.theme.body};
  }
`;
const Skills = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;
const Tag = styled.span`
  font-size: 19px;
`;
const GithubIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkDemo = styled(Link)`
  text-decoration: none;
  padding: 10px 60px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 0px 0px 0px 40px;
  font-size: 25px;
  border: none;
  outline: none;
  transition: 0.3s;
  font-weight: 600;
  ${Box}:hover & {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
  @media (max-width: 600px) {
    font-size: 20px;
    padding: 10px 30px;
  }
`;
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const Card = props => {
  const { t } = useTranslation();

  const { name, id, demo, tags, description } = props.data;
  return (
    <Box
      key={id}
      variants={Item}
      style={{
        direction: document.querySelector("html").lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Line></Line>
      <Skills>
        {tags.map((e, index) => {
          return <Tag key={index}># {e}</Tag>;
        })}
      </Skills>
      <GithubIcon>
        <LinkDemo target="_blank" to={demo}>
          {t("Visit")}
        </LinkDemo>
      </GithubIcon>
    </Box>
  );
};

export default Card;
