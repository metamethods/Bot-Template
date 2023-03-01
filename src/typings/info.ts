import { ChalkFunction } from "chalk";

export interface InfoType {
  color: ChalkFunction;
  text: string;
}

export type InfoTypes = InfoType[];

export interface InfoOptions {
  type: number;
  body: string;
}