import React from 'react'
import {List} from 'immutable'
import Styles from '../../styles'
import SpacedListView from '../format/spacedListView'

class MultipleAnswerDisplay extends React.Component {

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
  }

  render() {
    const answerMap = {
      '0': 'A', '1': 'B', '2': 'C', '3': 'D'
    }
    const vList = List([
      'Index: ' + this.state.index,
      'Type: ' + this.state.type,
      'Value: ' + this.state.value,
      'Option A: ' + this.state.option0,
      'Option B: ' + this.state.option1,
      'Option C: ' + this.state.option2,
      'Option D: ' + this.state.option3,
      'Answer: ' + answerMap[this.state.answer]
    ])
    return (
      <div style={Styles.questionBorder}>
        <div style={Styles.viewText}>
          <SpacedListView list={vList}/>
        </div>
      </div>
    )
  }
}

export default MultipleAnswerDisplay
