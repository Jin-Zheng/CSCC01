import React from 'react'
import {Row, Grid} from 'react-flexbox-grid'
import FormatListView from '../format/formatListView'
import Styles from '../../styles'

class CreateMultipleChoice extends React.Component {

  componentWillMount() {
  }

  constructor (props){
    super(props)
    this.state = {
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      answer: undefined,
      value: undefined,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.radioClicked = this.radioClicked.bind(this)
    this.changeText = this.changeText.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  radioClicked(n) {
    return (
      (event) => {
        event.preventDefault()
        this.setState({
          answer:n
        })
      }
    )
  }

  changeState(obj) {
    return (event) => {
      event.preventDefault()
      this.setState(obj)
    }
  }

  updateAnswer(n) {
    return (
      (event) => {
        event.preventDefault()
        this.setState({answer:n})
      }
    )
  }

  changeText(field) {
    return (event) => {
      event.preventDefault()
      this.setState({[field]: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      qType: 'MC',
      qValue: this.state.value,
      answer: this.state.answer,
      candidate1: this.state.option0,
      candidate2: this.state.option1,
      candidate3: this.state.option2,
      candidate4: this.state.option3,
    }
    console.log(data)
    fetch("/generateApp/createMultipleChoice", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).catch(function(err) {
      console.log(err)
    });
    // Temp show that a question was submitted
    this.setState({value:'', answer:'', option0:'', option1:'', option2:'', option3:''})
  }

  render() {
    const stateList = [
      'value: ' + this.state.value,
      'answer: ' + this.state.answer,
      'option0: ' + this.state.option0,
      'option1: ' + this.state.option1,
      'option2: ' + this.state.option2,
      'option3: ' + this.state.option3,
    ]
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <Row>
              Value:
            </Row>
            <Row>
              <textarea
                value={this.state.value}
                onChange={this.changeText('value')}
                style={Styles.textareaSimple}/>
            </Row>
            <Row>
              Option 0:
            </Row>
            <Row>
              <textarea
                value={this.state.option0}
                onChange={this.changeText('option0')}
                style={Styles.textareaSimple}/>
            </Row>
            <Row>
              Option 1:
            </Row>
            <Row>
              <textarea
                value={this.state.option1}
                onChange={this.changeText('option1')}
                style={Styles.textareaSimple}/>
            </Row>
            <Row>
              Option 2:
            </Row>
            <Row>
              <textarea
                value={this.state.option2}
                onChange={this.changeText('option2')}
                style={Styles.textareaSimple}/>
            </Row>
            <Row>
              Option 3:
            </Row>
            <Row>
              <textarea
                value={this.state.option3}
                onChange={this.changeText('option3')}
                style={Styles.textareaSimple}/>
            </Row>
            <Row>
              Answer: {this.state.answer}
            </Row>
            <Row>
              <select onChange={this.changeText('answer')}>
                <option value={''}>
                Which option is correct?
                </option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </Row>
            <Row>
              <button>submit</button>
            </Row>
          </form>

      </div>
    )
  }
}

export default CreateMultipleChoice
