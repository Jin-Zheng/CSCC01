import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import SpacedListView from '../format/spacedListView.js'

class ShortAnswerDisplay extends React.Component {

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
  }


  render() {
    const values = List([
      'index: ' + this.state.index,
      'type: ' + this.state.type,
      'vlaue: ' + this.state.value,
      'answer: ' + this.state.answer
    ])
    return (
      <div>
        <SpacedListView list={values}/>
      </div>
    )
  }
}

export default ShortAnswerDisplay
