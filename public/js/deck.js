// const deckBtns = document.querySelectorAll('.add-btn');

// const createDeck = async (event) => {
//   event.preventDefault();
//   console.log(event.target);

//   console.log(event.target);
//   const api_id = event.target.dataset.api;
//   const card_name = event.target.dataset.name;
//   const description = event.target.dataset.description;
//   const card_image = event.target.dataset.image;
//   const user_id = event.target.dataset.user;
//   const info = {
//     api_id,
//     card_name,
//     description,
//     card_image,
//     user_id,
//   };
//   console.log(user_id);
//   console.log(info);
//   try {
//     const response = fetch('/api/decks', {
//       method: 'POST',
//       body: JSON.stringify(info),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       alert('Success!');
//     }
//   } catch (error) {
//     console.log(error);
//   }


// };

// deckBtns.forEach(((el) => {
//   el.addEventListener('click', addToCollection);
// }));


