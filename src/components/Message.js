import React, { Component } from 'react';

class Message extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        //this.changeMessageChain();
        let func = this.changeMessageChain.bind(this);
        setTimeout(func, 3000);
    }

    changeMessageChain() {
        this.setState({
            message: 'Thank you for subscribing!'
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;