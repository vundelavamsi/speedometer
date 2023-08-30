// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      const shouldIncrement = prevState.speed < 200
      if (shouldIncrement) {
        return {speed: prevState.speed + 10}
      }
      return null
    })
  }

  onBreak = () => {
    this.setState(prevState => {
      const shouldDecrement = prevState.speed > 0
      if (shouldDecrement) {
        return {speed: prevState.speed - 10}
      }
      return null
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="acc-button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="break-button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
