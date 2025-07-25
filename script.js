// Quote class for storing quote and author
class Quote {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }

  // Method to return formatted version (optional for advanced use)
  getFormattedQuote() {
    return `"${this.text}" — ${this.author}`;
  }
}

// Array of quote objects
const quotes = [
  new Quote("Do not go where the path may lead, go instead where there is no path.", "Ralph Waldo Emerson"),
  new Quote("The only way to do great work is to love what you do.", "Steve Jobs"),
  new Quote("In the middle of every difficulty lies opportunity.", "Albert Einstein"),
  new Quote("Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"),
  new Quote("Believe you can and you're halfway there.", "Theodore Roosevelt"),
  new Quote("Happiness is not something ready made. It comes from your own actions.", "Dalai Lama"),
  new Quote("What lies behind us and what lies before us are tiny matters compared to what lies within us.", "Ralph Waldo Emerson"),
  new Quote("Don't watch the clock; do what it does. Keep going.", "Sam Levenson"),
  new Quote("Everything you’ve ever wanted is on the other side of fear.", "George Addair"),
  new Quote("You miss 100% of the shots you don’t take.", "Wayne Gretzky"),
  new Quote("Whether you think you can or you think you can’t, you’re right.", "Henry Ford"),
  new Quote("I have not failed. I've just found 10,000 ways that won't work.", "Thomas Edison"),
  new Quote("The best revenge is massive success.", "Frank Sinatra"),
  new Quote("If you’re going through hell, keep going.", "Winston Churchill"),
  new Quote("I am not a product of my circumstances. I am a product of my decisions.", "Stephen Covey"),
  new Quote("The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt"),
  new Quote("Act as if what you do makes a difference. It does.", "William James"),
  new Quote("Dream big and dare to fail.", "Norman Vaughan"),
  new Quote("A person who never made a mistake never tried anything new.", "Albert Einstein"),
  new Quote("It does not matter how slowly you go as long as you do not stop.", "Confucius"),
  new Quote("You are never too old to set another goal or to dream a new dream.", "C.S. Lewis")
];

// Function to generate a random quote and update the DOM
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length); // Get random index
  const randomQuote = quotes[randomIndex]; // Pick random quote

  // Update DOM elements
  document.getElementById("quote-text").textContent = `${randomQuote.text}`;
  document.getElementById("quote-author").textContent = `— ${randomQuote.author}`;
}

