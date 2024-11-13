const proxyUrl = 'https://corsproxy.io/?';
const scriptUrl = 'https://courses.cs.washington.edu/courses/cse163/20wi/files/lectures/L04/bee-movie.txt';
const cacheKey = 'filmScriptCache';

async function fetchAndDisplayScript() {
    const cachedScript = sessionStorage.getItem(cacheKey);
    const scriptElement = document.getElementById('film-script');

    if (cachedScript) {
        scriptIntoSpans(cachedScript, scriptElement);
        console.log('Script loaded from cache');
    } else {
        try {
            const response = await fetch(proxyUrl + scriptUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const scriptText = await response.text();
            scriptIntoSpans(scriptText, scriptElement);
            sessionStorage.setItem(cacheKey, scriptText);
            console.log('Script fetched and cached');
        } catch (error) {
            console.error(error);
        }
    }
}

function scriptIntoSpans(script, parentElement) {
    const words = script.split(' ');
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        parentElement.appendChild(span);
        span.addEventListener('mouseover', () => {
            //add to the fontSize which starts off at 0.25rem, add 0.25to it
            span.style.fontSize = (parseFloat(window.getComputedStyle(span).fontSize) + 5) + 'px';
        });
    });
}

fetchAndDisplayScript();
