// views/EagletonEnd/Player.jsx
console.info( 'Mounting Player.jsx... <Player />' );

import React from 'react'
import { Link } from 'react-router-dom'
import PlayerAPI from './PlayerAPI'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
  
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    
    return (
        <div className="player">
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'><button>Back</button></Link>
        </div>
    )
}

export default Player;

// eof

