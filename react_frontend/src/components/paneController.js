import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import FormatListView from './formatListView.js'
import {List} from 'immutable'
import QuestionController from './questionController.js'

class PaneController extends React.Component {

  componentWillMount() {
    this.setState({pane:this.props.start}),
    this.setState({buttons:List([
      <button onClick={this.changeState({pane:<QuestionController/>})}>
        create question
      </button>,
      <button onClick={this.changeState({pane:'view/edit'})}>
        view/edit
      </button>,
      <button onClick={this.changeState({pane: 'empty pane'})}>
        switch pane
      </button>
    ])})
  }

  constructor(props) {
    super(props)

    this.changeState = this.changeState.bind(this)
    this.state = {
      questions: [],
      pane: undefined,
      buttons: (
<<<<<<< HEAD:src/components/paneController.js
        List([])
=======
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
>>>>>>> 7e4712eb9ed1b1f8bc2f9f71f35149254de06233:react_frontend/src/components/paneController.js
      )
    }
  }

<<<<<<< HEAD:src/components/paneController.js
  changeState(obj) {
    return (event) => {
      event.preventDefault()
      this.setState(obj)
    }
=======
  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(questions => this.setState({ questions: questions }));
>>>>>>> 7e4712eb9ed1b1f8bc2f9f71f35149254de06233:react_frontend/src/components/paneController.js
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
