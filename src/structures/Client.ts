import { Client, ClientEvents, Collection, SlashCommandBuilder, REST, Routes, IntentsBitField } from "discord.js";
import { CommandType } from "@typings/command";
import { info, runInfo } from "@util/info";
import { Settings } from "@typings/module";
import { AnyFunction } from "@typings/basic";

import publishCommands from '@modules-client/publishCommands';
import registerCommands from "@modules-client/registerCommands";

import globPromise from "@util/globPromise";

// class
export default class ExtendedClient extends Client {
  allCommands: Collection<string, CommandType> = new Collection(); // All the commands that can be searched through and able to find the data about it.
  stagedCommands: SlashCommandBuilder[] = []; // All the commands that are staged, and ready to be pushed to any guild(s)

  botToken: string;
  clientId: string;

  constructor(
    intents: IntentsBitField[] | number,
    token: string,
    clientId: string
  ) {
    super({ intents: intents });

    this.botToken = token;
    this.clientId = clientId;
  }

  async importFileAll(
    this: ExtendedClient,
    path: string
  ) {
    delete require.cache[require.resolve(path)];
    return (await import(path));
  }

  async importFile(
    this: ExtendedClient,
    path: string
  ) {
    return (await import(path))?.default;
  }

  async refreshCommands() {
    await runInfo(5, 'Registering commands', registerCommands, this);
    await runInfo(5, 'Publishing commands', publishCommands, this);
  }

  async registerModules() {
    const modules = await Promise.all(
      (await globPromise('modules/client/*{.ts,.js}'))
      .map(async (path: string) => await this.importFileAll(path))
    );

    const sortedModules = modules.filter(module => module.settings).sort((a, b) => 
      (a.settings.order ?? 0) - (b.settings.order ?? 0)
    ).map(module => runInfo(5, module.settings.onRun, module.default, this));

    await Promise.all(sortedModules);

    info(0, 'All modules have been registered');
  }

  async start() {
    await runInfo(4, 'Loading modules', () => this.registerModules());
    await runInfo(4, 'Publishing commands', publishCommands, this);
    await runInfo(4, 'Logging in', () => this.login(this.botToken));
  }
}