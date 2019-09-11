import React, { Component } from 'react';
import { Container, Header, } from "semantic-ui-react";
import FlashCards from "./components/FlashCards";
import CardForm from "./components/CardForm";

class App extends Component {
  state = {
    flashCards: [ 
      { id: 1, question: "Test", answer: "Test-Test", },
      { id: 2, question: "Testy", answer: "Test-McTesty", },
      { id: 3, question: "How Many Tests?", anser: "Too Many Tests", }
    ]
  };

  getId =() => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashCard = ( flashCardData ) => {
    let flashCard = {id: this.getId(), ...flashCardData, };
    this.setState({ flashCards: [flashCard, ...this.state.flashCards], });
  };

  render () {
    return (
      <Container style={{ paddingTop: "35px" }}>
        <CardForm add= { this.addContact } />
        <Header as="h1" style={{ textAlign: "center" }}>FLASH CARDS</Header>
        <FlashCards flashCards={ this.state.flashCards } />
        <CardForm/>
      </Container>
    );
  };
};

export default App;
