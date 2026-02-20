const CACHE_NAME = 'n5k2-v1';
// Thay 'n5k2-japanese' bằng tên repository của bạn
const BASE_PATH = '/n5k2-japanese';
const urlsToCache = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/thong-bao.html',
  BASE_PATH + '/lich-hoc.html',
  BASE_PATH + '/bai-tap.html',
  BASE_PATH + '/tai-lieu.html',
  BASE_PATH + '/kiem-tra.html',
  BASE_PATH + '/styles.css',
  BASE_PATH + '/script.js'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
