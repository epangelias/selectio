self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => cache.addAll(['/offline'])),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isAPI = url.pathname.startsWith('/api');

  // Return early for API requests
  if (isAPI) return;

  // Special handling for root path
  if (url.pathname === '/') {
    event.respondWith(
      caches.match('/').then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update cache in the background
            caches.open('offline-cache').then((cache) => {
              cache.put('/', networkResponse.clone());
            });
            return networkResponse;
          })
          .catch((error) => {
            console.error('Failed to fetch:', error);
            return cachedResponse;
          });

        // Return cached response immediately if available
        return cachedResponse || fetchPromise;
      }),
    );
    return;
  }

  // Default handling for other routes
  event.respondWith(
    fetch(event.request).catch((e) => isAPI ? e : caches.match('/offline')),
  );
});

self.addEventListener('push', function (event) {
  const text = event.data.text();
  const data = !text.startsWith('{') ? { title: text } : event.data.json();
  console.log('Received push', data);
  event.waitUntil(
    self.registration.showNotification(data.title, data),
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(self.origin),
  );
});
