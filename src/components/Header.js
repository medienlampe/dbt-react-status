import React from "react";
import Clock from "./Clock";
import Weather from "./Weather";

export default function Header(props) {
  return (
    <header>
      <Clock />
      <Weather />
    </header>
  );
}
