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
    "revision": "56cd3213ef80d134b772b5e12af52f8d"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.e2ad6933.css",
    "revision": "7c66a3fea978afe61d3244bd23a7734a"
  },
  {
    "url": "assets/css/styles.0805617d.css",
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
    "url": "assets/js/10.dba7f3cf.js",
    "revision": "76b167b6601e7f2d4c56b03e26542db3"
  },
  {
    "url": "assets/js/11.e765e4c4.js",
    "revision": "42fb8130bc2ee926b02a0512232da4d5"
  },
  {
    "url": "assets/js/12.fdd0086e.js",
    "revision": "6ea78ce0f3620399e19be96176a91ab4"
  },
  {
    "url": "assets/js/13.b789b5b3.js",
    "revision": "17a07a3175b33b677af80deb0e5852fa"
  },
  {
    "url": "assets/js/14.b8cc9886.js",
    "revision": "5bbb7bd45f10cd04a163beb284f00535"
  },
  {
    "url": "assets/js/15.ffad50d8.js",
    "revision": "7484cfd68c9d1846d8016082ad09fcb1"
  },
  {
    "url": "assets/js/2.e2ad6933.js",
    "revision": "41cf2aa77571d52c1d7642fa01150ac4"
  },
  {
    "url": "assets/js/3.94d56ad4.js",
    "revision": "f7cb91e25abed1721b342ccbb8fa051a"
  },
  {
    "url": "assets/js/4.6f0b5cc0.js",
    "revision": "562339c4da169046c8c33f71738a8437"
  },
  {
    "url": "assets/js/5.1781c363.js",
    "revision": "0b4fff605eb90e9da55c1f786d67b9fd"
  },
  {
    "url": "assets/js/6.83c0ab42.js",
    "revision": "1ed55e75ee73ecca534f84120ff0ac17"
  },
  {
    "url": "assets/js/7.6c8a8d5f.js",
    "revision": "84ed74be67cc7bde97ea33adbe48eb34"
  },
  {
    "url": "assets/js/8.34ced7d4.js",
    "revision": "bd734bdea9fa8286eeeec3a3ce716ff0"
  },
  {
    "url": "assets/js/9.654a58fe.js",
    "revision": "a4943c475fa1ed74882b4e1f4616fb72"
  },
  {
    "url": "assets/js/app.0805617d.js",
    "revision": "2dab653e25ed624bb0ba88c2ab9947d2"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "f80ae747112130ed3a2c07e0f25fda62"
  },
  {
    "url": "Blog/index.html",
    "revision": "d6d9fc5b4e0eecda3df3633daa70d9a6"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "43d4c894311c2a589583e98ec9ec5f79"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "c53cd17522a8cbc12fcad14c4e8d4811"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "bfab747621b93a37325fcca79a7dd949"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "d9ab34aeedfde3181d4004f6104f818e"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "87d151523e64aa16dd6bb8fae200477c"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "7f46396dddc17aa9babf8948694cfe70"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "217e93548dbadd25efac9b05169c65f8"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "da382bb0252470f3e1626489f05f0535"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "2f3ab58e6b3126e407ec998094809636"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "38b8abb7503f26ff6eb23d120d6b3656"
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
    "url": "img/fidder.png",
    "revision": "4bc57f38d8fd730f645fc3766ec1cc93"
  },
  {
    "url": "img/fidder2.png",
    "revision": "94a25e07dab1ca27d407c99a4fe60306"
  },
  {
    "url": "img/fidder3.png",
    "revision": "9cd8ae8f0f994083a4360ffa527a8a47"
  },
  {
    "url": "img/fidder4.png",
    "revision": "1832e29a98c37fd9d3172a4de10f2b40"
  },
  {
    "url": "img/fidder5.png",
    "revision": "42c0970814aef640ac5de7d669b4c867"
  },
  {
    "url": "img/fuwuqi.png",
    "revision": "38da593ca5406c71546fb59b6807586f"
  },
  {
    "url": "img/generateSprites.png",
    "revision": "d7867d3c83b526481c524f74b0399cf5"
  },
  {
    "url": "img/git-flow.png",
    "revision": "48567a915adedf30cef0bd4f7b5b1ad1"
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
    "url": "img/捕获.png",
    "revision": "f8019bf2a871af166998be50f4df7a60"
  },
  {
    "url": "index.html",
    "revision": "7c32e1f2714e9e8e9e3fe249a274f549"
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
