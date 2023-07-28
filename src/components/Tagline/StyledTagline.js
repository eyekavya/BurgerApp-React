import styled from "styled-components";

export const StyledTagline = styled.section`
  h1 {
    font-size: 54px;
    font-family: Permanent Marker, Cursive;
    color: #749be8;
  }

  h2 {
    color: #362c2c;
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
    margin-top: 1rem;
  }

  @media screen and (max-width: 720px) {
    h1 {
      font-size: 44px;
      text-align: center;
      line-height: 1;
    }

    h2 {
      font-size: 18px;
      line-height: 1;
    }
  }
`;
