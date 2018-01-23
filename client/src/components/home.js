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
  deleteUser(_userId) {
    console.log(_userId);
    // React.unmountComponentAtNode(document.querySelector('abc'));
  }
  renderUser() {
    return (
      this.state.data.map((user,index) => {
        return(
          <tr className={user.id} key={user.id}>
            <th scope="row">{user.id}</th>
            <td className="abc">{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td><button className="btn btn-success" onClick={() => this.setState({ redirect: true, userId: user.id })}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={()=> this.deleteUser(user.id)}>Delete</button></td>
          </tr>
        )
      })
    );
  }
  render() {
    const { redirect } = this.state;
    
    if (redirect) {
      return <Redirect to={'/user/' + this.state.userId}/ >;
    }
    return (
      <table className="table table-inverse">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        </thead>
        <tbody>
        {this.renderUser()}
        </tbody>
      </table>
    )
  }
}

export default Home;
