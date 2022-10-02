// DOM Manipulation

// / Styling elements


// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = '2rem';
// }

/// Creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

/// Adding Elements

 ul.append(li)

 // Modifying the text

 li.innerText = 'X-men';

 ///////// Modifying attributes 

//  li.setAttribute('class', 'list-items');

//  //removing attribute

//  li.removeAttribute('id');

//  const title = document.querySelector('#main-heading');

//  console.log(title.getAttribute('id'));

//////// Modifying Classes

li.classList.remove('list-items')
li.classList.add('list-items')

console.log(li.classList.contains('list-items'));

// Remove Elements

li.remove();
