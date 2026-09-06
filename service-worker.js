const CACHE_NAME = "puerto-cruz-en-v6";

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
  "./tiles/13/3717/3420.png",
  "./tiles/13/3717/3421.png",
  "./tiles/13/3717/3422.png",
  "./tiles/13/3718/3420.png",
  "./tiles/13/3718/3421.png",
  "./tiles/13/3718/3422.png",
  "./tiles/13/3719/3420.png",
  "./tiles/13/3719/3421.png",
  "./tiles/13/3719/3422.png",
  "./tiles/13/3720/3420.png",
  "./tiles/13/3720/3421.png",
  "./tiles/13/3720/3422.png",
  "./tiles/13/3721/3420.png",
  "./tiles/13/3721/3421.png",
  "./tiles/13/3721/3422.png",
  "./tiles/14/7436/6841.png",
  "./tiles/14/7436/6842.png",
  "./tiles/14/7436/6843.png",
  "./tiles/14/7436/6844.png",
  "./tiles/14/7437/6841.png",
  "./tiles/14/7437/6842.png",
  "./tiles/14/7437/6843.png",
  "./tiles/14/7437/6844.png",
  "./tiles/14/7438/6841.png",
  "./tiles/14/7438/6842.png",
  "./tiles/14/7438/6843.png",
  "./tiles/14/7438/6844.png",
  "./tiles/14/7439/6841.png",
  "./tiles/14/7439/6842.png",
  "./tiles/14/7439/6843.png",
  "./tiles/14/7439/6844.png",
  "./tiles/14/7440/6841.png",
  "./tiles/14/7440/6842.png",
  "./tiles/14/7440/6843.png",
  "./tiles/14/7440/6844.png",
  "./tiles/15/14874/13682.png",
  "./tiles/15/14874/13683.png",
  "./tiles/15/14874/13684.png",
  "./tiles/15/14874/13685.png",
  "./tiles/15/14874/13686.png",
  "./tiles/15/14874/13687.png",
  "./tiles/15/14875/13682.png",
  "./tiles/15/14875/13683.png",
  "./tiles/15/14875/13684.png",
  "./tiles/15/14875/13685.png",
  "./tiles/15/14875/13686.png",
  "./tiles/15/14875/13687.png",
  "./tiles/15/14876/13682.png",
  "./tiles/15/14876/13683.png",
  "./tiles/15/14876/13684.png",
  "./tiles/15/14876/13685.png",
  "./tiles/15/14876/13686.png",
  "./tiles/15/14876/13687.png",
  "./tiles/15/14877/13682.png",
  "./tiles/15/14877/13683.png",
  "./tiles/15/14877/13684.png",
  "./tiles/15/14877/13685.png",
  "./tiles/15/14877/13686.png",
  "./tiles/15/14877/13687.png",
  "./tiles/15/14878/13682.png",
  "./tiles/15/14878/13683.png",
  "./tiles/15/14878/13684.png",
  "./tiles/15/14878/13685.png",
  "./tiles/15/14878/13686.png",
  "./tiles/15/14878/13687.png",
  "./tiles/15/14879/13682.png",
  "./tiles/15/14879/13683.png",
  "./tiles/15/14879/13684.png",
  "./tiles/15/14879/13685.png",
  "./tiles/15/14879/13686.png",
  "./tiles/15/14879/13687.png",
  "./tiles/15/14880/13682.png",
  "./tiles/15/14880/13683.png",
  "./tiles/15/14880/13684.png",
  "./tiles/15/14880/13685.png",
  "./tiles/15/14880/13686.png",
  "./tiles/15/14880/13687.png",
  "./tiles/16/29751/27366.png",
  "./tiles/16/29751/27367.png",
  "./tiles/16/29751/27368.png",
  "./tiles/16/29751/27369.png",
  "./tiles/16/29751/27370.png",
  "./tiles/16/29751/27371.png",
  "./tiles/16/29752/27366.png",
  "./tiles/16/29752/27367.png",
  "./tiles/16/29752/27368.png",
  "./tiles/16/29752/27369.png",
  "./tiles/16/29752/27370.png",
  "./tiles/16/29752/27371.png",
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
  "./tiles/16/29757/27366.png",
  "./tiles/16/29757/27367.png",
  "./tiles/16/29757/27368.png",
  "./tiles/16/29757/27369.png",
  "./tiles/16/29757/27370.png",
  "./tiles/16/29757/27371.png",
  "./tiles/16/29758/27366.png",
  "./tiles/16/29758/27367.png",
  "./tiles/16/29758/27368.png",
  "./tiles/16/29758/27369.png",
  "./tiles/16/29758/27370.png",
  "./tiles/16/29758/27371.png",
  "./tiles/17/59505/54735.png",
  "./tiles/17/59505/54736.png",
  "./tiles/17/59505/54737.png",
  "./tiles/17/59505/54738.png",
  "./tiles/17/59505/54739.png",
  "./tiles/17/59505/54740.png",
  "./tiles/17/59506/54735.png",
  "./tiles/17/59506/54736.png",
  "./tiles/17/59506/54737.png",
  "./tiles/17/59506/54738.png",
  "./tiles/17/59506/54739.png",
  "./tiles/17/59506/54740.png",
  "./tiles/17/59507/54735.png",
  "./tiles/17/59507/54736.png",
  "./tiles/17/59507/54737.png",
  "./tiles/17/59507/54738.png",
  "./tiles/17/59507/54739.png",
  "./tiles/17/59507/54740.png",
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
  "./tiles/17/59511/54740.png",
  "./tiles/17/59512/54735.png",
  "./tiles/17/59512/54736.png",
  "./tiles/17/59512/54737.png",
  "./tiles/17/59512/54738.png",
  "./tiles/17/59512/54739.png",
  "./tiles/17/59512/54740.png",
  "./tiles/17/59513/54735.png",
  "./tiles/17/59513/54736.png",
  "./tiles/17/59513/54737.png",
  "./tiles/17/59513/54738.png",
  "./tiles/17/59513/54739.png",
  "./tiles/17/59513/54740.png",
  "./tiles/17/59514/54735.png",
  "./tiles/17/59514/54736.png",
  "./tiles/17/59514/54737.png",
  "./tiles/17/59514/54738.png",
  "./tiles/17/59514/54739.png",
  "./tiles/17/59514/54740.png"
];

