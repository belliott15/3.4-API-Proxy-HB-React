import { useState } from 'react';
import { getYelpData } from './services/fetch.utils';
import Spinner from './Spinner';
import BusinessesList from './BusinessesList';

export default function YelpSearch() {
  const [yelpData, setYelpData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [yelpQuery, setYelpQuery] = useState('');
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.

  async function handleYelpSubmit(e) {
    e.preventDefault();
  
    // set the loading state to true
    setLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const { data : { businesses } } = await getYelpData(yelpQuery);
    console.log(businesses);
    // put the jsonified data in state and set the loading state to false
    setYelpData(businesses);
    setLoading(false);
    setYelpQuery('');
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input value={yelpQuery} onChange={(e) => setYelpQuery(e.target.value)}/>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {loading ? <Spinner />
        : <BusinessesList yelpData={yelpData} />
      }
    </section>
  );
}
  
