import React from 'react';
import { Container, Label, Icon } from 'semantic-ui-react';
import { AutoForm } from 'uniforms-semantic';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserMessage } from '../../api/userMessage/UserMessage';

const bridge = new SimpleSchema2Bridge(UserMessage.schema);

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  submit(data, formRef) {
    const { message } = data;
    UserMessage.collection.insert({ message }, formRef.reset());
  }

  render() {
    return (
      <Container className='messageBox'>
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/bf7a1356-cd70-4781-b839-5cd0cf082ce5">
        </iframe>
        <Label as='a' color='blue' size='big'>
          <Icon name='phone'/>
          Phone
          <Label.Detail>808-594-1835</Label.Detail>
        </Label>
        <Label as='a' color='orange' size='big'>
          <Icon name='mail'/>
          Email
          <Label.Detail>info@oha.org</Label.Detail>
        </Label>
      </Container>
    );
  }
}

export default Landing;
