import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div>
        <div className="fruitsContainer">
          <div className="fruitContainer">
            <h1 className="heading">
              Bob ate {mango} mangoes {banana} bananas
            </h1>
            <div className="fruits">
              <div className="fruit">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                  alt="mango"
                  className="image"
                />
                <button type="button" className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
              <div className="fruit">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                  alt="banana"
                  className="image"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
