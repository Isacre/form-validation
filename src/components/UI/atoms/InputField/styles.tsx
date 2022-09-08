import styled from "styled-components";

export const InputWrapper = styled.input`
  outline: none;
  padding: 10px 0px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  width: 100%;
  background-color: transparent;

  ::placeholder {
    padding: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
  }
`;
