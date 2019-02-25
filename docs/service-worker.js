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
    "revision": "5c2625fbb3e051707d4118cda37a50c0"
  },
  {
    "url": "assets/css/0.styles.5368f53b.css",
    "revision": "90cc0ab1cf0dfc8d8132cd6faa39e843"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ecd4ff42.js",
    "revision": "282e1d00ce6fcc5efedfecfa9066654b"
  },
  {
    "url": "assets/js/11.6c3fa711.js",
    "revision": "aef588e630ba3252aaf1f534362f5b7c"
  },
  {
    "url": "assets/js/12.881a08f3.js",
    "revision": "cfe81e086951306cfee0754508b966a6"
  },
  {
    "url": "assets/js/13.ed8a10d4.js",
    "revision": "f8406f002b8d3ac691e58d552200c924"
  },
  {
    "url": "assets/js/14.f1711710.js",
    "revision": "3ed1751ff76be974668204377b6bce8d"
  },
  {
    "url": "assets/js/15.1b114d77.js",
    "revision": "e4b22dec43640a684712fe04d1106daf"
  },
  {
    "url": "assets/js/16.a40c7433.js",
    "revision": "a48e3eacf8bcd0aa962918d88d65dce5"
  },
  {
    "url": "assets/js/17.6ec64b6e.js",
    "revision": "dfa3777f0a7c6793475be8b5a28e1911"
  },
  {
    "url": "assets/js/18.3e09a046.js",
    "revision": "a61e8ce881029adf8e7fdf784cbe5a77"
  },
  {
    "url": "assets/js/19.754973c0.js",
    "revision": "de1dd23d18003e90a5cce7f8bb6974c3"
  },
  {
    "url": "assets/js/2.f28c9021.js",
    "revision": "e0dbb425413b21431bbe32d476bec751"
  },
  {
    "url": "assets/js/20.60c0c885.js",
    "revision": "a06492cff66d1d34a5b315aab01fe72e"
  },
  {
    "url": "assets/js/21.2abbeb48.js",
    "revision": "f4f4e3eeedf3c764533701c9f6b54ce5"
  },
  {
    "url": "assets/js/22.6fc00333.js",
    "revision": "174dd6ea0e4cfae1958266ffb380c97a"
  },
  {
    "url": "assets/js/23.24aa3aaa.js",
    "revision": "f455dac4868efce0effa76972d97e34c"
  },
  {
    "url": "assets/js/24.251f559a.js",
    "revision": "0293e326ec8e216943fb7afe2d18e076"
  },
  {
    "url": "assets/js/3.cc9abaa5.js",
    "revision": "dd9cccd96daa708e64feb273da4bab0d"
  },
  {
    "url": "assets/js/4.b41a6f86.js",
    "revision": "978e66cb4335523f5bca84fe96674fd8"
  },
  {
    "url": "assets/js/5.77e53637.js",
    "revision": "392d98a0e79522a29a5db2d92d5db91d"
  },
  {
    "url": "assets/js/6.f766644b.js",
    "revision": "570d7121ef4c3f0da3cd7fb83fa43c0c"
  },
  {
    "url": "assets/js/7.1a700bef.js",
    "revision": "6b545f7edaa095a627fc383ebe1b5c1e"
  },
  {
    "url": "assets/js/8.1c47c074.js",
    "revision": "121fdeaf79cfacb6baa4d955ccdf0d42"
  },
  {
    "url": "assets/js/9.e0d44441.js",
    "revision": "5d8a8b7d1774077509339f43cb172a60"
  },
  {
    "url": "assets/js/app.f1493f1d.js",
    "revision": "47f5898117f15da1641eeda3391ac873"
  },
  {
    "url": "Blog/GIT/git-commit-emoji使用指南.html",
    "revision": "ae4825a94c47713954e872aa46182a48"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "7fa8ebf79dee8422533029af457dadab"
  },
  {
    "url": "Blog/index.html",
    "revision": "23abde0a008932bccfbd9c517635b0a2"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "204ca155134d00329b04e4258b0434c9"
  },
  {
    "url": "Blog/JavaScript/EventLoop.html",
    "revision": "8894e75ac14a73858ec2492e171478bb"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "5697463588d5b7d99374b9f7d18342c4"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "93279b00e03400729b04d9ac82347cc6"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "05b2cf0ad2059b8457631a54eb4715e5"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "46d2fa431562d9a9d16be53cfab10756"
  },
  {
    "url": "Blog/Node/hapi.html",
    "revision": "e851630ee664c55e637558a79ba8b02b"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "2a596914ed5c11c32a8a7094ff732f5a"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "a259ca9b063ac69b325e7690b1f28290"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "acde3f6dab176696bffd0c320b3def44"
  },
  {
    "url": "Blog/Other/debugTools.html",
    "revision": "a7895a1236e0da37dbb8bf1e61fb5c03"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "6bbbe582792cdef90e2fb98dcf94d964"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "c163562d1ba772448a92aeb3216809c7"
  },
  {
    "url": "Blog/Other/tools.html",
    "revision": "99bfb174084f0b8516a8bec9260c45b8"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "bcd534f4336ca0df7b845999cd2cb6e9"
  },
  {
    "url": "Blog/VUE/workRelated.html",
    "revision": "091128b0a9c222e9053bcfbb57d42caf"
  },
  {
    "url": "Blog/WebpackFile/webpack.html",
    "revision": "b6e81335037f4a24c09b0767ce178c8a"
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
    "url": "img/chrome.png",
    "revision": "3d92f8b68902c63e35fee79d38b644f5"
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
    "url": "img/eventLoop1.png",
    "revision": "ac96a552407f8de4782a815e8a53a428"
  },
  {
    "url": "img/eventLoop2.png",
    "revision": "1ce139b225eb66c309ad3a99c6b0e900"
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
    "url": "img/performance.png",
    "revision": "9d22c03db5f244c64c66e684c702b576"
  },
  {
    "url": "img/pz.png",
    "revision": "c7a6b0daae998e93f59e0c02068242f1"
  },
  {
    "url": "img/snapshot.png",
    "revision": "206c4e5711e8a5301265d8482e4a04ae"
  },
  {
    "url": "img/sourcetree.png",
    "revision": "d791c81f9747d9964ff72dbe1b5b9391"
  },
  {
    "url": "img/terminal_emojify.png",
    "revision": "02b796c8e916472dccc0b623bf56a74b"
  },
  {
    "url": "img/vase1.png",
    "revision": "dde5f9ea4cee857249cd7d50a5e5e9ed"
  },
  {
    "url": "img/vase2.png",
    "revision": "5c33bdf04e58ecf7afd18375c1599a0d"
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
    "url": "index.html",
    "revision": "251e383dec28c9bf29a246f7da362a47"
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
