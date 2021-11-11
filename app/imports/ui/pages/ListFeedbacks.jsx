import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { UserFeedbacks } from '../../api/userFeedback/UserFeedback';
import Feedback from '../components/Feedback';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class ListFeedback extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List User Feedback</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Contact Details</Table.HeaderCell>
              <Table.HeaderCell>Summary</Table.HeaderCell>
              <Table.HeaderCell>Feedback Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Created Date</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.feedbacks.map((feedback) => <Feedback key={feedback._id} feedback={feedback} UserFeedbacks={UserFeedbacks} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

// Require an array of UserFeedBack documents in the props.
ListFeedback.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to UserFeedBack documents.
  const subscription = Meteor.subscribe(UserFeedbacks.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserFeedBack documents
  const feedbacks = UserFeedbacks.collection.find({}).fetch();
  return {
    feedbacks,
    ready,
  };
})(ListFeedback);
