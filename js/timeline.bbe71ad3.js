(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["timeline"],{"5e47":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,u){var a=Object(c["resolveComponent"])("CreatePost"),l=Object(c["resolveComponent"])("a-skeleton"),b=Object(c["resolveComponent"])("sdCards"),i=Object(c["resolveComponent"])("AllPosts"),d=Object(c["resolveComponent"])("a-col"),s=Object(c["resolveComponent"])("RightAside"),f=Object(c["resolveComponent"])("a-row");return Object(c["openBlock"])(),Object(c["createBlock"])(f,{gutter:25},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{md:16},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Suspense"],null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a)]})),fallback:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{headless:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{active:""})]})),_:1})]})),_:1})),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.posts,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(c["Suspense"],{key:t+1},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,Object(c["normalizeProps"])(Object(c["guardReactiveProps"])(e)),null,16)]})),fallback:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{headless:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{active:""})]})),_:1})]})),_:2},1024)})),128))]})),_:1}),Object(c["createVNode"])(d,{md:8},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Suspense"],null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s)]})),fallback:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{headless:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{active:"",paragraph:{rows:10}})]})),_:1})]})),_:1}))]})),_:1})]})),_:1})}n("d3b7"),n("3ca3"),n("ddb0");var r=n("5502"),u=Object(c["defineAsyncComponent"])((function(){return Promise.all([n.e("chunk-5aeac7d4"),n.e("chunk-2d0af8bb"),n.e("chunk-4a5f46a6"),n.e("chunk-2d22c6cf"),n.e("chunk-50f8d321")]).then(n.bind(null,"d1b9"))})),a=Object(c["defineAsyncComponent"])((function(){return n.e("chunk-1482f0d2").then(n.bind(null,"8c58"))})),l=Object(c["defineAsyncComponent"])((function(){return Promise.all([n.e("chunk-5aeac7d4"),n.e("chunk-2d0af8bb"),n.e("chunk-4a5f46a6"),n.e("chunk-2d22c6cf"),n.e("chunk-50f8d321")]).then(n.bind(null,"7f99"))})),b={name:"Timeline",components:{RightAside:u,CreatePost:a,AllPosts:l},setup:function(){var e=Object(r["c"])(),t=e.state,n=Object(c["computed"])((function(){return t.profile.posts.sort((function(e,t){return t.time-e.time}))}));return{posts:n}}},i=b,d=n("d959"),s=n.n(d);const f=s()(i,[["render",o]]);t["default"]=f}}]);
//# sourceMappingURL=timeline.bbe71ad3.js.map