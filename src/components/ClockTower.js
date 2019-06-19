import React, { Component } from 'react'
import ClockTowerBellCounter from './ClockTowerBellCounter'
import ClockTowerRenderer from './ClockTowerRenderer'

export class ClockTower extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            runSpeed: (1000 / 60),
            running: false,
            bellCount: 0,
            startTime: {
                text: '00:00',
                hour: 0,
                minute: 0,
                isValid: true
            },
            currentTime: {
                hour: 0,
                minute: 0
            },
            endTime: {
                text: '00:00',
                hour: 0,
                minute: 0,
                isValid: true
            },
            lightCycle: 'night'
        }
    }

    changeTime = (event) => {
        var isValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(event.target.value);
        let prop = event.target.getAttribute('prop');
        let value = event.target.value;

        if (isValid) {
            this.setState({
                [prop]: {
                    text: value,
                    hour: this.updateHour(value),
                    minute: this.updateMinute(value),
                    isValid: true
                }
            })
        } else {
            this.setState({
                [prop]: {
                    text: value,
                    hour: this.state[prop].hour,
                    minute: this.state[prop].minute,
                    isValid: false
                }
            })
        }
    }

    startClock = (event = false) => {
        //console.log('Clock Started')
        this.setState({
            running: true,
            bellCount: 0,
            currentTime: {
                hour: this.state.startTime.hour,
                minute: this.state.startTime.minute
            }
        }, () => {
            this.updateBellCount()
            this.updateLightCycle()
            this.tick()
        })
        if (event)
            event.preventDefault();
    }

    tick() {
        if (this.state.running) {
            this.incrementMinute();
        }
    }

    incrementMinute() {
        let minute = this.state.currentTime.minute;
        if (minute === 59) {
            this.incrementHour();
        } else {
            minute++;
            this.setState({
                currentTime: {
                    hour: this.state.currentTime.hour,
                    minute: minute
                }
            }, () => {
                let stop = this.shouldStopClock();
                if (stop) {
                    this.stopClock();
                } else {
                    // This allows the tests to bypass using timeouts, which caused them to end prematurely
                    if (this.state.runSpeed === 0)
                        this.tick();
                    else
                        setTimeout(this.tick.bind(this), this.state.runSpeed);
                }
            })
        }
    }

    incrementHour() {
        let hour = this.state.currentTime.hour;
        if (hour === 23) {
            hour = 0;
        } else {
            hour++;
        }

        this.setState({
            currentTime: {
                hour: hour,
                minute: 0
            }
        }, () => {
            this.updateBellCount();
            this.updateLightCycle();
            let stop = this.shouldStopClock();
            if (stop) {
                this.stopClock();
            } else {
                // This allows the tests to bypass using timeouts, which caused them to end prematurely
                if (this.state.runSpeed === 0)
                    this.tick();
                else
                    setTimeout(this.tick.bind(this), this.state.runSpeed);
            }
        })
    }

    updateBellCount() {
        let hour = this.state.currentTime.hour;
        let minute = this.state.currentTime.minute;
        let bellCount = this.state.bellCount;
        if (minute === 0) {
            let increment = (hour === 0) ? 12 : ((hour > 12) ? hour - 12 : hour);
            this.setState({
                bellCount: bellCount += increment
            })
        }
    }

    shouldStopClock() {
        let currentTime = this.state.currentTime;
        let endTime = this.state.endTime;
        if (currentTime.hour === endTime.hour && currentTime.minute === endTime.minute) {
            return true;
        } else {
            return false;
        }
    }

    stopClock = (event = false) => {
        //console.log('Clock Stopped')
        this.setState({
            running: false
        })
        if (event)
            event.preventDefault();
    }

    updateHour(timeString) {
        let divider = timeString.indexOf(':');
        return parseInt(timeString.substr(0,divider));
    }

    updateMinute(timeString) {
        let divider = timeString.indexOf(':');
        return parseInt(timeString.substr(divider+1));
    }

    updateLightCycle() {
        let hour = this.state.currentTime.hour;
        switch (hour) {
            case 6:
            case 7:
            case 8:
            case 18:
            case 19:
            case 20:
                this.setState({
                    lightCycle: 'dawn'
                })
                break; 
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                this.setState({
                    lightCycle: 'day'
                })
                break;
            default:
                this.setState({
                    lightCycle: 'night'
                })
                break;
        }
    }

    render() {
        const { running, startTime, endTime, currentTime } = this.state;
        let disabled = running ? 'disabled' : '';
        let startTimeClass = startTime.isValid ? '' : 'error';
        let endTimeClass = endTime.isValid ? '' : 'error';
        let startClockEnabled = !running && (startTime.isValid && endTime.isValid) ? '' : 'disabled';
        let stopClockEnabled = running ? '' : 'disabled';

        let currentHour = currentTime.hour;
        let hourText = (currentHour < 10) ? ('0'+currentHour) : currentHour;
        let currentMinute = currentTime.minute;
        let minuteText = (currentMinute < 10) ? ('0'+currentMinute) : currentMinute;
        let currentTimeText = hourText + ':' + minuteText;
        let cttDigit1 = currentTimeText.substr(0,1);
        let cttDigit2 = currentTimeText.substr(1,1);
        let cttDigit3 = currentTimeText.substr(3,1);
        let cttDigit4 = currentTimeText.substr(4,1);

        return (
            <div id="ClockTower" className={this.state.lightCycle}>
                <h1>Clock Tower Bell Counter App</h1>
                <form>
                    <div className='digitalClock'>
                        <label className={startTimeClass}>Start Time</label>
                        <input
                            type='text' 
                            prop='startTime'
                            value={startTime.text}
                            onChange={this.changeTime} 
                            disabled={disabled}
                        />
                    </div>
                    <div className='digitalClock'>
                        <label className={endTimeClass}>End Time</label>
                        <input
                            type='text'
                            prop='endTime'
                            value={endTime.text}
                            onChange={this.changeTime} 
                            disabled={disabled}
                        />
                    </div>
                    <button onClick={this.startClock} disabled={startClockEnabled}>Start Clock</button>
                    <button onClick={this.stopClock} disabled={stopClockEnabled}>Stop Clock</button>
                </form>
                <div id="ClockTower-currentTime" className='digitalClock'>
                    <label>Current Time</label>
                    <div>
                        <span>{cttDigit1}</span>
                        <span>{cttDigit2}</span>
                        <span className='colon'>:</span>
                        <span>{cttDigit3}</span>
                        <span>{cttDigit4}</span>
                    </div>
                    {/* <input
                        type='text'
                        value={currentTimeText}
                        disabled='disabled'
                    /> */}
                </div>
                <ClockTowerBellCounter bellCount={this.state.bellCount} />
                <ClockTowerRenderer currentTime={this.state.currentTime} />
            </div>
        )
    }
}

export default ClockTower
