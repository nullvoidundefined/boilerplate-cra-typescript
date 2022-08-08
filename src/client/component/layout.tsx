import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { APPLICATION } from "../constant";
import { Header } from "./header";

const LayoutContainer = styled.div`
  margin: auto;
  min-width: ${APPLICATION.MINIMUM_WIDTH}px;
  width: 50%;
`;

const Layout = () => {

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export { Layout };
