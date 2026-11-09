const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const QUOTES_FILE = path.join(__dirname, 'quotes.json');

app.use(express.json());
app.use(express.static(__dirname));

function readQuotes() {
  const data = fs.readFileSync(QUOTES_FILE, 'utf8');
  return JSON.parse(data);
}

function writeQuotes(quotes) {
  fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2));
}

app.get('/quote', (req, res) => {
  const quotes = readQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.get('/quotes', (req, res) => {
  const quotes = readQuotes();
  res.json(quotes);
});

app.post('/quotes', (req, res) => {
  const quotes = readQuotes();
  const newQuote = {
    id: quotes.length > 0 ? Math.max(...quotes.map(q => q.id)) + 1 : 1,
    text: req.body.text,
    author: req.body.author
  };
  quotes.push(newQuote);
  writeQuotes(quotes);
  res.status(201).json(newQuote);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
