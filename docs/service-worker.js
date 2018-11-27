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
    "revision": "058c26b1d3ee592d0cd34f319ea79a73"
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
    "url": "assets/js/10.cc81f795.js",
    "revision": "3d89bc0575fbc16cc8202dfe9ee28ce9"
  },
  {
    "url": "assets/js/11.3c2b1b90.js",
    "revision": "bf65057455c00ed789082ae40f5f1645"
  },
  {
    "url": "assets/js/12.12cc670c.js",
    "revision": "0dc53000b4f5eca15bcc52a64347c49d"
  },
  {
    "url": "assets/js/13.246c3db5.js",
    "revision": "6d11c70cdfa770f7df6bedc8ec1dc1f4"
  },
  {
    "url": "assets/js/14.9d4ed97f.js",
    "revision": "c075f794901ea3af3b0098f43ce70081"
  },
  {
    "url": "assets/js/15.59a970c7.js",
    "revision": "13457fcdabc077bf90e9010189c6a07c"
  },
  {
    "url": "assets/js/16.5d6e3f6d.js",
    "revision": "86ac33b84c36454abdc198bbb0d83c49"
  },
  {
    "url": "assets/js/17.657a41fc.js",
    "revision": "e9b994487340ce5c80570cc88e2e7732"
  },
  {
    "url": "assets/js/18.73700f6f.js",
    "revision": "386ab7c96007a141113a1dd8794a9f41"
  },
  {
    "url": "assets/js/19.6761b1d4.js",
    "revision": "a9df162733931a656f349cec879978ab"
  },
  {
    "url": "assets/js/2.03531c98.js",
    "revision": "05fdce550864626ffa176a3ad21a51d6"
  },
  {
    "url": "assets/js/3.e843dc8b.js",
    "revision": "ab4c03d91c1d80335bb2880c19abf8f6"
  },
  {
    "url": "assets/js/4.21c72289.js",
    "revision": "be0779da53fb2bf3b225f338c5bb2751"
  },
  {
    "url": "assets/js/5.6407e1ab.js",
    "revision": "1b1d1d2f2fdadf017f21dadd4e9cad8c"
  },
  {
    "url": "assets/js/6.6b047b4f.js",
    "revision": "15cf35270c73d6d1b4f1a1820480ed51"
  },
  {
    "url": "assets/js/7.114c39c9.js",
    "revision": "a26fa54616fa54ba28191da48931eb72"
  },
  {
    "url": "assets/js/8.876ba69a.js",
    "revision": "a4f72508cd69a826d0b327694c739d51"
  },
  {
    "url": "assets/js/9.ed99c28d.js",
    "revision": "35bef3bfbe64da95ecf4ab3e58590d87"
  },
  {
    "url": "assets/js/app.3dd2c187.js",
    "revision": "598695a31804cf22a6f2c44c6c3c7755"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "5670e1a514e6bfb3559d1412cc6c4cc5"
  },
  {
    "url": "Blog/index.html",
    "revision": "988e358f8a5fa1d8382d2233e66c161a"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "23de5e280a9d8d647b2e9fe0270a2638"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "726bff4a810a4ea5045e5b0085f52621"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "2525a10ef00f04d31994e8f666adeb54"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "0c7bdb9b442b4ee3531cc82b33ca3f6a"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "022d6a68449f441718f94e98f71a9ace"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "902d3714029a95da9a98645a85c83ba5"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "d79aaa4c01e4b3ad60946f4c12917d33"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "87e75ac4d661739752aedb26d934a49b"
  },
  {
    "url": "Blog/Other/debugTools.html",
    "revision": "c707acdd60f041ab248d6186450f47c4"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "6b31505218d0b0234ed37eecb161adb1"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "df04f199088c2867c32cd290080740f5"
  },
  {
    "url": "Blog/Other/tools.html",
    "revision": "68064f842579ba63ba0d0541905e37d9"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "4e34c1927717bc3fb93c2472cd451467"
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
    "url": "img/sourcetree.png",
    "revision": "d791c81f9747d9964ff72dbe1b5b9391"
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
    "revision": "746b9d7717459719fe47b7e888327295"
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
