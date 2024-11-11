const dataRows = [
  { id: 'data-food', time: 1000 },
  { id: 'data-water', time: 500 },
  { id: 'data-play', time: 1500 },
  { id: 'data-sleep', time: 750 },
  { id: 'data-poop', time: 2500 }
]

function addToDataRow(id, time) {
  const data = document.getElementById(id);
  const title = document.getElementById('title');
  const avatar = document.getElementById('avatar');
  setInterval(() => {
    data.innerHTML += '|';
    switch(data.innerHTML.length) {
      case 20:
        data.style.color = 'yellow';
        title.innerHTML = 'Hey now, are you there?';
        avatar.style.backgroundImage = "url('https://media.tenor.com/Ol52RD-x5a0AAAAM/looking-eye-roll.gif')";
        break;
      case 40:
        data.style.color = 'orange';
        title.innerHTML = 'What are you doing?!';
        avatar.style.backgroundImage = "url('https://i.pinimg.com/564x/1a/c0/23/1ac0231aa6d74d092328d445aa98183e.jpg')";
        break;
      case 60:
        data.style.color = 'red';
        title.innerHTML = "IT'S OVERFLOWING!";
        avatar.style.backgroundImage = "url('https://i.pinimg.com/474x/bf/ce/68/bfce6882af5eb63301866ac25a8fa62d.jpg')";
        break;
    }
  }, time);
}
  
function resetDataRow(id) {
  const data = document.getElementById(id);
  data.innerHTML = '|';
  data.style.color = 'black';
}

function handleRows() {
  dataRows.forEach(row => addToDataRow(row.id, row.time));
}

function handleReset(id) {
  const title = document.getElementById('title');
  title.innerHTML = 'Thank you! Take care of me!';
  avatar.style.backgroundImage = "url('https://i.pinimg.com/736x/e3/3f/07/e33f0746ebaf5f6bb5ff78c4f060028c.jpg')";
  resetDataRow(id);
}

handleRows();