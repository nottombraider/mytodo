/* eslint-disable no-restricted-globals */

const cachedURLs = [
  '/',
  'index.scss',
  'index.js',
  'img/to_do_list_icon.png',
];

const cacheName = 'myToDoCache';


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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});
