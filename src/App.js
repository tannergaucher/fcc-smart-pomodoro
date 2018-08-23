import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'rebass'
import moment from 'moment'
import { fontSize, width } from 'styled-system'

import {
  Container,
  Tasks,
  Task,
  Pomodoro,
  Time,
  DateDisplay,
  Credit,
  Progress,
  Filler
} from './components'

const workLength = 2700
const breakLength = 300

class App extends Component {
  state = {
    seconds: 2700,
    mode: 'work',
    currentTask: 1,
    tasks: {},
    ticking: false
  }

  toggleTick = () => {
    let { seconds, interval } = this.state
    if (!interval) {
      let interval = setInterval(this.tick, 1000)
      // decrement one second on click for immediate feedback
      seconds--
      this.setState({
        interval,
        seconds,
        ticking: true
      })
    } else {
      this.stop()
    }
  }

  tick = () => {
    let { seconds } = this.state
    seconds--
    this.setState({ seconds })
    this.populateHtmlTitle()
    if (seconds <= 0) {
      clearInterval(this.state.interval)
      this.handleTimerZero()
    }
  }

  handleTimerZero = () => {
    let { currentTask } = this.state
    let interval = setInterval(this.tick, 1000)

    if (this.state.mode === 'work') {
      this.setState({
        mode: 'break',
        seconds: breakLength,
        interval
      })
    } else {
      currentTask++
      this.setState({
        mode: 'work',
        seconds: workLength,
        currentTask
      })
    }
  }

  stop = () => {
    clearInterval(this.state.interval)
    this.setState({ interval: null, ticking: false })
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

  populateHtmlTitle = () => {
    document.title = this.formattedTime()
  }

  calculatePercent = () => {
    const { seconds, workLength } = this.state
    const decrease = workLength - seconds
    const then = decrease / workLength
    const answer = then * 100
    return answer
  }

  handleTaskChange = e => {
    //current task
    const task = e.target.name
    //1. make copy of state object
    const { tasks } = this.state
    console.log(tasks)
    //2. update current task object
    tasks[task] = e.target.value
    //3. set state as new object
    console.log(tasks)
    this.setState({ tasks })
  }

  hydrateFromLocal = () => {
    const localTasks = localStorage.getItem('tasks')
    this.setState({ tasks: JSON.parse(localTasks) })
  }

  saveTimerOnUnmount = () => {
    const lastSession = {
      seconds: this.state.seconds,
      ticking: this.state.ticking,
      workLength,
      date: Date.now()
    }
    localStorage.setItem('tasksDate', Date.now())
    localStorage.setItem('lastSession', JSON.stringify(lastSession))
  }

  hydrateTime = () => {
    const lastSession = JSON.parse(localStorage.getItem('lastSession'))
    console.log(lastSession)
    const lastDate = lastSession.date
    const now = Date.now()
    const millisecondsAgo = now - lastDate
    //convert milliseconds to minutes
    const secondsAgo = ((millisecondsAgo % 60000) / 1000).toFixed(0)

    // own func
    if (secondsAgo < workLength) {
      const rehydratedSeconds = lastSession.seconds - secondsAgo
      console.log('rehydratedSeconds', rehydratedSeconds)
      this.setState({ seconds: rehydratedSeconds })
      //start timer on pageload IF last state was ticking
      // if (lastSession.ticking) {
      //   this.tick()
      // }
    }
  }

  componentWillMount() {
    this.hydrateFromLocal()
    //test
    this.hydrateTime()
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveTimerOnUnmount)
    // this.populateHtmlTitle()
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('tasks', JSON.stringify(nextState.tasks))
    // localStorage.setItem('tasksDate', Date.now())
    localStorage.setItem('seconds', this.state.seconds)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveTimerOnUnmount)
  }

  render() {
    return (
      <Provider>
        <Container>
          <Tasks>
            <Task
              placeholder="1"
              name="1"
              onChange={this.handleTaskChange}
              value={this.state.tasks[1]}
            />
            <Task
              placeholder="2"
              name="2"
              onChange={this.handleTaskChange}
              value={this.state.tasks[2]}
            />
            <Task
              placeholder="3"
              name="3"
              onChange={this.handleTaskChange}
              value={this.state.tasks[3]}
            />
            <Task
              placeholder="4"
              name="4"
              onChange={this.handleTaskChange}
              value={this.state.tasks[4]}
            />
          </Tasks>
          <Pomodoro
            onClick={this.toggleTick}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <Time fontSize={[62, 82, 132]}>{this.formattedTime()}</Time>
            <Progress>
              <Filler percent={`${this.calculatePercent()}%`} />
            </Progress>
            <DateDisplay>{moment().format('MMMM Do YYYY')}</DateDisplay>
            <Credit href="http://tannerg.com">By Tanner</Credit>
          </Pomodoro>
          <Tasks>
            <Task
              placeholder="5"
              name="5"
              onChange={this.handleTaskChange}
              value={this.state.tasks[5]}
            />
            <Task
              placeholder="6"
              name="6"
              onChange={this.handleTaskChange}
              value={this.state.tasks[6]}
            />
            <Task
              placeholder="7"
              name="7"
              onChange={this.handleTaskChange}
              value={this.state.tasks[7]}
            />
            <Task
              placeholder="8"
              name="8"
              onChange={this.handleTaskChange}
              value={this.state.tasks[8]}
            />
          </Tasks>
        </Container>
      </Provider>
    )
  }
}

export default App
