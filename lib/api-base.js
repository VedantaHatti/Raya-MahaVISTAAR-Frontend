const base = () => (process.env.NEXT_PUBLIC_API_BASE || '').replace(/\/$/, '');

export function apiFetch(path) {
  const url = `${base()}${path.startsWith('/') ? path : `/${path}`}`;
  const headers = {};
  if (base().includes('ngrok')) headers['ngrok-skip-browser-warning'] = 'true';
  return fetch(url, { cache: 'no-store', headers });
}
