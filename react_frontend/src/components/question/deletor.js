import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'

class Deletor extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()
    fetch('/questionApi/delete/' + this.props.index)
    .catch((err) => (
      console.log(err)
    ))
  }

  render() {
    return(
      <div style={Styles.questionBorder}>
        <div style={Styles.viewText}>
          <Row>
            This cannot be undone.
          </Row>
          <Row>
            <button onClick={this.handleDelete}
              style={Styles.smallButton}>
              Delete
            </button>
          </Row>
        </div>
      </div>
    )
  }
}

export default Deletor
