const fetch = require("node-fetch");

exports.getConf = (req, res, next) => {
  fetch(
    "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
  )
    .then((res) => res.json())
    .then((result) => {
      let conf = [];
      conf.push(...result.paid, ...result.free);

      let newArray = [];
      let uniqueObject = {};

      for (let i in conf) {
        objId = conf[i]["conference_id"];
        uniqueObject[objId] = conf[i];
      }

      for (i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }

      res.status(200).json(newArray);
    });
};
