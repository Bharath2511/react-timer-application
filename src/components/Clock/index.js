import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(1, 1, 1, 0, 0, 0),
    }
  }

  componentDidMount() {
    this.timeId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('unmounted')
    clearInterval(this.timeId)
  }

  tick = () => {
    const {date} = this.state
    const seconds = date.getSeconds() + 1
    const minutes = date.getMinutes()
    const hours = date.getHours()
    this.setState({date: new Date(0, 0, 0, hours, minutes, seconds)})
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
