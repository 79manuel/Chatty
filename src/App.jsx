import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['hello', 'goodbye']
    };
  }
  render() {
    <MessageList messages={this.state.messages}/>

    return (
      <ul>{renderedMessages}</ul>
    );
  }
}
export default App;


