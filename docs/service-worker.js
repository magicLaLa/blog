/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "381af93bdf49b8e14084788618d69a92"
  },
  {
    "url": "assets/css/1.styles.0bd4799b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/10.styles.8087d254.css",
    "revision": "ff7f05c3526de2bb6b9ca14b9d33ec24"
  },
  {
    "url": "assets/css/2.styles.1dd79bd6.css",
    "revision": "08a58141c3cbf2350ed778bd376c5f9a"
  },
  {
    "url": "assets/css/styles.3974c7c8.css",
    "revision": "2b0a202887283b3d96000c0155c99065"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0bd4799b.js",
    "revision": "92d97e77963e54ea8909133be6c8aa6c"
  },
  {
    "url": "assets/js/2.1dd79bd6.js",
    "revision": "acb1820ff9bb10bc46bbadaa545f7c61"
  },
  {
    "url": "assets/js/3.cb5e462a.js",
    "revision": "c747ee8de63c8bc1faac15f76c0b1775"
  },
  {
    "url": "assets/js/4.ee6a47b3.js",
    "revision": "562339c4da169046c8c33f71738a8437"
  },
  {
    "url": "assets/js/5.99b8dc59.js",
    "revision": "1584c8a4cba0da8fe4dc2ff16de305e7"
  },
  {
    "url": "assets/js/6.58992cca.js",
    "revision": "edcfd3f037a0bd10b513ee5bf750dc78"
  },
  {
    "url": "assets/js/7.4ac236c1.js",
    "revision": "58c9a45394952a3590308e5620e8b567"
  },
  {
    "url": "assets/js/8.68f8895b.js",
    "revision": "774c7cac0369db0f809a3a00a2db0f2a"
  },
  {
    "url": "assets/js/9.59f5ec1f.js",
    "revision": "b76aef14d7236f9bc06fc1fc6e8d9160"
  },
  {
    "url": "assets/js/app.3974c7c8.js",
    "revision": "c9f64c85a183e89e8e939ea48817a55c"
  },
  {
    "url": "assets/js/vendors~docsearch.8087d254.js",
    "revision": "08dd924da0433948352a965f7c6eaf66"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "cb21ffcb9b33befa3f3b59526c054b80"
  },
  {
    "url": "Blog/index.html",
    "revision": "52083d4aa34a8fde975cb74cc9b8f039"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "ac19d889b5a7580544ae770b20fb192d"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "95a4e77cc115e2b5bae15e31459b639e"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "2f242bd112ff4ca8bc9cb2600bc5a749"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "e3d973f9c8a7a57b134feeaf98aac30a"
  },
  {
    "url": "img/1323758-20180206172305857-1172749425.png",
    "revision": "a9329d6e900a11edd5b100550ece5fbf"
  },
  {
    "url": "img/1808701-d480949cf800d01f.png",
    "revision": "7bdaa1c7e9a6cc85a5df4e2226ebdff3"
  },
  {
    "url": "img/2.png",
    "revision": "3b418a5947db28e32921efd8a67555ae"
  },
  {
    "url": "img/3.png",
    "revision": "862bfeba817cba4ec6a3d38c0d7fe74d"
  },
  {
    "url": "img/APPjson.png",
    "revision": "27b861029b87845a8232bd65cd80840e"
  },
  {
    "url": "img/fuwuqi.png",
    "revision": "095dd42d581b664ed6371c35922e19eb"
  },
  {
    "url": "img/generateSprites.png",
    "revision": "d7867d3c83b526481c524f74b0399cf5"
  },
  {
    "url": "img/imgimg.png",
    "revision": "620d3a0a11b160ccf1082aaf821afee4"
  },
  {
    "url": "img/logo.png",
    "revision": "18630cbb5a1edc2a9bcb7b4a249e8372"
  },
  {
    "url": "img/nvmPic.png",
    "revision": "415b402fdf5699b48cf690194ac02809"
  },
  {
    "url": "img/pagejson.png",
    "revision": "393ac8475b0d7fab0fef51b65c82e90b"
  },
  {
    "url": "index.html",
    "revision": "2162b52feed61e4a67be1580d2431c37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
