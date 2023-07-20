import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onGenerateRandomNumber = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
    console.log('incremented')
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="mainContainer">
        <div className="randomContainer">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button1"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="heading">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
