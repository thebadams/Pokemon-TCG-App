

const socket = io();
const chatForm = document.querySelector('#chat-form');
// const leaveBtn = document.querySelector('.btn');
const chatMessages = document.querySelector('.chat-messages');
let user = document.querySelector('#user').dataset.user;





// Message from Server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  //scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;


});

//messsage submit
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

const msg = event.target.elements.msg.value;

//Emitting a message to the server
socket.emit("chatMessage", msg, user);

//clear input
event.target.elements.msg.value = "";
event.target.msg.focus();
 
});

// Output Message to Dom

const outputMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  console.log(`${message}`);
  div.innerHTML = `	<p class="meta">${message.username}<span> ${message.time}</span></p>
  <p class="text">
   ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}



//leave chat room logic

// const leaveRoom = (event) => {
//   event.preventDefault();

//   if (event.target === leaveBtn) {
//     document.location.replace('/dashboard');
//   }
// };

// leaveBtn.addEventListener('click', leaveRoom);