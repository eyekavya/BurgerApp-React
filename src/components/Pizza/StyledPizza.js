import styled from "styled-components";

export const StyledPizza = styled.section`
  .pizza-img {
    position: absolute;
    margin-top: 2rem;
    margin-right: 3rem;
  }

  .base-img {
    z-index: -999;
    right: 0;
  }

  .topping-img {
    z-index: 0;
    right: 60px;
    top: 16px;
  }
`;
