import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    console.log('rendering Navbar');
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h3 className="userCount">Users Online: {this.props.userCount}</h3>
    </nav>
    );
  }
}
export default Navbar;