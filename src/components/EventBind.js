import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        /* Approach #3 - Common */
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }

    /* Approach #4 - New/Experimental */
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach #1 */}
                {/* This will re-render every time the state changes, which might not always be what we want */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Approach #2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
