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
  }
}

const message = 'Ovo je primer poruke za Slack.';

sendSlackMessage(message);
