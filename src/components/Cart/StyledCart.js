import styled from "styled-components";

export const StyledCart = styled.section`
  body {
    font-family: "Poppins", sans-serif;
  }

  h2 {
    font-size: 2.25rem;
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
    max-width: 700px;
    width: 70%;
    margin: 70px auto 0;
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
    transform: translateY(4px) rotate(1deg);
  }

  .pizza-item-container {
    max-height: 257.13px;

    overflow: none;
  }

  h3 {
    font-size: 1.3rem;
    color: #749be8;
    font-weight: 700;
    margin: 1rem 0;
  }

  /* .pizza-item {
    width: 90%;
    margin: 0 auto;
  } */

  .pizza-item,
  .total {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 90%;
    margin: 0 auto;
  }

  .pizza-desc {
    line-height: 1.5;
    width: 90%;
  }

  .pizza-desc p,
  .pizza-desc span {
    color: #525252;
    font-size: 1rem;
    line-height: 0.5;
  }

  .total {
    margin: 2rem auto;
  }

  .total-desc p,
  .total-price p {
    margin-bottom: 0;
    font-weight: 500;
  }

  .order-btn-container {
    display: flex;
    justify-content: center;
  }

  .total .grand-total {
    font-weight: 700;
    margin-top: 1rem;
  }

  h3 i {
    margin-left: 2rem;
    cursor: pointer;
  }
`;
