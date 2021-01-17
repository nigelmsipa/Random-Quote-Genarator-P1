/**
 * ***************************************
 * Treehouse FSJS Techdegree:
 * project 1 - A Random Quote Generator
 * ****************************************
 *
 * @format
 */

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// array This is the data structure where all the quoutes will be stored

let quotes = [
  {
    quote:
      'A thousand days of practice for training and ten thousands days of practice for refinement',
    Author: 'Miyamoto Musashi',
    citation: 'The Book of Five Rings',
    year: 1643,
    tag: '# practice',
  },
  {
    quote:
      'Whoever will have much to proclaim one day, must long remain silent unto himself; whoever intends to ignite lightning, must long be a cloud',
    Author: 'Friedrich Nietzsche',
    citation: 'unknown source ',
    year: 'unknown date ',
    tag: '#patience ',
  },
  {
    quote:
      'Kung fu. It means, “supreme skill from hard work.” A great poet has reached kung fu. The painter, the calligrapher, they can be said to have kung fu. Even the cook, the one who sweeps steps or a masterful servant can have kung fu. Practice. Preparation. Endless repetition. Until your mind is weary, and your bones ache. Until you’re too tired to sweat, too wasted to breathe. That is the way, the only way one acquires kung fu.',
    Author: 'Sifu Hundred Eyes',
    citation: 'Marco Polo',
    year: 2014,
    tag: '#mastery ',
  },
  {
    quote:
      'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.',
    Author: 'Sun Tzu',
    citation: 'The Art of War',
    year: 500,
    tag: '#strategy',
  },
  {
    quote:
      "Tis not the softer things of life Which stimulate man's will to strive; But bleak adversity and strife Do most to keep man's will alive. O'er rose-strewn paths the weaklings creep, But brave hearts dare to climb the steep.",
    Author: 'L.E Thayer',
    citation: "For Every Hill I've Had to Climb",
    year: 'unknown date ',
    tag: '#adversity ',
  },
  {
    quote:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
    Author: 'Epictetus',
    year: 'unknown date ',
    tag: '#self-awareness ',
  },
  {
    quote:
      'Listen to the wind, it talks. Listen to the silence, it speaks. Listen to your heart, it knows.',
    Author: 'Native American Proverb',
    year: 'unknown date ',
    tag: '#intuition ',
  },
  {
    quote:
      'It is spiritless to think that you cannot attain to that which you have seen and heard the masters attain. The masters are men. You are also a man. If you think that you will be inferior in doing something, you will be on that road very soon.',
    Author: 'Tsunetomo Yamamoto',
    citation: 'The Book of the Samurai',
    year: 1716,
    tag: '#self-confidence ',
  },
  {
    quote:
      'Do not think that what is hard for you to master is humanly impossible; and if it is humanly possible, consider it to be within your reach.',
    Author: 'Marcus Aurelius',
    citation: 'Meditations',
    year: 1558,
    tag: '#self-confidence ',
  },
  {
    quote:
      'Embrace all chaos that is out of your control. This is how it is. Why should it be otherwise?Move the levers that are within your grasp.Sharpen the blade of will. Strike with precision. Accept and endure.',
    Author: 'The Stoic Emperor',
    year: 'unknown date ',
    tag: '#acceptance ',
  },
  {
    quote:
      "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
    Author: 'Oscar Wilde',
    citation: 'De Profundis',
    year: 1905,
    tag: '#conformity ',
  },
  {
    quote:
      'An ordinary mind, well disciplined, will accomplish more and higher work than will the most highly educated mind and the greatest talents without self-control.',
    Author: ' Ellen G White',
    citation: "Christ's Object Lessons",
    year: 1900,
    tag: '#discipline ',
  },
  {
    quote: 'BUT I REALLY WANT IT!!!',
    Author: 'TWO-YEAR-OLD CHILDREN',
    citation: 'EVERYWHERE',
    year: 'Everyday',
    tag: '#lack-of-inhibition ',
  },
  {
    quote:
      'Remember that you will never reach a higher standard than you yourself set. Then set your mark high, and step by step, even though it be by painful effort, by self-denial and sacrifice, ascend the whole length of the ladder of progress.',
    Author: ' Ellen G White',
    citation: "Christ's Object Lessons",
    year: 1900,
    tag: '#high-standards ',
  },
  {
    quote:
      'One of the most striking differences between a cat and a lie is that a cat has only nine lives.',
    Author: ' Mark Twain',
    citation: 'unknown source',
    year: 'unknown date ',
    tag: '#lies ',
  },
  {
    quote: 'Dread it, run from it, destiny arrives all the same.',
    Author: 'Thanos',
    citation: 'Avengers: Infinity War',
    year: 2018,
    tag: '#destiny ',
  },
];

//  getRandomQuote function will randomly select an object from the quotes array.

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let returnedQuote = quotes[randomQuote];
  return returnedQuote;
}

// printQuote function will display the selected object on the Index HTML page

function printQuote() {
  var result = getRandomQuote(); // Calls and stores the getRandomQuote in a variable
  let main =
    `<p class='quote'>
    ${result.quote}
    </p>` +
    `<p class='source'>
    ${result.Author}
    </p>` +
    `<p class='citation'>
    ${result.citation} 
    </p>` +
    `<p class='year'>
    ${result.year}
    </p>` +
    `<p class='tags'>
    ${result.tag}
    </p>`;
  document.getElementById('quote-box').innerHTML = main;
}

//function to randomly select a new background color
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
};

//function to reset background color and display new quote every 5 seconds
setInterval(function () {
  printQuote();
  setBg();
}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
document.getElementById('load-quote').addEventListener('click', setBg, false);
