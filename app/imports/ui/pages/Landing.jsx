import React from 'react';
import { Container, Label, Icon, Header, Message } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Container className='messageBox'>
          <Message color='green'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Header as='h4' textAlign='center'><Icon name='bullhorn'/>Welcome to OHA Catbot! Click on "Tutorial" in the navbar to view a quick guide on how to use this application.
              You can ask your questions through the chatbot below, or call (732) 307-3105 for help.</Header>
          </Message>
          <iframe
            allow="microphone;"
            width="1130"
            height="768"
            src="https://console.dialogflow.com/api-client/demo/embedded/a46422cc-7a5c-4a92-9123-5cf4423b3f0f">
          </iframe>
          <Label color='olive' size='big'>
            <Icon name='phone'/>
          Phone
            <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
          </Label>
          <Label color='orange' size='big'>
            <Icon name='mail'/>
          Email
            <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
          </Label>
          <Label color='teal' size='big'>
            <Icon name='mouse pointer'/>
          Website
            <Label.Detail><a target="_blank" rel="noopener noreferrer" href="https://www.oha.org/" className="white-text">https://www.oha.org/</a></Label.Detail>
          </Label>
        </Container>
      </div>
    );
  }
}

export default Landing;
