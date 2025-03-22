import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    constructor(props) {
        super(props);
    
        this.state={
         count:0
        }
        
    }
    clickHander=()=>{
     this.setState(preState =>{
        return {count:preState.count +1 }
     })
    }
  render() {
    const {count,clickHander} =this.props
    return (
      <div>
        <h3 onMouseOver={clickHander}>Hover {count} Times</h3>
      </div>
    )
  }
}
export default HoverCounterTwo
