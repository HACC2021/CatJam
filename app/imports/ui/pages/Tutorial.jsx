import React from 'react';
import { Container, Header, Image, Divider } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {
  // Render the page once subscriptions have been received.
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">Chatbot User Guide</Header>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p><span as="ui large black text">Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</span></p>
        <Header as="h2" textAlign="center">Navigation Bar</Header>
        <p>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
        <Image src='images/Navbar.png'/>
        <Divider />
        <Header as="h2" textAlign="center">Chatbot</Header>
        {/* eslint-disable-next-line max-len */}
        <p>Below is the chatbot page. This is where you will be asking the chatbot questions and receiving answers. If you have an inquiry, it can be sent to the chatbot through text or voice by typing words into the text-box on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively.</p>
        <Image src='images/chatbot.png'/>
        <Divider />
        <p>After asking a question the text will be displayed inside a message on the left side of the screen. Then the chatbot will send a response contained in a message on the right side of the screen.</p>
        <Image src='images/question.png'/>
        <Divider />
        <p>If you need to contact OHA for any reason, their phone and email contacts are available via the buttons below the chatbot. A link to the OHA official website is also provided.</p>
        <Image src='images/message1.png'/>
        <Divider />
        <Image src='images/contact.png'/>
        <Divider />
        <Header as="h2" textAlign="center">Send Feedback</Header>
        {/* eslint-disable-next-line max-len */}
        <p>This is the Send Feedback page. This page allows users to send feedback regarding the chatbot or website. In order to send in feedback the user must fill out their contact details, a name for the input, select what type of feedback they are sending in, and provide a description of their feedback.</p>
        <Image src='images/feedbackP.png'/>
        <Divider/>
        <p>When you are done filling out all the fields press the submit button and your feedback will be recorded for staff to look at and consider.</p>
        <Image src='images/submit.png'/>
        <Divider/>
      </Container>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
