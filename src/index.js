import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

const quotes = [
	{
		text: "But I was going into Tosche Station to pick up some power converters!",
		author: "Luke Skywalker"
	},
	{
		text: "I find your lack of faith disturbing.",
		author: "Darth Vader"
	},
	{
		text: "You don’t need to see his identification… These aren’t the droids you’re looking for.",
		author: "Obi-Wan Kenobi"
	},
	{
		text: "Cover me, Porkins!",
		author: "Biggs Darklighter"
	},
	{
		text: "An elegant weapon for a more civilized age.",
		author: "Obi-Wan Kenobi"
	},
	{
		text: "Who’s the more foolish? The fool or the fool who follows him?",
		author: "Obi-Wan Kenobi"
	},
	{
		text: "Aren’t you a little short for a stormtrooper?",
		author: "Leia Organa"
	},
	{
		text: "Never tell me the odds.",
		author: "Han Solo"
	},
	{
		text: "We seem to be made to suffer. It’s our lot in life.",
		author: "C-3PO"
	},
	{
		text: "Do. Or do not. There is no try.",
		author: "Yoda"
	}
];

function Quote(props) {
	return (
		<div className="box">
			<p id="text">{props.quote.text}</p>
			<p id="author">{props.quote.author}</p>
		</div>
	);
}

function QuoteButton(props) {
	return (
		<button id="new-quote" onClick={props.getQuote}>A New Quote</button>
	);
}

function TweetButton(props) {
	const encodedQuote = () => {
		return encodeURIComponent('"' + props.quote.text + '" ' + props.quote.author);
	}
	
	return (
		<a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodedQuote()} id="tweet-quote" aria-label="Tweet this quote">
			<i></i>
		</a>
	);
}

function QuoteBox() {
	const getRandomQuote = () => {
		return quotes[Math.floor(Math.random() * (quotes.length-1))];
	}

	const [currentQuote, setCurrentQuote] = useState(getRandomQuote);

	const setRandomQuote = () => {
		setCurrentQuote(getRandomQuote());
	}

	return (
		<div id="quote-box">
			<Quote quote={currentQuote} />
			<div className="buttons">
				<QuoteButton getQuote={setRandomQuote} />
				<TweetButton quote={currentQuote}/>
			</div>
		</div>
	);
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));

serviceWorker.unregister();
