import { SlashCommandBuilder } from "discord.js";
import { Command } from "@structures/Command";

import settings from "#root/settings";

export default new Command({
  data: new SlashCommandBuilder()
    .setName("refresh-commands")
    .setDescription("Refreshes all the commands."),
  run: async ({ interaction, client }) => {
    if (interaction.user.id !== settings["bot-owner"])
      return await interaction.reply({ content: "You are not the bot owner!", ephemeral: true });

    const start = Date.now();
    await interaction.deferReply({ ephemeral: true });
    await client.refreshCommands();
    await interaction.editReply(`Commands refreshed! Took \`${Date.now() - start}ms\``);
  }
})