#!/usr/bin/env node

const readline = require("readline");
const input = readline.createInterface(process.stdin);

const RANGES = [10, 100, 1000];
const RANGE = RANGES[Math.floor(Math.random() * RANGES.length)];

const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomNum = getRandomNum(0, RANGE);

process.stdout.write(`Загадано число в диапазоне от 0 до ${RANGE}\n`);

input.on("line", (value) => {
  const num = Number(value);

  if (num < randomNum) {
    process.stdout.write("Больше\n");
  } else if (num > randomNum) {
    process.stdout.write("Меньше\n");
  } else {
    process.stdout.write(`Отгадано число ${num}`);
    process.exit(-1);
  }
});
