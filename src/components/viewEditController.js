import React from 'react'
import {List} from 'immutable'
import {Row} from 'react-flexbox-grid'
import ShortAnswerDisplay from './shortAnswerDisplay.js'
import MulitipleAnswerDisplay from './mulitipleAnswerDisplay'
import EditShortAnswer from './editShortAnswer.js'

class ViewEditController extends React.Component {

  componentWillMount() {
    this.setState({pane:<EditShortAnswer/>})
  }

  constructor(props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.state = {
      pane: undefined,
      buttons: (
        List([
          <button onClick={(e) =>
            {e.preventDefault();
              this.setState({pane: <ShortAnswerDisplay/>})}}>
              Short Answer
            </button>,
          <button onClick={(e) =>
            {e.preventDefault();
              this.setState({pane: <MulitipleAnswerDisplay/>})}}>
              Multiple Choice
            </button>
          ])
      )
    }
  }

  formSubmit(e){
    e.preventDefault()
    this.setState({buttons: e.target.value})

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      this.setState(obj)
    }
  }

  render() {
    return (
      <div>
          <Row>
            <form onSubmit={this.formSubmit}>
              {this.state.buttons}
              <p/>
            </form>
          </Row>
          <Row>
              {this.state.pane}
              <p/>
          </Row>
        <Row>
          <button onClick={this.changeState({pane: 'nothing yet'})}>
            view
          </button>

          <button onClick={this.changeState({pane: <EditShortAnswer/>})}>
            edit
          </button>
        </Row>
        <Row>
          {this.state.pane}
        </Row>
      </div>
    )
  }
}

export default ViewEditController
