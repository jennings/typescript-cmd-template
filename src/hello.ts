import { Command } from "commander";

export const hello = new Command("hello");

hello
  .option("-m, --message <message>", "change the output message")
  .action((cmd) => {
    console.log(cmd.message || "Hello, world!");
  });

hello.command("bye").action(() => {
  console.log("Goodbye!");
});
