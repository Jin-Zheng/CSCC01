import React from 'react'
import {List} from 'immutable'
import {Row, Col} from 'react-flexbox-grid'

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
      radio0checked: undefined,
      radio1checked: undefined,
      radio2checked: undefined,
      radio3checked: undefined,
      answer: undefined,
      value: undefined,
    }
    this.changeText = this.changeText.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  radioClicked(n) {
    return (
      (event) => {
        event.preventDefault()
        this.setState({answer:n})

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
      console.log(this.state[field])
      this.setState({[field]: event.target.value})
    }
  }
  render() {
    return (
      <div>
        <Row>
          answer:{this.state.answer}
        </Row>
        <Row>
          option0:{this.state.option0}
        </Row>
        <Row>
          option1:{this.state.option1}
        </Row>
        <Row>
          option2:{this.state.option2}
        </Row>
        <Row>
          option3:{this.state.option3}
        </Row>
        <Row>
          value:{this.state.value}
        </Row>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <Row>
            Value
          </Row>
          <Row>
            <textarea
              value={this.state.value}
              onChange={this.changeText('value')}/>
          </Row>
          <Row>
            Option 0
          </Row>
          <Row>
            <textarea
              value={this.state.option0}
              onChange={this.changeText('option0')}/>
            <input
              type={'radio'}
              checked = {this.radio0checked}
              onClick={(e)=>{e.preventDefault();console.log('click')}}
              >
            </input>
          </Row>
          <Row>
            Optino 1
          </Row>
          <Row>
            <textarea
              value={this.state.option1}
              onChange={this.changeText('option1')}/>
            <button onClick={this.changeState({answer:1})}>1 correct</button>
          </Row>
          <Row>
            Option 2
          </Row>
          <Row>
            <textarea
              value={this.state.option2}
              onChange={this.changeText('option2')}/>
            <button onClick={this.changeState({answer:2})}>2 correct</button>
          </Row>
          <Row>
            Option 3
          </Row>
          <Row>
            <textarea
              value={this.state.option3}
              onChange={this.changeText('option3')}/>
            <button onClick={this.changeState({answer:3})}>3 correct</button>
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
