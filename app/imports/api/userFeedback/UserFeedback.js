import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The UserFeedbacksCollection. It encapsulates state and variable values for stuff.
 */
class UserFeedbacksCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserFeedbacksCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      contactDetails: String,
      summary: String,
      feedbackType: {
        type: String,
        allowedValues: ['Improvement', 'Incorrect/missing information', 'Bugs and errors', 'Other'],
        defaultValue: 'Improvement',
      },
      description: String,
      createdAt: Date,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserFeedbacksCollection.
 * @type {UserFeedbacksCollection}
 */
export const UserFeedbacks = new UserFeedbacksCollection();
