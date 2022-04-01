const quoteContainer = document.getElementById('qoute-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuotebtn = document.getElementById('new-quote')
const tweetBtn = document.getElementById('twitt-btn')


function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteText.textContent = quote.text;
    if(!quote.author)
        quoteAuthor.textContent = "Unknown";
    else quoteAuthor.textContent = quote.author;
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
}
newQuotebtn.addEventListener('click', newQuote);
tweetBtn.addEventListener('click', tweetQuote);


newQuote();