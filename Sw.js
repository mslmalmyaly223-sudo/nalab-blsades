// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PLAY_AUDIO') {
    // نقل بيانات الصوت للخلفية
    event.waitUntil(
      self.registration.showNotification('سوق الطلاب', {
        body: `جاري تشغيل: ${event.data.title}`,
        icon: '/icon.png',
        tag: 'audio-playback'
      })
    );
  }
});
