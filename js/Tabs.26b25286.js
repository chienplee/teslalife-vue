(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Tabs"],{1866:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i={class:"page-header-actions"},u=Object(a["createTextVNode"])(" Add New ");function o(e,t,n,o,s,c){var r=Object(a["resolveComponent"])("sdCalendarButton"),l=Object(a["resolveComponent"])("sdExportButton"),m=Object(a["resolveComponent"])("sdShareButton"),d=Object(a["resolveComponent"])("sdFeatherIcons"),p=Object(a["resolveComponent"])("sdButton"),f=Object(a["resolveComponent"])("sdPageHeader"),b=Object(a["resolveComponent"])("Tabs"),g=Object(a["resolveComponent"])("a-col"),j=Object(a["resolveComponent"])("a-row"),q=Object(a["resolveComponent"])("Main");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(f,{title:"Tabs"},{buttons:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(r),Object(a["createVNode"])(l),Object(a["createVNode"])(m),Object(a["createVNode"])(p,{size:"small",type:"primary"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{type:"plus",size:"14"}),u]})),_:1})])]})),_:1}),Object(a["createVNode"])(q,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{gutter:25},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{md:12,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{data:o.data},null,8,["data"])]})),_:1}),Object(a["createVNode"])(g,{md:12,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{data:o.data,color:"default"},null,8,["data"])]})),_:1})]})),_:1}),Object(a["createVNode"])(j,{gutter:25},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{md:12,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{data:o.dataIcon,color:"#5F63F2"},null,8,["data"])]})),_:1}),Object(a["createVNode"])(g,{md:12,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{data:o.icon,color:"#5F63F2"},null,8,["data"])]})),_:1})]})),_:1}),Object(a["createVNode"])(j,{gutter:25},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{md:12,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{data:o.dataIcon,color:"#ffffff"},null,8,["data"])]})),_:1})]})),_:1})]})),_:1})])}var s=n("23d0"),c=n("1f24"),r=n("4987"),l={name:"Tab",components:{Main:s["Main"],Tabs:c["default"]},setup:function(){return{data:r["data"],dataIcon:r["dataIcon"],icon:r["icon"]}}},m=n("d959"),d=n.n(m);const p=d()(l,[["render",o]]);t["default"]=p},"1f24":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i={key:0},u={key:1};function o(e,t,n,o,s,c){var r=Object(a["resolveComponent"])("sdFeatherIcons"),l=Object(a["resolveComponent"])("Child"),m=Object(a["resolveComponent"])("TabBasic");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{activeKey:o.activeKey,"onUpdate:activeKey":t[0]||(t[0]=function(e){return o.activeKey=e}),color:n.color&&n.color,tabPosition:void 0!==n.tabPosition?n.tabPosition:"top"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.data,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:t+1,color:n.color&&n.color},{tab:Object(a["withCtx"])((function(){return[e.icon&&"undefined"!==e.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",i,[Object(a["createVNode"])(r,{type:e.icon,size:"18"},null,8,["type"]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.tabTitle),1)])):Object(a["createCommentVNode"])("",!0),e.icon?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",u,Object(a["toDisplayString"])(e.tabTitle),1))]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("h2",null,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.content),1)]})),_:2},1032,["color"])})),128))]})),_:1},8,["activeKey","color","tabPosition"])}var s=n("84d4"),c=n("52d0"),r={name:"Tab",components:{TabBasic:c["TabBasic"],Child:c["Child"]},props:{color:s["a"].string,tabPosition:s["a"].oneOf(["top","right","bottom","left"]).def("top"),data:s["a"].arrayOf(s["a"].object)},setup:function(){return{activeKey:Object(a["ref"])(1)}}},l=n("d959"),m=n.n(l);const d=m()(r,[["render",o]]);t["default"]=d},4987:function(e){e.exports=JSON.parse('{"data":[{"id":1,"title":"Tab one","tabTitle":"Tab one","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","tabTitle":"Tab two","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","tabTitle":"Tab three","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","tabTitle":"Tab four","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","tabTitle":"Tab Five","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],"dataIcon":[{"id":1,"title":"Tab one","tabTitle":"Tab one","icon":"smile","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","tabTitle":"Tab two","icon":"camera","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","tabTitle":"Tab three","icon":"at-sign","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","tabTitle":"Tab four","icon":"home","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","tabTitle":"Tab five","icon":"airplay","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],"icon":[{"id":1,"title":"Tab one","icon":"smile","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","icon":"camera","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","icon":"at-sign","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","icon":"home","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","icon":"airplay","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}]}')},"52d0":function(e,t,n){"use strict";n.r(t),n.d(t,"TabBasic",(function(){return d})),n.d(t,"Child",(function(){return p}));var a,i,u=n("8785"),o=(n("d13f"),n("ccb9")),s=(n("99af"),n("f6f8")),c=o["a"].TabPane,r=["color"],l=function(e){return"\n  margin-bottom: 30px !important;\n  .ant-tabs-bar {\n    margin: 0;\n  }\n  .ant-tabs-nav-list{\n    margin: 0;\n  }\n  .ant-tabs-nav{\n    color : ".concat((function(e){var t=e.color;return"default"!==t&&"#ffffff"!==t&&"#fff"!==t&&"white"!==t?"#ffffff":"#000000"}),";\n  }\n  .ant-tabs-nav .ant-tabs-tab:hover, .ant-tabs-nav .ant-tabs-tab:focus {\n    //background : ").concat("default"!==e&&e,";\n    color : ").concat((function(e){var t=e.color;return"default"!==t&&"#ffffff"!==t&&"#fff"!==t&&"white"!==t?"#ffffff":"#000000"}),";\n  }\n  .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active {\n    border: none;\n    border-radius: 3px;\n    background : ").concat("default"!==e&&e,";\n  }\n  .ant-tabs-tab.ant-tabs-tab-active{\n    color : ").concat("default"!==e&&"#ffffff"!==e&&"#fff"!==e&&"white"!==e?"#ffffff":"#5F63F2",";\n  }\n  .ant-tabs-ink-bar {\n    background: transparent\n  }\n")},m=function(e){return"\n  h1, h2, h3, h4, h5, h6, p, span, i {\n    padding: 15px;\n    background : ".concat("default"!==e&&e,";\n    color : ").concat("default"!==e&&"#ffffff"!==e&&"#fff"!==e&&"white"!==e?"#ffffff":"#000000",";\n    margin: 0;\n  }\n  \n")},d=Object(s["b"])(o["a"],r)(a||(a=Object(u["a"])(["\n  margin-bottom: 30px !important;\n  ","\n"])),(function(e){var t=e.color;return t&&l(t)})),p=Object(s["b"])(c,r)(i||(i=Object(u["a"])([" \n    /* background: ","; */\n    ","\n"])),(function(e){var t=e.color;return"default"!==t&&"#ffffff"!==t&&"#fff"!==t&&"white"!==t?"#ffffff":"#000000"}),(function(e){var t=e.color;return t&&m(t)}))}}]);
//# sourceMappingURL=Tabs.26b25286.js.map