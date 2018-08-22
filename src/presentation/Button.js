import styled from 'styled-components'

const ButtonOutline = styled(Bass)`
  ${space};
  ${fontSize};
  &:hover {
    background: black;
    color: rgb(155, 243, 195);
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
`

export default ButtonOutline
