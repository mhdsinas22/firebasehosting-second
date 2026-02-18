'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d406336d2145a6df674fdf74f7c4388",
"version.json": "c769a555e0b89350a773964d20b5d990",
"favicon.ico": "6efc73697bc7b7dd67083372d720458e",
"index.html": "70b55225d387ff8c4587469a45dcf86b",
"/": "70b55225d387ff8c4587469a45dcf86b",
"main.dart.js": "bc968b7fbd9f72c317369930475ec282",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/icon-192.png": "ecbac0b51803bf4e15f59f7a6af5092a",
"icons/icon-512.png": "658198469ad206f5d437cecb5348c4b0",
"manifest.json": "794578214b36d834cbdf991d44654c83",
"assets/AssetManifest.json": "78c197f1e87d8827ab274d92808097c0",
"assets/NOTICES": "131e186277a53281a5b2d1dea306c606",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6e6ee4c78327c461992777d8ce3b6311",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "95e39a696e89214f0024720eaae0723a",
"assets/fonts/MaterialIcons-Regular.otf": "d375013e44ce2be034b2486584576e5d",
"assets/assets/firebase-adminsdk.json": "2be46792e4ed16b6e9cbf08b6304bd14",
"assets/assets/8.png": "b297489127e79c4b5fdb28eae62a00e5",
"assets/assets/instagram.png": "e9b15b731eafbfc16355b811c81af450",
"assets/assets/9.png": "c7dbc238cf3a572462c628855210967e",
"assets/assets/14.png": "fe3a3808234f0a42a34dd84558e884fd",
"assets/assets/15.png": "1434e5b722b22862f255ab4e175a01ff",
"assets/assets/17.png": "14313909104ba9ddba4484689af4d85f",
"assets/assets/16.png": "d3234f07da75e157df67fc2507670bb4",
"assets/assets/12.png": "cef2ed5d3dd908483fe6fce30112b25a",
"assets/assets/13.png": "a0a111e0fbc26646fb60e19c07d397be",
"assets/assets/checked.png": "4b64318452d35434f37f6c8f2e564bbd",
"assets/assets/11.png": "529ca028477c68cf0d7bb1713a65e603",
"assets/assets/10.png": "369877e00dc4f1ae418ebbe2c4a94fe2",
"assets/assets/21.jpg": "8c821b2fd285625e2dfa9966328591a8",
"assets/assets/heart.png": "bed171f38bc538c188efa49f41318255",
"assets/assets/WhatsApp%2520Image%25202025-04-07%2520at%252015.36.44.jpeg": "df1ecc3044ecd3c0057c6580efbafb03",
"assets/assets/20.png": "7911b33e377fcb195e145c4d00ba2489",
"assets/assets/4.jpeg": "62f2c148f402ebf85941d144ea4ad98b",
"assets/assets/22.png": "639e03d493d691c24962a20c201f3227",
"assets/assets/23.png": "ad319ec8939944bfa24de6f10d55e106",
"assets/assets/customer-care.png": "da28ca39564fdf4d68f02afcfafe6890",
"assets/assets/A4%2520-%25201%2520(1).png": "931d57b5afe5fa1c33e9ded106a85c86",
"assets/assets/filter.png": "82be94617bb86832ae399218bfe6e144",
"assets/assets/live-chat.png": "98e7492a574827a1af608961abf25a54",
"assets/assets/24.jpg": "8be607a225961a8796dde3ecdb560c78",
"assets/assets/18.png": "a34ba21121aa9d839c56b2319ab5fa4d",
"assets/assets/i%2520phone-02.jpg": "4392d066bf600c3054d7bb9aea45f1ae",
"assets/assets/19.png": "1f27736ab95edc1669b13724a95979b2",
"assets/assets/box%2520(2).png": "8bb6015392656f336cda165a0b33b2fd",
"assets/assets/delivery-location.png": "659ad859ccf18d3b1f29834e064f42d4",
"assets/assets/5.png": "38c481f28d21ca7532d917e7fc398801",
"assets/assets/7.png": "29e742f2c9a0fad60e81b018be2c31d9",
"assets/assets/6.png": "76a2e0b14bc0f6177ea551206a6d0493",
"assets/assets/heart%2520(1).png": "77162ab81cfc8b2af83fe35cfa36034c",
"assets/assets/2.png": "1434e5b722b22862f255ab4e175a01ff",
"assets/assets/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/3.png": "0f81003aede354d3a290e775a9b87824",
"assets/assets/animations/emptysearch.json": "27a57b15d6a43011ee4db097f10a51c5",
"assets/assets/animations/googlepaysucess%2520edited.json": "6cc1864d8d111f23e52bc8a8fb91dcff",
"assets/assets/animations/Animation%2520-%25201750504604667.json": "6a78a519fc9d1d0224aa1e7247e79b98",
"assets/assets/animations/loading_try.json": "ac452b1a7efee5cc4a995ef703cee1ef",
"assets/assets/animations/loading.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/animations/Animation%2520-%25201749880906829.json": "d6c45e5aba337ae11b4ef764ce823e14",
"assets/assets/animations/erorrfound.json": "159399dba1ada54cc5e6d82720d55506",
"assets/assets/animations/Animation%2520-%25201745332454288.json": "0c12e0f66e32d418089dba282989dd12",
"assets/assets/animations/mailverfied.json": "e80e8bb38d54efcf42f20f5537691c1e",
"assets/assets/animations/Animation%2520-%25201749621812764.json": "79a7823a42d9034cd74408380f4af2ce",
"assets/assets/animations/cute_heart_broken.riv": "ea6f712a1fd3f6fd446938c62131be5d",
"assets/assets/animations/server_error.riv": "a547fb19dc9eb627d5964834c2ce1628",
"assets/assets/animations/nofavotie%2520-%25201748336640713.json": "ac2842493f8f2bce9dbcff7010eedd04",
"assets/assets/animations/Animation%2520-%25201745331219345.json": "c2f99257cf765776f6b873b94a770309",
"assets/assets/animations/Animation%2520-%25201748336640713.json": "ac2842493f8f2bce9dbcff7010eedd04",
"assets/assets/animations/Animation%2520-%25201749621166059.json": "9a3112ddce60e72e6ea1626427117bee",
"assets/assets/animations/Animation%2520-%25201749880883846.json": "0ebec56ccdbfebd2dabf01273cd2c16e",
"assets/assets/animations/Animation%2520-%25201745332367456.json": "795c468fe6b89e786c5293d3f3d83ede",
"assets/assets/animations/Animation%2520-%25201749621812764%2520(1).json": "79a7823a42d9034cd74408380f4af2ce",
"assets/assets/animations/googlepaysucees.json": "6a62be84563c9cf48516ae0cfeceaf87",
"assets/assets/1.png": "e049e99b4b4c3454058e88596ac4b840",
"assets/assets/PHONE-01.jpg": "04ef9c219d41b462fb60bf784ec46932",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
