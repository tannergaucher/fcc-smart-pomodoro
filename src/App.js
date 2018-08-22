import React, { Component } from 'react'
import styled from 'styled-components'
import { space, fontSize, width } from 'styled-system'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.main};
`
const Tasks = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
const Task = styled.textarea`
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
`
const Pomodoro = styled.div`
  flex: 3;
  font-family: Roboto Mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main};
`
const Time = styled.h1`
  ${fontSize};
  color: ${props => props.theme.secondary};
  padding: 0.1em;
`
const PlayPause = styled.h2`
  transition: 0.2s;
`
const Date = styled.h3`
  position: absolute;
  bottom: 1em;
`

const Credit = styled.a`
  font-family: ${props => props.theme.font}
  position: absolute;
  bottom: .4em;
  opacity: .7;
`

class App extends Component {
  state = {
    seconds: 10,
    breakSeconds: 300,
    workSeconds: 2700,
    isHovering: false,
    mode: 'work',
    task: 0
  }

  toggleTick = () => {
    let { seconds, interval } = this.state

    if (!interval) {
      let interval = setInterval(this.tick, 1000)
      // decrement one second on click for immediate feedback
      seconds--
      this.setState({
        interval,
        seconds
      })
    } else {
      this.stop()
    }
  }

  tick = () => {
    let { seconds } = this.state
    seconds--
    this.setState({ seconds })
    if (seconds <= 0) {
      clearInterval(this.state.interval)
      this.handleTimerZero()
    }
  }

  handleTimerZero = () => {
    let { task, breakSeconds, workSeconds } = this.state
    let interval = setInterval(this.tick, 1000)

    if (this.state.mode === 'work') {
      this.setState({
        mode: 'break',
        seconds: breakSeconds,
        interval
      })
    } else {
      task++
      this.setState({
        mode: 'work',
        seconds: workSeconds,
        task
      })
    }
  }

  stop = () => {
    clearInterval(this.state.interval)
    this.setState({ interval: null })
  }

  handleMouseHover = () => {
    this.setState({ isHovering: !this.state.isHovering })
  }

  calculateMinutes = () => {
    const { seconds } = this.state
    return Math.floor(seconds / 60)
  }

  calculateSeconds = () => {
    const { seconds } = this.state
    const minutes = this.calculateMinutes()
    return seconds - minutes * 60
  }

  padZero = time => {
    return time < 10 ? `0${time}` : `${time}`
  }

  formattedTime = () => {
    return `${this.padZero(this.calculateMinutes())}:${this.padZero(
      this.calculateSeconds()
    )}`
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  render() {
    return (
      <Container>
        <Tasks>
          <Task placeholder="1" />
          <Task placeholder="2" />
          <Task placeholder="3" />
          <Task placeholder="4" />
        </Tasks>
        <Pomodoro
          onClick={this.toggleTick}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <Time fontSize={[62, 82, 132]}>{this.formattedTime()}</Time>
          <Date>{moment().format('MMMM Do YYYY')}</Date>
          <Credit href="http://tannerg.com">By Tanner</Credit>
        </Pomodoro>
        <Tasks>
          <Task placeholder="5" />
          <Task placeholder="6" />
          <Task placeholder="7" />
          <Task placeholder="8" />
        </Tasks>
      </Container>
    )
  }
}

export default App
