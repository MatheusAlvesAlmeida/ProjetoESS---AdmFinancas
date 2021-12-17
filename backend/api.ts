import express = require("express");
import bodyParser = require("body-parser");
import nodemailer = require("nodemailer");
const cron = require("node-cron");

import { Expenses } from "../common/expenses";

var api = express();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
api.use(allowCrossDomain);

api.use(bodyParser.json());

var server = api.listen(3000, function () {
  console.log("Listening on port 3000!");
});

function closeServer(): void {
  server.close();
}

export { server, closeServer };
