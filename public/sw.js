self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("v1").then(cache =>
      cache.addAll(["index.html", "deleteDB.js", "chat.png", "download.svg", "manifest.json", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "people.html", "person.html", "person_edit.html", "screen2.html", "screen3.html", "screen4.html", "screen5.html", "screen6.html"])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});