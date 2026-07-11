const CACHE_NAME = "puerto-cruz-en-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./puerto-cruz.geojson",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.9.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.10.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.11.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.12.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.13.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/8.14.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/9.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/10.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/puerto-cruz_en/11.mp3"
];

const TILES = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3718/3419.png",
  "./tiles/13/3718/3420.png",
  "./tiles/13/3718/3421.png",
  "./tiles/13/3718/3422.png",
  "./tiles/13/3719/3419.png",
  "./tiles/13/3719/3420.png",
  "./tiles/13/3719/3421.png",
  "./tiles/13/3719/3422.png",
  "./tiles/14/7437/6840.png",
  "./tiles/14/7437/6841.png",
  "./tiles/14/7437/6842.png",
  "./tiles/14/7437/6843.png",
  "./tiles/14/7437/6844.png",
  "./tiles/14/7438/6840.png",
  "./tiles/14/7438/6841.png",
  "./tiles/14/7438/6842.png",
  "./tiles/14/7438/6843.png",
  "./tiles/14/7438/6844.png",
  "./tiles/14/7439/6840.png",
  "./tiles/14/7439/6841.png",
  "./tiles/14/7439/6842.png",
  "./tiles/14/7439/6843.png",
  "./tiles/14/7439/6844.png",
  "./tiles/15/14875/13681.png",
  "./tiles/15/14875/13682.png",
  "./tiles/15/14875/13683.png",
  "./tiles/15/14875/13684.png",
  "./tiles/15/14875/13685.png",
  "./tiles/15/14875/13686.png",
  "./tiles/15/14875/13687.png",
  "./tiles/15/14876/13681.png",
  "./tiles/15/14876/13682.png",
  "./tiles/15/14876/13683.png",
  "./tiles/15/14876/13684.png",
  "./tiles/15/14876/13685.png",
  "./tiles/15/14876/13686.png",
  "./tiles/15/14876/13687.png",
  "./tiles/15/14877/13681.png",
  "./tiles/15/14877/13682.png",
  "./tiles/15/14877/13683.png",
  "./tiles/15/14877/13684.png",
  "./tiles/15/14877/13685.png",
  "./tiles/15/14877/13686.png",
  "./tiles/15/14877/13687.png",
  "./tiles/15/14878/13681.png",
  "./tiles/15/14878/13682.png",
  "./tiles/15/14878/13683.png",
  "./tiles/15/14878/13684.png",
  "./tiles/15/14878/13685.png",
  "./tiles/15/14878/13686.png",
  "./tiles/15/14878/13687.png",
  "./tiles/15/14879/13681.png",
  "./tiles/15/14879/13682.png",
  "./tiles/15/14879/13683.png",
  "./tiles/15/14879/13684.png",
  "./tiles/15/14879/13685.png",
  "./tiles/15/14879/13686.png",
  "./tiles/15/14879/13687.png",
  "./tiles/16/29753/27366.png",
  "./tiles/16/29753/27367.png",
  "./tiles/16/29753/27368.png",
  "./tiles/16/29753/27369.png",
  "./tiles/16/29753/27370.png",
  "./tiles/16/29753/27371.png",
  "./tiles/16/29754/27366.png",
  "./tiles/16/29754/27367.png",
  "./tiles/16/29754/27368.png",
  "./tiles/16/29754/27369.png",
  "./tiles/16/29754/27370.png",
  "./tiles/16/29754/27371.png",
  "./tiles/16/29755/27366.png",
  "./tiles/16/29755/27367.png",
  "./tiles/16/29755/27368.png",
  "./tiles/16/29755/27369.png",
  "./tiles/16/29755/27370.png",
  "./tiles/16/29755/27371.png",
  "./tiles/16/29756/27366.png",
  "./tiles/16/29756/27367.png",
  "./tiles/16/29756/27368.png",
  "./tiles/16/29756/27369.png",
  "./tiles/16/29756/27370.png",
  "./tiles/16/29756/27371.png",
  "./tiles/17/59508/54735.png",
  "./tiles/17/59508/54736.png",
  "./tiles/17/59508/54737.png",
  "./tiles/17/59508/54738.png",
  "./tiles/17/59508/54739.png",
  "./tiles/17/59508/54740.png",
  "./tiles/17/59509/54735.png",
  "./tiles/17/59509/54736.png",
  "./tiles/17/59509/54737.png",
  "./tiles/17/59509/54738.png",
  "./tiles/17/59509/54739.png",
  "./tiles/17/59509/54740.png",
  "./tiles/17/59510/54735.png",
  "./tiles/17/59510/54736.png",
  "./tiles/17/59510/54737.png",
  "./tiles/17/59510/54738.png",
  "./tiles/17/59510/54739.png",
  "./tiles/17/59510/54740.png",
  "./tiles/17/59511/54735.png",
  "./tiles/17/59511/54736.png",
  "./tiles/17/59511/54737.png",
  "./tiles/17/59511/54738.png",
  "./tiles/17/59511/54739.png",
  "./tiles/17/59511/54740.png"
];

const ALL_RESOURCES = [...ASSETS, ...AUDIO_URLS, ...TILES];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ALL_RESOURCES.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`Failed to cache on install: ${url} - ${err.message}`);
          });
        })
      );
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const url = event.request.url;
        if (url.startsWith(self.location.origin) || url.includes("supabase.co") || url.includes("unpkg.com")) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(err => {
        console.error("Fetch error:", err);
      });
    })
  );
});
