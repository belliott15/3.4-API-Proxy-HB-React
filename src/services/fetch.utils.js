
export async function getPokemon(query){
  const rawResponse = await fetch(`/.netlify/functions/pokemon?query=${query}`);
  const data = await rawResponse.json();
  console.log(data, 'fetch utils data');
  return data;
}

export async function getYelpData(query){
  const response = await fetch(`/.netlify/functions/yelp?query=${query}`);
  const data = await response.json();
  
  return data;
}

export async function getWeatherData(query){
  const response = await fetch(`/.netlify/functions/weather?query=${query}`);
  const data = await response.json();
    
  return data;
}