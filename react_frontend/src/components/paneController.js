import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import FormatListView from './formatListView.js'
import {List} from 'immutable'
import QuestionController from './questionController.js'

class PaneController extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      pane: undefined,
      buttons: (
        List([
          <button onClick={() => {this.setState({pane:<QuestionController/>})}}>
            create question
          </button>,
          <button onClick={() => (this.setState({pane:
            <div>
              {this.state.questions.map(question =>
                    <Row key={question.qKey}> {question.qType} - {question.qValue} <br/> {question.answer}</Row>
                  )}
              </div>}))}>
            switch pane
          </button>
        ])
      )
    }
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(questions => this.setState({ questions: questions }));
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2}>
            <FormatListView list={this.state.buttons}/>
          </Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            {this.state.pane}
          </Col>
        </Row>
      </div>
    )
  }
}

export default PaneController
