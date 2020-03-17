import React from "react";
import { render } from "react-dom";
import InputField from "./components/InputField/InputField";

const App: React.FC = () => (
  <>
    <h1>Hello from React</h1>
    <InputField />
  </>
);

const rootNode = document.querySelector("#root");
// eslint-disable-next-line fp/no-unused-expression
render(<App />, rootNode);
