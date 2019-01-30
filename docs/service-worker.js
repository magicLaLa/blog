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
    "revision": "549687f05a653383f6ed1c37a55185dc"
  },
  {
    "url": "assets/css/0.styles.af295b8d.css",
    "revision": "b3e7daba31dc0b597f2ef725b63dce5b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bfbd47bf.js",
    "revision": "883196fb44e291dcd4100b5f97d62e36"
  },
  {
    "url": "assets/js/11.bc18f3c2.js",
    "revision": "18608c2a5a3673e10186c7e70b9bd923"
  },
  {
    "url": "assets/js/12.05d40827.js",
    "revision": "c3ccbbff2dc604d77e343491c2915720"
  },
  {
    "url": "assets/js/13.60ac598c.js",
    "revision": "2a33725b078fdee37369d0d8cb0ee8dd"
  },
  {
    "url": "assets/js/14.191595c8.js",
    "revision": "a40860ec15d4c755432e91e551f409ff"
  },
  {
    "url": "assets/js/15.0e2c24f1.js",
    "revision": "2f6f9f339e11309439b51623b76f9d56"
  },
  {
    "url": "assets/js/16.bcd27ce7.js",
    "revision": "f4fbb00044310d45826f970cf0971d3a"
  },
  {
    "url": "assets/js/17.7cb7eefa.js",
    "revision": "4535d50477060b7a414199f541a4363c"
  },
  {
    "url": "assets/js/18.360eb27c.js",
    "revision": "26a968bb119dadd00d3cac2c63bb520d"
  },
  {
    "url": "assets/js/19.15a49fa6.js",
    "revision": "a133cae4194005be2306624335501c60"
  },
  {
    "url": "assets/js/2.d9868d83.js",
    "revision": "f890e145137b4ae7de3d40b620a4c1cc"
  },
  {
    "url": "assets/js/20.c8b044be.js",
    "revision": "00b5847a80bfdad887342bf821d72094"
  },
  {
    "url": "assets/js/21.8fdf0606.js",
    "revision": "2d3c19f881b8315d712f4fc517a59016"
  },
  {
    "url": "assets/js/22.a971e6ba.js",
    "revision": "763e4847ae0eb201e24345458c92edf7"
  },
  {
    "url": "assets/js/23.fb462429.js",
    "revision": "bdf2acf0f4d52e707a5a61e3ce9ea23e"
  },
  {
    "url": "assets/js/3.b1b0f3a8.js",
    "revision": "b31b941fb52d7fc9986db4a490fdedba"
  },
  {
    "url": "assets/js/4.d4a6abc0.js",
    "revision": "da7e5d59cccf39aaf82056d5854324f2"
  },
  {
    "url": "assets/js/5.8f5e346b.js",
    "revision": "7bb5f3dc66c87cc4c9b896421a4960aa"
  },
  {
    "url": "assets/js/6.7e4c57cb.js",
    "revision": "d6b8f16e7c027dba641db92dc3eb557d"
  },
  {
    "url": "assets/js/7.34df8046.js",
    "revision": "38985edd4d8e826558a215e255463deb"
  },
  {
    "url": "assets/js/8.823fd0ac.js",
    "revision": "57ab564f22c131dbd49cfd001ca23777"
  },
  {
    "url": "assets/js/9.ec040553.js",
    "revision": "c5a9d363bfac33bcd3ad83e85f2e2c9c"
  },
  {
    "url": "assets/js/app.0cb9bcd2.js",
    "revision": "2e3eff8d9b2b72a19523ab351639a5a4"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "44553ea41d2a9c1a8b7e0995ce6ed926"
  },
  {
    "url": "Blog/index.html",
    "revision": "b1e14657fd9fcd928529ba58aa58da1a"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "4642deba7e8f9dfe621fdbb053ab53b7"
  },
  {
    "url": "Blog/JavaScript/EventLoop.html",
    "revision": "76c8291ae29edc4567aa7becd17be633"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "ac66bb387e4348dd4257dab1b1ddc332"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "ee6a489a1e56dc9f55498aeaf418af3f"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "635663115036b79c16811b3243318499"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "e953f95292a1a3ff58311fb6d3598fe1"
  },
  {
    "url": "Blog/Node/hapi.html",
    "revision": "2fe189c8e358eb3c41855b1e1eb1409f"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "951685abe2f7d789f172b38a92fa46a2"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "9cab90ccf495b4bd3afeb39b73401d51"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "251f511ac6db9571f33723ba2138d84a"
  },
  {
    "url": "Blog/Other/debugTools.html",
    "revision": "b7f02c64819a28e4797fadfcb72c8764"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "15ed49b8a6621ef8085431edb2d4665d"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "7d0c4764a46e39e9b184e98f8f35cb0e"
  },
  {
    "url": "Blog/Other/tools.html",
    "revision": "ced2ae7a2f2f545082a2c3e842f9129e"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "0b2d809f93f777bceeb7a608ae1bd0e9"
  },
  {
    "url": "Blog/VUE/workRelated.html",
    "revision": "a9470b3ad021e9d4f25ae9d94fd1ad98"
  },
  {
    "url": "Blog/WebpackFile/webpack.html",
    "revision": "26e456457626e3c8ee655d53ea868723"
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
    "url": "index.html",
    "revision": "1b1fdf86baa59830f0dabbce83c25107"
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
