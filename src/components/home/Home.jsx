import home from "./home.module.scss";
import Title from "../title/Title";
import styled from "styled-components";

import React from "react";

function Home({ setRoute }) {
  const Container = styled.div`
    padding: 1rem;
  `;
  return (
    <div className={home.main}>
      <Container onClick={() => setRoute("categories")}>
        <Title title="categories" />
      </Container>
      <Container onClick={() => setRoute("products")}>
        <Title title="products" />
      </Container>
      <Container onClick={() => setRoute("orders")}>
        <Title title="orders" />
      </Container>
      <Container onClick={() => setRoute("user")}>
        <Title title="user" />
      </Container>
    </div>
  );
}

export default Home;
