import React from 'react'
import {Row} from 'react-flexbox-grid'

class CreateShortAnswer extends React.Component {

  componentWillMount() {
    this.setState({message: 'This is the question creation pane'})
  }

  constructor(props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.valueUpdate = this.valueUpdate.bind(this)
    this.answerUpdate = this.answerUpdate.bind(this)
    this.state = {
      message: '',
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
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <Row>
            {this.state.message}
            <p/>
          </Row>
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
