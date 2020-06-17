import { Command } from "commander";
import { argv } from "process";
import { calc } from "./calc";
import { readConfig } from "./config";
import { hello } from "./hello";
import packageJson from "../package.json";

const NAME = packageJson.name;

const program = new Command();
program.name(NAME);
program.addCommand(hello);
program.addCommand(calc);
program.option("-c, --config <path>", "path to config file");

program.action(async (cmd) => {
  console.log("started");
  const config = await readConfig(NAME, cmd.config);
  console.log(config);
  console.log("done!");
});

// execute
program.parseAsync(argv);
