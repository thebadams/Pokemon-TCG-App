// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };
const deleteBtns = document.querySelectorAll('.deleteBtn');
const delButtonHandler = async (event) => {
 const id = event.target.dataset.id;
 try {
   const result = await fetch(`/api/cards/${id}`, {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json',
     },
   });
   console.log(result)
 } catch (error) {
   console.log(error);
 }
 document.location.replace('/profile');
};

deleteBtns.forEach((btn) => {
  btn.addEventListener('click', delButtonHandler)
})

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
