import React, { Component } from 'react';
import { Nav } from './common/';
import axios from 'axios';

class EditUser extends Component {
  state = {
    data: [],
    form: [],
  } 
  constructor(props){
    super(props)
  }
  componentWillMount() {
    const userId = this.props.match.params.id;
    axios.get(`http://localhost:4000/user/getById/${userId}`)
    .then((response) => {
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  saveUser(e, _userId) {
    e.preventDefault();
    // axios.post('http://localhost:4000/user/edit', {
    //   id: _userId,
    //   name: 'bbbb'
    // })
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    console.log(e);
  }

  handleChange(e) {
    console.log(e);
  }

  renderUser() {
    return (
      this.state.data.map((user,index) => {
        return(
        <form key={index}>
          <label>Username</label>
          <input type="text" defaultValue={user.name} onChange={this.handleChange}/>
          <label>Email</label>
          <input type="text" defaultValue={user.email} onChange={this.handleChange} />
          <label>Phone</label>
          <input type="text" defaultValue={user.phone} onChange={this.handleChange} />
          <label>User role</label>
          <input type="text" defaultValue={user.role} onChange={this.handleChange} />
          <button onClick={(e) => this.saveUser(e, user.id)}>Save</button>
        </form>
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
