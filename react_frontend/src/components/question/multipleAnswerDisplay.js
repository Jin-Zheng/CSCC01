import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView.js'

class MultipleAnswerDisplay extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.state = {
      option0: this.props.option0,
      option1: this.props.option1,
      option2: this.props.option2,
      option3: this.props.option3,
      answer: this.props.answer,
      value: this.props.value,
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
      'Display:',
    ]
    return (
      <div>
        <Row>
          Value:
        </Row>
        <Row>
          {this.state.value}
        </Row>
        <Row>
          Option 0:
        </Row>
        <Row>
          {this.state.option0}
        </Row>
        <Row>
          Option 1:
        </Row>
        <Row>
          {this.state.option1}
        </Row>
        <Row>
          Option 2:
        </Row>
        <Row>
          {this.state.option2}
        </Row>
        <Row>
          Option 3:
        </Row>
        <Row>
          {this.state.option3}
        </Row>
        <Row>
          Answer:
        </Row>
        <Row>
          {this.state.answer}
        </Row>
      </div>
    )
  }
}

export default MultipleAnswerDisplay
