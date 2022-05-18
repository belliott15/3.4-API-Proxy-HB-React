import { useState } from 'react';
import PokemonList from './PokemonList';
import Spinner from './Spinner';
import { getPokemon } from './services/fetch.utils';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setLoading(true);
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const allPokemon = await getPokemon(query);
        // put the jsonified data in state and set the loading state to false
    setPokemon(allPokemon.data.results);
    setLoading(false);
    setQuery('');
  }
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a city
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <label>
          <input value={query} onChange={(e) => setQuery(e.target.value)}/>
        </label>
        <button>Get pokemon</button>
      </form>{ loading ? <Spinner />
        : <PokemonList pokemon={pokemon}/>
      }
      
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
