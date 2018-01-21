import React, { Component } from 'react';
import { Nav } from './common/';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.loadingUsers();
    this.temp = [];
  }
  loadingUsers(){
    axios.get('http://localhost:4000/user/getAll')
    .then(function (response) {
      console.log(response);
      this.temp.push(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    console.log(this.temp);
    return (
      <Nav/>
    );
  }
}

export default Home;
