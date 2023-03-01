import chalk from "chalk";
import types from "@data/info";

export function info(
  type: number, body: string
) {
  const { color, text } = types[type];

  console.log(color(`${text}`), body);
}

export function treeInfo(
  type: number, title: string,
  tree: string[]
) {
  const { color, text } = types[type];
  const treeString = tree.map((item, index) => 
    `${index === tree.length - 1 ? '└─' : '├─'} ${item}`
  );

  console.log(color(`${text}`), `${title}\n${treeString.join('\n')}`);
}

export function runInfo<V>(
  type: number, body: string,
  _function: (...args: any[]) => V,
  ...args: any
): V {
  info(type, body);
  return _function(...args);
}