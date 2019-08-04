// src/views/EagletonWebDesigns/FullRoster.jsx
console.info( 'Mounting FullRoster.jsx... <FullRoster />' );

import React from 'react'
import { Link } from 'react-router-dom'
import PlayerAPI from '../../utils/PlayerAPI'

// Iterates over all of the players and creates a link to their profile page.
//............................................................................
const FullRoster = () => (
    <div className="fullroster">
        <h2>FullRoster</h2>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}><button>{p.name}</button></Link>
                    </li>
                ))
            }
        </ul>
  </div>
)

export default FullRoster;

// eof

