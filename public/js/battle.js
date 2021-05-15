const chatField = document.querySelector('#chatField');


const socket = io();


socket.on('message', message => {
  console.log(message)
});

//message submit
chatField.addEventListener('submit', (event) => {
  event.preventDefault();

const msg = event.target.msg.value;

console.log(msg);

})