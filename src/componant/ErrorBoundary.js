import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    

    static getDerivedStateFromError(error){
 
         return{
            hasError:true
         }
    }

    componentDidCatch(error,info){
     console.log("error" + error);
     console.log("Info.."+ info);
    }
  render() {
     
        if(this.state.hasError){
            return  <h1>Something wrong....</h1>
        }else{
            return this.props.children
        }
    
    
  }
}

export default ErrorBoundary
