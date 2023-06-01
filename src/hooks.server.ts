import type { Handle } from '@sveltejs/kit';

const allowedHeaders = [
  "last-modified"
]

export const handle = (async ({ event, resolve }) => {
  return resolve(event, {
    filterSerializedResponseHeaders: (name) => allowedHeaders.includes(name.toLowerCase()),
  });
}) satisfies Handle;