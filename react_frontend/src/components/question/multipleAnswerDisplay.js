import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
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
    const vList = List([
      'index: ' + this.state.index,
      'type: ' + this.state.type,
      'value: ' + this.state.value,
      'option0: ' + this.state.option0,
      'option1: ' + this.state.option1,
      'option2: ' + this.state.option2,
      'option3: ' + this.state.option3,
      'asnwer: ' + this.state.answer
    ])
    return (
      <div>
        <SpacedListView list={vList}/>
      </div>
    )
  }
}

export default MultipleAnswerDisplay