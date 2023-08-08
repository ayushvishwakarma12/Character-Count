import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {userInput: '', characterCountList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {userInput} = this.state
    const characterCount = {userInput, id: uuidv4()}
    this.setState(prevState => ({
      userInput: '',
      characterCountList: [...prevState.characterCountList, characterCount],
    }))
  }

  render() {
    const {userInput, characterCountList} = this.state
    console.log(characterCountList)
    return (
      <div className="app-container">
        <div className="character-count-bg-container">
          <h1 className="count-heading">Count the characters like a Boss...</h1>
          <ul className="character-count-container">
            {characterCountList.length > 0 ? (
              <>
                {characterCountList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p className="character-count-info">
                      {eachItem.userInput} : {eachItem.userInput.length}
                    </p>
                  </li>
                ))}
              </>
            ) : (
              <div className="no-user-input-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user-input-image"
                />
              </div>
            )}
          </ul>
        </div>
        <div className="character-count-input-container">
          <h1 className="character-count-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onClickAddButton}>
            <input
              placeholder="Enter the characters here"
              className="input"
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
