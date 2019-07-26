import React from "react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("App renders", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeTruthy();
});
