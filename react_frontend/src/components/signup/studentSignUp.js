import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView'
import Styles from '../../styles'

class StudentSignUp extends React.Component {
  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.changeText = this.changeText.bind(this)
    this.state = {
      id: '',
      password: '',
      email: '',
    }
  }

  formSubmit(event) {
    event.preventDefault()
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({[field]:e.target.value})
    }
  }

  render() {
    const debugList = List([
      'Student:',
      'id: ' + this.state.id,
      'password: ' + this.state.password,
      'email: ' + this.state.email,
    ])
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <Row>
            Id:
          </Row>
          <Row>
            <textarea
              id={this.state.id}
              onChange={this.changeText('id')}
              style={Styles.textareaSimple}/>
          </Row>
          <Row>
            Password:
          </Row>
          <Row>
            <textarea
              password={this.state.password}
              onChange={this.changeText('password')}
              style={Styles.textareaSimple}/>
          </Row>
          <Row>
            Email:
          </Row>
          <Row>
            <textarea
              email={this.state.email}
              onChange={this.changeText('email')}
              style={Styles.textareaSimple}/>
          </Row>
          <Row>
            <button type={'submit'}>
              submit
            </button>
          </Row>
        </form>
      </div>
    )
  }
}

export default StudentSignUp
