import React from 'react';

class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div><span>{game.name}</span></div>
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{marginRight: '5px'}}><span>{game.votes}</span></div>
            <div>
              <input type="radio" name="vote" value={game.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
