import React, { Component } from 'react'

 class Counter extends Component {
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
    return (
      <div>
          {this.props.render(this.state.count ,this.clickHander)}
      </div>
    )
  }
}

export default Counter