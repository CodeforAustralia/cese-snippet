#!/usr/bin/env node

const shell = require('shelljs');
const slack = require('slack-notify')(process.env.SLACK_WEBHOOK_URL);

slack.send({
  channel: '#cese-bot',
  text: `https://app.nsweducation.cool was deployed!`,
  fields: {
    'Commit': shell.exec("git log --pretty=oneline --abbrev-commit HEAD^..HEAD"),
  }
});
