import React, { useState } from 'react'

function JoinGame() {
    const [rivalUsername, setRivalUsername] = useState("")
  return (
    <div className="joinGame">
        <h4>Create Game</h4>
        <input 
        placeholder="Username of rival..." 
        onChange={(event) => setRivalUsername(event.target.value)}></input>
        <button> Join/Start Game</button>
        </div>
  )
}

export default JoinGame