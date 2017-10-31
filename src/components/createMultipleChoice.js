import React from 'react'
import {Row, Grid} from 'react-flexbox-grid'
import FormatListView from './formatListView.js'

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
      console.log(event.target)
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
      console.log(this.state[field])
      this.setState({[field]: event.target.value})
    }
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
          <FormatListView list={stateList}/>

          <form onSubmit={(e)=>{e.preventDefault()}}>
            <Row>
              Value:
            </Row>
            <Row>
              <textarea
                value={this.state.value}
                onChange={this.changeText('value')}/>
            </Row>
            <Row>
              Option 0:
            </Row>
            <Row>
              <textarea
                value={this.state.option0}
                onChange={this.changeText('option0')}/>
            </Row>
            <Row>
              Optino 1:
            </Row>
            <Row>
              <textarea
                value={this.state.option1}
                onChange={this.changeText('option1')}/>
            </Row>
            <Row>
              Option 2:
            </Row>
            <Row>
              <textarea
                value={this.state.option2}
                onChange={this.changeText('option2')}/>
            </Row>
            <Row>
              Option 3:
            </Row>
            <Row>
              <textarea
                value={this.state.option3}
                onChange={this.changeText('option3')}/>
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
