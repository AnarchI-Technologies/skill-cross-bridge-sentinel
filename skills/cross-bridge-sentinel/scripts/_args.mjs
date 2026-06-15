export function parseArgs(argv) {
  const opts = {};
  for (const arg of argv) {
    if (arg.startsWith('--')) {
      const [k, v = 'true'] = arg.slice(2).split('=');
      opts[k] = v;
    }
  }
  return opts;
}
