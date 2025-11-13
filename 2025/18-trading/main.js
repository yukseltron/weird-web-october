document.addEventListener('DOMContentLoaded', () => {
  const hud = document.querySelector('.hud p');
  const imgContainer = document.querySelector('.img-container');
  const buttonContainer = document.querySelector('main > div:last-of-type');

  const trades = [
    {
      item: {
        name: 'a very suspect can of beans',
        img: 'https://png.pngtree.com/png-clipart/20241107/original/pngtree-can-of-baked-beans-food-clipart-illustration-png-image_16718209.png',
      },
      question: 'What would you trade for this can of beans?',
      choices: [
        { 
          text: 'absolutely nothing (air)', 
          reaction: "<h1>I laugh at your audacity. You think you're real funny, huh? I don't think you're funny. I think you deserve so much worse. Scum like you think you have all the guile. Do you feel good abut that somehow? Tricking an old fella like me? There's few things that make as mad as you just did. Now, do you think we can just move on like nothing happened? That's impossible. We've crossed that bridge. A long time ago.</h1>"
        },
        { 
          text: 'a half-eaten apple', 
          reaction: '<p>Let me get my buddy who specializes in dumpster food diving. I need that apple graded.<p>',
        },
        { 
          text: '100 didgeridoos', 
          reaction: "<p>Oh hell yeah, I'll take that.</p><audio autoplay> <source src='Didgeridoo_sound.ogg' type='audio/ogg'> Your browser does not support the audio tag. </audio>"
        },
      ]
    },
    {
      item: {
        name: 'a VHS tape recording of an episode of Columbo',
        img: 'https://cdn.pixabay.com/photo/2016/04/11/14/22/vhs-1322179_1280.png',
      },
      question: 'Ok, time to try something else. What would you trade for this VHS tape recording of an episode of Columbo? (it also includes the advertisements)',
      choices: [
        { 
          text: 'a handful of beans', 
          reaction: '<p>*quietly* Beans. Just beans. Beans again... *grumbling sounds*</p>' 
        },
        { 
          text: 'your left Nike Air Force 1 shoe', 
          reaction: "What size is that? How did you know I was a collector and happened to only have the right shoe? It's not the exact colourway I was looking for, but Bruce Kilgore really cooked with this."
        },
        { 
          text: 'the soul of your most faithful dog', 
          reaction:  '<p>Why would you do that? Look what you have just done. You have doomed us all.</p><img src="world-ending.gif" />' 
        },
      ]
    },
    {
      item: {
        name: 'an occult pendulum found in an attic',
        img: 'https://wallpapers.com/images/thumbnail/crystal-pendulum-png-64-pn8bw2kojwfw78j4.webp',
      },
      question: "One last trade. What would you trade for this occult pendulum? I found it in my grandmother's attic. It keeps whispering thoughts in my ears at night and I'm kinda over it.",
      choices: [
        { 
          text: 'three dollars.', 
          reaction: 'AHA! YOU CHEAPSKATE! THIS PENDULUM CURSES THE FRUGAL ONES! ENJOY LIVING A LIFE OF SQUALOR AND MISERY AS YOU NEVER CAN AFFORD ANOTHER MATCHA LATTE AGAIN!' 
        },
        { 
          text: 'your ability to be pensive and have self-reflection', 
          reaction: "You've paid a high price, my friend. I wish you could think about it and see if it was worth it, but it seems you are no longer capable of doing that anymore, mwahahahahah. (What am I doing with my life? Is this sort of trickery my only hobby? I should find some new friends)." 
        },
        { 
          text: 'nothing (more air)', 
          reaction: "Oh yes, just leave this pendulum with me. It's not like it's been slowly draining my life essence and giving me terrible stomach cramps. Yeah, you totally missed out." 
        },
      ]
    }
  ];

  let currentRound = 0;
  const finalTrades = [];

  function renderRound() {
    const round = trades[currentRound];
    hud.textContent = round.question;
    imgContainer.innerHTML = `<img src="${round.item.img}" alt="${round.item.name}">`;

    buttonContainer.innerHTML = '';
    round.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.classList.add('item');
      btn.textContent = choice.text;
      btn.addEventListener('click', () => handleChoice(choice, round.item.name));
      buttonContainer.appendChild(btn);
    });
  }

  function handleChoice(choice, itemName) {
    hud.innerHTML = choice.reaction;
    finalTrades.push(`You traded for ${itemName} by offering ${choice.text}.<br/>`);
    imgContainer.innerHTML = '';

    setTimeout(() => {
      currentRound++;
      if (currentRound < trades.length) {
        renderRound();
      } else {
        endGame();
      }
    }, 4000);
  }

  function endGame() {
    imgContainer.innerHTML = '';
    buttonContainer.innerHTML = '';
    hud.innerHTML = `<strong>Receipt:</strong><br><br>${finalTrades.join('<br>')}<br/><strong>Thank you?</strong>`;
  }

  renderRound();
});
