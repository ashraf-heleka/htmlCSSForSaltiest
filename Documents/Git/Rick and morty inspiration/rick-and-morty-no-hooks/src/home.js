import React, { Component } from "react";
import { getAllChars } from "../utils/fetch";
import Loading from "./components/loading";
import Chars from "./components/chars.js";

export default class extends Component {
  state = {
    charecters: [],
    loading: false,
    search: ""
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    const charecters = await getAllChars();
    this.setState({
      loading: false,
      charecters
    });
  }

    onChange = e => this.setState({ search: e.target.value })

  render() {
      const { loading, charecters, search } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
        <>
            <form class="mb4 black-80 flex flex-wrap items-center justify-center flex-column">
                <label for="name" class="f6 b db mb2">
                    Type a Charecters Name
            </label>
                <input
                    onChange={this.onChange}
                    id="name"
                    class="input-reset ba b--black-20 pa2 mb2 db w-40"
                    type="text"
                    aria-describedby="name-desc"
                />
        </form>
      <section className="flex flex-wrap items-center justify-between">
            <Chars search={search} chars={charecters} />
      </section>
      </>
    );
  }
}
