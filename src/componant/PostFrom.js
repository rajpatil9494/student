import React, { Component } from 'react'
import axios from 'axios';
class PostFrom extends Component {
   
    constructor(props) {
        super(props)
        
        this.state={
            userid:'',
            title:'',
            body:''
        };
    }
    chnagehandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    submitHandler=(e)=>{
      e.preventDefault()
      console.log(this.state);

      axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
                  .then(response=>{
                   console.log(response)
                   
                  })
                  .catch(err =>{
                      console.log(err);
                      
                  })
    }
  render() {
    const{userid,title,body}=this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
            <div >
                <div>
                   <div>
                      <label>Name</label>
                      <input type="text" name="userid" value={userid} onChange={this.chnagehandler}></input>
                   </div>
                   <div >
                      <label>Title</label>
                      <input type="text" name="title" value={title}onChange={this.chnagehandler}></input>
                   </div>
                   <div>
                      <label>body</label>
                      <input type="text" name="body" value={body}onChange={this.chnagehandler}></input>
                   </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
          </form>
      </div>
    )
  }
}
export default  PostFrom