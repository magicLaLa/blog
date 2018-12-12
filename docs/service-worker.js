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
    "revision": "7c4779caebaadfd14eab8cc53e970e17"
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
    "url": "assets/js/10.6125c1e3.js",
    "revision": "560cca2d74e7700fabdfbc4c857618ac"
  },
  {
    "url": "assets/js/11.aa8faf97.js",
    "revision": "174fcbe4f5362c94f2b7b161e5506fc3"
  },
  {
    "url": "assets/js/12.a7e341d7.js",
    "revision": "dd9b9cc58788eb985fe0991a5d0cb00c"
  },
  {
    "url": "assets/js/13.ca5b18b7.js",
    "revision": "ba7c6f77f7dc00f683072808209ee9bb"
  },
  {
    "url": "assets/js/14.6eddcc25.js",
    "revision": "f7e2ca4b59e0f178bb892236814494d9"
  },
  {
    "url": "assets/js/15.4f5e5d02.js",
    "revision": "9ef935b5c58312e7c154cee4f4bb5321"
  },
  {
    "url": "assets/js/16.df6b98e6.js",
    "revision": "fa9386ce22af3e2ae4133460823a3d32"
  },
  {
    "url": "assets/js/17.403844f3.js",
    "revision": "63b8b0276f108a14afc434f6d35daca4"
  },
  {
    "url": "assets/js/18.1be63ed8.js",
    "revision": "8c7702364fd563919c487899fa2a0371"
  },
  {
    "url": "assets/js/19.79b762e4.js",
    "revision": "6ae8b02a49c9ea46de8adc6c170e35a3"
  },
  {
    "url": "assets/js/2.3497f525.js",
    "revision": "68b5621a411a13f1b13add8eec2d2d9c"
  },
  {
    "url": "assets/js/20.94ed836a.js",
    "revision": "38df554012d1008882be7ecdfe2a1625"
  },
  {
    "url": "assets/js/21.d6aba28f.js",
    "revision": "767200e05f4456634c41db424e49188e"
  },
  {
    "url": "assets/js/3.462149a0.js",
    "revision": "08b56f9917ee292d75a5907cb044ae2d"
  },
  {
    "url": "assets/js/4.4af964d7.js",
    "revision": "cb526b72fe9b0611967d32b712f98205"
  },
  {
    "url": "assets/js/5.f48981cd.js",
    "revision": "04f49c7ff7bc1fc5940d44166191ab70"
  },
  {
    "url": "assets/js/6.7973e8c0.js",
    "revision": "4ba8102fd5b17dcf6554545af47f0530"
  },
  {
    "url": "assets/js/7.4be77f0b.js",
    "revision": "cfd5e5f2042aecae7ce5f8ccfebb6ad6"
  },
  {
    "url": "assets/js/8.392ef60a.js",
    "revision": "dc0356499a0796bd227c1e9debd59f43"
  },
  {
    "url": "assets/js/9.78854205.js",
    "revision": "32ffac6c7e1f77a475d8d5c1cf55b229"
  },
  {
    "url": "assets/js/app.b9e49b26.js",
    "revision": "9344eee8b66cd5831f756503d78dc92b"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "7631b9f2e4b0531fc29c3d23a24a067c"
  },
  {
    "url": "Blog/index.html",
    "revision": "07d8afee649eea1a9e7917e0b5fb2834"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "dae37969a11e27c453ef9a7691f75609"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "4f3a5ae95c2281dfe8cd81dbd53ce776"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "f884c1a6e5f34dcbd8a18904ac0fd947"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "1bcd33f26c45f7bcba0436e0c4a58deb"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "c8e90e3512d730eb299665b9da93967d"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "9fb3c7494bcdefff8d86284423cf67e1"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "d51200c35997a776324733b38139aafb"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "a7574b1ef66de4abaa78ba219d0fd8b6"
  },
  {
    "url": "Blog/Other/debugTools.html",
    "revision": "3d88caaab15ad24b459a2926a066571e"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "32fc843b5a2d44e0ee29547a2505f52d"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "a843d5ae3ef2e65a7c139e24cd2f3b46"
  },
  {
    "url": "Blog/Other/tools.html",
    "revision": "7f891602696e900bbbbfa84a2a79f73c"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "7fabfae8246abccb262c0c96387066fc"
  },
  {
    "url": "Blog/VUE/workRelated.html",
    "revision": "3752dbe437c1934ec699bf4a7712b7c3"
  },
  {
    "url": "Blog/WebpackFile/webpack.html",
    "revision": "df819afb062189156d6854ccdf79c818"
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
    "url": "img/performance.png",
    "revision": "9d22c03db5f244c64c66e684c702b576"
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
    "url": "img/捕获.png",
    "revision": "f8019bf2a871af166998be50f4df7a60"
  },
  {
    "url": "index.html",
    "revision": "344f1d9f23115bef9e001c81860723fb"
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
