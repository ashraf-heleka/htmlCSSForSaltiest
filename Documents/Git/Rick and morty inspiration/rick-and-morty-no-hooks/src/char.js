import React, { Component } from "react";
import { Link } from "@reach/router";
import { getChar } from "../utils/fetch";
import Loading from "./components/loading";

export default class extends Component {
  state = {
    charecter: [],
    loading: true,

  };

  async componentDidMount() {
    const charecter = await getChar(this.props.id);
    this.setState({
      loading: false,
      charecter
    });
  }

  render() {
    const { loading, charecter } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <section className="flex flex-wrap flex-column items-center justify-center">
        <header class="tc pv3-ns">
          <img
            src={charecter.image}
            class="br3 ba b--black-10 h3 w3"
            alt={charecter.name}
          />
          <h1 class="f5 f4-ns fw6 black-70">{charecter.name}</h1>
          <h2 class="f6 black-70 fw2 ttu tracked">{charecter.species}</h2>
        </header>
        <dl class="lh-title pa4 pt0 mt0">
          <dt class="f6 b">Status</dt>
          <dd class="ml0 mb2">{charecter.status}</dd>
          <dt class="f6 b">Origin</dt>
          <dd class="ml0 mb2">{charecter.origin.name}</dd>
          <dt class="f6 b">Location</dt>
          <dd class="ml0 mb2">{charecter.location.name}</dd>
          <dt class="f6 b">Gender</dt>
          <dd class="ml0 mb2">{charecter.gender}</dd>
          <dt class="f6 b">Number of episodes</dt>
          <dd class="ml0 mb2">{charecter.episode.length} Episodes</dd>
          <dt class="f6 b">URL</dt>
          <dd class="ml0 mb2">{charecter.url}</dd>
        </dl>
      </section>
    );
  }
}
