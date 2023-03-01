import { Events } from "discord.js";
import { info } from "@util/info";

import Event from "@structures/Event";

export default new Event('once', Events.ClientReady, (client) => {
  info(0, `Bot is logged into Discord as ${client.user.tag}`);
});