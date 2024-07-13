// Write your code here!
const main = document.querySelector('#main');
if (main) {
  main.remove();
}


const newHeader = document.createElement('h1');

newHeader.id = 'victory';


const yourName = 'John Doe'; 
newHeader.textContent = `${yourName} is the champion`;


document.body.appendChild(newHeader);


