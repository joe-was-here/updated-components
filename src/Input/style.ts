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

    input {
      padding: 0.75rem;
      font-size: 1rem;
      line-height: 2.125rem;
      color: var(--palette-isabelline-9);
      border: 1px solid var(--palette-isabelline-2);
      border-radius: 3px;
      height: 60px;
      box-sizing: border-box;
    }

    input:focus {
      border: 2px solid var(--palette-cobalt-5);
    }

    .inputLabel {
      position: absolute;
      display: block;
      color: var(--palette-isabelline-6);
    }

    /* Hides the placeholder as we don't use it in the Nayya componnent */
    .inputField::placeholder {
      color: transparent;
    }

    /* input is not focused, and has no value */
    /* centers the label and font size is set a bit larger */
    .inputField:placeholder-shown ~ .inputLabel {
      cursor: text;
      top: 12px;
      left: 12px;
      font-size: 1rem;
      line-height: 2.125rem;
    }

    /* input is focused or the input has a value */
    /* moves the label up and shrinks the font size */
    .inputField:focus ~ .inputLabel,
    &.populated .inputField ~ .inputLabel {
      top: 12px;
      left: 12px;
      transition: 0.2s;
      font-size: 0.75rem;
      line-height: 1rem;
    }

    /* switch up the padding when the input is populated or focused */
    /* this pushes down the input value further below the label */
    &.populated input,
    input:focus {
      padding: 1.75rem 0.75rem 0.75rem;
      line-height: 1rem;
    }
  }
`;
