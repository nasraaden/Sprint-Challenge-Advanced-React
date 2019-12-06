import React from "react";
import axios from "axios"

class Player extends React.Component{
    state = {
        players: []
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/players")
        .then(response => {
            console.log(response)
            this.setState({players: response.data})
        })
        .catch(err => {
            console.log("NO PLAYERS", err)
        })
    }

    render() {
        return (
            <div className="player-container" data-testid="player-test">
                {this.state.players.map(player => (
                    <div key={player.id} className="player-card"> 
                        <h2>{`${player.name}`}</h2>
                        <p>{`Country: ${player.country}`}</p>
                        <p>{`Searches: ${player.searches}`}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Player;