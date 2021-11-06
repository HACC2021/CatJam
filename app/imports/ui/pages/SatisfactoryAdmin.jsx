import React from 'react';
import { Container, Header } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SatisfactoryAdmin extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Chat Bot Satisfaction Ratings</Header>
        <p>CatJAM</p>
      </Container>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default SatisfactoryAdmin;
