import React from "react";
import axios from "axios";
export default class Quotes extends React.Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`).then((result) => {
      const quotes = result.data;
      this.setState({ quotes });
    });
  }

  render() {
    return (
      <div>
        {this.state.quotes.map((quote) => (
          <p key={quote.character}>{quote.character}</p>
        ))}
        {this.state.quotes.map((quote) => (
          <p key={quote.quote}>{quote.quote}</p>
        ))}
        {this.state.quotes.map((quote) => (
          <img key={quote.image} alt="" src={quote.image}></img>
        ))}
        {this.state.quotes.map((quote) => (
          <p key={quote.characterDirection}>{quote.characterDirection}</p>
        ))}
      </div>
    );
  }
}
