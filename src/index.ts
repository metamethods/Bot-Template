import ExtendedClient from '@structures/Client';
import dotenv from 'dotenv';

dotenv.config();

export const client = new ExtendedClient(
  32767,
  process.env.botToken as string,
  process.env.clientId as string
);

client.start();