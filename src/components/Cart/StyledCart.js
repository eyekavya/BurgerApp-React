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

  h3 {
    font-size: 1.3rem;
    color: #749be8;
    font-weight: 700;
    margin: 1rem 0;
  }

  .pizza-item,
  .total {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .pizza-desc {
    line-height: 1.5;
  }

  .pizza-desc p {
    color: #525252;
    font-size: 1rem;
    line-height: 0.4;
  }

  .total-desc,
  .total-price {
    display: flex;
    flex-direction: column;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

  .order-btn-container {
    display: flex;
    justify-content: center;
  }
`;
