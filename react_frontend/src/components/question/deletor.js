import React from 'react'
import {Row} from 'react-flexbox-grid'

class Deletor extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()
    fetch('api/question/delete/$(this.props.index)')
    .catch((e) => (
      console.log(e)
    ))
  }

  render() {
    return(
      <div>
        <Row>
          This cannot be undone.
        </Row>
        <Row>
          <button onClick={e=> {e.preventDefault()}}>
            DELETE
          </button>
        </Row>
      </div>
    )
  }
}

export default Deletor
