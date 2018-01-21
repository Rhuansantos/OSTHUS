import React, { Component } from 'react';
import { Nav } from './common/';
import axios from 'axios';

class Home extends Component {
  state = {
    data: [],
  }  
  componentWillMount() {
    axios.get('http://localhost:4000/user/getAll')
    .then((response) => {
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editUser(){
    console.log('editing');
  }
  renderUser() {
    return (
      this.state.data.map((user,index) => {
        return(
        <li key={index}>{user.id}, {user.name}, {user.email}
        <button onClick={() => console.log(index)}>Edit</button>
        <button>Delete</button>
        </li>
        )
      })
    );
  }
  render() {
    return (
      <ul>
        {this.renderUser()}
      </ul>
    )
  }
}

export default Home;
