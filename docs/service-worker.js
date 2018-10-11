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
    "revision": "b24067b9e5cac9b5872ea28de66f4b71"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.f05cf0c5.css",
    "revision": "7c66a3fea978afe61d3244bd23a7734a"
  },
  {
    "url": "assets/css/styles.29194168.css",
    "revision": "f4c7fa5d4197afd1f7f2a464373c1a57"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.babd7481.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.77cc4cbc.js",
    "revision": "0465c34a9ebbc42a67f2a3017955a08c"
  },
  {
    "url": "assets/js/11.12a3a251.js",
    "revision": "b03da1d457ae0eb0c59f4e93721b7198"
  },
  {
    "url": "assets/js/2.f05cf0c5.js",
    "revision": "d8075f35549fc26f2fb247e89b58ee09"
  },
  {
    "url": "assets/js/3.6809d514.js",
    "revision": "b9a54ec04bcb8f22b4417bac86944c41"
  },
  {
    "url": "assets/js/4.358937fe.js",
    "revision": "c2f9809a9269d781f6faf8e3f53edb89"
  },
  {
    "url": "assets/js/5.0834eef5.js",
    "revision": "2b6fba3d797b36f6d9ab3688f87ddb4f"
  },
  {
    "url": "assets/js/6.e81ab051.js",
    "revision": "ab7b44f4bc979d7aff9731168df4adb7"
  },
  {
    "url": "assets/js/7.44e0a993.js",
    "revision": "36b1649ea10384eff3fcb6f56bc74ad3"
  },
  {
    "url": "assets/js/8.5be6a285.js",
    "revision": "72137baa4f3ec00e0e12c6c7b310cb33"
  },
  {
    "url": "assets/js/9.2c13742f.js",
    "revision": "f3c3efce629b01eaa29aa77fbdaca06f"
  },
  {
    "url": "assets/js/app.29194168.js",
    "revision": "3ef4dcc5d8aed87d6ad0e0a3163ced2e"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "c14eb129760966a69c49ddc01a82c195"
  },
  {
    "url": "Blog/index.html",
    "revision": "39a8fa7cc33e9b00f1af9de4cdbd1e72"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "270439259d12a78b7172256c08234dca"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "7d977d67a44195c47a56f95b9d14685e"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "91d33f6d447ea9ae9e1f168b861cad97"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "cd9b093c5b5948906768acd726413d69"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "bc390638e1bf0c8d32b057ac4e5ab527"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "c636a42ad77fda5a51160b5fd7c0be7f"
  },
  {
    "url": "img/1323758-20180206101320904-162520733.png",
    "revision": "ef4a37b283f8078a266908949431be94"
  },
  {
    "url": "img/1323758-20180206172305857-1172749425.png",
    "revision": "a9329d6e900a11edd5b100550ece5fbf"
  },
  {
    "url": "img/1323758-20180712112225701-1623212436.png",
    "revision": "1b30de1eaba5f62fdd301da376d30399"
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
    "url": "img/dnpz.png",
    "revision": "bd29ef69d915d8e5c793ee48f64a4bc0"
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
    "url": "img/ic.gif",
    "revision": "59482848ae1c54bf8a47387cc4ca7da9"
  },
  {
    "url": "img/imgimg.png",
    "revision": "620d3a0a11b160ccf1082aaf821afee4"
  },
  {
    "url": "img/kzmb.png",
    "revision": "9522e40fb538313c5ed861d16b39ec37"
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
    "url": "img/pz.png",
    "revision": "c7a6b0daae998e93f59e0c02068242f1"
  },
  {
    "url": "img/xg.png",
    "revision": "b4b356d741b9b432c00f37fcd27f33e8"
  },
  {
    "url": "index.html",
    "revision": "46829b02bf70a997856cbc163651095d"
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
