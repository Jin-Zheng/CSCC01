import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView.js'
import Styles from '../../styles'

class InstructorSignUp extends React.Component {
  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.idUpdate = this.idUpdate.bind(this)
    this.passwordUpdate = this.passwordUpdate.bind(this)
    this.emailUpdate = this.emailUpdate.bind(this)
    this.state = {
      id: '',
      password: '',
      email: '',
    }
  }

  formSubmit(event) {
    event.preventDefault()
  }

  idUpdate(event) {
    event.preventDefault()
    this.setState({id:event.target.value})
  }

  passwordUpdate(event) {
    event.preventDefault()
    this.setState({password:event.target.value})
  }

  emailUpdate(event) {
    event.preventDefault()
    this.setState({email:event.target.email})
  }

  render() {
    const debugList = List([
      'Instructor:',
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
              onChange={this.idUpdate}
              style={Styles.textareaSimple}/>
          </Row>
          <Row>
            Password:
          </Row>
          <Row>
            <textarea
              password={this.state.password}
              onChange={this.passwordUpdate}
              style={Styles.textareaSimple}/>
          </Row>
          <Row>
            Email:
          </Row>
          <Row>
            <textarea
              email={this.state.email}
              onChange={this.emailUpdate}
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

export default InstructorSignUp
