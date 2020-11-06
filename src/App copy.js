"use strict";

const fs = require("fs");
const https = require("https");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getTeams(year, k) {
  let a = [""];
  let url =
    "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=13&per_page=200";
  return await https
    .get(url, (res) => {
      let str = "";
      res.on("end", () => {
        console.log(JSON.parse(data));
        a[0] = data;
        return a;
      });
    })
    .on("error", (e) => {
      console.log("Error:" + e.message);
      a[0] = e.message;
      return a;
    });
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
  //return await response.on();
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim());
  const k = parseInt(readLine().trim());

  const teams = await getTeams(year, k);

  for (const team of teams) {
    ws.write(`${team}\n`);
  }
}
