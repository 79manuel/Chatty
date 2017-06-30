var React = require('react');


var Card = React.createClass({
  getInitialState() {
    return people[0]
  },



  render() {


    return (
      <div>
        <h2>{this.state.name}</h2>
        <img src={this.state.avatar} alt=""/>
      </div>
    )
  }
})

var App = React.createClass({
  render() {
    return (
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    )
  }
})

React.render(<App></App>, document.body);