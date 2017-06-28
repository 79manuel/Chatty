import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {username: this.props.currentUser,
                  message: ''};
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
  }

  handleMessageChange(event) {
    console.log(event);
    this.setState({message:event.target.value});
  }

  handleUsernameChange(event) {
    console.log(event);
    this.setState({username:event.target.value});
  }

  onPressEnter(event) {
    console.log(event);
    if(event.key == 'Enter'){
      this.props.makeNewMessage(this.state);
      event.target.value = '';
    }
  }

  render() {
    console.log('rendering ChatBar...')
    return (
     <footer className="chatbar">

       <input type='text' className="chatbar-username" placeholder={this.props.currentUser} onChange={this.handleUsernameChange} value={this.state.username} />
       <input value={this.state.message} className="chatbar-message" placeholder="Type a message and hit  ENTER" onKeyPress={this.onPressEnter} name="message" onChange={this.handleMessageChange} />

    </footer>
    );
  }
}
export default ChatBar;