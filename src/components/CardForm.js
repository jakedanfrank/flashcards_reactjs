import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { question: "", answer: "", };

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ question: "", answer: "", });
  };

  handleChange =(e) => {
    this.setState({ [e.target.question]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal"> 
          <Form.Input
            fluid
            label="Question"
            placeholder="Place Question Here"
            question="question"
            value={this.state.name}
            />
            <Form.Input
              fluid
              label="Answer"
              placeholder="Place Answer Here"
              question="answer"
              value={this.state.name}
              onChange={this.handleChange}
              />
              <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  };
};

export default CardForm;
