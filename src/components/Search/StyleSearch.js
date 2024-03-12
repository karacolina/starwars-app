import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: center;

  > div {
    position: relative;
  }

  input {
    border-radius: 20px;
    border: 3px solid #333;
    padding: 10px 0px 10px 40px;
    transition: all 0.2s ease-in-out;
    outline: none;
    width: 150px;
    color: var(--text-color);
    &:focus {
      width: 250px;
      border: 3px solid var(--primary);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
  }
`;
