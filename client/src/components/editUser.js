import React, { Component } from 'react';
import { Nav } from './common/';
import axios from 'axios';

class EditUser extends Component {
  state = {
    data: [],
  } 
  constructor(props){
      super(props)
  }
  componentWillMount() {
    const userId = this.props.match.params.id;
    axios.get(`http://localhost:4000/user/getById/${userId}`)
    .then((response) => {
        console.log(response);
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editUser(_userId) {
  }
  renderUser() {
    return (
      this.state.data.map((user,index) => {
        return(
        <li key={index}>{user.id}, {user.name}, {user.email}
            <button>Save</button>
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

export default EditUser;
