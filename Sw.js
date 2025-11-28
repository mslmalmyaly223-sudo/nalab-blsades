// service-worker.js
self.addEventListener('install', (event) => {
    console.log('✅ Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('✅ Service Worker activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'PLAY_AUDIO') {
        // التعامل مع تشغيل الصوت في الخلفية
        event.ports[0].postMessage({status: 'PLAYING'});
    }
});
