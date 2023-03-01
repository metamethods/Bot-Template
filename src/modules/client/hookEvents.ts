import { ClientEvents } from "discord.js";
import { treeInfo } from "@util/info";

import ExtendedClient from "@structures/Client";
import Event from "@structures/Event";
import globPromise from "@util/globPromise";

export const settings = {
  onRun: 'Hooking events',
  order: 0
}

export default async function hookEvents(client: ExtendedClient) {
  const eventFiles = await globPromise('events/**/*{.ts,.js}');
  const loadedEvents: string[] = [];

  for (const filePath of eventFiles) {
    const event: Event<keyof ClientEvents> = await client.importFile(filePath);
    client[event.type](event.event, event.run);
    loadedEvents.push(event.event);
  }

  treeInfo(3, 'All loaded events', loadedEvents)
}