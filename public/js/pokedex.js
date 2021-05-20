/* eslint-disable camelcase */
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

const addToCollection = async (event) => {
  event.preventDefault();
  console.log(event.target);
  const api_id = event.target.dataset.api;
  const card_name = event.target.dataset.name;
  const { description } = event.target.dataset;
  const card_image = event.target.dataset.image;
  const user_id = event.target.dataset.user;
  const info = {
    api_id,
    card_name,
    description,
    card_image,
    user_id,
  };
  console.log(user_id);
  console.log(info);
  try {
    const response = fetch('/api/cards/', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      alert('Success!');
    }
  } catch (error) {
    console.log(error);
  }
  // const response = await fetch('/api/cards/', {
  //   method: 'POST',

  // })
};

addBtns.forEach(((el) => {
  el.addEventListener('click', addToCollection);
}));
// let pageNum = parseInt(document.location.search.charAt(document.location.search.length - 1))
// console.log(pageNum);
// if (isNaN(pageNum)) {
//   pageNum = 1;
// }
// const pageEls = document.querySelectorAll('.pageEl');
// pageEls.forEach((el) => {
//   if(parseInt(el.dataset.value) === pageNum) {
//     el.classList.add('active');
//   }

// });
let pageNum = 1;

if (pageNum === 1) {
  $('.previous').disabled = true;
}
if (document.location.search.includes("page=")) {
  pageNum = parseInt(document.location.search.charAt(document.location.search.length - 1))
}
console.log(pageNum);
const pageEls = document.querySelectorAll('.pageEl');
pageEls.forEach((el) => {
  if(parseInt(el.dataset.value) === pageNum) {
    el.classList.add('active');
  }
});

if (document.location.search) {
  document.querySelector('#toggle-img').classList.add('hide');
};