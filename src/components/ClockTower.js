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
        let prop = event.target.getAttribute('prop')
        let value = event.target.value

        if (isValid) {
            this.setState({
                [prop]: {
                    text: value,
                    hour: this.updateHour(value),
                    minute: this.updateMinute(value),
                    isValid: true
                }
            }, () => {
                //console.log(this.state)
            })
        } else {
            this.setState({
                [prop]: {
                    text: value,
                    hour: this.state[prop].hour,
                    minute: this.state[prop].minute,
                    isValid: false
                }
            }, () => {
                //console.log(this.state)
            })
        }
    }

    startClock = (event) => {
        //console.log('Clock Started')
        this.setState({
            running: true,
            bellCount: 0,
            currentTime: {
                hour: this.state.startTime.hour,
                minute: this.state.startTime.minute
            }
        }, () => {
            //console.log(this.state)
            this.updateBellCount()
            this.updateLightCycle()
            this.tick()
        })
        event.preventDefault()
    }

    tick() {
        if (this.state.running) {
            this.incrementMinute()
        }
    }

    incrementMinute() {
        let minute = this.state.currentTime.minute
        if (minute === 59) {
            this.incrementHour()
        } else {
            minute++
            this.setState({
                currentTime: {
                    hour: this.state.currentTime.hour,
                    minute: minute
                }
            }, () => {
                let stop = this.shouldStopClock()
                if (stop) {
                    this.stopClock()
                } else {
                    setTimeout(this.tick.bind(this), this.state.runSpeed)
                }
            })
        }
    }

    incrementHour() {
        let hour = this.state.currentTime.hour
        if (hour === 23) {
            hour = 0
        } else {
            hour++
        }

        this.setState({
            currentTime: {
                hour: hour,
                minute: 0
            }
        }, () => {
            this.updateBellCount()
            this.updateLightCycle()
            let stop = this.shouldStopClock()
            if (stop) {
                this.stopClock()
            } else {
                setTimeout(this.tick.bind(this), this.state.runSpeed)
            }
        })
    }

    updateBellCount() {
        let hour = this.state.currentTime.hour
        let minute = this.state.currentTime.minute
        let bellCount = this.state.bellCount
        if (minute === 0) {
            let increment = (hour === 0) ? 12 : ((hour > 12) ? hour - 12 : hour)
            //console.log('The current hour is ' + hour + ' and the amount to increment by is ' + increment)
            this.setState({
                bellCount: bellCount += increment
            })
        }
    }

    shouldStopClock() {
        let currentTime = this.state.currentTime
        let endTime = this.state.endTime
        if (currentTime.hour === endTime.hour && currentTime.minute === endTime.minute) {
            return true
        } else {
            return false
        }
    }

    stopClock = (event = false) => {
        //console.log('Clock Stopped')
        this.setState({
            running: false
        }, () => {
            //console.log(this.state)
        })
        if (event)
            event.preventDefault()
    }

    updateHour(timeString) {
        let divider = timeString.indexOf(':')
        return parseInt(timeString.substr(0,divider))
    }

    updateMinute(timeString) {
        let divider = timeString.indexOf(':')
        return parseInt(timeString.substr(divider+1))
    }

    updateLightCycle() {
        let hour = this.state.currentTime.hour
        switch (hour) {
            case 6:
            case 7:
            case 8:
            case 18:
            case 19:
            case 20:
                this.setState({
                    lightCycle: 'dawn'
                }, () => {
                    //console.log(this.state.lightCycle)
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
                }, () => {
                    //console.log(this.state.lightCycle)
                })
                break;
            default:
                this.setState({
                    lightCycle: 'night'
                }, () => {
                    //console.log(this.state.lightCycle)
                })
                break;
        }
    }

    render() {
        const { startTime, endTime } = this.state
        let running = this.state.running ? 'disabled' : ''
        let startTimeClass = this.state.startTime.isValid ? 'success' : 'error'
        let endTimeClass = this.state.endTime.isValid ? 'success' : 'error'
        let startClockEnabled = !this.state.running && (this.state.startTime.isValid && this.state.endTime.isValid) ? '' : 'disabled'
        let stopClockEnabled = this.state.running ? '' : 'disabled'

        return (
            <div id="ClockTower" className={this.state.lightCycle}>
                <form>
                    <div>
                        <label className={startTimeClass}>Start Time</label>
                        <input id='ClockTower-startTime' className='clockField' 
                            type='text' 
                            prop='startTime'
                            value={startTime.text}
                            onChange={this.changeTime} 
                            disabled={running}
                        />
                    </div>
                    <div>
                        <label className={endTimeClass}>End Time</label>
                        <input id='ClockTower-endTime' className='clockField' 
                            type='text'
                            prop='endTime'
                            value={endTime.text}
                            onChange={this.changeTime} 
                            disabled={running}
                        />
                    </div>
                    <button id='ClockTower-startClock' onClick={this.startClock} disabled={startClockEnabled}>Start Clock</button>
                    <button id='ClockTower-startClock' onClick={this.stopClock} disabled={stopClockEnabled}>Stop Clock</button>
                </form>
                <ClockTowerBellCounter bellCount={this.state.bellCount} />
                <ClockTowerRenderer currentTime={this.state.currentTime} />
            </div>
        )
    }
}

export default ClockTower
