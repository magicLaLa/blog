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
    "revision": "11e8f7e787dfb79f0d9b91de0c740721"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.40eaad40.css",
    "revision": "7c66a3fea978afe61d3244bd23a7734a"
  },
  {
    "url": "assets/css/styles.85772e33.css",
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
    "url": "assets/js/10.ebbf0031.js",
    "revision": "7c08f2d3643fd680b56eebb3b49720b8"
  },
  {
    "url": "assets/js/11.7efd4127.js",
    "revision": "70ba852f7193f5d51fc76df9d958166e"
  },
  {
    "url": "assets/js/12.47cb54d4.js",
    "revision": "8da9a34903c88a006d95c7d1f659708a"
  },
  {
    "url": "assets/js/2.40eaad40.js",
    "revision": "e9628c8b5895a43f5f443d169c44f3f8"
  },
  {
    "url": "assets/js/3.9bca9c70.js",
    "revision": "f96a63844ae950016371eeae410407f6"
  },
  {
    "url": "assets/js/4.e8357385.js",
    "revision": "7d9fc0c3977e6ab1c0309f07847c11cb"
  },
  {
    "url": "assets/js/5.4d5d1a16.js",
    "revision": "04f49c7ff7bc1fc5940d44166191ab70"
  },
  {
    "url": "assets/js/6.a3f2a505.js",
    "revision": "416f94d94142daaebe74da510e327ce1"
  },
  {
    "url": "assets/js/7.49ac7643.js",
    "revision": "b82d113f6314d52fb2102c8d2bd66953"
  },
  {
    "url": "assets/js/8.5cb904e9.js",
    "revision": "afd0294d100704e5df9699f3d9240ce2"
  },
  {
    "url": "assets/js/9.dc6dfa4b.js",
    "revision": "e3e7e1109a6ca05928f363d1877078b4"
  },
  {
    "url": "assets/js/app.85772e33.js",
    "revision": "10f37d4c4073f183d641206024092b0e"
  },
  {
    "url": "Blog/GIT/git的一些总结.html",
    "revision": "43462f9dfd2f55a874f50dfe28f045ae"
  },
  {
    "url": "Blog/index.html",
    "revision": "a3c75243fe4554cb3012b01be356688e"
  },
  {
    "url": "Blog/JavaScript/ES6的一些方法和技巧.html",
    "revision": "2ed05052a591bc076f80bf868d6c38be"
  },
  {
    "url": "Blog/JavaScript/JS随笔.html",
    "revision": "2f51e0b234f2c4ae30e10f5e54adc0f0"
  },
  {
    "url": "Blog/JavaScript/箭头函数this的指向.html",
    "revision": "e2fd653ff00ca10f1792f28d1e8038b4"
  },
  {
    "url": "Blog/MiniPrograms/MiniPrograms.html",
    "revision": "4f9c8e01382d2a29193eb7d4d54d0946"
  },
  {
    "url": "Blog/Node/node版本管理.html",
    "revision": "b55d17c3013cd9695e9a9101dfa1a319"
  },
  {
    "url": "Blog/Other/gulp.html",
    "revision": "1a9c9e31b19208a137149b2ff0d2ff7c"
  },
  {
    "url": "Blog/VUE/vue.html",
    "revision": "e14f067be7b4461238f0b9237739b089"
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
    "url": "img/fuwuqi.png",
    "revision": "095dd42d581b664ed6371c35922e19eb"
  },
  {
    "url": "img/generateSprites.png",
    "revision": "d7867d3c83b526481c524f74b0399cf5"
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
    "revision": "20ebef6472a5b2113cd2c01fde5b6517"
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
