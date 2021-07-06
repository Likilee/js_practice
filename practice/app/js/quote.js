"use strict";

const quotes = [
  {
    quote: "사람이 어떻게 자신을 숨기겠는가, 사람이 어떻게 그럴 수 있겠는가",
    author: "공자",
  },
  {
    quote: "태어날 때 모두가 웃어주고, 세상을 떠날 때는 모두가 울어주는 삶",
    author: "인디언 속담",
  },
  {
    quote: "행복은 마음의 평화이다",
    author: "Kilee",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getQuote() {
  const todaysQuote = quotes[Math.floor(quotes.length * Math.random())];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

getQuote();
