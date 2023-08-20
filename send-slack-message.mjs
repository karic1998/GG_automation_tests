// send-slack-message.mjs
import axios from 'axios';

async function sendSlackMessage(message) {
  try {
    const webhookUrl = 'https://hooks.slack.com/services/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';

    if (!webhookUrl) {
      throw new Error('Slack webhook URL not found in environment variables.');
    }

    await axios.post(webhookUrl, {
      text: message,
    });

    console.log('Slack message sent successfully.');
  } catch (error) {
    console.error('Error sending Slack message:', error);
    throw error;
  }
}

//const testResultsMessage = 'Cypress tests completed!\nView the results at: YOUR_TEST_RESULTS_URL';
//sendSlackMessage(testResultsMessage);

const reportJsonUrl = '/cypress/reports/html/.jsons/mochawesome.json'; // Zamijenite s pravim putem

axios.get(reportJsonUrl)
  .then(response => {
    const reportData = response.data;
    const formattedReport = JSON.stringify(reportData, null, 2); // Prettify JSON

    const slackMessage = `Mochawesome report:\n\`\`\`\n${formattedReport}\n\`\`\``;
    sendSlackMessage(slackMessage);
  })
  .catch(error => {
    console.error('Error fetching or sending report:', error);
  });
