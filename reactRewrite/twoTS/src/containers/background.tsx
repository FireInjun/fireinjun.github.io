import { drawContributions } from "github-contributions-canvas";
import React, { Component } from "react";
import { download, fetchData } from "../utils/export.ts";

export class Background extends Component {
  canvas = null;
  inputRef = null;
  availableThemes = {
    standard: 'GitHub',
    halloween: 'Halloween',
    teal: 'Teal',
    leftPad: '@left_pad',
    dracula: 'Dracula',
    blue: 'Blue',
    panda: 'Panda 🐼',
    sunny: 'Sunny',
    pink: 'Pink',
    YlGnBu: 'YlGnBu'
};

state = {
    loading: false,
    data: null,
    error: null,
    username: 'fireinjun',
    theme: 'standard'
};

  componentDidMount() {
    this.setState({ loading: true, error: null });
    fetchData(this.state.username)
      .then(({ data }) => {
        if (data.years.length === 0) {
          return this.setState({
            error: 'Could not find your profile',
            data: null,
            loading: false
          });
        }
        this.setState({ data, loading: false }, () => {
          this.draw();
          this.inputRef.blur();
        });
      });
  }

  draw() {
    if (!this.canvas) {
      return this.setState(
        { error: 'Something went wrong... Check back later.' });
    }
    drawContributions(this.canvas, {
      data: this.state.data,
      username: this.state.username,
      themeName: "standard",
      // footerText: 'Made by @sallar & friends - github-contributions.now.sh'
    });
  }
  render() {
    return (
        <section className="BG-content">
          {this.state.loading && this._renderLoading()}
          {this.state.data !== null &&
            !this.state.loading &&
            this.renderGraphs()}
          {this.state.error !== null && this._renderError()}
        </section>
    );
}
