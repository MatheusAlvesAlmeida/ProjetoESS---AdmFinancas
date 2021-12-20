import express = require("express");
import bodyParser = require("body-parser");
import nodemailer = require("nodemailer");
const cron = require("node-cron");

import { ExpensesTable } from "../common/expenses";
import { ExpensesAPI } from "./expenses/expenses-api";

import { SourcesIncomeTable } from "../common/sources-income";
import { SourcesIncomeAPI } from "./sources-income/sources-income-api";

var api = express();

var expensesAPI: ExpensesAPI = new ExpensesAPI();

var sourcesIncomeAPI: SourcesIncomeAPI = new SourcesIncomeAPI();

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
    const result = expensesAPI.updateExpenses(newExp);
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
    let expenseToDelete: number = <number>req.body.expense;
    const result = expensesAPI.delete(expenseToDelete);
    if (result) {
      res.send({ success: "O gasto fixo foi removido com sucesso", result });
    } else {
      res.send({ failure: "O gasto fixo não foi removido", result });
    }
  }
);

api.put(
  "/api/sources-income/",
  function (req: express.Request, res: express.Response) {
    let newSourceIncome: SourcesIncomeTable = <SourcesIncomeTable>req.body;
    const result = sourcesIncomeAPI.updateSourcesIncome(newSourceIncome);
    if (result) {
      res.send({ success: "A fonte de renda foi atualizada!" });
    } else {
      res.send({ failure: "A fonte de renda não foi atualizado!" });
    }
  }
);

api.post(
  "/api/sources-income/",
  function (req: express.Request, res: express.Response) {
    let newSourceIncome: SourcesIncomeTable[] = <SourcesIncomeTable[]>req.body;
    const result = sourcesIncomeAPI.insertSourcesIncome(newSourceIncome);

    if (result) {
      res.send({ success: "As fontes de renda foram cadastradas!" });
    } else {
      res.send({ failure: "As fontes de renda não foram cadastradas!" });
    }
  }
);

api.delete(
  "/api/sources-income/",
  function (req: express.Request, res: express.Response) {
    let sourcesIncomeToDelete: number = <number>req.body.expenseID;
    const result = sourcesIncomeAPI.delete(sourcesIncomeToDelete);
    if (result) {
      res.send({ success: "A fonte de renda foi removida com sucesso" });
    } else {
      res.send({ failure: "A fonte de renda não foi removida" });
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
