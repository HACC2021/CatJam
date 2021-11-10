import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, RadioField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Survey } from '../../api/survey/Survey';

const bridge = new SimpleSchema2Bridge(Survey.schema);

/** Renders the Page for adding a document. */
class SendSurvey extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { experience, bot, again, humanOrBot } = data;
    Survey.collection.insert({ experience, bot, again, humanOrBot },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Survey submitted successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Intent</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <RadioField name='experience'/>
              <RadioField name='bot'/>
              <RadioField name='again'/>
              <RadioField name='humanOrBot'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SendSurvey;
