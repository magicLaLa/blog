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
    "revision": "539e5b1d00fb68b7b7e253e2eacd63c9"
  },
  {
    "url": "assets/css/1.styles.99f50888.css",
    "revision": "8dd490e5da120de918deda293a91d645"
  },
  {
    "url": "assets/css/2.styles.5b3b6d00.css",
    "revision": "7c66a3fea978afe61d3244bd23a7734a"
  },
  {
    "url": "assets/css/styles.f082584b.css",
    "revision": "f4c7fa5d4197afd1f7f2a464373c1a57"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.99f50888.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.ac9fe039.js",
    "revision": "bdf46b25c4cf54f4df75c7fd870babc2"
  },
  {
    "url": "assets/js/11.75201c68.js",
    "revision": "628f816c7e8df0a714e17578a60929c1"
  },
  {
    "url": "assets/js/12.0e348c9b.js",
    "revision": "b7dc217e2336707211026d19cf3431eb"
  },
  {
    "url": "assets/js/13.922293a9.js",
    "revision": "6db9ae78e6e0d7aa3e0df7ee178497b0"
  },
  {
    "url": "assets/js/14.272c4bae.js",
    "revision": "40b7dc72178d625045f942beac461acf"
  },
  {
    "url": "assets/js/15.6c31acbc.js",
    "revision": "3d294b5731457cc73fea06ba34643d3e"
  },
  {
    "url": "assets/js/16.812a6b48.js",
    "revision": "42a8708096ab52db82127d6e60fedfe8"
  },
  {
    "url": "assets/js/17.524cd0c5.js",
    "revision": "a928ba0ebdbd9a36822cd5b2b55ece94"
  },
  {
    "url": "assets/js/18.a6cb1d46.js",
    "revision": "db3fa86c4e05e5e25b1975a0eab3ab99"
  },
  {
    "url": "assets/js/19.0fa7f313.js",
    "revision": "492a762f2c7fafa15ef20fbe126e04ef"
  },
  {
    "url": "assets/js/2.5b3b6d00.js",
    "revision": "ae407983dbbee99c4c9d3dce2a2a9d8c"
  },
  {
    "url": "assets/js/3.02c1a916.js",
    "revision": "604318127d3d1a24ce44b447e241d54f"
  },
  {
    "url": "assets/js/4.ee1b5712.js",
    "revision": "024ce9e7140799ca69a9994bf26504aa"
  },
  {
    "url": "assets/js/5.4d5d1a16.js",
    "revision": "04f49c7ff7bc1fc5940d44166191ab70"
  },
  {
    "url": "assets/js/6.49c471a1.js",
    "revision": "4ba8102fd5b17dcf6554545af47f0530"
  },
  {
    "url": "assets/js/7.e90877c5.js",
    "revision": "cfd5e5f2042aecae7ce5f8ccfebb6ad6"
  },
  {
    "url": "assets/js/8.1d03ec08.js",
    "revision": "abed1543001ab55b7f8a10fc69bdaf18"
  },
  {
    "url": "assets/js/9.b40bdf8f.js",
    "revision": "5248d0cd3c3a4e90e0607af0e0e2e291"
  },
  {
    "url": "assets/js/app.f082584b.js",
    "revision": "f08d60fa9a7e1589cd4abc8648b7fb67"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "ae71a02e16567e53fd4acdf7ebd6f9c6"
  },
  {
    "url": "Blog/index.html",
    "revision": "6ed381493c0a76412ff64637d6d25360"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "bb724343fe7e10fdcac1e46c1a948729"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "f737439fd0ba40fa9c38bc4a8a18ddeb"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "54de35c3f83ac0b8b5d238b398f24281"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "3adcbefc5ee6383ba91d2ac1880fdb22"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "73fed8cf3fb2f616140e6f02e12a568d"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "874efe7ebb48020ff378350c7231e8ae"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "c4635ea58cf6cc6a39ad6f95310f33a4"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "8c92ab53e76b37ba6e6921820728997b"
  },
  {
    "url": "Blog/Other/docsify.html",
    "revision": "37338faabab6c5a63ef05ebacb8c89ed"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "ddd4f42bef10a85865992b371bd46cc0"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "11cf68539c8aed88b5dd00e3f2316298"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "5f44f136239cc7f5f2f920ab5e99edaf"
  },
  {
    "url": "Blog/Other/whistle.html",
    "revision": "d228450f5e7e59399685af52f88c7da4"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "fcc5c6094d7fd54ea35c6b3dbba9456f"
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
    "url": "img/whistle.png",
    "revision": "677116c580f66b8c9439e2bcf44fbcbb"
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
    "revision": "d7d02468a570db7facebe0ae3e9cc389"
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
