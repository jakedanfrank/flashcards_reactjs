import React from 'react';
import { Card, Button, } from 'semantic-ui-react';
// import FlashCard from "./FlashCard";

const FlashCards = ({ flashCards, remove }) => (

  <Card.Group itemsPerRow={4}>
  <Card id="bg">
  <p id="text">What Is This?
  <br />
  <br />
  <br />
  </p>
  <Button color="green"> 
  Answer
  </Button>
  </Card>

  <Card id="bg">
  <p id="text">What Is This?
  <br />
  <br />
  <br />
  </p>
  <Button color="green"> 
  Answer
  </Button>
  </Card>

  <Card id="bg">
  <p id="text">What Is This?
  <br />
  <br />
  <br />
  </p>
  <Button color="green"> 
  Answer
  </Button>
  </Card>

  <Card id="bg">
  <p id="text">What Is This?
  <br />
  <br />
  <br />
  </p>
  <Button color="green"> 
  Answer
  </Button>
  
  </Card>

  </Card.Group>
   
    // { flashCards.map( flashCards => (
     // <FlashCards key={flashCards.id} {...flashCards} remove={remove} />
     // ))
   // };
// );

export default FlashCards
