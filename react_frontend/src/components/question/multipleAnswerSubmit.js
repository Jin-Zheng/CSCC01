import React from 'react'
import {List} from 'immutable'
import SpacedListView from '../format/spacedListView'

class MultipleAnswerSubmit extends React.Component {

  componentWillMount() {
    this.setState({
      index: this.props.index,
      type: 'multiple choice',
      value: this.props.value,
      option0: this.props.option0,
      option1: this.props.option1,
      option2: this.props.option2,
      option3: this.props.option3,
      answer: this.props.answer
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      index: undefined,
      type: undefined,
      value: undefined,
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      answer: undefined
    }
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  submitAnswer(e){
    return (e) => {
    e.preventDefault()
    const data = {
      answer: this.props.answer,
      candidate1: this.props.option0,
      candidate2: this.props.option1,
      candidate3: this.props.option2,
      candidate4: this.props.option3
    }
    /*fetch*/
    }
  }

  render() {
    const vList = List([
      'index: ' + this.state.index,
      'type: ' + this.state.type,
      'value: ' + this.state.value,
      'option0: ' + this.state.option0,
      'option1: ' + this.state.option1,
      'option2: ' + this.state.option2,
      'option3: ' + this.state.option3
    ])
    return (
      <div>
        <form onSubmit={this.submitAnswer}
          <SpacedListView list={vList}/>
          <Row>
            <select>
              <option value={''}>Select an Answer</option>
              <option value={0}>A</option>
              <option value={1}>B</option>
              <option value={2}>C</option>
              <option value={3}>D</option>
              </select>
          </Row>
          <Row>
            <button type={'submit'}
              style={Styles.submitButton}>
              submit
            </button>
        </form>
      </div>
    )
  }
}

export default MultipleAnswerDisplay
