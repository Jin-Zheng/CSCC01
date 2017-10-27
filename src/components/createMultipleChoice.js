import React from 'react'
import {Row} from 'react-flexbox-grid'
import FormatListView from './formatListView.js'

class CreateMultipleChoice extends React.Component {

  componentWillMount() {
  }

  constructor (props){
    super(props)
    this.state = {
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      answer: undefined,
      value: undefined,
    }
    this.radioClicked = this.radioClicked.bind(this)
    this.changeText = this.changeText.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  radioClicked(n) {
    return (
      (event) => {
        event.preventDefault()
        this.setState({
          answer:n
        })
      }
    )
  }

  changeState(obj) {
    return (event) => {
      event.preventDefault()
      this.setState(obj)
      console.log(event.target)
    }
  }

  updateAnswer(n) {
    return (
      (event) => {
        event.preventDefault()
        this.setState({answer:n})
      }
    )
  }

  changeText(field) {
    return (event) => {
      event.preventDefault()
      console.log(this.state[field])
      this.setState({[field]: event.target.value})
    }
  }
  render() {
    const stateList = [
      'value: ' + this.state.value,
      'answer: ' + this.state.answer,
      'option0: ' + this.state.option0,
      'option1: ' + this.state.option1,
      'option2: ' + this.state.option2,
      'option3: ' + this.state.option3,
      'radios: ' + this.state.radio0checked
    ]
    return (
      <div>
        <Row>
          <FormatListView list={stateList}/>
        </Row>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <Row>
            Value
          </Row>
          <Row>
            <textarea
              value={this.state.value}
              onChange={this.changeText('value')}/>
          </Row>
          <Row>
            Option 0
          </Row>
          <Row>
            <textarea
              value={this.state.option0}
              onChange={this.changeText('option0')}/>
            <input
              type={'radio'}
              onChange={this.changeState({answer:0})}
              checked={this.state.answer===0}
              >
            </input>
          </Row>
          <Row>
            Optino 1
          </Row>
          <Row>
            <textarea
              value={this.state.option1}
              onChange={this.changeText('option1')}/>
            <input
              type={'radio'}
              checked = {this.state.answer===1}
              onChange={this.radioClicked(1)}
              >
            </input>
          </Row>
          <Row>
            Option 2
          </Row>
          <Row>
            <textarea
              value={this.state.option2}
              onChange={this.changeText('option2')}/>
            <input
              type={'radio'}
              checked = {this.state.answer===2}
              onChange={this.radioClicked(2)}
              >
            </input>
          </Row>
          <Row>
            Option 3
          </Row>
          <Row>
            <textarea
              value={this.state.option3}
              onChange={this.changeText('option3')}/>
            <input
              type={'radio'}
              checked = {this.state.answer===3}
              onChange={this.radioClicked(3)}
              >
            </input>
          </Row>
          <Row>
            <button>submit</button>
          </Row>
        </form>
      </div>
    )
  }
}

export default CreateMultipleChoice
