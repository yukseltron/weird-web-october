const dataRows = [
  { id: 'data-meows', time: 1000 },
  { id: 'data-purrs', time: 500 },
  { id: 'data-trills', time: 1500 },
  { id: 'data-chirps', time: 750 },
  { id: 'data-hisses', time: 2500 }
]

function addToDataRow(id, time) {
  const data = document.getElementById(id);
  const title = document.getElementById('title');
  setInterval(() => {
    data.innerHTML += '|';
    switch(data.innerHTML.length) {
      case 20:
        data.style.color = 'yellow';
        title.innerHTML = 'Getting kinda full!';
        break;
      case 40:
        data.style.color = 'orange';
        title.innerHTML = 'Almost full now!';
        break;
      case 60:
        data.style.color = 'red';
        title.innerHTML = "YOU'RE OVERFLOWING!";
        break;
    }
  }, time);
}
  
function resetDataRow(id) {
  const data = document.getElementById(id);
  const title = document.getElementById('title');
  data.innerHTML = '|';
  data.style.color = 'black';
  title.innerHTML = 'Data Rows';
}

function handleRows() {
  dataRows.forEach(row => addToDataRow(row.id, row.time));
}

function handleReset() {
  dataRows.forEach(row => resetDataRow(row.id));
}

handleRows();