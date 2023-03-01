import { InfoTypes } from "@typings/info";

import chalk from "chalk";

export default [
  { color: chalk.green.bold, text: "success" }, // Success
  { color: chalk.yellow.bold.italic, text: "warning" }, // Warning
  { color: chalk.red.bold.italic, text: "error" }, // Error
  { color: chalk.blue.bold, text: "info" }, // Info
  { color: chalk.magenta.bold.italic, text: "await" }, // Await purple
  { color: chalk.gray.bold.italic, text: "await" }, // Await
] as InfoTypes;