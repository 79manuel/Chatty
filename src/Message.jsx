import React, {Component} from 'react';


class Message extends Component {
  constructor(props){
    super(props);
    this.classname = 'message';
    if(this.props.type === 'incomingNotification'){

      this.classname += ' system'
    }
  }
  render() {
    var styles = {
      color: this.props.color
    };
    return (
      <div className={this.classname}>

        <span className="message-username" style={styles}>{this.props.username}</span>
        <span className='message-content'>{this.props.messageContent}</span>
      </div>
    );
  }
}
export default Message;
