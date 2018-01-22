import React, { Component } from 'react';
import { Nav } from './common/';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  state = {
    data: [],
    redirect: false,
    userId: null,
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

  editUser(_userId) {
    console.log('fasfsaf');
    let link = '/user/' + _userId;
    <Redirect to='/user/3' />
  }
  renderUser() {
    return (
      this.state.data.map((user,index) => {
        return(
        <li key={index}>{user.id}, {user.name}, {user.email}
        <button onClick={() => this.setState({ redirect: true, userId: user.id })}>Edit</button>
        <button>Delete</button>
        </li>
        )
      })
    );
  }
  render() {
    const { redirect } = this.state;
    console.log();

    if (redirect) {
      return <Redirect to={'/user/' + this.state.userId}/ >;
    }
    return (
      <ul>
        {this.renderUser()}
      </ul>
    )
  }
}

export default Home;
