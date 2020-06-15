import { argv } from "process";
import { Command } from "commander";
import { hello } from "./hello";
import { calc } from "./calc";

const program = new Command();
program.addCommand(hello);
program.addCommand(calc);

program.parse(argv);
