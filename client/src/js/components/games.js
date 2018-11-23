import React from 'react';
import LocalizedStrings from 'react-localization';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';
import Game from './game';

const strings = new LocalizedStrings({
  en: {
    games: 'Games'
  }
});

const games = [
  {id: 1, name: 'Shatranj', votes: 23},
  {id: 2, name: 'Mench', votes: 5},
  {id: 3, name: 'Sarnakh', votes: 2}
];

const Games = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} >
      <div style={{border: '2px solid #d0d0d0', padding: '2px'}}>
        <div class="panel panel-default">
          <div
            style={{
              borderBottom: '2px solid #d0d0d0', backgroundColor: COLOR3,
              fontWeight: 'bold'
            }}
          >
            <span style={{color: COLOR5}}>{strings.games}</span>
          </div>
          {
            games ? games.sort((a, b) => {
              return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            }).map(game => {
              return (
                <div><Game key={game.id} game={game} /></div>
              );
            }) : null
          }
        </div>
      </div>
    </div>
  );
};

export default Games;
