var React = require('react');

var App = React.createClass ({
  getInitialState() {
    return people[0]
  },
  render: function() {
    return {
    <div>
    <h1>{this.state.name}</h1>
    </div>
    }
  }
});

React.render(<App></App>,document.body);