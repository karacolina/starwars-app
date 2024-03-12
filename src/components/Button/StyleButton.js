import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 15px;
  padding: 10px 20px;
  border-radius: 15px;
  min-width: 110px;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  border: none;
  transition: all 400ms linear;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:disabled {
    background: var(--neutral-normal);
    color: var(--neutral-dark);
    border: none;
  }

  &:hover:not(:disabled) {
    background: var(--neutral-normal);
    color: var(--main-color);
    border: 1px solid var(--neutral-normal);
    outline: none;
  }
`;

export const StyledButtonPrimary = styled(StyledButton)`
  background: var(--primary);
  color: var(--main-color);
  border: 1px solid var(--primary);
`;

export const StyledButtonOutline = styled(StyledButton)`
  color: var(--primary);
  background: var(--main-color);
  border: 1px solid var(--primary);
`;

export const StyledTextLink = styled(StyledButton)`
  && {
    background: none;
    color: var(--neutral-normal);
    text-decoration: underline;
    border: none;
    &:hover {
      background: none;
      border: none;
      color: var(--neutral-normal);
      text-decoration: none;
    }
  }
`;
