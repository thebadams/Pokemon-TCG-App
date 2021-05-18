const tradeBtn = document.querySelector('#tradeBtn');

const myCards = document.querySelectorAll('.my-card');

const otherCards = document.querySelectorAll('.other-card');

const myCardSelect = (event) => {
  myCards.forEach((card)=> {
    card.classList.remove('trade');
  })
  event.target.classList.add('trade');
  console.log(event.target, "Clicked");
}

myCards.forEach((card)=>{
  card.addEventListener('click', myCardSelect);
});

const otherCardSelect = (event) => {
  otherCards.forEach((card) => {
    card.classList.remove('want');
  })
  event.target.classList.add('want');
  console.log(event.target, "Want");
}

otherCards.forEach((card) => {
  card.addEventListener('click', otherCardSelect);
});

const tradeHandler = async (event) => {
  event.preventDefault();
  const tradingCard = document.querySelector('.trade');
  const wantCard = document.querySelector('.want');
  console.log('Trading Cards:', tradingCard)
  console.log('Want Cards:', wantCard);
  const user_id1 = wantCard.dataset.user
  const info1 = { user_id: user_id1 }
  const user_id2 = tradingCard.dataset.user
  const info2 = { user_id: user_id2 }
  try {
    const tradeData = await fetch(`/api/cards/${tradingCard.dataset.id}`, {
    method: 'PUT',
    body: JSON.stringify(info1),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  console.log(tradeData);
  } catch (error) {
    console.log(error);
  }

  try {
    const wantData = await fetch(`/api/cards/${wantCard.dataset.id}`, {
    method: 'PUT',
    body: JSON.stringify(info2),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(wantData)
  } catch (error) {
    console.log(error)
  }
  
  document.location.replace('/trading');
};

tradeBtn.addEventListener('click', tradeHandler);