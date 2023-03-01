import { join } from "path";

export default function rootDirectory(...paths: string[]): string {
  return join(__dirname, "..", ...paths);
}