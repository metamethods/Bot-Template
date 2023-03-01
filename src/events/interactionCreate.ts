import { Events } from "discord.js";

import Event from "@structures/Event";
import command from "@handlers/command";

export default new Event('on', Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) 
    return;

  if (interaction.isCommand())
    return await command(interaction);
});