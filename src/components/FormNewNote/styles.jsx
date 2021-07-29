import styled from "styled-components";

export const FormWrap = styled.main`
  grid-area: main;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1rem;
  box-shadow: ${props => props.theme.hoverState} 1.95px 1.95px 2.6px;
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
  outline: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus,
  &:active {
    border: 1px solid ${(props) => props.theme.secondary};
  }
`;

export const TextareaStyled = styled(InputStyled).attrs({ as: "textarea" })`
  height: 150px;
`;

export const Button = styled.button`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 30%;
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem auto 1rem auto;
  transition: all .3s ease-in-out;

  &:hover, 
  &:focus {
    width: 50%;
  }
`;

export const SpanErro = styled.span`
    color: lightcoral;
    display: block;
    margin-top: -1rem;
    margin-bottom: 1rem;
    line-height: 1.4;
`

export const FieldsetStyled = styled.fieldset`
    display: flex;
    flex-direction: column;

    input {
        margin: 0 .5rem .75rem 0;
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
`