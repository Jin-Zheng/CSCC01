import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView.js'

class ShortAnswerDisplay extends React.Component {

  componentWillMount(props) {

  }

  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    fetch('/viewApp/shortAnswerDisplay', {
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
    // const debugList = List([
    //   'value:' + this.state.value,
    //   'answer:' + this.state.answer,
    //   'Display:',
    // ])
    return (
      <div>
        {this.state.questions.map(question =>
          <Row key={question.qKey}> Value: {question.qValue} <br/> Answer: {question.answer}</Row>
        )}
      </div>
    )
  }
}

export default ShortAnswerDisplay
