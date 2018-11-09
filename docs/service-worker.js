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
    "revision": "d5485581e017f2ee32847e95ad8cf0b9"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.87d3c1eb.css",
    "revision": "7c66a3fea978afe61d3244bd23a7734a"
  },
  {
    "url": "assets/css/styles.89a098c1.css",
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
    "url": "assets/js/10.6c25eb16.js",
    "revision": "7c65689fcf8c14eaef234257dce530f6"
  },
  {
    "url": "assets/js/11.5ad15b72.js",
    "revision": "e20335d7a2f880c9ff6d667c897032c3"
  },
  {
    "url": "assets/js/12.7436d661.js",
    "revision": "2ff7057820357836305cbdb7ebc36cc0"
  },
  {
    "url": "assets/js/13.e66225a5.js",
    "revision": "9b6dcbf5969ae3f5aced1a355c79bf71"
  },
  {
    "url": "assets/js/14.e906ae2d.js",
    "revision": "eabc1cc313ed5943a30a70273136c168"
  },
  {
    "url": "assets/js/15.e34b0047.js",
    "revision": "fe7b36ecd9574b358d6bfefa860b3fcb"
  },
  {
    "url": "assets/js/16.78437350.js",
    "revision": "76facc6e0c8b4ce7e399300b18af2362"
  },
  {
    "url": "assets/js/2.87d3c1eb.js",
    "revision": "c95c4e37f5669faae861b8431308799b"
  },
  {
    "url": "assets/js/3.a14d3be5.js",
    "revision": "5b89250d81388f0caf7f46c9cd684916"
  },
  {
    "url": "assets/js/4.4718f38c.js",
    "revision": "8f6269287dab6c114756aaff41436be5"
  },
  {
    "url": "assets/js/5.1781c363.js",
    "revision": "0b4fff605eb90e9da55c1f786d67b9fd"
  },
  {
    "url": "assets/js/6.a3f2a505.js",
    "revision": "416f94d94142daaebe74da510e327ce1"
  },
  {
    "url": "assets/js/7.2af5efa0.js",
    "revision": "81851d873ebe1d0ae63829b4c1989b3d"
  },
  {
    "url": "assets/js/8.1f2509fe.js",
    "revision": "996a6d86e3fab96174cf47d95c89e46f"
  },
  {
    "url": "assets/js/9.2392148a.js",
    "revision": "07ce160ec4a3444d344958147ffc4040"
  },
  {
    "url": "assets/js/app.89a098c1.js",
    "revision": "855cea3807e4e44ecba9020427c05e2d"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "6d410139e189f673b93473091bccdbfa"
  },
  {
    "url": "Blog/index.html",
    "revision": "d803076871994805599d9ac44375456e"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "5c45c1906d8fc8829de67651b2091463"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "ab1d9e372e88b60d7bc9dea6c5e61b1e"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "754766f98182cd017225a46f49c6dc00"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "0cfe8f6ce3cfc4faaee92542213dc062"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "69d12b4b27e22e708bc0a533f2386010"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "c45b564a267c070c6b99d588943af938"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "625362b1cc7bdf9936a221d1b4834efa"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "748d5e78fb32fad27df3fdd9bdda91bd"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "f5a652f76a01f64dc8400b76c12dda0a"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "49e330e614aef5edc29c812f3b83f4ae"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "9dd1c3c3d4c1322edbde279c50d0efce"
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
    "url": "img/fidderWillow.png",
    "revision": "c31d2f7d340b9978cab4912b06c72b2e"
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
    "revision": "d84b8ed625267b1d0f97e48023f31706"
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
