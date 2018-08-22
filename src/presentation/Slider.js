import styled from 'styled-components'

const Slider = styled.input`
  -webkit-appearance: none;
  width: 45%;
  height: 15px;
  border-radius: 10px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  background-color: rgba(0, 0, 0, 0.0625);
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    ${width};
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
  }
  &::::-moz-range-thumb {
    ${width};
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
  }
`

export default Slider

{
  /* <Slider type="range" min="20" max="90" />
  <ButtonOutline
  color="black"
  mt={[6, 5]}
  py={3}
  px={4}
  fontSize={[18, 28, 36]}
  >
  Start
</ButtonOutline> */
}
