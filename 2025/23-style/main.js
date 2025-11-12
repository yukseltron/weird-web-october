document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');
  const body = document.body;
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  const title = document.querySelector('h1');
  const banner = document.querySelector('.banner');

  const styles = {
    orange: {
      background: '#FFF6ED',
      color: '#FF6600',
      border: '4px solid #FF6600',
      fontFamily: "'Helvetica', sans-serif",
    },
    lime: {
      background: 'green',
      color: '#00FF00',
      border: '4px dotted #00FF00',
      fontFamily: "'Verdana', sans-serif",
    },
    red: {
      background: 'grey',
      color: 'white',
      border: '0px dashed #FF3333',
      fontFamily: "'Courier New', Courier, monospace",
    },
    blue: {
      background: 'black',
      color: 'white',
      border: '0px dotted white',
      fontFamily: "'Times New Roman', Times, serif",
    }
  };

  // Reset function before applying a new style
  function resetStyles() {
    body.removeAttribute('data-mode');
    body.style.background = '';
    body.style.color = '';
    header.style.borderBottom = '';
    main.style.border = '';
    title.textContent = 'The Look';
  }

  // Apply the given style
  function applyStyle(config, colorKey) {
    body.setAttribute('data-mode', colorKey);
    body.style.background = config.background;
    body.style.color = config.color;
    body.style.fontFamily = config.fontFamily;
    header.style.borderBottom = config.border;
    main.style.border = config.border;
    banner.style.color = 'black';
    banner.style.background = config.color;


    // Optional visual cue (animate border flash)
    title.animate([
      { opacity: 0.3, transform: 'scale(0.95)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 400, easing: 'ease-out' });
  }

  // Add event listeners
  squares.forEach(square => {
    const colorKey = square.style.backgroundColor;

    square.addEventListener('click', () => {
      resetStyles();

      const selected = styles[colorKey];
      if (selected) {
        applyStyle(selected, colorKey);
      } else {
        console.warn(`No style defined for ${colorKey}`);
      }
    });
  });
});


const messages = [
    {
      message: 'ON SALE NOW!'
    },
    {
      message: '40% OFF ALL MISSING ITEMS'
    },
    {
      message: 'VINTAGE AND NEW'
    },
    {
      message: 'FREE SHIPPING'
    },
    {
      message: 'HELLFIRE SALE!'
    },
    {
      message: '90% OFF ALL UNKNOWN ITEMS'
    },
    {
      message: '!!!!!!!'
    },
    {
      message: 'WHILE SOULS LAST'
    },
    {
      message: 'BUY BUY BUY'
    },
    {
      message: 'UP TO 70% OFF'
    },
    {
      message: 'EXCLUSIVE SETS'
    },
    {
      message: 'UNLIMITED CHIC'
    },
]

function autoScrollFlagBanner() {
    const banner = document.querySelector('.banner');
    messages.forEach(message => {
        const messageSpan = document.createElement('p');
        messageSpan.textContent = message.message;
        banner.appendChild(messageSpan);
    });

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const scrollDirection = 1;
    const scrollWidth = banner.scrollWidth;
    const scrollInterval = setInterval(() => {
        banner.scrollTo(scrollAmount, 0);
        scrollAmount += scrollSpeed * scrollDirection;
        if (scrollAmount >= scrollWidth) {
            scrollAmount = 0;
        }
    }, 1000 / 60);

    messages.forEach(message => {
        const messageSpan = document.createElement('p');
        messageSpan.textContent = message.message;
        banner.appendChild(messageSpan);
    });
}

autoScrollFlagBanner();