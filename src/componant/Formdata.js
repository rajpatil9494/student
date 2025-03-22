import React, { Component } from 'react'

class Formdata extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comment: '',
      topic: ''
    }
  }

  handleUsenameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }
  handleHandleComment = (event) => {
    this.setState({
      comment: event.target.value
    })
  }
  handleTopicChanges = (event) => {
    this.setState({
     topic:event.target.topic
    })
  }
  handlesubmit = (event) => {
   alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
  }
  render() {
    return (
      <>
        <form onSubmit={this.handlesubmit}>
          <div>
            <div>
              <label>First Name</label>
              <input type="text" value={this.state.username} onChange={this.handleUsenameChange}></input>
            </div>
            <div>
              <label>Comment</label>
              <textarea value={this.state.comment} onChange={this.handleHandleComment}></textarea>
            </div>
            <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handleTopicChanges}>
                <option value="">--Select--</option>
                <option value="React">React</option>
                <option value="Core.Net">Core.Net</option>
                <option value="SQl">SQl</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </>

    )
  }
}
export default Formdata