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
    "revision": "3d5771c3301d3158c76989b48cc096c6"
  },
  {
    "url": "assets/css/0.styles.0e4fdce5.css",
    "revision": "0d451a7163ae4238f7d82fedbd47443d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6230fe5.js",
    "revision": "704cd33ad2459ab218324b3df05addb0"
  },
  {
    "url": "assets/js/11.a8da0024.js",
    "revision": "9b536a1905f4459a6efb2c67f876767b"
  },
  {
    "url": "assets/js/12.330e0f83.js",
    "revision": "601d620c63072494ca17471e84cd08a6"
  },
  {
    "url": "assets/js/13.3e4e25c5.js",
    "revision": "8e91298112a342154dc0c77bbeb713cf"
  },
  {
    "url": "assets/js/14.f5e46c9e.js",
    "revision": "9d605ca841cdd10ac6c86b83efa0c869"
  },
  {
    "url": "assets/js/15.21be2681.js",
    "revision": "9ef935b5c58312e7c154cee4f4bb5321"
  },
  {
    "url": "assets/js/16.5ec3ea9d.js",
    "revision": "7392361d400bc7f9de1d12b5f0894a2d"
  },
  {
    "url": "assets/js/17.504682f1.js",
    "revision": "63b8b0276f108a14afc434f6d35daca4"
  },
  {
    "url": "assets/js/18.6c486db0.js",
    "revision": "6d75d7f55643fe9bc8960cf9777e9e08"
  },
  {
    "url": "assets/js/19.a55b746b.js",
    "revision": "492a762f2c7fafa15ef20fbe126e04ef"
  },
  {
    "url": "assets/js/2.979492e9.js",
    "revision": "e4d19dd4f140743c27e79f088e6f66ab"
  },
  {
    "url": "assets/js/20.5493beb9.js",
    "revision": "d79bc18161be02ee2141db5ca5630817"
  },
  {
    "url": "assets/js/3.5a0cafe9.js",
    "revision": "ed86edbc248fbd3ba8a8593da5006a65"
  },
  {
    "url": "assets/js/4.d05fc0ac.js",
    "revision": "31935c8e6642b81b0f8b9ffcd75d3885"
  },
  {
    "url": "assets/js/5.1533e6fe.js",
    "revision": "d09b356cc831dea55fbaaf724bdd0254"
  },
  {
    "url": "assets/js/6.b547afbb.js",
    "revision": "84ec9a312c1837bde581efcd136f2bbb"
  },
  {
    "url": "assets/js/7.b06df096.js",
    "revision": "9880d68f0f7d887f2b4c88b2bd856242"
  },
  {
    "url": "assets/js/8.726bd949.js",
    "revision": "226cc8c7e533431836aee5c183896c59"
  },
  {
    "url": "assets/js/9.3ee49416.js",
    "revision": "405ef097ea6357a22f572ddc4cd93700"
  },
  {
    "url": "assets/js/app.6759240b.js",
    "revision": "42c51576e9736c35bf003c01dccc50ed"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "5199bda798202163c5e2c677ec07473d"
  },
  {
    "url": "Blog/index.html",
    "revision": "e97318db3fe5fa377cfd60846d269d2a"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "19002f95e31dbe2e57a524ea35156d2f"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "a1e9b965dc5ffa2d18d22829d9a49aef"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "43ba5066711d1ac3386f62124d387dc8"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "851749556f2e7157f7192a13592acd77"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "802de93a0b8d3e25a1f2926064f9e2c5"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "04c429bd343cf2eda5f2880e08e942ec"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "4237ff7b924d91bfd290408e40f3b9ed"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "570b80ce0a09c26479f2617b29ee2440"
  },
  {
    "url": "Blog/Other/debugTools.html",
    "revision": "9f452e1579655eb31c1633dce842b36f"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "7d4d1a349df121252d15d6d5e5432d72"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "3653c0b69151aa53eb4f40874b589ea8"
  },
  {
    "url": "Blog/Other/tools.html",
    "revision": "aec1aa937c76e31e34108575fa10f09b"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "d31dd3006eebfb1783b5a3507a2b4aa4"
  },
  {
    "url": "Blog/VUE/workRelated.html",
    "revision": "0e96597629119a7eb0f98fdb2b997efc"
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
    "url": "img/whistle.png",
    "revision": "677116c580f66b8c9439e2bcf44fbcbb"
  },
  {
    "url": "img/xg.png",
    "revision": "b4b356d741b9b432c00f37fcd27f33e8"
  },
  {
    "url": "index.html",
    "revision": "7eb6ce2e44c43eaeffa132e465349563"
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
