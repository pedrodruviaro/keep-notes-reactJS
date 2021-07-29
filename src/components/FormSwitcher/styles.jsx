import styled from "styled-components";

export const FormSwitcherStyled = styled.section`
`

export const SelectWrap = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

export const SelectStyled = styled.select`
    border-radius: 10px;
    padding: .25rem 1rem;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: none;
    font-weight: 500;
    font-size: 1rem;
    outline: none;

    background: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  option {
      color: #333;
      background: #fff;
  }
`