import { getRandomQuote, buildTweetUrl } from "./quote-generator.js";

const text = document.querySelector("#text");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetLink = document.querySelector("#tweet-quote");

function showNewQuote() {
  const quote = getRandomQuote();
  text.textContent = `\u201C${quote.text}\u201D`;
  author.textContent = `- ${quote.author}`;
  tweetLink.href = buildTweetUrl(quote);
}

document.addEventListener("DOMContentLoaded", showNewQuote);
newQuoteBtn.addEventListener("click", showNewQuote);
