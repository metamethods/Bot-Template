import { SlashCommandBuilder } from "discord.js";
import { Command } from "@structures/Command";

export default new Command({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
  run: async ({ interaction, client }) => {
    const sent = await interaction.reply({ content: "Pinging...", fetchReply: true });
    await interaction.editReply(`Latency is \`${sent.createdTimestamp - interaction.createdTimestamp}ms\`. API Latency is \`${Math.round(client.ws.ping)}ms\``);
  }
})