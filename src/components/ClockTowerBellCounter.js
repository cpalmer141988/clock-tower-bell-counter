import React from 'react'

function ClockTowerBellCounter(props) {
    const { bellCount } = props
    return <h2 id="ClockTower-bellCounter">Bell Count: {bellCount}</h2>
}

export default ClockTowerBellCounter
