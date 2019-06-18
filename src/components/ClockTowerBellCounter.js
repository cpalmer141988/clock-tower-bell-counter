import React from 'react'

function ClockTowerBellCounter(props) {
    const { bellCount } = props
    return (
        <div>
            <h2>RESULT</h2>
            <p id="ClockTower-bellCounterResults">{bellCount}</p>
        </div>
    )
}

export default ClockTowerBellCounter
