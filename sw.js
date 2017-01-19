/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/singlethread-blog/404.html","2a91a6c7385c0bb1035ae5239b44bbe0"],["/singlethread-blog/about/index.html","2dcf4c7a79886c02bfc9e2c1a2273016"],["/singlethread-blog/blog_page.html","ac3fe11e86d23999fafd428f16a84799"],["/singlethread-blog/bower.json","deaeb647c90c90677394e29c78d9a5cf"],["/singlethread-blog/company/index.html","e73edfba883c89efad74e69e435dab0a"],["/singlethread-blog/contact.html","715e8504c6505b3aba76300501b11a1f"],["/singlethread-blog/css/app.css","44a5c546343b2b950b99b6062cb63399"],["/singlethread-blog/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/singlethread-blog/css/grabbing.png","d817e1dba5bd5d891d0504bf1715807b"],["/singlethread-blog/css/main.css","d60b9973a0cda0723bead668829009be"],["/singlethread-blog/css/nav_style.css","ab1638924737ba18e862930b85e2e9d2"],["/singlethread-blog/css/new-age.css","47da08f29c5fac540ac67e1239865d63"],["/singlethread-blog/css/new-age.min.css","07311b8a0211bc7d6f1193fd3bf10c48"],["/singlethread-blog/css/owl.carousel.css","0371b5a2d50e985b09b7d337edc0dc9f"],["/singlethread-blog/css/owl.theme.css","f23cf727e4fcca9a5470658da5e755c9"],["/singlethread-blog/css/reset.css","c541831716c4baf86328e6677fbaae24"],["/singlethread-blog/images/13.png","bdca821b84171d36d4ad692ad9c11742"],["/singlethread-blog/images/CDK 2.png","fc748e42deeb4ed63b37b5564d034e35"],["/singlethread-blog/images/CDK.png","fc748e42deeb4ed63b37b5564d034e35"],["/singlethread-blog/images/Dealertrack.png","0a7eb1d26a252548b1c299f0031b4168"],["/singlethread-blog/images/Edmunds_grey_web.png","005b449410a7f43741fec3aeac375438"],["/singlethread-blog/images/apc.png","deb00345c17e48df89fd6b5bbbdd87b4"],["/singlethread-blog/images/automatepnglogo.png","fa9f98632be452fad4d970bd42945d86"],["/singlethread-blog/images/automatepnglogo2.png","203ec996d4d6c11772edb4fd8e0b732c"],["/singlethread-blog/images/bg-cta.jpg","36ddbb2de498313fdacd1b2a64eb8363"],["/singlethread-blog/images/black.png","0ce8405065677df656a5e9c20b1e721a"],["/singlethread-blog/images/blog_blur.png","1a5e32696e97a8054f396ecb8db71b3e"],["/singlethread-blog/images/chat.png","5f517ebcc90a252c3c73d377dedc178c"],["/singlethread-blog/images/deepblue.png","e0e7646943832d859d1bef9329f68233"],["/singlethread-blog/images/demo-screen-1.jpg","82bcf3c843c811de878424e8d8307250"],["/singlethread-blog/images/iphone.png","59de5731f67f6aae63c283e7aec02781"],["/singlethread-blog/images/iphone_content.jpg","657a8d459464f033cf0e12094a9f25ba"],["/singlethread-blog/images/land.png","ffd7280f3059490b526a4f9d10b5321c"],["/singlethread-blog/images/long_trans_white.png","c5db914a3b941add908acfc3c4863fce"],["/singlethread-blog/images/lt_blue.png","b8fbdc8bda86f71fc0bf023e7e6defb4"],["/singlethread-blog/images/midblue.png","271abe22bcc535fed7ab2a2860bdc199"],["/singlethread-blog/images/ornage.png","89694255412a709122e800eb8415020f"],["/singlethread-blog/images/purple.png","6ead5dabe3daf4d909bd9f804ef00dd7"],["/singlethread-blog/images/reyrey.png","2f69631cd899eedc894e807b2fadc3c8"],["/singlethread-blog/images/rr.png","fbbd85d6ed18701e08e9265af01a8e1a"],["/singlethread-blog/images/s_logo_trans_blue.png","a91d4b23a7c19450339b594b5b5dd562"],["/singlethread-blog/images/s_logo_trans_white.png","93d40453df9a3d50b73a8e350d9a6a4b"],["/singlethread-blog/images/s_small.png","3d358d95efa70687b3cf0a6714a624b0"],["/singlethread-blog/images/singlethread-small.png","78e14999d44d24e2446c13d733d9f7b2"],["/singlethread-blog/images/singlethread.png","9522cfa7fd6ea1952b78145f5f18f8f5"],["/singlethread-blog/images/st_long_trans.png","7fd6dceff637866c2f92a0d21a090b3a"],["/singlethread-blog/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/singlethread-blog/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/singlethread-blog/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/singlethread-blog/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/singlethread-blog/images/trustcommerce.png","fad749c73ad9a2745902b648aab48f07"],["/singlethread-blog/index.html","f927a644147a7f4c9797a229d4001480"],["/singlethread-blog/inspect/index.html","87700e9a468d04cfc97f900831bf7b9e"],["/singlethread-blog/jekyll_index/index.html","e8f9773afad0a03b4428d0342ef155f2"],["/singlethread-blog/landing.html","f842d8b864a118d5441038c1c14aef45"],["/singlethread-blog/manifest.json","4a77455c80121df6325d12e5c295ee3f"],["/singlethread-blog/monitor/index.html","c7df53dd9b4e7c475e19fff151cf9b28"],["/singlethread-blog/partners.html","2bf2086d9af38b886be0b065911559cf"],["/singlethread-blog/post.html","9bac0eddcffee554e0133679a739a7af"],["/singlethread-blog/press/2016/03/24/connects-dealership-mechanics-with-customers/index.html","527a89cac5e329d8bf019f911e2388f4"],["/singlethread-blog/press/2016/04/11/texting-system-reduces-dissatisfaction/index.html","1c89bc013faa9bc9c78f5baead3c4195"],["/singlethread-blog/press_release_actual.html","1574c364f1b278d71b81f83dbb477a18"],["/singlethread-blog/resources/index.html","c99bf02755e1c37b143dc11afd4fc258"],["/singlethread-blog/scripts/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/singlethread-blog/scripts/jquery-3.0.0.min.js","d0212568ce69457081dacf84e327fa5c"],["/singlethread-blog/scripts/jquery.easing.min.js","9cda9e740bbf260a190f4041132b5105"],["/singlethread-blog/scripts/main.js","3a6579a24b56553dec9fbc54db55a9ba"],["/singlethread-blog/scripts/main.min.js","585949fbfe535ccc0444aea7bfe771bf"],["/singlethread-blog/scripts/modernizr-custom.js","7f1ce9bf3b6cace1b0c77d0c76e2847e"],["/singlethread-blog/scripts/new-age.js","26c18b76f017fe1a2e07def9fb30b88d"],["/singlethread-blog/scripts/new-age.min.js","5b7a19555647362389887fa44eec2240"],["/singlethread-blog/scripts/owl.carousel.js","a5f96c62d75be144282ef6cc429a6259"],["/singlethread-blog/scripts/video.js","cc906e6bbf4d92667342aed9ea1e5192"],["/singlethread-blog/slide_front.html","2ca9155eb9aff0fc97424f742393d809"],["/singlethread-blog/teamwork/index.html","3925ab95d80d67176052233b2c4845e1"],["/singlethread-blog/text/index.html","a76d77b8b604160b3f80e0deaf144a62"],["/singlethread-blog/train.html","74b70386e03ff575d59808b931cd7237"],["/singlethread-blog/vendor/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["/singlethread-blog/vendor/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/singlethread-blog/vendor/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/singlethread-blog/vendor/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/singlethread-blog/vendor/device-mockups/apple_watch/edition/gold.png","475aa186b0fa658733e4be816be98125"],["/singlethread-blog/vendor/device-mockups/apple_watch/edition/rose.png","08d7ae4336eef6739cd348f33981c1e5"],["/singlethread-blog/vendor/device-mockups/apple_watch/sport/black.png","82bcd5d8b63ac2929e0bac64288759fa"],["/singlethread-blog/vendor/device-mockups/apple_watch/sport/blue.png","0566eeeede7a14faa9615353c0d19a1f"],["/singlethread-blog/vendor/device-mockups/apple_watch/sport/green.png","1f839749b3bdce9ffc200f95b706ce82"],["/singlethread-blog/vendor/device-mockups/apple_watch/sport/red.png","1f72ad66f36f92490cb42e3f25f9c256"],["/singlethread-blog/vendor/device-mockups/apple_watch/sport/white.png","54e5f73585fcc9f5542309bfa2ebaea7"],["/singlethread-blog/vendor/device-mockups/apple_watch/watch/metal.png","f95fe799eae95f04063b3afcbe26746c"],["/singlethread-blog/vendor/device-mockups/apple_watch/watch/steel.png","38f229685a7c8dd8f20e1b671e59b676"],["/singlethread-blog/vendor/device-mockups/device-mockups.css","e86034f09471a26e426ecdd71dd63a37"],["/singlethread-blog/vendor/device-mockups/device-mockups.min.css","32aaa2b8e71c171f3d424db8b7945492"],["/singlethread-blog/vendor/device-mockups/device-mockups2.css","740b41b1a79b375b124a27fe064e643a"],["/singlethread-blog/vendor/device-mockups/device-mockups2.min.css","693d8281af09371f5b90f81e5284e860"],["/singlethread-blog/vendor/device-mockups/galaxy_s3/s3_land_black.png","6b2944e5a402051f87606434560c7b38"],["/singlethread-blog/vendor/device-mockups/galaxy_s3/s3_land_white.png","0effbb6a3ffa421ab3b6da2e69fb3b0e"],["/singlethread-blog/vendor/device-mockups/galaxy_s3/s3_port_black.png","fda6e17702dbe65c69ca219d9d2bb06a"],["/singlethread-blog/vendor/device-mockups/galaxy_s3/s3_port_white.png","54ef3f9543f5e6134bee56473edec3a4"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_land_black.png","03b51e065c5c626999376722f5bfd180"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_land_gold.png","e04e0ee21e0383584e1fccca32191671"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_land_white.png","0525c34cef3283eabc3167338a0797d4"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_port_black.png","0de8e1a8665635a0837688589c6f4914"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_port_gold.png","08986eb48f2fd4e2951d0a3fd3c7b264"],["/singlethread-blog/vendor/device-mockups/galaxy_s5/galaxy_s5_port_white.png","5910135fbce4a7641a5f1ff1400b9d7c"],["/singlethread-blog/vendor/device-mockups/galaxy_tab4/galaxy_tab4_land_black.png","c10e360713bdd5a37ccc7084a4402857"],["/singlethread-blog/vendor/device-mockups/galaxy_tab4/galaxy_tab4_land_white.png","ba2ef5665e4e31ba27c939cc60589963"],["/singlethread-blog/vendor/device-mockups/galaxy_tab4_small/galaxy_tab4_black_small.png","e935b0ef8f579d9884da19d65369cc1c"],["/singlethread-blog/vendor/device-mockups/galaxy_tab4_small/galaxy_tab4_white_small.png","563d47d13dc81443cb4a2a68803db2de"],["/singlethread-blog/vendor/device-mockups/imac/imac.png","b4111cf5c1d1896d1628f95e3bea7e48"],["/singlethread-blog/vendor/device-mockups/ipad/ipad_land_black.png","4bee821dc5c41d2188fd7061638404cc"],["/singlethread-blog/vendor/device-mockups/ipad/ipad_land_white.png","0fab794505472eb54294c45835ddd2bd"],["/singlethread-blog/vendor/device-mockups/ipad/ipad_port_black.png","76c5ba8820448f36ee9567acbf7e5ee5"],["/singlethread-blog/vendor/device-mockups/ipad/ipad_port_white.png","4b1ca238be67c690f5ec96505f6605da"],["/singlethread-blog/vendor/device-mockups/ipad_air/ipad_air_gray_land.png","49d7d7738efffe81e5465076ed255f29"],["/singlethread-blog/vendor/device-mockups/ipad_air/ipad_air_gray_port.png","3aab1adee35d0ad688992735a96a52c2"],["/singlethread-blog/vendor/device-mockups/ipad_air/ipad_air_silver_land.png","b7cbef7b31f10fb0ec94894ade316ee1"],["/singlethread-blog/vendor/device-mockups/ipad_air/ipad_air_silver_port.png","cc19f51ea28d907e545a6f57ecaa3830"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_gold_land.png","3d8f03daaeaca835b53aef996630a1eb"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_gold_port.png","18c7b36437e59d55e4c8c89898664b9c"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_gray_land.png","43cbe56f89906ad1095dcb411f54ea79"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_gray_port.png","070f84dc1bf0ceb5b09710a62b0c044c"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_silver_land.png","eeb81c4553931271a6fcddc76aa8e2a5"],["/singlethread-blog/vendor/device-mockups/ipad_air_2/ipad_air_2_silver_port.png","cb6895ef16c1ce0b4f4d9d0ee1e3f496"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_land_black.png","94c538da19ff004085dfc3093a88e748"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_land_gold.png","b3faae9e1082811badead6cfd98db62f"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_land_silver.png","9fb9a4146751e9b044ce14dad13588c9"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_port_black.png","b6239c60fcca3b51b0f3b2d8e11f1af9"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_port_gold.png","f0e7b1cf8ef8f58d07f11e5e96c4a03a"],["/singlethread-blog/vendor/device-mockups/ipad_pro/ipad_pro_port_silver.png","c1ffcacd23f696e90b004e4a0c54349b"],["/singlethread-blog/vendor/device-mockups/iphone5/iphone5_land_black.png","07bbd15ff3c2a1859feb82afb719e2cf"],["/singlethread-blog/vendor/device-mockups/iphone5/iphone5_land_white.png","5d4198bc85fcb3c350950f0a69ec9907"],["/singlethread-blog/vendor/device-mockups/iphone5/iphone5_port_black.png","81078e2cf3b4fe341431f4d2f6675eed"],["/singlethread-blog/vendor/device-mockups/iphone5/iphone5_port_white.png","3347526fc4a1fdedcabe680c64c0e799"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_land_black.png","6ca71745c1ce3e4b0ca33740afe159fa"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_land_gold.png","633e2b154c400e9a9cfcc568ddaafdb0"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_land_white.png","aa01efc5702705ce5a695da66aed8faf"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_port_black.png","ae61d78586a588605a71f0f58f9e2760"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_port_gold.png","673d810a0ec7218572346bf8bd3b8d90"],["/singlethread-blog/vendor/device-mockups/iphone_6/iphone_6_port_white.png","d4956eac0ce11c5df72ab79fb58815b9"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_black_land.png","ae1f5e7ab3d5a28ac3a858de6764f7df"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_black_port.png","d96cfb83c4d774edd86e0e06b47a974b"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_gold_land.png","b8846e1c45561164e04a43abc5a5c75a"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_gold_port.png","0aec69baa3d9026b3dd7dd88e054f35e"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_white_land.png","3b0218f7b660c875ec8440fd9279df00"],["/singlethread-blog/vendor/device-mockups/iphone_6_plus/iphone_6_plus_white_port.png","d6c50fbd2ce470c075e863ba6961557a"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_land_black.png","f17bc857d0dcea6fe60775161c7bbd5e"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_land_gold.png","8d33a7c1f6305b41c56523d5bf7e2176"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_land_rose.png","1c34c98f53b119c958988496a60a03c3"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_land_white.png","6c71f01ff2b3a48c38a70a43ef9b3914"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_port_black.png","e392031a42566e89724cc347e2eb944e"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_port_gold.png","b49805dee4cc2d7b8c92d3632ba8bcb9"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_port_rose.png","664550ad8bff9d496e4786641e3033d5"],["/singlethread-blog/vendor/device-mockups/iphone_se/iphone_se_port_white.png","f947505c6fa2adb20690a2474736ab0a"],["/singlethread-blog/vendor/device-mockups/lumia920/lumia920_land.png","cd3a76c6e24267e669f6bc5ad2ff9f6e"],["/singlethread-blog/vendor/device-mockups/lumia920/lumia920_port.png","accc02ae3e69c7a2679d43b1979811a7"],["/singlethread-blog/vendor/device-mockups/lumia_930/lumia_930_dark_land.png","704df71e173e043e3cd0608450689dcd"],["/singlethread-blog/vendor/device-mockups/lumia_930/lumia_930_dark_port.png","80b7c311bb8a707cfbd4758b4f9c2881"],["/singlethread-blog/vendor/device-mockups/lumia_930/lumia_930_light_land.png","eac76c7f5e824c15992b68cc8cea5f89"],["/singlethread-blog/vendor/device-mockups/lumia_930/lumia_930_light_port.png","46147c71bf9266865a55d649afbbf282"],["/singlethread-blog/vendor/device-mockups/macbook/macbook.png","e2d887e445fd459e71304f3caae7610f"],["/singlethread-blog/vendor/device-mockups/macbook_2015/gold.png","7f10264e0f100ddffd8bbdd8ac281fef"],["/singlethread-blog/vendor/device-mockups/macbook_2015/grey.png","f33471e2767747a3863115d7b8b980b8"],["/singlethread-blog/vendor/device-mockups/macbook_2015/silver.png","845604f7ac5c5d44155d61484944ca07"],["/singlethread-blog/vendor/device-mockups/nexus7/nexus7_land.png","9f23a17a86aa6edab138cb30f6beebf0"],["/singlethread-blog/vendor/device-mockups/nexus7/nexus7_port.png","20bfe0b646677b54b0d7af8921aee885"],["/singlethread-blog/vendor/device-mockups/nexus_6/nexus_6_land.png","b6312dab681f1143c981179d2fdbda32"],["/singlethread-blog/vendor/device-mockups/nexus_6/nexus_6_port.png","97d4cc8344e32d79c816e6858422c538"],["/singlethread-blog/vendor/device-mockups/samsung_tv/samsung_tv.png","4197172869623c61e72b07ff19e98c2f"],["/singlethread-blog/vendor/device-mockups/surface/surface.png","d82b650bd406b7a63800715d2e068f62"],["/singlethread-blog/vendor/font-awesome/css/font-awesome.css","b652e3b759188ceaf79182f2fe72ea64"],["/singlethread-blog/vendor/font-awesome/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/singlethread-blog/vendor/jquery/jquery.js","fb2d334dabf4902825df4fe6c2298b4b"],["/singlethread-blog/vendor/jquery/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/singlethread-blog/vendor/simple-line-icons/css/simple-line-icons.css","9f937a4d39eecde86b1ac6816098c9cb"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







