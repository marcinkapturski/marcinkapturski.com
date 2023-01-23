const axios = require("axios");

const data = JSON.stringify({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":white_check_mark: Passed! Tests**",
      },
    },
  ],
});

// const config = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: data,
// };

function send_slack_message() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  };
  axios(
    "https://hooks.slack.com/services/",
    requestOptions
  ).then((response) => response.json());
}

send_slack_message();
