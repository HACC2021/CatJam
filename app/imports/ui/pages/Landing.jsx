import React from 'react';
import { Container } from 'semantic-ui-react';
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
    let fRef = null;
    return (
      <Container className='messageBox'>
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >

        </AutoForm>
      </Container>
    );
  }
}

export default Landing;
