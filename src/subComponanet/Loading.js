import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Load = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.div`
  color: #fff;
  font-size: 50px;
`;
const Loading = () => {
  const { t } = useTranslation();

  return (
    <Load>
      <H2>{t("Loading")}</H2>
    </Load>
  );
};

export default Loading;
