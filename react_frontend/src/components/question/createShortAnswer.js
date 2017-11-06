import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView'
import Styles from '../../styles'

class CreateShortAnswer extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.valueUpdate = this.valueUpdate.bind(this)
    this.answerUpdate = this.answerUpdate.bind(this)
    this.state = {
      value: '',
      answer: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      qType: 'SA',
      qValue: this.state.value,
      answer: this.state.answer
    }
    console.log(data)
    fetch("/generateApp/createShortAnswer", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function(data) {
      console.log(data)
      if(data == "success"){
        this.setState({message: this.state.value + ':' + this.state.answer});
      }
    }).catch(function(err) {
      console.log(err)
    });
    this.setState({value:'', answer:''})
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
        <form onSubmit={this.handleSubmit}>
          <Row>
            Value:
          </Row>
          <Row>
            <textarea value={this.state.value} onChange={this.valueUpdate}
            style={Styles.textareaSimple}/>
          </Row>
          <Row>
            Answer:
          </Row>
          <Row>
            <textarea value={this.state.answer} onChange={this.answerUpdate}
            style={Styles.textareaSimple}/>
          </Row>
          <Row>
            <button type={'submit'}>
              submit
            </button>
          </Row>

        </form>
      </div>
    )
  }
}

export default CreateShortAnswer
