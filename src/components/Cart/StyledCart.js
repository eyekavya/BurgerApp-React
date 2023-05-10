import styled from "styled-components";

export const StyledCart = styled.section`
  body {
    font-family: monospace;
  }

  .container {
    border-top-left-radius: 37px 140px;
    border-top-right-radius: 23px 130px;
    border-bottom-left-radius: 110px 19px;
    border-bottom-right-radius: 120px 24px;

    display: block;
    position: relative;
    border: solid 3px #6e7491;
    padding: 40px 60px;
    max-width: 800px;
    width: 70%;
    margin: 100px auto 0;
    font-size: 17px;
    line-height: 28px;
    transform: rotate(-1deg);
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
    transition: all 0.13s ease-in;
  }

  .container:hover {
    transform: translateY(-10px) rotate(1deg);
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  }

  .container:hover {
    transform: translateY(4px) rotate(-5deg);
  }
`;
