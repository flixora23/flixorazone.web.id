/* =========================================
   ads.js - FLIXORA AD MANAGEMENT SYSTEM
   ========================================= */

// 1. Popunder
function loadPopunder() {
    document.write('<script src="https://pl30215101.effectivecpmnetwork.com/07/c1/aa/07c1aa78733ec992c7d9bf4efe2c84ae.js"><\/script>');
}

// 2. Social Bar
function loadSocialBar() {
    document.write('<script src="https://pl30215103.effectivecpmnetwork.com/6a/6f/23/6a6f23d5dcd6739f38137c8b5cfc2534.js"><\/script>');
}

// 3. Native Banner
function loadNativeAd() {
    document.write('<script async="async" data-cfasync="false" src="https://pl30215102.effectivecpmnetwork.com/b05d341d9030a9f560473452b90c9a7e/invoke.js"><\/script>');
    document.write('<div id="container-b05d341d9030a9f560473452b90c9a7e"></div>');
}

// 4. Custom Banner (Sistem otomatis untuk semua ukuran banner iframe)
function loadBannerAd(key, width, height) {
    document.write('<script>atOptions = { "key" : "' + key + '", "format" : "iframe", "height" : ' + height + ', "width" : ' + width + ', "params" : {} };<\/script>');
    document.write('<script src="https://www.highperformanceformat.com/' + key + '/invoke.js"><\/script>');
}
