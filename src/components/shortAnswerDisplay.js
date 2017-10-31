import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from './formatListView.js'

class ShortAnswerDisplay extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.valueUpdate = this.valueUpdate.bind(this)
    this.answerUpdate = this.answerUpdate.bind(this)
    this.state = {
      value: this.props.value,
      answer: this.props.answer
    }
  }

  formSubmit(event) {
    event.preventDefault()
    this.setState({message:this.state.value + ':' + this.state.answer})
  }

  valueUpdate(event) {
    event.preventDefault()
    this.setState({value:event.target.value})
  }

  answerUpdate(event) {
    event.preventDefault()
    this.setState({answer:event.target.value})
  }

  render() {
    const debugList = List([
      'value:' + this.state.value,
      'answer:' + this.state.answer,
      'Display:',
    ])
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <Row>
            Value:
          </Row>
          <Row>
            {this.state.value}
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

export default ShortAnswerDisplay
