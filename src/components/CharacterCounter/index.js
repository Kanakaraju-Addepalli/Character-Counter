import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {userInputsList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddUserInputAndCount = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserEnteredInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-inputs-image"
      />
    ) : (
      userInputsList.map(eachItem => (
        <li key={eachItem.id}>
          <p className="user-entered-text">
            {eachItem.userEnteredText}: {eachItem.textLength}
          </p>
        </li>
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="left-container">
            <div className="info-container">
              <h1 className="info">Count the characters like a Boss...</h1>
            </div>
            <ul className="user-entered-list">
              {this.renderUserEnteredInputs()}
            </ul>
          </div>
          <div className="right-container">
            <h1 className="heading">Character counter</h1>
            <form
              className="input-container"
              onSubmit={this.onClickAddUserInputAndCount}
            >
              <input
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
                placeholder="Enter the characters here"
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
