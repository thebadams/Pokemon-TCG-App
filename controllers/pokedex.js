const { response } = require("express");

const searchForm = document.querySelector('#searchForm');

const handleSearchForm = async () => {
  const searchQuery = document.querySelector('#autocomplete-input').value.trim();
  const results = await fetch(`api/pokedex/:${searchQuery}`);

  if (response.ok) {
    document.location.replace('/pokedex');
  }
}

searchForm.addEventListener('submit', handleSearchForm)