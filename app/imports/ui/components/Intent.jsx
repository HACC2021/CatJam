import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.stuff.name}</Table.Cell>
        <Table.Cell>{this.props.stuff.phrase}</Table.Cell>
        <Table.Cell>{this.props.stuff.response}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    phrase: PropTypes.string,
    response: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default StuffItemAdmin;
