import styled from 'styled-components';

export const FormGroup = styled.div`
  &.normal {
    label {
      display: block;
    }
  }
  &.contained {
    position: relative;
    label {
      display: absolute;
    }
  }
`;
