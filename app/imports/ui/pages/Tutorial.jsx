import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Chatbot User Guide</Header>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</p>
        <Header as="h3" textAlign="center">Navigation Bar</Header>
        <Image src='images/Navbar.png'/>
        <p>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
        <Header as="h3" textAlign="center">Chatbot</Header>
        <Image src='images/chatbot.png'/>
        <p>Above is the chatbot page. This is where you will be asking the chatbot questions and receiving answers. If you have an inquiry, it can be sent to the chatbot through text or voice by typing</p>
        <p>words into the textbox on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively.</p>
        <Image src='images/question.png'/>
        <p>After asking a question the text will be displayed inside a message on the left side of the screen. Then the chatbot will send a response contained in a message on the right side of the screen.</p>
        <Image src='images/message1.png'/>
      </Container>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
