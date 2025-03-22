import { Component } from "react";


class MyTest extends Component{

    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }
    incriment(){
          this.setState({
                 count:this.state.count+1
            })
      
        console.log(this.state.count);
    }

    render(){
       return(
       <div>
            
            <div>Count- {this.state.count}</div>

            <button onClick={()=> this.incriment()}>Submit</button>
       </div>

       )
    }
       
    
}

export default MyTest;