import React from 'react';

export default function Pokemon({ poke }) {
  return (
    <div className='card'>
      <h1>{poke.pokemon}</h1>
      {poke.type_2 === 'NA' ? <p>Type: {poke.type_1}</p>
        : <p>Type: {poke.type_1} / {poke.type_2}</p>
      }
      <img src={poke.url_image} />
    </div>
  );
}
