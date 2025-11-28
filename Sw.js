// sw.js
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  if (event.data.type === 'PLAY_AUDIO') {
    // التعامل مع تشغيل الصوت في الخلفية
  }
});
