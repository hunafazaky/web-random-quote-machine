import { quotes } from "./quotes.js";

/**
 * Picks a random quote from the list.
 * @returns {{ text: string, author: string }}
 */
export function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/**
 * Builds a "share on X" intent URL pre-filled with a quote.
 * @param {{ text: string, author: string }} quote
 * @returns {string}
 */
export function buildTweetUrl(quote) {
  const shareText = `"${quote.text}" - ${quote.author}`;
  return `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(shareText)}`;
}
