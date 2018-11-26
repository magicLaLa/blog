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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ac4bb437138038814bcb8cb02d8c8ee"
  },
  {
    "url": "assets/css/0.styles.b3398776.css",
    "revision": "4247620a281375fcdb70d89dc217b703"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38e17ce0.js",
    "revision": "704cd33ad2459ab218324b3df05addb0"
  },
  {
    "url": "assets/js/11.31a53e1e.js",
    "revision": "9b536a1905f4459a6efb2c67f876767b"
  },
  {
    "url": "assets/js/12.9ff085b4.js",
    "revision": "08243a7e81fdac41e9fe57782cd835b3"
  },
  {
    "url": "assets/js/13.78bafbe6.js",
    "revision": "7927ec940968ebe97a47c8de7e3368be"
  },
  {
    "url": "assets/js/14.31cd3736.js",
    "revision": "ee3333af75ef712c16fc867db86db274"
  },
  {
    "url": "assets/js/15.a604e539.js",
    "revision": "a4434377c8bd80acea9963a241cbca57"
  },
  {
    "url": "assets/js/16.93a56127.js",
    "revision": "849d275d8a94d675f39c0cc0d2e87a19"
  },
  {
    "url": "assets/js/17.117e77dd.js",
    "revision": "a928ba0ebdbd9a36822cd5b2b55ece94"
  },
  {
    "url": "assets/js/18.de313093.js",
    "revision": "db3fa86c4e05e5e25b1975a0eab3ab99"
  },
  {
    "url": "assets/js/19.76b01c9a.js",
    "revision": "492a762f2c7fafa15ef20fbe126e04ef"
  },
  {
    "url": "assets/js/2.03531c98.js",
    "revision": "05fdce550864626ffa176a3ad21a51d6"
  },
  {
    "url": "assets/js/20.5493beb9.js",
    "revision": "d79bc18161be02ee2141db5ca5630817"
  },
  {
    "url": "assets/js/3.5d387ba5.js",
    "revision": "604318127d3d1a24ce44b447e241d54f"
  },
  {
    "url": "assets/js/4.9741663e.js",
    "revision": "31935c8e6642b81b0f8b9ffcd75d3885"
  },
  {
    "url": "assets/js/5.ff590f0c.js",
    "revision": "d09b356cc831dea55fbaaf724bdd0254"
  },
  {
    "url": "assets/js/6.d18c7a77.js",
    "revision": "84ec9a312c1837bde581efcd136f2bbb"
  },
  {
    "url": "assets/js/7.fe55ef6f.js",
    "revision": "9880d68f0f7d887f2b4c88b2bd856242"
  },
  {
    "url": "assets/js/8.f98dcb8c.js",
    "revision": "049bd7a9a772f4c7401c8572e50b7591"
  },
  {
    "url": "assets/js/9.c298e7f0.js",
    "revision": "850fc7e8c7ce277554346b0bfce2dd1d"
  },
  {
    "url": "assets/js/app.1dbc2bbf.js",
    "revision": "3453c369acae30932393f0aa21ab9607"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "0bfaea2c72899056615a22b963e3e140"
  },
  {
    "url": "Blog/index.html",
    "revision": "27a77333d202b8faed4eb5c102e4f400"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "4baf0db2f2febfe7de685f0b85ed683e"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "4fda3d29b79227ab59c9e2eae1e48055"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "5b63b53d1c9ae13bfcf8eeaddfdc597f"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "8b81caa0621286eea0a9934609a9926a"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "d27d5486422e5e6a0ca9dbf1a67096f3"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "f6a651b6f87c19cd592dbf9193085ff8"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "35c0c2011d72fdd89eaea614baf69a85"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "e7aa6e55bfbc36400abd3dc86d666338"
  },
  {
    "url": "Blog/Other/docsify.html",
    "revision": "34c2b6ebacf0b60dabacfe16f85edeca"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "47173ab7add64a0a3bab9e0851623d4e"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "7c5539a436d6dfc2f0ea0167b4e464a0"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "ec363c45ec8898b3fd07510d0a1e2e44"
  },
  {
    "url": "Blog/Other/whistle.html",
    "revision": "1544bf11c3ee9f88945cd9551c195c2f"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "fe5ff9f45838f5c817d85e3292075da2"
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
    "revision": "75d3da915982f3d00764535850d82fd7"
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
