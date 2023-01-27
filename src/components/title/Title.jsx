import styled from "styled-components";
import React from "react";

function Title({ title }) {
  const Title = styled.h1`
    background: linear-gradient(90deg, #e958ff 5%, #4359f9 49%, #ff3e75 90%);
    border-radius: 10px;
    width: 50vw;
    padding: 15px;
    cursor: pointer;
  `;

  return <Title>{title}</Title>;
}

export default Title;
