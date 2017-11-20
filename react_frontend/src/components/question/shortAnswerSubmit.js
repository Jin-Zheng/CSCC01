import FormatListView from '../format/formatListView'
import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'
import {List} from 'immutable'
import SpacedListView from '../format/spacedListView'

class ShortAnswerSubmit extends React.Component {

  componentWillMount() {
    this.setState({
      value: this.props.value,
      answer: this.props.answer
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      answer: undefined
    }
    this.changeText = this.changeText.bind(this)
    this.changeState = this.changeState.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      this.setState({obj})
    }
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }

  submitAnswer(e) {
    e.preventDefault()
    const data = {
      answer: this.state.answer
    }
    fetch('/questionApi/update/' + this.props.index, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch((err) => (
      console.log(err)
    ))
  }

  render() {
    const debugList = List([
      'value: ' + this.state.value,
      'answer: ' + this.state.answer
    ])
    //const debugList = []
    return (
      <form onSubmit={this.submitAnswer}>
        //<FormatListView list={debugList}/>
        <Row>
          Value:
        </Row>
        <Row>
          <SpacedListView list={this.state.value}/>
        </Row>
        <Row>
          Answer:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            value={this.state.answer}/>
        </Row>
        <Row>
          <p/>
        </Row>
        <Row end='xs'>
          <button type={'submit'}
            style={Styles.submitButton}>
            submit
          </button>
        </Row>
      </form>
    )
  }
}

export default ShortAnswerSubmit
