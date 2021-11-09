import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { UserFeedbacks } from '../../api/userFeedback/UserFeedback';
import { Intents } from '../../api/Intents/Intents';
import { Survey } from '../../api/survey/Survey';

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(UserFeedbacks.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserFeedbacks.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Intents.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Intents.collection.find();
  }
  return this.ready();
});

Meteor.publish(Survey.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Intents.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