// 1. INSTALL: Pre-cache static assets and all audio files for offline use
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("[SW] Pre-caching assets and audio for offline...");
      await cache.addAll(ASSETS).catch(err => console.warn("[SW] Asset pre-cache warning:", err));
      
      // Pre-fetch all audio files with clean GET requests (no range header) to ensure 200 OK status
      for (const url of AUDIO_URLS) {
        try {
          const req = new Request(url, { method: "GET" });
          const res = await fetch(req);
          if (res && res.status === 200) {
            await cache.put(url, res);
          }
        } catch (err) {
          console.warn("[SW] Audio pre-cache warning for:", url, err);
        }
      }

      // Pre-cache tiles if available
      if (TILES.length > 0) {
        await cache.addAll(TILES).catch(err => console.warn("[SW] Tiles pre-cache warning:", err));
      }
    })
  );
});

// 2. ACTIVATE: Clean old caches & claim clients
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// 3. FETCH: Smart Cache & HTTP Range Request handler for HTML5 <audio> offline playback
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Intercept audio requests (MP3s) or Supabase audio storage URLs
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Standard static assets & tiles
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (!netRes || netRes.status !== 200) {
          return netRes;
        }
        const resToCache = netRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files (iOS Safari & Android Chrome)
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  // If not cached yet, fetch online with clean GET
  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  // Handle Range Header for HTML5 <audio>
  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
