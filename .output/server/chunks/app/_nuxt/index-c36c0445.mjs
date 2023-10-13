import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1, a as _imports_0, b as _imports_1, c as _imports_2 } from './skylt-c6a41d52.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import 'destr';
import 'ohash';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-stone-900 lg:p-16" }, _attrs))} data-v-0cdae443><img class="mb-5" width="400"${ssrRenderAttr("src", _imports_0$1)} data-v-0cdae443><h1 class="text-white font-bold text-4xl" data-v-0cdae443> Raku Design and Audio \u697D </h1><p class="text-white font-bold text-2xl" data-v-0cdae443><br data-v-0cdae443> Raku, in kanji \u697D, means in Jpanese music, enjoy, easy, having fun. <br data-v-0cdae443> \u300C\u97F3\u697D\u3001 \u697D\u3057\u3080\u3001\u697D\u306A\u3001\u697D\u3057\u3044\u300D\u3068\u3044\u3046\u610F\u5473\u3067\u3059\u3002<br data-v-0cdae443><br data-v-0cdae443> Here I collect all my wodden designs and things I make for audo, such as headphones and music players. </p><br data-v-0cdae443><div class="text-white text-2xl" data-v-0cdae443> Malin Yamato \u5927\u548C\u6E90\u6C0F \u307E\u308A\u3093 </div><div class="text-white text-2xl mb-5" data-v-0cdae443><span data-v-0cdae443>Email: </span> <a href="mailto:yamato@malin.jp" data-v-0cdae443>yamato@malin.jp</a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0cdae443"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-us" }, _attrs))} data-v-1fa3d97d><div class="row p-4" data-v-1fa3d97d><div class="col-12 col-sm-10" data-v-1fa3d97d><h1 class="text-3xl font-bold" data-v-1fa3d97d>Raku Audio <br data-v-1fa3d97d> -- headphones </h1><p class="text-2xl" data-v-1fa3d97d> Raku Audio designs headphones by tunings drivers, calibrate pads as well as well as crafting sutible caps and headbawnds for optinal sound experiece as well as look. </p></div><div class="col-12" data-v-1fa3d97d><img class="float-lg-right"${ssrRenderAttr("src", _imports_0)} alt="home-img" title="home-img" loading="lazy" data-v-1fa3d97d></div><div class="col-12" data-v-1fa3d97d><img class="float-lg-right"${ssrRenderAttr("src", _imports_1)} alt="home-img" title="home-img" loading="lazy" data-v-1fa3d97d></div></div><div class="row p-4" data-v-1fa3d97d><div class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12" style="${ssrRenderStyle({ "margin-right": "-8%", "z-index": "1" })}" data-v-1fa3d97d><h1 class="text-3xl" data-v-1fa3d97d>Raku Desing<br data-v-1fa3d97d> -- Japnaese wood carpentry </h1><p class="text-2x1" data-v-1fa3d97d> Wood crafts such as boards, signs, boxes, wodden tools mostly in Japanese style. </p></div><div class="col-6" data-v-1fa3d97d><img${ssrRenderAttr("src", _imports_2)} alt="home-img-2" title="home-img-2" loading="lazy" data-v-1fa3d97d></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/AboutUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1fa3d97d"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_HomeAboutUs = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeAboutUs, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c36c0445.mjs.map
