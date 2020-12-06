import React, { Component } from "react";
import axios from 'axios';

export default class TutorialsList extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        };
    }
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
        .then(res => {
            this.setState({posts:res.data})
            console.log(this.state.posts)
        })
  }

  render() {
    return (
        <div>
          <h4>All Posts</h4>
          {
           this.state.posts.map(posts => 
             <tr>
               <td>Title: </td>
               <td>{posts.title}</td>
             </tr>
           )
        }
    </div>
    );
  }
}