const tradeBtn = document.querySelector('#tradeBtn');

const myCards = document.querySelectorAll('.my-card');

const otherCards = document.querySelectorAll('.other-card');

const myCardSelect = (event) => {
  event.target.classList.add('trade');
  console.log(event.target, "Clicked");
}

myCards.forEach((card)=>{
  card.addEventListener('click', myCardSelect);
});

const otherCardSelect = (event) => {
  event.target.classList.add('want');
  console.log(event.target, "Want");
}

otherCards.forEach((card) => {
  card.addEventListener('click', otherCardSelect);
});

const tradeHandler = async (event) => {
  event.preventDefault();
  const tradingCards = document.querySelectorAll('.trade');
  const wantCards = document.querySelectorAll('.want')
  console.log('Trading Cards:', tradingCards)
  console.log('Want Cards:', wantCards);
};

tradeBtn.addEventListener('click', tradeHandler);