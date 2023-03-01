import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import ExtendedClient from "@structures/Client";

interface RunOptions {
  client: ExtendedClient;
  interaction: ChatInputCommandInteraction;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  data: SlashCommandBuilder;
  run: RunFunction;
}