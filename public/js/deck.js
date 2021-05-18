const addDeck = document.querySelectorAll('.card-deck');
console.log(addDeck)

// const createDeck = async (event) => {
//   event.preventDefault();
//   console.log(event.target);
//   const user_id = event.target.dataset.user;
//   const deck_name = event.target.dataset.name;
 
//   // const deck_id = event.target.dataset.deck;


//   const cardInfoForDeck = {
//     deck_name,
//     user_id,
//   };
//   console.log(cardInfoForDeck);

//   try {
//     const response = fetch('/api/decks', {
//       method: 'POST',
//       body: JSON.stringify(cardInfoForDeck),
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

// addDeck.addEventListener("click", createDeck);


const addCardToDeck = async (event) => {
  event.preventDefault();
  console.log(event.target)
  const id = event.target.dataset.id;
  console.log(id);
  console.log('inside the function')
  const card_name = event.target.dataset.card;
  const description = event.target.dataset.text;
  // console.log(description)
  const card_image = event.target.dataset.cardimage;
  const user_id = event.target.dataset.user;
  const deck_id = event.target.dataset.deck;
  console.log(deck_id);
  // console.log(deck_id)

  const addingCard = {
    // card_name,
    // description,
    // card_image,
    // user_id,
    deck_id,
  };
  console.log(addingCard);

   try {
    const response = fetch(`/api/cards/${id}`, {
      method: 'PUT',
      body: JSON.stringify(addingCard),
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


};
addDeck.forEach((el) =>
el.addEventListener("click", addCardToDeck));



const waterD = document.querySelectorAll('.showD');

const getSpecificDeck = async (event) => {
  event.preventDefault();
  console.log(event.target);
  const id = event.target.dataset.number;
  console.log(id);
  const deck_name = event.target.dataset.name;
  console.log(deck_name);

  const card_name = event.target.dataset.card;
  const description = event.target.dataset.text;
  const card_image = event.target.dataset.cardimage;
  const user_id = event.target.dataset.user;
  // const deck_id = event.target.dataset

  const showDeck = {
    id,
    deck_name,
    user_id,
    card_name,
    description,
    card_image,
    // user_id
    
  }

  // try {
  try {

    // const response = await fetch(`/profile/${id}`);
    // console.log(response);



    // const response = await result.json();
    // console.log(response)
    // const cardData = response.cards;
  //   let cardName = document.querySelector('.card-name');
  //   let cardImage = document.querySelector('.card-image');
  //   console.log(cardImage)
  //   // let cardDesc = document.querySelector('.card-desc');
  //  console.log(cardData.length);
    
  //  cardData.map((card) => {
  //    let lit = card.card_image;
  //    console.log(lit);
    
  //     cardImage.setAttribute("src", lit);
  //     console.log(cardImage);
     
  //   });
  

      // alert('Success!');
      document.location.replace(`/profile/${id}`)
    
  } catch (err) {
    console.log(err)
  }


};

// waterD.addEventListener('click', getSpecificDeck);
waterD.forEach((el) =>
el.addEventListener("click", getSpecificDeck));