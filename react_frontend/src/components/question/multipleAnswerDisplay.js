import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView.js'

class MultipleAnswerDisplay extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    fetch('/viewApp/multipleAnswerDisplay', {
      method: 'GET'
    }).then(function (res) {
        if (res.status >= 400) {
          throw new Error ("Bad response from server");
        }
        return res.json();
      }).then(questions => this.setState({ questions: questions })
      ).catch (err => {
        console.log('Error caught ', err);
      });
  }

  render() {
    return (
      <div>
        {this.state.questions.map(question =>
          <Row key={question.qKey}>
            Value: {question.qValue} <br/>
            Option1: {question.candidate1} <br/>
            Option2: {question.candidate2} <br/>
            Option3: {question.candidate3} <br/>
            Option4: {question.candidate4} <br/>
            Answer: {question.answer} <br/>
          </Row>
        )}
      </div>
    )
  }
}

export default MultipleAnswerDisplay
