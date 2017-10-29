import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from './formatListView.js'

class MulitipleAnswerDisplay extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.state = {
      option0: 'this is A',
      option1: 'this is B',
      option2: 'this is C',
      option3: 'this is D',
      answer: 'this is answer',
      value: 'this is value',
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
          <FormatListView list={stateList}/>
        </Row>
        <form onSubmit={(e)=>{e.preventDefault()}}>
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
          <Row>
            <button>submit</button>
          </Row>
        </form>
      </div>
    )
  }
}

export default MulitipleAnswerDisplay
