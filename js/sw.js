self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.min.css',
                '/js/script.min.js',
                '/images/logo.png',
                '/images/erp-system.png',
                '/images/crm-system.png',
                '/images/digital-menu.png',
                '/images/nfe-system.png',
                '/images/background.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
