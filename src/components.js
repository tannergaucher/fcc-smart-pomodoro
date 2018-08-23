import styled from 'styled-components'
import { fontSize, width } from 'styled-system'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.main};
`
export const Tasks = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const Task = styled.textarea`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.main};
  border: 4px solid ${props => props.theme.secondary};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.font};
  margin: 2em;
  padding: 0.5em;
  resize: none;
  font-size: inherit;
  overflow: hidden;
`
export const Pomodoro = styled.div`
  flex: 3;
  font-family: Roboto Mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main};
`
export const Time = styled.h1`
  ${fontSize};
  color: ${props => props.theme.secondary};
  padding: 0.1em;
`
export const DateDisplay = styled.h3`
  position: absolute;
  bottom: 1em;
`
export const Credit = styled.a`
  font-family: ${props => props.theme.font};
  position: absolute;
  bottom: 0.4em;
  color: black;
`
export const Progress = styled.div`
  position: relative;
  height: 20px;
  width: 300px;
  border: 3px solid ${props => props.theme.secondary};
`
export const Filler = styled.div`
  background: ${props => props.theme.contrast};
  height: 100%;
  width: ${props => props.percent};
`
