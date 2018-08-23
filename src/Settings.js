import React from 'react'
import styled from 'styled-components'
import { Container as container, Time } from './components'

const Container = styled(container)`
  font-family: ${props => props.theme.font};
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1``
const InputWrapper = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 500px;
`
const Input = styled.input`
  flex: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.secondary};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.font};
  margin: 2em;
  padding: 0.5em;
  resize: none;
  font-size: inherit;
  overflow: hidden;
`

class Settings extends React.Component {
  render() {
    return (
      <Container>
        <Title>Main Focus</Title>
        <InputWrapper>
          <Input />
        </InputWrapper>
      </Container>
    )
  }
}

export default Settings
