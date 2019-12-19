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
    "revision": "d57cf97c3b66226dc9e634d1500c1bf3"
  },
  {
    "url": "assets/css/1.styles.4a58ac69.css",
    "revision": "1c877f0a6de38b447794ec58ef865715"
  },
  {
    "url": "assets/css/2.styles.03a33d20.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a6512a1f.css",
    "revision": "18c1913aef7772f62aac1e8650232835"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4a58ac69.js",
    "revision": "b9e910c108a0988b7b48e1a93eae3d8a"
  },
  {
    "url": "assets/js/10.b1661e2d.js",
    "revision": "5974c5d2b6d4380850de7949f58972dc"
  },
  {
    "url": "assets/js/11.df6c98bc.js",
    "revision": "f57716f8b59bc5c315991699ed540cf0"
  },
  {
    "url": "assets/js/12.a27d1569.js",
    "revision": "662b35fb967545013b861ddef38eb7ee"
  },
  {
    "url": "assets/js/13.d1a9572c.js",
    "revision": "65ffa238955576d2603d9932ccab5fca"
  },
  {
    "url": "assets/js/14.f20198c2.js",
    "revision": "57e210b43cc0f7e5c7d32111f7437e69"
  },
  {
    "url": "assets/js/2.03a33d20.js",
    "revision": "637eebfb2d652fe074e54e32accd495d"
  },
  {
    "url": "assets/js/3.cd194c0a.js",
    "revision": "b463ff91ca7082c3b4af6401e6c9ccf5"
  },
  {
    "url": "assets/js/4.26d705b4.js",
    "revision": "214882b6b13da8797356ebe12a32db50"
  },
  {
    "url": "assets/js/5.21d1500a.js",
    "revision": "6fb7ce7aef2952618eb9d45edcb0c209"
  },
  {
    "url": "assets/js/6.33fa77c2.js",
    "revision": "9e9fb9d8e0da687b6eed1aa73e511b14"
  },
  {
    "url": "assets/js/7.5511e55d.js",
    "revision": "b85f931003e96c2ae6eba0b1de2cdd2e"
  },
  {
    "url": "assets/js/8.e89701c2.js",
    "revision": "0b75f2f48ed12e8e3036e311bb7a5129"
  },
  {
    "url": "assets/js/9.00e69301.js",
    "revision": "05064275ceac94b1c5e014ae5300e37c"
  },
  {
    "url": "assets/js/app.a6512a1f.js",
    "revision": "1d32bc4c8e32e1198f7c78d2be1e618a"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f9a372b16c1d05a2d63fb80c5a9d9fed"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "project/index.html",
    "revision": "68222b7ca12ead2cdcb02e50bb74f56d"
  },
  {
    "url": "specification/auth.html",
    "revision": "caeae03f59e466b6b6ecd1cedf562153"
  },
  {
    "url": "specification/index.html",
    "revision": "737ee35ae4a46f1323efa973146956e4"
  },
  {
    "url": "specification/manualtoken.html",
    "revision": "3fb4b51bcaea40cd13a4ac397a326c75"
  },
  {
    "url": "specification/menu.html",
    "revision": "fdd9d39af6ecd71665976d9ca97b4bf9"
  },
  {
    "url": "specification/monitor.html",
    "revision": "083cdd31552cfe4698765874bccc5a5d"
  },
  {
    "url": "specification/others.html",
    "revision": "acc3c97a19bade2c0265eada1f67491a"
  },
  {
    "url": "specification/protect.html",
    "revision": "5b66ccd3c7f8dafcc3b55a332cc5bdec"
  },
  {
    "url": "specification/reservation.html",
    "revision": "ff027522fa9e711cd22e99c414b52881"
  },
  {
    "url": "specification/seatoperate.html",
    "revision": "909ab8925afb783a0c6388f3da360b7a"
  },
  {
    "url": "specification/settings.html",
    "revision": "df3de12716fc2140abf0e4b87054b5a2"
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
