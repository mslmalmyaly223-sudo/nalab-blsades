// sw.js - Service Worker لتشغيل الصوت في الخلفية
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(self.clients.claim());
});

// التعامل مع طلبات الصوت
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('youtube.com') || 
      event.request.url.includes('youtu.be')) {
    event.respondWith(fetch(event.request));
  }
});
