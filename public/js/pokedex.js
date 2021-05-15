const searchForm = document.querySelector('#searchForm');

const handleSearchForm = async (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#autocomplete-input').value.trim();
  const params = `?name=${searchQuery}`;
  document.location.replace(`/pokedex${params}`);
};

searchForm.addEventListener('submit', handleSearchForm);
