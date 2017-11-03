import React from 'react'
import {Row, Grid} from 'react-flexbox-grid'
import FormatListView from '../format/formatListView'

class CreateMultipleChoice extends React.Component {

  componentWillMount() {
  }

  constructor (props){
    super(props)
    this.state = {
      option1: undefined,
      option2: undefined,
      option3: undefined,
      option4: undefined,
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
      candidate1: this.state.option1,
      candidate2: this.state.option2,
      candidate3: this.state.option3,
      candidate4: this.state.option4,
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
    }).then(function(data) {
      console.log(data)    
      if(data == "success"){
        this.setState({message: this.state.value + ':' + this.state.answer});  
      }
    }).catch(function(err) {
      console.log(err)
    });
  }

  render() {
    const stateList = [
      'value: ' + this.state.value,
      'answer: ' + this.state.answer,
      'option1: ' + this.state.option1,
      'option2: ' + this.state.option2,
      'option3: ' + this.state.option3,
      'option4: ' + this.state.option4,
    ]
    return (
      <div>
          <FormatListView list={stateList}/>

          <form onSubmit={this.handleSubmit}>
            <Row>
              Value:
            </Row>
            <Row>
              <textarea
                value={this.state.value}
                onChange={this.changeText('value')}/>
            </Row>
            <Row>
              Option 1:
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
              Option 4:
            </Row>
            <Row>
              <textarea
                value={this.state.option4}
                onChange={this.changeText('option4')}/>
            </Row>
            <Row>
              Answer: {this.state.answer}
            </Row>
            <Row>
              <select onChange={this.changeText('answer')}>
                <option value={''}>
                Which option is correct?
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
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
