import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div className='card'>
      {pokemon.map(poke => <Pokemon key={poke._id} poke={poke}/>)}
    </div>
  );
}
