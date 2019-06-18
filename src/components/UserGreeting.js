import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

    render() {
        // Method #4
        return this.state.isLoggedIn && (
            <div>Welcome Chris</div>
        )

        // Method #3
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Chris</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // Method #2
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Chris</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // Method #1
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Chris</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
