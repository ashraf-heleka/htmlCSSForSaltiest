import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

export default class extends Component {
  state = {
    chars: this.props.chars
  };

  componentDidUpdate(prevProps) {
    const { search, chars } = this.props;
    if (search !== prevProps.search) {
      console.log(search);
      this.setState({
        chars: chars.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
      });
    }
  }

  render() {
    const { chars } = this.state;
    return (
      <Fragment>
        {chars.map(char => (
          <article class="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
              <img
                src={char.image}
                class="br-100 h4 w4 dib ba b--black-05 pa2"
                alt={char.name}
              />
              <h1 class="f3 mb2">
                <Link class="link dim black f4 dib mr3" to={`/char/${char.id}`}>
                  {char.name}
                </Link>
              </h1>
              <h2 class="f5 fw4 gray mt0">{char.species}</h2>
            </div>
          </article>
        ))}
      </Fragment>
    );
  }
}
