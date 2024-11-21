const maxSnowflakes = 100;
const snowflakes = [];
const emojiClasses = ['emoji-1', 'emoji-2', 'emoji-3', 'emoji-4'];

function emojiSnowflake() {
  const emoji = document.createElement('div');
  const randomEmojiClass = emojiClasses[Math.floor(Math.random() * emojiClasses.length)];
  emoji.classList.add('emoji', randomEmojiClass);
  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.fontSize = `${Math.random() * (8 - 2) + 2}rem`;
  emoji.style.animationDuration = `${Math.random() * (6 - 3) + 3}s`; // Randomize duration
  emoji.textContent = randomEmoji();

  snowflakes.push(emoji);
  document.body.appendChild(emoji);

  // Cleanup after animation ends
  emoji.addEventListener('animationend', () => {
    emoji.remove();
    const index = snowflakes.indexOf(emoji);
    if (index > -1) snowflakes.splice(index, 1);
  });
}

function randomEmoji() {
    const emojis = ['🍕', '🍔', '🍟', '🍦', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🧁', '🥧', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🍷', '🍾', '🍶', '🍵', '🍼', '🥛', '☕', '🍳', '🥞', '🥐', '🍞', '🥖', '🥨', '🧀', '🥚', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🌭', '🍕', '🥪', '🍳', '🥚', '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🦀', '🦞', '🦐', '🦑', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

document.addEventListener('click', () => {
    emojiSnowflake();
});