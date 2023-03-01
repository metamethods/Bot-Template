import { CommandType } from "@typings/command";
import { info, treeInfo } from "@util/info";

import ExtendedClient from "@structures/Client";
import globPromise from "@util/globPromise";

export const settings = {
  onRun: 'Registering commands',
  order: 1
}

export default async function registerCommands(client: ExtendedClient) {
  const commandFiles = await globPromise('commands/**/*{.ts,.js}');
  const registeredCommands: string[] = [];

  client.stagedCommands = [];

  for (const filePath of commandFiles) {
    const command: CommandType = await client.importFile(filePath);

    if (!command.data) {
      info(1, `Command ${filePath} is missing data property. Ignoring file from being staged.`);
      continue;
    }

    client.allCommands.set(command.data.name, command);
    client.stagedCommands.push(command.data);
    
    registeredCommands.push(command.data.name);
  }

  treeInfo(3, 'All registered commands', registeredCommands)
}