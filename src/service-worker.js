
const cachedURLs = [
  '/',
  '/index.css',
  '/index.js',
];

const cacheName = 'myToDoCache';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(cachedURLs);
      })
      .catch((err) => console.log(`Service Worker Err: ${err}`)),
  );
});
