import styled from 'styled-components';

export const FormGroup = styled.div`
  /* ADP styles for a standard text input with a label above it */
  &.normal {
    .inputField {
      display: block;
    }
  }
  /* Nayya styles for a text input with MUI like label functionality */
  &.contained {
    position: relative;

    .inputLabel {
      position: absolute;
      display: block;
    }

    .inputField::placeholder {
      color: transparent;
    }

    .inputField:placeholder-shown ~ .inputLabel {
      cursor: text;
      top: 0;
      font-size: 1rem;
    }

    .inputField:focus ~ .inputLabel {
      top: 0;
      transition: 0.2s;
      font-size: 0.75rem;
    }
  }
`;
