import React, { Component, Fragment as F } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import GitlabStatus from "./components/GitlabStatus";
import "./App.css";

class App extends Component {
  render() {
    return (
      <F>
        <Header />
        <main>
          <Logo />
          <GitlabStatus />
        </main>
      </F>
    );
  }
}

export default App;
