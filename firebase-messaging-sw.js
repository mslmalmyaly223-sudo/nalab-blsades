// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBkoSz3ZUy4qKBTeLx42Oo-TlTtvFtF2vY",
  projectId: "we-kill-the-sixth",
  messagingSenderId: "862363949793",
  appId: "1:862363949793:web:e0dc01a4eb139da43f75a0"
});

const messaging = firebase.messaging();

// معالجة الإشعارات عند فتح التطبيق
messaging.onBackgroundMessage(function(payload) {
  console.log('🎯 Received background message: ', payload);
  
  const notificationTitle = payload.notification?.title || 'سوق الطلاب';
  const notificationOptions = {
    body: payload.notification?.body || 'إشعار جديد',
    icon: 'https://your-domain.com/icon.png', // ضع رابط أيقونتك
    badge: 'https://your-domain.com/badge.png',
    tag: 'souk-tullab',
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: 'فتح التطبيق'
      }
    ],
    data: payload.data || {}
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// عند النقر على الإشعار
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  // فتح التطبيق
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then(function(clientList) {
      // البحث عن نافذة مفتوحة للتطبيق
      for (const client of clientList) {
        if (client.url.includes('/') && 'focus' in client) {
          return client.focus();
        }
      }
      // إذا لم تكن مفتوحة، افتح نافذة جديدة
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
