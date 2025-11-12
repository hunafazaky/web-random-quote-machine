// Get Elements
const quoteBox = document.getElementById("quote-box");
const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");
// Variable and Function
const quoteList = [
  {
    text: "quote 1",
    author: "author 1",
  },
  {
    text: "quote 2",
    author: "author 1",
  },
  {
    text: "quote 3",
    author: "author 2",
  },
  {
    text: "quote 4",
    author: "author 2",
  },
  {
    text: "quote 5",
    author: "author 3",
  },
  {
    text: "quote 6",
    author: "author 3",
  },
];
const quoteGenerator = () => {
  const random = Math.floor(Math.random() * quoteList.length);
  text.textContent = `“${quoteList[random]["text"]}”`;
  author.textContent = `“${quoteList[random]["author"]}”`;
  tweetQuote.href = `https://twitter.com/intent/tweet?hashtags=quotes&related=hunafazaky&text=${encodeURIComponent(
    `"${quoteList[random]["text"]}" - ${quoteList[random]["author"]}`
  )}`;
};
// Events
document.addEventListener("DOMContentLoaded", quoteGenerator);
newQuote.addEventListener("click", quoteGenerator);
