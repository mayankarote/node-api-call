const axios = require("axios");

const BASE_URL = `http://ramuatiis03/SmartTrack/Json/Track`;

module.exports = {
  getCompatibility: (input) =>
    axios({
      method: "POST",
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        trackingNo: input,
      },
    }),
};
