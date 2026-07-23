const bb = require("betabotz-tools");
bb.openai("halo")
  .then(res => console.log("bb openai:", res))
  .catch(err => console.error("bb openai err:", err));
