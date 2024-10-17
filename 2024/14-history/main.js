async function getKeywordArticles(keyword) {
    // Generate a random offset to avoid getting the same results every time
    const randomOffset = Math.floor(Math.random() * 100); // Adjust range as needed

    // Wikipedia API with pagination (using sroffset to randomize results)
    const searchApiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&sroffset=${randomOffset}&format=json&origin=*`;

    const response = await fetch(searchApiUrl);
    const data = await response.json();
    console.log(data);

    return data.query.search;
}

async function getRandomArticle(articles) {
    // Randomly select an article from the list
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
}

async function getArticleDetails(articleTitle) {
    // Wikipedia API for fetching details of a specific article
    const articleApiUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&titles=${encodeURIComponent(articleTitle)}&format=json&origin=*`;

    const response = await fetch(articleApiUrl);
    const data = await response.json();
    
    const pageId = Object.keys(data.query.pages)[0];
    const article = data.query.pages[pageId];

    return article.extract || 'No extract available';
}

async function getMainImage(pageId) {
    // Wikipedia API for fetching the main image (thumbnail) for an article based on pageid
    const imageApiUrl = `https://en.wikipedia.org/w/api.php?action=query&pageids=${pageId}&prop=pageimages&format=json&pithumbsize=500&origin=*`;

    const response = await fetch(imageApiUrl);
    const data = await response.json();

    // Check if the page has a thumbnail (main image)
    const page = data.query.pages[pageId];
    if (page.thumbnail) {
        return page.thumbnail.source; // Return the URL of the thumbnail image
    } else {
        return null; // No main image available
    }
}

async function loadHistoryArticles(keyword) {
    const historyDiv = document.querySelector('.history');
    const articles = await getKeywordArticles(keyword);

    const addArticle = async (article) => {
        const articleDetails = await getArticleDetails(article.title);
        const image = await getMainImage(article.pageid);

        // Display the article on the webpage
        const articleContainer = document.createElement('div');
        articleContainer.classList.add('article-container');
        const articleTitle = document.createElement('h3');
        const articleImage = document.createElement('div');
        articleTitle.innerText = article.title;
        articleImage.classList.add('article-image');
        articleImage.style.backgroundImage = `url(${image})`;
        const articleSnippet = document.createElement('p');
        articleSnippet.innerHTML = articleDetails;
        articleContainer.appendChild(articleTitle);
        if (image) {
            articleContainer.appendChild(articleImage);
        }
        articleContainer.appendChild(articleSnippet);
        historyDiv.appendChild(articleContainer);
    }

    for (let article of articles) {
        addArticle(article);
    }
}

// Use the function to load random articles related to 'history'
loadHistoryArticles('history');
