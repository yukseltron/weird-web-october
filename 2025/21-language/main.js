document.addEventListener('DOMContentLoaded', () => {
  const sequenceEls = document.querySelectorAll('.sequence');

  const diverseChars = [
    'Ɓ','Ƈ','Ɗ','Ɛ','Ɣ','Ɨ','Ɲ','Ʃ','Ʊ','Ƕ','Ƿ','Ȝ','ȴ','Ʌ',
    'Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω',
    'Б','Г','Д','Ж','З','И','Й','Л','П','Ф','Ц','Ч','Ш','Щ','Ы','Э','Ю','Я',
    'ب','ت','ث','ج','ح','خ','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي',
    'א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת',
    'अ','आ','इ','ई','उ','ऊ','ऋ','ए','ऐ','ओ','औ','क','ख','ग','घ','च','छ','ज','झ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह',
    'அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','க','ங','ச','ஞ','ட','ண','த','ந','ப','ம','ய','ர','ல','வ','ழ','ள','ற','ன',
    'Ⴀ','Ⴁ','Ⴂ','Ⴃ','Ⴄ','Ⴅ','Ⴆ','Ⴇ','Ⴈ','Ⴉ','Ⴊ','Ⴋ','Ⴌ','Ⴍ','Ⴎ','Ⴏ','Ⴐ','Ⴑ','Ⴒ','Ⴓ','Ⴔ','Ⴕ','Ⴖ','Ⴗ','Ⴘ','Ⴙ','Ⴚ','Ⴛ','Ⴜ','Ⴝ','Ⴞ','Ⴟ','Ⴠ','Ⴡ','Ⴢ',
    'ሀ','ለ','መ','ሠ','ረ','ሰ','ሸ','ቀ','በ','ተ','ቸ','ኀ','ነ','ኘ','አ','ከ','ኸ','ወ','ዐ','ዘ','ዠ','የ','ደ','ገ','ጠ','ጨ','ፈ','ፐ',
    'あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん',
    'ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン',
    '가','각','간','갇','갈','감','갑','값','갓','강','개','객','거','걱','건','걸','검','것','게','겨','경','계','고','곡','공','과','광','교','구','국','군','권','귀','규','그','극','근','글','금','기'
  ];

  const queueLength = 425;
  const updateInterval = 500;
  let queue;

  function renderQueue() {
    for (const sequence of sequenceEls) {
      queue = Array.from({ length: queueLength }, () =>
        diverseChars[Math.floor(Math.random() * diverseChars.length)]
      );
      sequence.textContent = queue.join(' ');
    }
  }

  function loop() {
    queue.shift();
    queue.push(diverseChars[Math.floor(Math.random() * diverseChars.length)]);
    renderQueue();
  }

  renderQueue();
  setInterval(loop, updateInterval);

  
  sequenceEls.forEach(sequence => {
    sequence.addEventListener('mouseenter', () => {
      sequence.classList.add('paused');
    });

    sequence.addEventListener('mouseleave', () => {
      sequence.classList.remove('paused');
    });
  });

  const paragraph = document.getElementById('encrypted-text');
  if (paragraph) {
    const words = paragraph.textContent.trim().split(' ');
    paragraph.innerHTML = words
      .map(word => {
        const randomText = Array.from({ length: word.length }, () =>
          diverseChars[Math.floor(Math.random() * diverseChars.length)]
        ).join('');
        return `<span class="encrypted-word" data-word="${word}">${randomText}</span>`;
      })
      .join(' ');

    paragraph.querySelectorAll('.encrypted-word').forEach(span => {
      span.addEventListener('mouseenter', () => {
        span.textContent = span.dataset.word;
        span.style.padding = '5px';
        span.style.color = 'orangered';
        span.style.cursor = 'pointer';
        span.style.border = '1px solid orangered';
      });
      span.addEventListener('mouseleave', () => {
        const word = span.dataset.word;
        const randomText = Array.from({ length: word.length }, () =>
          diverseChars[Math.floor(Math.random() * diverseChars.length)]
        ).join('');
        span.style.padding = '0px';
        span.style.border = 'none';
      });
    });
  }
});


