/// <reference path="../typings/modules/mongodb/index.d.ts" />

"use strict";

import { MongoClient } from "mongodb";
import { credentials } from "../config/mLab/credentials";

// Connection URL
const url = `mongodb://${credentials.dbuser}:${credentials.dbpassword}@ds035006.mlab.com:35006/hexa-contacts`;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");

  db.close();
});

