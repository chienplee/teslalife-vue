(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d699e"],{"72f3":function(e,t,o){"use strict";o.r(t);var r=o("5530"),n=o("7a23"),c={class:"account-card"},i=Object(n["createElementVNode"])("span",null,"Printer",-1),a=Object(n["createElementVNode"])("span",null,"PDF",-1),l=Object(n["createElementVNode"])("span",null,"Google Sheets",-1),d=Object(n["createElementVNode"])("span",null,"Excel (XLSX)",-1),s=Object(n["createElementVNode"])("span",null,"CSV",-1),b={class:"account-card"},u=Object(n["createElementVNode"])("span",null,"Printer",-1),p=Object(n["createElementVNode"])("span",null,"PDF",-1),f=Object(n["createElementVNode"])("span",null,"Google Sheets",-1),j=Object(n["createElementVNode"])("span",null,"Excel (XLSX)",-1),O=Object(n["createElementVNode"])("span",null,"CSV",-1);function C(e,t,o,C,h,V){var N=Object(n["resolveComponent"])("sdFeatherIcons"),m=Object(n["resolveComponent"])("router-link"),x=Object(n["resolveComponent"])("Chart"),z=Object(n["resolveComponent"])("sdCards"),g=Object(n["resolveComponent"])("a-col");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(g,{lg:12,md:12,sm:24,xs:24},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(z,{title:"Account Receivable",more:""},{more:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"printer"}),i]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"book-open"}),a]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"file-text"}),l]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"x"}),d]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"file"}),s]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{type:"line",class:"account",labels:["Current","1-30","30-60","60-90","91+"],datasets:[{data:[105,145,95,149,90],borderColor:"#FA8B0C",borderWidth:3,fill:!1,pointBackgroundColor:"#FA8B0C",pointBorderColor:"#fff",pointHoverBorderColor:"#fff",pointBorderWidth:2,pointHoverBorderWidth:3,pointHoverRadius:5,z:5,label:"Net"}],height:e.height,options:{legend:{display:!1},elements:{point:{radius:5,z:5}},tooltips:Object(r["a"])({},e.tooltips),scales:{yAxes:[{gridLines:{color:"#e5e9f2",borderDash:[3,3],zeroLineColor:"#e5e9f2",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:200,stepSize:50,padding:10,callback:function(e){return"".concat(e,"k")}}}],xAxes:[{gridLines:{display:!0,zeroLineWidth:2,zeroLineColor:"transparent",color:"transparent",z:1}}]}}},null,8,["height","options"])]})),_:1})])]})),_:1}),Object(n["createVNode"])(g,{lg:12,md:12,sm:24,xs:24},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(z,{title:"Account Payable",more:""},{more:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"printer"}),u]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"book-open"}),p]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"file-text"}),f]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"x"}),j]})),_:1}),Object(n["createVNode"])(m,{to:"#"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:16,type:"file"}),O]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{type:"line",class:"payable",labels:["Current","1-30","30-60","60-90","91+"],datasets:[{data:[80,160,105,140,107],borderColor:"#2C99FF",borderWidth:3,fill:!1,pointBackgroundColor:"#2C99FF",pointBorderColor:"#fff",pointHoverBorderColor:"#fff",pointBorderWidth:2,pointHoverBorderWidth:3,pointHoverRadius:5,z:5,label:"Gross"}],height:e.height,options:{legend:{display:!1},elements:{point:{radius:5,z:5}},tooltips:Object(r["a"])({},e.tooltips),scales:{yAxes:[{gridLines:{color:"#e5e9f2",borderDash:[3,3],zeroLineColor:"#e5e9f2",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:200,stepSize:50,padding:10,callback:function(e){return"".concat(e,"k")}}}],xAxes:[{gridLines:{display:!0,zeroLineWidth:2,zeroLineColor:"transparent",color:"transparent",z:1}}]}}},null,8,["height","options"])]})),_:1})])]})),_:1})],64)}o("99af");var h=o("b511"),V={name:"AccountGroup",components:{Chart:h["default"]},setup:function(){var e=Object(n["ref"])(window.innerWidth<=575?230:100);return{tooltips:{mode:"label",intersect:!1,backgroundColor:"#ffffff",position:"average",titleFontColor:"#5A5F7D",titleFontSize:13,titleSpacing:15,bodyFontColor:"#868EAE",bodyFontSize:12,borderColor:"#F1F2F6",borderWidth:2,bodySpacing:15,xPadding:15,yPadding:15,z:999999,custom:function(e){e&&(e.displayColors=!1)},callbacks:{title:function(){return"Account Receivable"},label:function(e){var t=e.yLabel,o=e.xLabel;return"".concat(o,": $").concat(t,"k")},labelColor:function(){return{backgroundColor:"#000",borderColor:"transparent"}}}},height:e}}},N=V,m=o("d959"),x=o.n(m);const z=x()(N,[["render",C]]);t["default"]=z}}]);
//# sourceMappingURL=chunk-2d0d699e.f0edb4b5.js.map