// node_modules/.pnpm/vitepress@1.4.1_@algolia+client-search@4.24.0_@types+node@22.8.1_postcss@8.4.47_search-insigh_5pez7ynr4bwl74hxamrtje64ym/node_modules/vitepress/lib/vue-demi.mjs
var isVue2 = false;
var isVue3 = true;
var Vue2 = void 0;
function install() {
}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}

export {
  isVue2,
  isVue3,
  Vue2,
  install,
  set,
  del
};
/*! Bundled license information:

vitepress/lib/vue-demi.mjs:
  (**
   * vue-demi v0.14.7
   * Copyright (c) 2020-present, Anthony Fu
   * @license MIT
   *)
*/
//# sourceMappingURL=chunk-AICWHJM2.js.map
