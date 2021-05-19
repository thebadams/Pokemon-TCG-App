const chatField = document.querySelector('#chatField');


const socket = io();

//message from server
socket.on('message', message => {
  console.log(message)
  outputMessage(message);
});

//message submit
chatField.addEventListener('submit', (event) => {
  event.preventDefault();

  //get messag etext
const msg = document.querySelector('#autocomplete-input').value.trim();

//emit message to server
socket.emit("chatMessage", msg);

});

//output message to DOM
const outputMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `
  <p class="meta">
  ${message}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}