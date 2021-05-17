const searchForm = document.querySelector('#searchForm');
const addBtns = document.querySelectorAll('.add-btn');
console.log(addBtns);
const handleSearchForm = async (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#autocomplete-input').value.trim();
  const params = `?name=${searchQuery}`;
  document.location.replace(`/pokedex${params}`);
};

searchForm.addEventListener('submit', handleSearchForm);

const addToCollection = async(event) => {
  event.preventDefault();
  console.log(event.target);
  const api_id = event.target.dataset.api;
  const card_name = event.target.dataset.name;
  const description = event.target.dataset.description;
  const card_image =event.target.dataset.image;
  const user_id = event.target.dataset.user;
  const info = {
    api_id,
    card_name,
    description,
    card_image,
    user_id,
  };
  try {
    const response = fetch('/api/cards/', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.ok) {
      alert("Success!");
    }
  } catch (error) {
    console.log(error);
  }
  // const response = await fetch('/api/cards/', {
  //   method: 'POST',
    
  // })
}

addBtns.forEach((el=> {
  el.addEventListener('click', addToCollection);
}));
