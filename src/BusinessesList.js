import React from 'react';


export default function BusinessesList({ yelpData }) {
  return (
    <div>
      {yelpData.map((business, i) => 
        <a key={business.phone + business.name + i} href={business.url} target='_blank' rel="noreferrer">
          <div className='yelp'>
            <h2>{business.name}</h2>
            <p>Ph: {business.phone}</p>
            <img src={business.image_url} />
            <p>{business.price}</p>
          </div>
        </a>
        
      )}
    </div>
  );
}
