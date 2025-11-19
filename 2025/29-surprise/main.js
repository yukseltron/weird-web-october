document.addEventListener('DOMContentLoaded', () => {
  const people = document.querySelectorAll('.person');

  people.forEach(person => {
    const startX = person.offsetLeft;
    const startY = person.offsetTop;

    let offsetX = 0;
    let offsetY = 0;

    function wiggle() {
      offsetX = (Math.random() - 0.5) * 4;
      offsetY = (Math.random() - 0.5) * 4;

      person.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

      setTimeout(wiggle, 200 + Math.random() * 300);
    }

    wiggle();
  });
});

function leftChoice() {
  document.body.style.backgroundColor = 'white';
  const h2tags = document.querySelectorAll('h2');
  const persons = document.querySelectorAll('.person');
  const buttons = document.querySelectorAll('button');
  const leftResult = document.getElementById('left-result');

  leftResult.style.visibility = 'visible';

  persons.forEach((person) => {
    person.style.visibility = 'hidden';
  })

  h2tags.forEach((h2tag) => {
    h2tag.innerText = 'GONE GONE GONE GONE'
    h2tag.style.color = 'red';
  })

  buttons.forEach((button) => {
    button.style.visibility = 'hidden';
  })
}

function rightChoice() {
  document.body.style.backgroundColor = 'white';
  const h2tags = document.querySelectorAll('h2');
  const persons = document.querySelectorAll('.person');
  const buttons = document.querySelectorAll('button');
  const rightResult = document.getElementById('right-result');

  rightResult.style.visibility = 'visible';

  persons.forEach((person) => {
    person.style.visibility = 'hidden';
  })

  h2tags.forEach((h2tag) => {
    h2tag.innerText = 'WELCOME WELCOME WELCOME'
    h2tag.style.color = 'blue';
  })

  buttons.forEach((button) => {
    button.style.visibility = 'hidden';
  })
}
