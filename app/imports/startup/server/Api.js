// Imports the Dialogflow library
const dialogflow = require('@google-cloud/dialogflow');

// Instantiates the Intent Client
const intentsClient = new dialogflow.IntentsClient();

async function createIntent(name, phrase, response1) {
  // Construct request

  // The path to identify the agent that owns the created intent.
  const agentPath = intentsClient.projectAgentPath('ohabot-fmvm');

  const intent = {
    displayName: name,
    trainingPhrases: phrase,
    messages: response1,
  };

  const createIntentRequest = {
    parent: agentPath,
    intent: intent,
  };

  // Create the intent
  const [response] = await intentsClient.createIntent(createIntentRequest);
  console.log(`Intent ${response.name} created`);
}

export default { createIntent };
