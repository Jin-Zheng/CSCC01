import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'
import SignUpApp from '../apps/signUpApp'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ListQuestions from '../components/format/listQuestions'

class MainRouter extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      changeLink: undefined,
      currentLink: List([
        <Row>
        <button style={Styles.indexButton}
          onClick={this.changeState(
            {changeLink: 'INST'})}>
          <Link to='/instructor' style={Styles.indexLink}>
            Instructor
          </Link>
        </button>
        <button style={Styles.indexButton}>
          <Link to='/student' style={Styles.indexLink}>
            Student
          </Link>
        </button>
        </Row>
      ]),
      homeLink: List([
        <Row>
        <button style={Styles.indexButton}
          onClick={this.changeState(
            {changeLink: 'INST'})}>
          <Link to='/instructor' style={Styles.indexLink}>
            Instructor
          </Link>
        </button>
        <button style={Styles.indexButton}>
          <Link to='/student' style={Styles.indexLink}>
            Student
          </Link>
        </button>
        </Row>
      ]),
      instructorLink: List([
        <button style={Styles.indexButton}>
          <Link to='/instructor/generateApp' style={Styles.indexLink}>
            Generate Question
          </Link>
        </button>,
        <button style={Styles.indexButton}>
          <Link to='/instructor/viewApp' style={Styles.indexLink}>
            View Question
          </Link>
        </button>,
        <button style={Styles.indexButton}>
          <Link to='/' style={Styles.indexLink}
            onClick={this.changeState(
            {changeLink: 'HOME'})}>
            Home
          </Link>
        </button>
      ]),
      studentLink: List([
      ])
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(obj) {
    return (e) => {
    e.preventDefault()
    this.setState(obj, () => {
      switch (this.state.changeLink) {
        case 'INST':
          this.setState({currentLink: this.state.instructorLink})
          break;
        case 'STND':
          this.setState({currentLink: this.state.studentLink})
          break;
        case 'HOME':
          this.setState({currentLink: this.state.homeLink})
        default:
          break;
        }
      }
    )
    }
  }

  render() {
    let currentLink = this.state.currentLink
    return (
      <FormatListView list={currentLink}/>
    )
  }
}

class MainSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/'/>
        <Route
          exact path='/instructor'/>
        <Route
          exact path='/student'/>
        <Route
          exact path='/instructor/generateApp'
          component={GenerateApp}/>
        <Route
          exact path='/instructor/viewApp'
          component={ListQuestions}/>
      /*  <Route
          exact path='/signUpApp'
          component={SignUpApp}/>
        <Route
          exact path='/questionApi'/>
        <Route
          exact path='/userApi'/>
        <Route
          exact path='/attemptApi'/>
        <Route
          exact path='/quizApi'/> */
      </Switch>

    )
  }
}


class MainApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Row style={Styles.title}>
            Lambda-Work
            <p/>
          </Row>
          <Row center={'xs'}>
            <Col xs={3} sm={3} md={3} lg={3}>
              <MainRouter/>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <MainSwitcher/>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    )
  }
}

export default MainApp
