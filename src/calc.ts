import { Command } from "commander";

export const calc = new Command("calc");

calc
  .command("add <a> <b>")
  .description("adds two numbers")
  .action((a, b) => {
    console.log(parseInt(a) + parseInt(b));
  });

calc
  .command("mult <a> <b>")
  .description("multiplies two numbers")
  .action((a, b) => {
    console.log(parseInt(a) * parseInt(b));
  });
