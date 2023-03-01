# Discord Js v14 Bot Template
This is some totally ~~bad~~ bot template for discord.js v14.

_If you want, you can also help by adding pull requests/issues if you wanted to add something or notify me for a bug._

## Features
- Command Handler
- Event Handler

## How to use / Setup
1. Clone the repo
2. Run `npm install` or `pnpm install` or `yarn install`
3. Edit the `settings.ts` file
4. Edit the `.env` file to add your bot token and client id
5. Run `npm start` or `pnpm start` or `yarn start`
6. Profit (or not)

### How to add commands
1. Create a new file in the `commands` folder
2. Then use this command template below

```ts
import { SlashCommandBuilder } from "discord.js";
import { Command } from "@structures/Command";

export default new Command({
  data: new SlashCommandBuilder()
    .setName("COMMAND NAME")
    .setDescription("COMMAND DESCRIPTION")
    // any extra stuff
    ,
  run: async ({ interaction, client }) => {

  }
})
```

### How to add events
1. Create a new file in the `events` folder
2. Then use this event template below

```ts
import { Events } from "discord.js";
import { info } from "@util/info";

import Event from "@structures/Event";

export default new Event('once', Events.EVENT, (...) => {
  // stuff
});
```

### Info
The info module contains 3 functions:
- info
- treeInfo
- runInfo

These are used to help you debug your bot, or make you look cool ngl lol

#### Arguments
info:
  - type: number 
    Look in the `data/info.ts` file for the types
  - body: string
    The body message of the info

treeInfo:
  - type: number
    Look in the `data/info.ts` file for the types
  - title: string
    The title of the tree
  - items: string[]
    The items in the tree

runInfo<V>:
  - type: number
    Look in the `data/info.ts` file for the types
  - title: string
    The title of the run info
  - _function: (...args: any[]) => V
    The function to run
  - ...args: any[]
    The arguments to pass to the function