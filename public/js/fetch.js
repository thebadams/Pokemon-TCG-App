async function searchAPI(query) {
  try {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
}
