import { REST, Routes } from "discord.js";
import { info } from "@util/info";

import ExtendedClient from "@structures/Client";

export default async function publishCommands(client: ExtendedClient) {
  const rest = new REST({ version: '10' }).setToken(client.botToken);
  const commands = client.stagedCommands.map(command => command.toJSON());

  try {
    await rest.put(
      Routes.applicationCommands(client.clientId),
      { body: commands }
    );
    info(0, `Published ${commands.length} application command(s)`);
  } catch (error) {
    info(2, `Failed to register application commands: ${error}`);
  }
}