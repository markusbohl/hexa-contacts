"use strict";
const mongodb_1 = require("mongodb");
const credentials_1 = require("../config/mLab/credentials");
const url = `mongodb://${credentials_1.credentials.dbuser}:${credentials_1.credentials.dbpassword}@ds035006.mlab.com:35006/hexa-contacts`;
mongodb_1.MongoClient.connect(url, function (err, db) {
    console.log("Connected successfully to server");
    db.close();
});

//# sourceMappingURL=server.js.map
