import { Meteor } from 'meteor/meteor';
import { Intents } from '../../api/Intents/Intents.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Intents.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Intents.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
