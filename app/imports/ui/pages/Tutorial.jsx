import React from 'react';
import { Container, Header, Icon, Image, Message } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <div className='tutorial-background'>
        <Container>

          <Header as="h1" textAlign="center">Chatbot User Guide</Header>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</p>
          <Header as="h2">Navigation Bar</Header>
          <Container className='line'/>
          <Image src='images/Navbar.png'/>
          <Message centered textAlign='center'>
            <p><Icon name='angle right'/>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
          </Message>
          <Header as="h2">Chatbot</Header>
          <Container className='line'/>
          <Image src='images/chatbot.png' size='huge'/>
          <Message centered textAlign='center'>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>Above is the chatbot page. This is where you will be asking the chatbot questions and receiving answers. If you have an inquiry, it can be sent to the chatbot through text or voice by typing words into the text-box on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively.</p>
          </Message>
          <Image src='images/question.png' size='huge'/>
          <Message>
            <p><Icon name='angle right'/>After asking a question the text will be displayed inside a message on the left side of the screen. Then the chatbot will send a response contained in a message on the right side of the screen.</p>
          </Message>
          <Image src='images/message1.png' size='huge'/>
          <Message>
            <p><Icon name='angle right'/>If you need to contact OHA for any reason, their phone and email contacts are available via the buttons below the chatbot. A link to the OHA official website is also provided.</p>
          </Message>
          <Image src='images/contact.png' size='huge'/>
          <Header as="h2">Send Feedback</Header>
          <Container className='line'/>
          <Image src='images/feedback.png' size='huge'/>
          <Message>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>This is the Send Feedback page. This page allows users to send feedback regarding the chatbot or website. In order to send in feedback the user must fill out their contact details, a name for the input, select what type of feedback they are sending in, and provide a description of their feedback.</p>
          </Message>
          <Image src='images/feedbackP.png' size='huge'/>
          <Message>
            <p><Icon name='angle right'/>When you are done filling out all the fields press the submit button and your feedback will be recorded for staff to look at and consider.</p>
          </Message>
          <Image src='images/submit.png' size='huge'/>
          <Container className='bottom'/>
        </Container>
      </div>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
