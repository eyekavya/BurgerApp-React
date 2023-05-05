import styled from "styled-components";

export const StyledTab = styled.section`
  .tab-btn {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    width: 9rem;
    background-color: #fff;
    color: #000;
    font-weight: 500;
    border: 1.5px solid #000;
    padding: 4px;
  }

  .topping-btn,
  .size-btn {
    border-right: none;
  }

  .topping-btn {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    color: #000;
  }

  .cheese-btn {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .active {
    background-color: #fcbd3f;
  }
`;
