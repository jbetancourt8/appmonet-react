import React, { Component } from 'react';
import './App.css';
import Logo from "./Logo";
import Posts from "./Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      logo: '',
      data: []
    }
  }

  componentDidMount() {
    fetch('http://srx.pubcdn.net/pdata.php?v=2&id=1940&x=6')
    .then(res => res.json())
    .then(posts => {
      this.setState({
        author: posts.m.a,
        logo: posts.m.i,
        data: posts.c
      });
    });
  }

  render() {
    return (
      <div className="app">

        <Logo src={this.state.logo} />
        <Posts data={this.state.data} />

      </div>
    );
  }
}

export default App;
