import React from "react";
import styled from "styled-components";
import img from "../assets/svg/logo3.png";
const Logo = styled.div`
  display: inline-block;
  color: #e55451;
  position: fixed;
  left: 0rem;
  top: -3rem;
  z-index: 100000;
  img {
    width: 270px;
  }
  @media (max-width: 600px) {
    left: -1rem;
    img {
      width: 250px;
    }
  }
  @media (max-width: 460px) {
    top: -2rem;
    img {
      width: 200px;
    }
  }
  @media (max-width: 350px) {
    top: -1rem;
    img {
      width: 170px;
    }
  }
`;
const LogoComponents = props => {
  return (
    <Logo>
      <img src={img} alt="" />
    </Logo>
  );
};

export default LogoComponents;
