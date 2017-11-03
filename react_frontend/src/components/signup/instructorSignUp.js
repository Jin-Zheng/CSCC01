import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView.js'

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
    this.setState({message:this.state.id + ':' + this.state.password})
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
          <FormatListView list = {debugList}/>

          <Row>
            Id:
          </Row>
          <Row>
            <textarea id={this.state.id} onChange={this.idUpdate}>
            </textarea>
          </Row>
          <Row>
            Password:
          </Row>
          <Row>
            <textarea password={this.state.password} onChange={this.passwordUpdate}>
            </textarea>
          </Row>
          <Row>
            Email:
          </Row>
          <Row>
            <textarea email={this.state.email} onChange={this.emailUpdate}>
            </textarea>
          </Row>
          <button type={'submit'}>
            submit
          </button>
        </form>
      </div>
    )
  }
}

export default InstructorSignUp
