import React, { Component, Fragment as F } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <F>
        <Header />
        <Logo />
      </F>
    );
  }
}

export default App;
