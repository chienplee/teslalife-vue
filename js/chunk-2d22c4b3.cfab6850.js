(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c4b3"],{f32b:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n={class:"full-width-table"},c={class:"card-radio"},s=Object(o["createTextVNode"])("Today"),r=Object(o["createTextVNode"])("Week"),u=Object(o["createTextVNode"])("Month"),i=Object(o["createTextVNode"])("Year"),l=Object(o["createElementVNode"])("span",null,"2 years",-1),b=Object(o["createElementVNode"])("span",null,"3 years",-1),d=Object(o["createElementVNode"])("span",null,"4 years",-1),f={class:"traffic-table table-responsive"};function v(e,t,a,v,j,O){var p=Object(o["resolveComponent"])("a-radio-button"),w=Object(o["resolveComponent"])("a-radio-group"),V=Object(o["resolveComponent"])("router-link"),N=Object(o["resolveComponent"])("a-table"),g=Object(o["resolveComponent"])("sdCards"),k=Object(o["resolveComponent"])("CardGroup");return Object(o["openBlock"])(),Object(o["createBlock"])(k,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(g,{more:"",title:"Social Traffic Metrics"},{button:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(w,{onChange:e.socialTraffic,value:e.initValue,"onUpdate:value":t[0]||(t[0]=function(t){return e.initValue=t})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{value:"today"},{default:Object(o["withCtx"])((function(){return[s]})),_:1}),Object(o["createVNode"])(p,{value:"week"},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),Object(o["createVNode"])(p,{value:"month"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),Object(o["createVNode"])(p,{value:"year"},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]})),_:1},8,["onChange","value"])])]})),more:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{to:"#"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createVNode"])(V,{to:"#"},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(V,{to:"#"},{default:Object(o["withCtx"])((function(){return[d]})),_:1})]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",f,[Object(o["createVNode"])(N,{columns:e.trafficTableColumns,dataSource:e.trafficTableData,pagination:!1},null,8,["columns","dataSource"])])]})),_:1})])]})),_:1})}var j=a("5502"),O=a("68d7"),p=[{dataIndex:"network",key:"network"},{title:"Acquisition",dataIndex:"users",key:"users"},{dataIndex:"newUsers",key:"newUsers"},{dataIndex:"sessions",key:"sessions"},{title:"Behavior",dataIndex:"bounceRate",key:"bounceRate"},{dataIndex:"pages",key:"pages"},{dataIndex:"avg",key:"avg"}],w={name:"SocialTrafficMetrics",components:{CardGroup:O["CardGroup"]},setup:function(){var e=Object(j["c"])(),t=e.state,a=e.dispatch,n=Object(o["ref"])("today");Object(o["onMounted"])((function(){return a("socialTrafficGetData")}));var c=Object(o["computed"])((function(){return t.chartContent.socialTrafficData})),s=Object(o["computed"])((function(){return null!==c.value?[{key:"1",network:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Social Network")]),users:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Users")]),newUsers:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("New Users")]),sessions:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Sessions")]),bounceRate:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Bounce Rate")]),pages:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Pages / Session")]),avg:Object(o["createVNode"])("span",{class:"traffic-title"},[Object(o["createTextVNode"])("Avg. Session Duration")])},{key:"2",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Facebook")])]}}),users:c.value.facebook.users,newUsers:c.value.facebook.newUsers,sessions:c.value.facebook.session,bounceRate:c.value.facebook.bounceRate,pages:c.value.facebook.pagesSession,avg:c.value.facebook.avg},{key:"3",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Twitter")])]}}),users:c.value.twitter.users,newUsers:c.value.twitter.newUsers,sessions:c.value.twitter.session,bounceRate:c.value.twitter.bounceRate,pages:c.value.twitter.pagesSession,avg:c.value.twitter.avg},{key:"4",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Linkdin")])]}}),users:c.value.linkdin.users,newUsers:c.value.linkdin.newUsers,sessions:c.value.linkdin.session,bounceRate:c.value.linkdin.bounceRate,pages:c.value.linkdin.pagesSession,avg:c.value.linkdin.avg},{key:"5",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Youtube")])]}}),users:c.value.youtube.users,newUsers:c.value.youtube.newUsers,sessions:c.value.youtube.session,bounceRate:c.value.youtube.bounceRate,pages:c.value.youtube.pagesSession,avg:c.value.youtube.avg},{key:"6",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Pinterest")])]}}),users:c.value.pinterest.users,newUsers:c.value.pinterest.newUsers,sessions:c.value.pinterest.session,bounceRate:c.value.pinterest.bounceRate,pages:c.value.pinterest.pagesSession,avg:c.value.pinterest.avg},{key:"7",network:Object(o["createVNode"])(Object(o["resolveComponent"])("router-view"),{to:"#"},{default:function(){return[Object(o["createVNode"])("span",{class:"social-name"},[Object(o["createTextVNode"])("Google+")])]}}),users:c.value.google.users,newUsers:c.value.google.newUsers,sessions:c.value.google.session,bounceRate:c.value.google.bounceRate,pages:c.value.google.pagesSession,avg:c.value.google.avg}]:[]})),r=function(e){return e.preventDefault(),a("socialTrafficFilterData",e.target.value)};return{initValue:n,trafficTableColumns:p,trafficTableData:s,socialTraffic:r}}},V=w,N=a("d959"),g=a.n(N);const k=g()(V,[["render",v]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-2d22c4b3.cfab6850.js.map