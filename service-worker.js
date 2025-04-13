self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/chemistry11.html',   // List all your HTML pages here
          '/chemistry12.html',
          '/contact.html',
            '/terms.html',
          '/maths11.html',
            '/maths12.html',
            '/physics11.html',
            '/physics12.html',
          '/icons/image.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  