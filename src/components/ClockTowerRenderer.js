import React from 'react'

function ClockTowerRenderer(props) {
    
    function renderHour() {
        let hour = props.currentTime.hour;
        let minute = props.currentTime.minute;
        let degree = (hour * (360/12)) + (minute * ((360/12)/60));
        return { transform: `rotate(${degree}deg)` };
    }

    function renderMinute() {
        let minute = props.currentTime.minute;
        let degree = minute * (360/60);
        return { transform: `rotate(${degree}deg)` };
    }

    let hourHandStyle = renderHour();
    let minuteHandStyle = renderMinute();

    return (
        <div id="ClockTower-clockTower">
            <div id="ClockTower-hourHand" className="ClockTower-hand" style={hourHandStyle} hour={props.currentTime.hour}></div>
            <div id="ClockTower-center"></div>
            <div id="ClockTower-minuteHand" className="ClockTower-hand" style={minuteHandStyle} minute={props.currentTime.minute}></div>
        </div>
    )
}

export default ClockTowerRenderer