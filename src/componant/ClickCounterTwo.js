import React, { Component } from 'react'
 class ClickCounterTwo extends Component {

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
          
         <button onClick={clickHander}>clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo