import { promisify } from 'util';

import glob from 'glob';

export default function globPromise(path: string) {
  const rootedPath = `${__dirname}/../${path}`;
  return promisify(glob)(rootedPath);
};