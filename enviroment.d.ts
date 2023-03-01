// This is used to help find what values exist under the process.env table.
// If you are adding env values in replit go to the Secrets tab, else make a .env file in the root of this directory.

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      botToken: string;
      clientId: string;
      
      // You can use this if you were registering commands on a certain server
      guildId?: string; 
    }
  }
}

export {};