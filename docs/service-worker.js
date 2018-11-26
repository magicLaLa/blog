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
    "revision": "e96528c07a0b95b4660b373b968167e5"
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
    "url": "assets/css/styles.1b863242.css",
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
    "url": "assets/js/10.8d8b3256.js",
    "revision": "0547f3fb9c17d1708c52d9e705201526"
  },
  {
    "url": "assets/js/11.d5bd9500.js",
    "revision": "90d3b08690ceaf9375113095650a18fc"
  },
  {
    "url": "assets/js/12.4b74a4a8.js",
    "revision": "1459d86994b072eb3bcffb9e7ad74b94"
  },
  {
    "url": "assets/js/13.201e6144.js",
    "revision": "d49be81462c82dcbe9dbff819d06149f"
  },
  {
    "url": "assets/js/14.fd97acd7.js",
    "revision": "3b5c34a56bd8b901b074e05cf0768351"
  },
  {
    "url": "assets/js/15.f839a6be.js",
    "revision": "d7e5a35e9c52dba5fd141bcec5732272"
  },
  {
    "url": "assets/js/16.e0b39d47.js",
    "revision": "c812b6a0ce9a5ad5b872e043877a45a1"
  },
  {
    "url": "assets/js/17.6af98a6f.js",
    "revision": "074bfb68d354953b7dbc3cafdcfd25db"
  },
  {
    "url": "assets/js/2.87d3c1eb.js",
    "revision": "c95c4e37f5669faae861b8431308799b"
  },
  {
    "url": "assets/js/3.d649fb9d.js",
    "revision": "97423521ae7f52733fe4fdfadc2ebe1c"
  },
  {
    "url": "assets/js/4.e297dd1d.js",
    "revision": "be0779da53fb2bf3b225f338c5bb2751"
  },
  {
    "url": "assets/js/5.916b7864.js",
    "revision": "1b1d1d2f2fdadf017f21dadd4e9cad8c"
  },
  {
    "url": "assets/js/6.2c2a3cdb.js",
    "revision": "15cf35270c73d6d1b4f1a1820480ed51"
  },
  {
    "url": "assets/js/7.5a20396c.js",
    "revision": "a26fa54616fa54ba28191da48931eb72"
  },
  {
    "url": "assets/js/8.b6e191cc.js",
    "revision": "241b3328101bfc67ffbd1872a2c33d5c"
  },
  {
    "url": "assets/js/9.839646a7.js",
    "revision": "2f3c3d94d377420a09826afcc788bae7"
  },
  {
    "url": "assets/js/app.1b863242.js",
    "revision": "d3e063d6b7c4f9e56d1fbe9aeaf2c48f"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "14ad8f39d87e6caace82570f4b3d1d3e"
  },
  {
    "url": "Blog/index.html",
    "revision": "3da5c046420e3fff525a26a046260d82"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "da12ea30827dbf2015de2974122198ea"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "c7cd2a7a1adb7872b0e6ddcca87fc5df"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "2d2aeffff0f14352bb85420c56948284"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "292476a698635017df8335e859a32dfb"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "7fc61be6bb821f9b31feb0e18c9c2971"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "c76cdb24291293439bb613d21fe0857d"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "705a47b0cec23c3920bc35b53c579ab5"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "c7742463c86076ccc7dfedefceca89ad"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "568629c2efbdd1c89ec56521c9b95e7e"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "9f0d9e04bac5500acb21cb51070e9bd6"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "75ed34eb1eb586bc6ca6ba30d5524ffb"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "3ffd1ea1523aad158026877f71084a87"
  },
  {
    "url": "exampleHtml/console.html",
    "revision": "9f6dbba373507e703a8fc698cfd33bb6"
  },
  {
    "url": "exampleHtml/debuExe.js",
    "revision": "a625100ce371d49010f1d388d2aefd6a"
  },
  {
    "url": "exampleHtml/debugFile/console.html",
    "revision": "454763072a2c94545640bf40ed5e45ec"
  },
  {
    "url": "exampleHtml/debugFile/console.js",
    "revision": "a625100ce371d49010f1d388d2aefd6a"
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
    "url": "img/add-commit.png",
    "revision": "b2176482b433c658b5687576f46e0b35"
  },
  {
    "url": "img/APPjson.png",
    "revision": "27b861029b87845a8232bd65cd80840e"
  },
  {
    "url": "img/console1.png",
    "revision": "719de6d87ece9abcb45a063381bf2290"
  },
  {
    "url": "img/console10.png",
    "revision": "ffa069df83e3abb2d2c727709976042c"
  },
  {
    "url": "img/console11.png",
    "revision": "42f66249d995cff7e5c0f2e683f6165b"
  },
  {
    "url": "img/console12.png",
    "revision": "0702611ded6d15f5e4fe8240861decf7"
  },
  {
    "url": "img/console13.png",
    "revision": "6c00ad1a9dcffac1c3b732e036092e20"
  },
  {
    "url": "img/console2.png",
    "revision": "34dd0eaca8d87610a8cc1338e5a44083"
  },
  {
    "url": "img/console3.png",
    "revision": "0bb57c95497bf95f463e98c72ebd88bf"
  },
  {
    "url": "img/console4.png",
    "revision": "619a940eef792a24abf1fa652a15b3f9"
  },
  {
    "url": "img/console5.png",
    "revision": "cb72fad668be0fc79fa0dd1f8a8c47cb"
  },
  {
    "url": "img/console6.png",
    "revision": "ceaabe525667d1769c76278288938e0a"
  },
  {
    "url": "img/console7.png",
    "revision": "e6ba7ca03c5e1d2f809d3dd89a346664"
  },
  {
    "url": "img/console8.png",
    "revision": "2dc603be01778f77a0fe6190027312a9"
  },
  {
    "url": "img/console9.png",
    "revision": "dff5c80b99f839ee8fd26ed52527989d"
  },
  {
    "url": "img/debug4.png",
    "revision": "9a93c20e1c942be3b6e6902480bba257"
  },
  {
    "url": "img/debug5.png",
    "revision": "9e95a0cbcd43b2691c5f1ebdf4005888"
  },
  {
    "url": "img/debug6.png",
    "revision": "b3a3bd92b507ab8e218faf56d4053366"
  },
  {
    "url": "img/debug7.png",
    "revision": "b0c8cd2bd6f5fc6a6f9ccbfc7d643f26"
  },
  {
    "url": "img/debugger1.png",
    "revision": "8c938983d061dcbe689a409251133f64"
  },
  {
    "url": "img/debugger2.png",
    "revision": "8800b6db3941370193281a647a37ec06"
  },
  {
    "url": "img/debugger3.png",
    "revision": "000de534f005fa63bc87a3b49663d5d9"
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
    "revision": "6172ea6abdd47d7fa7993b4a38d481ce"
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
