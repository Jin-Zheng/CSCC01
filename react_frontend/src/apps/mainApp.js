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

  componentWillMount(){
    this.setState({currentLink: this.state.homeLink})
  }

  constructor(props){
    super(props)
    this.state = {
      changeLink: undefined,
      currentLink: undefined,
      homeLink: List([
        <Row>
          <Link to='/instructor' style={Styles.indexLink}
            onClick={this.changeState({changeLink: 'INST'})}>
            <button style={Styles.indexButton}>
                Instructor
            </button>
          </Link>
          <Link to='/student' style={Styles .indexLink}
            onClick={this.changeState({changeLink: 'STND'})}>
            <button style={Styles.indexButton}>
                Student
            </button>
          </Link>
        </Row>
      ]),
      instructorLink: List([
        <Link to='/instructor/generateApp' style={Styles.indexLink}>
          <button style={Styles.indexButton}>
            Generate Question
          </button>
        </Link>,
        <Link to='/instructor/viewApp' style={Styles.indexLink}>
          <button style={Styles.indexButton}>
            View Question
          </button>
        </Link>,
        <Link to='/' style={Styles.indexLink}
          onClick={this.changeState({changeLink: 'HOME'})}>
          <button style={Styles.indexButton}>
              Home
          </button>
        </Link>
      ]),
      studentLink: List([
        <Link to='/' style={Styles.indexLink}
          onClick={this.changeState({changeLink: 'HOME'})}>
          <button style={Styles.indexButton}>
              Home
          </button>
        </Link>
      ])
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(obj) {
    return (e) => {
    this.setState(obj, () => {
      switch (this.state.changeLink) {
        case 'INST':
          this.setState({currentLink: this.state.instructorLink})
          break
        case 'STND':
          this.setState({currentLink: this.state.studentLink})
          break
        case 'HOME':
          this.setState({currentLink: this.state.homeLink})
          break
        default:
          break
          }
        }
      )
    }
  }

  render() {
    return (
      <FormatListView list={this.state.currentLink}/>
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
