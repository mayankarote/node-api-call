const ApiCall = require("./apiCall");

const asyncApiCall = async () => {
  const response = await ApiCall.getCompatibility("RAIN04-00112345");
  console.log(response.data);
};

asyncApiCall();
