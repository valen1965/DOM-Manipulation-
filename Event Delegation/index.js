// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element and adds it to all of its present and future descendants that match a selector.

// document.querySelector('#football').addEventListener('click', function(e){
//     console.log('football is clicked');
    
//     const football = e.target;

//     if(football.matches('li')) {
//        football.style.backgroundColor = 'lightgrey'; 
//     }   
// });

document.querySelector('.sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id'));
    
    const target = e.target;

    if(target.matches('li')) 
        target.style.backgroundColor = ' lightgreen';

})
    
const sports = document.querySelector('.sports');
const newSports = document.createElement('li');

newSports.innerText = 'rugby';
newSports.setAttribute('id', 'rugby');
sports.appendChild(newSports);

    
