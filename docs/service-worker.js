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
    "revision": "18e27e536c4ae159930eb671d8f64cb3"
  },
  {
    "url": "assets/css/0.styles.314daaca.css",
    "revision": "e89d1f36fcfd8368d572b7e4dd46f1ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d361a772.js",
    "revision": "88469fa9de142d64866cd05178d44c20"
  },
  {
    "url": "assets/js/11.4688826f.js",
    "revision": "a2b0046c78ae7eed84c20f903954a937"
  },
  {
    "url": "assets/js/12.1b6429fe.js",
    "revision": "1ffa9b678bdfe1e7352f9288705e3c8d"
  },
  {
    "url": "assets/js/13.4d7d7e7e.js",
    "revision": "0be334fbda520f7579e29ffded816941"
  },
  {
    "url": "assets/js/14.cbdad471.js",
    "revision": "a6336cf6fd9ec4d008f7d0b58e99818e"
  },
  {
    "url": "assets/js/15.37966116.js",
    "revision": "ddaf7764d9afa20eb807cfe0227a5a98"
  },
  {
    "url": "assets/js/16.186a739b.js",
    "revision": "28a62f4e73213eb08d7cd8ed1d3dc299"
  },
  {
    "url": "assets/js/17.c5130501.js",
    "revision": "074bfb68d354953b7dbc3cafdcfd25db"
  },
  {
    "url": "assets/js/18.1c0bfef1.js",
    "revision": "6a1fc3ebc560a7270f825c284210374c"
  },
  {
    "url": "assets/js/2.8f8328ee.js",
    "revision": "85d0fe7c8c3817ac01f55352c0d2625d"
  },
  {
    "url": "assets/js/3.091d7393.js",
    "revision": "6d5579b7fe0e4f8576e1be1b8e167f7b"
  },
  {
    "url": "assets/js/4.de6b9333.js",
    "revision": "d6230e6c74548009bd962e15a805758d"
  },
  {
    "url": "assets/js/5.c6855864.js",
    "revision": "6f64b12552c67384fec058adcca96560"
  },
  {
    "url": "assets/js/6.d67902d8.js",
    "revision": "c30b625a2604c0b48d820a9d12050ab3"
  },
  {
    "url": "assets/js/7.a3366621.js",
    "revision": "a474d3886d431fcb83a20fc7e4bcd66f"
  },
  {
    "url": "assets/js/8.a7b4e6b8.js",
    "revision": "4cfba6549fd702b6ff63883db26fd564"
  },
  {
    "url": "assets/js/9.361a0b4d.js",
    "revision": "d30b6d9eebc9bcea910855a1c2711d88"
  },
  {
    "url": "assets/js/app.59a56045.js",
    "revision": "d22391b5301db5b3fdd8a960aac902fc"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "76b5fa6e734e006832241451ab962c47"
  },
  {
    "url": "Blog/index.html",
    "revision": "fb4f68d78a08e771124c2812fcb20bde"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "16e5e9f29fc46da2a0bdce7fdf9e8e9c"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "99c929d27826697858680004ed0257cd"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "62d22fd4fd0f6dfe238b9030e2dfb05e"
  },
  {
    "url": "Blog/JavaScript/调试.html",
    "revision": "035bbd4e1ac4e1a717ddeb2678e048b5"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "861fd692f617e3cef5c96adbff7fbfae"
  },
  {
    "url": "Blog/Node/mySQL.html",
    "revision": "f32c841cf0041fa9854fdf8cc5305b5d"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "9296c998dc4b1fb3162839720c203d46"
  },
  {
    "url": "Blog/Node/npm.html",
    "revision": "db16cfbdf1ae2f998da03392187a82b1"
  },
  {
    "url": "Blog/Other/fidder.html",
    "revision": "5ee406cdac79092b3bdd95228e67e7b2"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "a9c437368455c77c28a82a6dda4132e7"
  },
  {
    "url": "Blog/Other/template.html",
    "revision": "c94abafecf83dc6c28dca90eed4a3b85"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "03db2a0cca8cb6cd6b7eb5dbaa7e4821"
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
    "url": "index.html",
    "revision": "e3d64c52c69e2156d192fe66cdfd1e39"
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
