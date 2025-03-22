import React, { Component } from 'react'
import axios from 'axios';
class PostList extends Component {    
    constructor() {
        super();
        
        this.state={
        posts:[],
        errMsg:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
             console.log(response)
             this.setState({posts: response.data})
            })
            .catch(err =>{
                console.log(err);
                this.setState({errMsg:'Error Massage retriving data...........'})
            })
    }

  render() {
    const {posts,errMsg}=this.state
    return (
      <div>
        List Component
        {
           posts.length? posts.map(post=><div key={post.id}>{post.title}</div>):null
        }
        {
            errMsg?<div>{errMsg}</div>:null
        }
      </div>
    )
  }
}
export default PostList