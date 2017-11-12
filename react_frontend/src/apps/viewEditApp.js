import React from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'

const MULTIPLE_CHOICE = 'MC'
const SHORT_ANswer = 'SA'

class EditRouter extends React.Component {
  render() {
    return(
      <Link
        to={'/viewApp/view/$(this.props.index)'}>
        view
      </Link>
      <Link to={'/viewApp/edit/$(this.props.index)'}>
        edit
      </Link>
      <Link to={'/viewApp/delete/$(this.props.index)'}>
        delete
      </Link>
    )
  }
}

class EditSwitcher extends React.Component {
  render() {
    <Switch>
      <Route
        exact path='/viewApp/view/:index'
        componenet={getQuestionDisplay}/>
      <Route
        exact path='/viewApp/edit/:index'
        component={getQuestionEdit}/>
      <Route
        exact path='viewApp/delete/:index'
        component={getQuestionDelete}/>
    </Switch>
  }
}

class GetQuestionDisplay extends React.component{

  componentWillMount() {
    const data = undefined
    const params = this.props.match.params
    fetch('/api/question/$(this.props.match.params.index)')
    .then((res) => (
      res.json()
    )).then((res) => (
      data = res
    ))
    this.setState({
      index: data.qKey,
      type: data.qType,
      value: data.qValue,
      answer: data.answer,
      option0: data.candidate1,
      option1: data.candidate2,
      option2: data.candidate3,
      option3: data.candidate4
    })
  }

  constructor(props) {
    const params = this.props.match.params
    super(props)
    this.state = {
      index = undefined,
      type = undefined,
      value = undefined,
      answer = undefined,
      option0 = undefined,
      option1 = undefined,
      option2 = undefined,
      option3 = undefined
    }
  }

  render() {
    let shortAnswerReady = (
      this.state.type === SHORT_ANSWER &&
      this.state.index &&
      this.state.value &&
      this.state.answer
    )

    let multipleChoiceReady = (
      this.state.type === MULTIPLE_CHOICE &&
      this.state.index &&
      this.state.value &&
      this.state.answer &&
      this.state.option0 &&
      this.state.option1 &&
      this.state.option2 &&
      this.state.option3
    )

    let comp = undefined
    if (shortAnswerReady) {
      comp = <ShortAnswerDisplay type=this.state/>
    } else if (multipleChoiceReady) {
      comp = <MultipleAnswerDisplay type=.../>
    }
    return {
      {comp}
    }
  }
}


class EditApp extends React.Component {

  componentWillMount() {
    this.setState({
      index: this.props.index,
      type:this.props.type
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      index: undefined,
      type: undefined

    }
  }
  render() {
    <BrowserRouter>
      <Row>
        <EditRouter
          index={this.props.index}
          type={this.porps.type}/>
      </Row>
      <EditSwitcher/>
    </BrowserRouter>
  }
}
