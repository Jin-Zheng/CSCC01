import React from 'react'
import {List} from 'immutable'
import {Row, Col} from 'react-flexbox-grid'

class CreateMultipleChoice extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      options: List(['', '', '', '']),
      answer: undefined,
      value: ''
    }
    this.updateAnswer = this.updateAnswer.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }
  updateAnswer(n){
    return (
      (event) => {
        event.preventDefault()
        console.log(this.state.options)
        this.setState({answer:n})
      }
    )
  }

  updateValue(field){
    return (event) => {
      event.preventDefault()
      console.log(this.state[field])
      this.setState({[field]: event.target.value})
    }
  }
  render(){
    return (
      <div>
        <form>
          <Row>
            Value
          </Row>
          <Row>
            <textArea
              value={this.state.value}
              onChange={this.updateValue('value')}/>
          </Row>
          <Row>
            Option 1
          </Row>
          <Row>
            <textArea
              value={this.state.option}
              onChange={this.updateValue('option1')}/>
            <button onClick={this.updateAnswer(0)}> answer_0 </button>
          </Row>
          <Row>
            Option 2
          </Row>
          <Row>
            <textArea value={'Hi'}/>
            <button onClick={this.updateAnswer(1)}>answer_1</button>
          </Row>
          <Row>
            Option 3
          </Row>
          <Row>
            <textArea value={'Hi'}/>
            <button onClick={this.updateAnswer(2)}>answer_2</button>
          </Row>
          <Row>
            Option 4
          </Row>
          <Row>
            <textArea value={'Hi'}/>
            <button onClick={this.updateAnswer(3)}>answer_3</button>
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
