import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {saveText: false, textInput: ''}

  onClickSave = () => {
    this.setState(prevState => ({
      saveText: !prevState.saveText,
    }))
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {saveText, textInput} = this.state
    console.log(saveText)
    console.log(textInput)

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          {saveText ? (
            <div className="input-container">
              <p className="text">{textInput}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickSave}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-container">
              <input
                type="text"
                className="input"
                value={textInput}
                onChange={this.onChangeTextInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
