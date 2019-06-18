import React, { Component } from 'react'

class ClockTowerRenderer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // hourHandStyles: {
            //     transform: 'rotate(0deg)'
            // },
            // minuteHandStyles: {
            //     transform: 'rotate(0deg)'
            // }
        }
    }

    renderHour() {
        let hour = this.props.currentTime.hour
        let minute = this.props.currentTime.minute
        let degree = (hour * (360/12)) + (minute * ((360/12)/60))
        return { transform: `rotate(${degree}deg)` }
    }

    renderMinute() {
        let minute = this.props.currentTime.minute
        let degree = minute * (360/60)
        return { transform: `rotate(${degree}deg)` }
    }

    render() {
        let hourHandStyle = this.renderHour()
        let minuteHandStyle = this.renderMinute()
        return (
            <div id="ClockTower-clockTower">
                <div id="ClockTower-hourHand" className="ClockTower-hand" style={hourHandStyle} hour={this.props.currentTime.hour}></div>
                <div id="ClockTower-center"></div>
                <div id="ClockTower-minuteHand" className="ClockTower-hand" style={minuteHandStyle} minute={this.props.currentTime.minute}></div>
            </div>
        )
    }
}

export default ClockTowerRenderer


// import React from 'react'

// function ClockTowerRenderer(props) {
//     const { currentTime } = props
//     const styles = {
//         // transform: rotate(180deg);
//         hourHand: {
//             transform: 'rotate(0deg)'
//         },
//         minuteHand: {
//             transform: 'rotate(0deg)'
//         }
//     }

//     function renderHour() {
        
//     }

//     function renderMinute() {

//     }

//     return (
//         <div>
//             <div id="ClockTower-clockTower">
//                 <div id="ClockTower-hourHand" className="ClockTower-hand" style={styles.hourHand} hour={currentTime.hour} onChange={renderHour}></div>
//                 <div id="ClockTower-center"></div>
//                 <div id="ClockTower-minuteHand" className="ClockTower-hand" style={styles.minuteHand} hour={currentTime.minute} onChange={renderMinute}></div>
//             </div>
//         </div>
//     )
// }

// export default ClockTowerRenderer
