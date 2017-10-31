import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from './formatListView.js'

class CreateShortAnswer extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.valueUpdate = this.valueUpdate.bind(this)
    this.answerUpdate = this.answerUpdate.bind(this)
    this.state = {
      value: '',
      answer: ''
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
      'value: ' + this.state.value,
      'answer: ' + this.state.answer
    ])
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <FormatListView list={debugList}/>
          <Row>
            Value:
          </Row>
          <Row>
            <textarea value={this.state.value} onChange={this.valueUpdate}>
            </textarea>
          </Row>
          <Row>
            Answer:
          </Row>
          <Row>
            <textarea value={this.state.answer} onChange={this.answerUpdate}>
            </textarea>
          </Row>
          <button type={'submit'}>
            submit
          </button>
        </form>
      </div>
    )
  }
}

export default CreateShortAnswer
