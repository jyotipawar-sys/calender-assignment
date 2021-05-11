import React from "react";
import "./styles.css";
import Event from "./Event";
import { Container } from "semantic-ui-react";
// import ModalView from "./Modalview";
export default function App() {
  return (
    <div className="App">
      <Container>
        <Event />
      </Container>
    </div>
  );
}
