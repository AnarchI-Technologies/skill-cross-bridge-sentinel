export function out(value) {
  console.log(JSON.stringify(value, null, 2));
}

export function fail(message) {
  throw new Error(message);
}

export function handleMain(promise) {
  promise.catch((err) => {
    console.error(`ERROR: ${err?.message || String(err)}`);
    process.exit(1);
  });
}
