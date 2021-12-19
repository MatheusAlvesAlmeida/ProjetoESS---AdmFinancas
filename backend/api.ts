import express = require("express");
import bodyParser = require("body-parser");
import nodemailer = require("nodemailer");
const cron = require("node-cron");

import { ExpensesTable } from "../common/expenses";
import { ExpensesAPI } from "./expenses/expenses-api";

var api = express();

var expensesAPI: ExpensesAPI = new ExpensesAPI();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
api.use(allowCrossDomain);

api.use(bodyParser.json());

//Métodos das APIs
//Métodos do módulo de expenses
api.get(
  "/api/expenses/",
  function (req: express.Request, res: express.Response) {
    res.send(expensesAPI.getExpensesArray());
  }
);

api.put(
  "/api/expenses/",
  function (req: express.Request, res: express.Response) {
    let newExp: ExpensesTable = <ExpensesTable>req.body;
    console.log("atualizando");
    const result = expensesAPI.updateExpenses(newExp);
    console.log(result);
    if (result) {
      res.send({ success: "O gasto fixo foi atualizado!", result });
    } else {
      res.send({ failure: "O gasto fixo não foi atualizado!", result });
    }
  }
);

api.post(
  "/api/expenses/",
  function (req: express.Request, res: express.Response) {
    let newExpenses: ExpensesTable[] = <ExpensesTable[]>req.body;
    const result = expensesAPI.insertExpenses(newExpenses);
    if (result) {
      res.send({ success: "Os gastos fixos foram cadastrados!" });
    } else {
      res.send({ failure: "Os gastos fixos não foram cadastrados!" });
    }
  }
);

api.delete(
  "/api/expenses/",
  function (req: express.Request, res: express.Response) {
    let expenseToDelete: number = <number>req.body;
    const result = expensesAPI.delete(expenseToDelete);
    if (result) {
      res.send({ success: "O gasto fixo foi removido com sucesso" });
    } else {
      res.send({ failure: "O gasto fixo não foi removido" });
    }
  }
);

//Exportando servidor
var server = api.listen(3000, function () {
  console.log("Listening on port 3000!");
});

function closeServer(): void {
  server.close();
}

export { server, closeServer };
