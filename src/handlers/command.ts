import { ChatInputCommandInteraction, CommandInteraction } from "discord.js";
import { runInfo, treeInfo } from "@util/info";
import { client } from "@client";

export default async function Command(interaction: CommandInteraction) {
  const command = client.allCommands.get(interaction.commandName);

  if (!command) 
    return;

  try {
    await runInfo(5, `Running command ${interaction.commandName}`, command.run, {
      client,
      interaction: interaction as ChatInputCommandInteraction
    });
  } catch (error) {
    treeInfo(2, 'Logs', [`Error running command ${interaction.commandName}`, `${error}`]);

    if (interaction.replied || interaction.deferred)
      return await interaction.editReply("There was an error while executing this command");
    else
      return await interaction.reply({
        content: "There was an error while executing this command",
        ephemeral: true
      });
  }
}