import styled from "styled-components";

export const StyledTopping = styled.section`
  .flex-topping {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 3rem;
  }

  .info {
    cursor: pointer;
  }

  .info-tooltip {
    font-size: 14px;
    padding: 6px;
    background-color: #000000cf;
  }

  @media screen and (max-width: 720px) {
    .flex-topping {
      justify-content: center;
    }
  }
`;
