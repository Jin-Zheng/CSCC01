import React from 'react'
import {List} from 'immutable'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'
import SpacedListView from '../format/spacedListView.js'

class ShortAnswerSubmit extends React.Component {

  componentWillMount(props) {
    this.setState({
      answer: this.props.answer,
      value: this.props.value,
      index: this.props.index,
      type: 'short answer'
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      answer: undefined,
      value: undefined,
      index: undefined,
      type: undefined
    }
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  submitAnswer(e){
    e.preventDefault()
    const data = {
      answer: this.state.answer
    }
    /* fetch - submit answer to student field?
             - may need ID for quiz
    */
  }

  render() {
    const value = List([
      'Question: ' + this.state.value,
    ])
    return (
      <div>
        <form onSubmit={this.submitAnswer}>
          <SpacedListView list={value}/>
          <Row>
            Type your Answer:
          </Row>
          <Row>
            <textarea
              style={Styles.textareaSimple}
              value={this.state.answer}/>
          </Row>
          <Row end='xs'>
            <button type={'submit'}
              style={Styles.submitButton}>
              submit
            </button>
          </Row>
        </form>
      </div>
    )
  }
}

export default ShortAnswerSubmit
