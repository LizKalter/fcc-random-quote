import React from 'react';
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

class Quote extends React.Component {
	render() {
		return (
			<div className="box">
				<p id="text">{this.props.quote.text}</p>
				<p id="author">{this.props.quote.author}</p>
			</div>
		);
	}
}

class QuoteButton extends React.Component {
	render() {
		return (
			<button id="new-quote" onClick={this.props.getQuote}>{'A New Quote'}</button>
		);
	}
}

class TweetButton extends React.Component {
	constructor(props) {
		super(props);
		this.encodedQuote = this.encodedQuote.bind(this);
	}

	encodedQuote() {
		return encodeURIComponent('"' + this.props.quote.text + '" ' + this.props.quote.author);
	}
	render() {
		return (
			<a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+this.encodedQuote()} id="tweet-quote" aria-label="Tweet this quote">
				<i></i>
			</a>
		);
	}
}

class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuote: this.getRandomQuote()
		};
		this.setRandomQuote = this.setRandomQuote.bind(this);
	}

	getRandomQuote() {
		return quotes[Math.floor(Math.random() * (quotes.length-1))];
	}

	setRandomQuote() {
		this.setState({
			currentQuote: this.getRandomQuote()
		});
	}

	render () {
		return (
			<div id="quote-box">
				<Quote quote={this.state.currentQuote} />
				<div className="buttons">
					<QuoteButton getQuote={this.setRandomQuote} />
					<TweetButton quote={this.state.currentQuote}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));

serviceWorker.unregister();
