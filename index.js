// DOM Manipulation

// Event Listeners

const buttonTwo = document.querySelector('.btn-2');
console.log('helow');

function alertBtn () {
   alert('I also love JS')
   console.log('clicked');
}

buttonTwo.addEventListener('click', alertBtn);

// Mouseover

const newBackground = document.querySelector('.btn-3');

function changeBgColor () {
  newBackground.style.backgroundColor = 'blue';
}

newBackground.addEventListener('mouseover', changeBgColor);

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {

  if(hiddenContent.classList.contains('reveal-btn')
  ){
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')  
  }

}

revealBtn.addEventListener('click', revealContent);