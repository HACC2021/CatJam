import React from 'react';
import { Container, Label, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Container className='messageBox'>
        <iframe
          allow="microphone;"
          width="1130"
          height="768"
          src="https://console.dialogflow.com/api-client/demo/embedded/a46422cc-7a5c-4a92-9123-5cf4423b3f0f">
        </iframe>

        <Label as='a' color='blue' size='big'>
          <Icon name='phone'/>
          Phone
          <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
        </Label>
        <Label as='a' color='orange' size='big'>
          <Icon name='mail'/>
          Email
          <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
        </Label>
        <Label as='a' color='teal' size='big'>
          <Icon name='mouse pointer'/>
          Website
          <Label.Detail><a href="https://www.oha.org/" className="white-text">https://www.oha.org/</a></Label.Detail>
        </Label>
      </Container>
    );
  }
}

export default Landing;
