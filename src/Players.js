import React, { Component } from 'react';
import './Players.css';

class Players extends Component {
  render() {
    return (
      <div className="Players">
        <h3>Players</h3>
        <ul>
        {this.props.model.players.map((player, i) =>
          <li key={player.name}>
            <h4>{player.name}</h4>
            {player.credits}
            <ul className="ownedItems">
              {this.props.model.ownedItems[i].map((item) =>
                <li>{item.label}</li>
              )}
            </ul>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Players;