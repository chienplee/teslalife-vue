(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wizard4"],{"0968":function(e,t,c){e.exports=c.p+"img/progress.6f2548ac.svg"},"9c3b":function(e,t,c){e.exports=c.p+"img/progress-active.1f1cc834.svg"},c3ff:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),n={class:"atbd-form-checkout"},a={class:"create-account-form"},o=Object(r["createTextVNode"])("1. Please Create Your Account"),l={class:"atbd-form-checkout"},i={class:"shipping-form"},s=Object(r["createTextVNode"])("2. Please setup your profile"),u={class:"atbd-form-checkout"},d={class:"payment-method-form profile-hints"},b=Object(r["createTextVNode"])("3. Please see your hints"),f=Object(r["createTextVNode"])(" First Name : "),O=Object(r["createTextVNode"])(" Last Name : "),j=Object(r["createTextVNode"])(" Email Address : "),p=Object(r["createTextVNode"])(" Address : "),m={class:"atbd-finish-order",style:{width:"100%"}},h=Object(r["createTextVNode"])("4. Let's Finished"),N=Object(r["createElementVNode"])("span",{class:"checkbox-label"},"I Agree with the Terms and Conditions.",-1),V={class:"checkout-successful"},w={class:"icon-success"},v=Object(r["createTextVNode"])("Thank You"),x=Object(r["createElementVNode"])("p",null,"Your registration completed successfully",-1);function C(e,t,c,C,_,k){var y=Object(r["resolveComponent"])("sdHeading"),E=Object(r["resolveComponent"])("a-input"),F=Object(r["resolveComponent"])("a-form-item"),g=Object(r["resolveComponent"])("a-input-password"),W=Object(r["resolveComponent"])("a-form"),T=Object(r["resolveComponent"])("a-col"),B=Object(r["resolveComponent"])("a-row"),P=Object(r["resolveComponent"])("BasicFormWrapper"),S=Object(r["resolveComponent"])("a-checkbox"),U=Object(r["resolveComponent"])("sdFeatherIcons"),z=Object(r["resolveComponent"])("sdCards"),A=Object(r["resolveComponent"])("Steps"),D=Object(r["resolveComponent"])("WizardFour"),L=Object(r["resolveComponent"])("WizardWrapper");return Object(r["openBlock"])(),Object(r["createBlock"])(L,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,{isSwitch:"",isVertical:"",current:0,status:e.status,steps:e.steps,direction:"vertical",onOnNext:e.next,onOnPrev:e.prev,onOnDone:e.done,isFinished:e.isFinished},{start:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{class:"basic-form-inner"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(B,{justify:"center"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(y,{as:"h4"},{default:Object(r["withCtx"])((function(){return[o]})),_:1}),Object(r["createVNode"])(W,{name:"account"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(F,{name:"username",label:"Username"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{placeholder:"Username"})]})),_:1}),Object(r["createVNode"])(F,{name:"password",label:"Password"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{type:"password",value:e.password,"onUpdate:value":t[0]||(t[0]=function(t){return e.password=t}),placeholder:"Password"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(F,{name:"confirm_password",label:"Confirm Password"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{type:"password",value:e.confirm_password,"onUpdate:value":t[1]||(t[1]=function(t){return e.confirm_password=t}),placeholder:"Password"},null,8,["value"])]})),_:1})]})),_:1})])]})),_:1})]})),_:1})])]})),_:1})]})),profile:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{class:"basic-form-inner"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(B,{justify:"center"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(y,{as:"h4"},{default:Object(r["withCtx"])((function(){return[s]})),_:1}),Object(r["createVNode"])(W,{model:e.profile,name:"address"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(F,{name:"fname",label:"First Name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{value:e.profile.fname,"onUpdate:value":t[2]||(t[2]=function(t){return e.profile.fname=t}),placeholder:"First Name"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(F,{name:"lname",label:"Last Name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{value:e.profile.lname,"onUpdate:value":t[3]||(t[3]=function(t){return e.profile.lname=t}),placeholder:"Last Name"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(F,{name:"email",label:"Email Address"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{type:"email",value:e.profile.email,"onUpdate:value":t[4]||(t[4]=function(t){return e.profile.email=t}),placeholder:"name@gmail.com"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(F,{name:"street",label:"Address"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{value:e.profile.address,"onUpdate:value":t[5]||(t[5]=function(t){return e.profile.address=t}),placeholder:"Address"},null,8,["value"])]})),_:1})]})),_:1},8,["model"])])]})),_:1})]})),_:1})])]})),_:1})]})),hints:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{class:"basic-form-inner"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(B,{justify:"center"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(y,{as:"h4"},{default:Object(r["withCtx"])((function(){return[b]})),_:1}),Object(r["createElementVNode"])("p",null,[f,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.profile.fname),1)]),Object(r["createElementVNode"])("p",null,[O,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.profile.lname),1)]),Object(r["createElementVNode"])("p",null,[j,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.profile.email),1)]),Object(r["createElementVNode"])("p",null,[p,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.profile.address),1)])])]})),_:1})]})),_:1})])]})),_:1})]})),finish:Object(r["withCtx"])((function(){return["finish"!==e.status?(Object(r["openBlock"])(),Object(r["createBlock"])(P,{key:0,style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(B,{justify:"center"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",m,[Object(r["createVNode"])(y,{as:"h4"},{default:Object(r["withCtx"])((function(){return[h]})),_:1}),Object(r["createVNode"])(S,{checked:e.checked,"onUpdate:checked":t[6]||(t[6]=function(t){return e.checked=t})},{default:Object(r["withCtx"])((function(){return[N]})),_:1},8,["checked"])])]})),_:1})]})),_:1})]})),_:1})):(Object(r["openBlock"])(),Object(r["createBlock"])(B,{key:1,justify:"center",style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(z,{headless:"",bodyStyle:{backgroundColor:"#F8F9FB",borderRadius:"20px"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z,{headless:""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("span",w,[Object(r["createVNode"])(U,{type:"check"})]),Object(r["createVNode"])(y,{as:"h3"},{default:Object(r["withCtx"])((function(){return[v]})),_:1}),x]})),_:1})]})),_:1})])]})),_:1})]})),_:1}))]})),_:1},8,["status","steps","onOnNext","onOnPrev","onOnDone","isFinished"])]})),_:1})]})),_:1})}var _=c("1c38"),k=c("23d0"),y=c("1404"),E=c("5502"),F={name:"WizardsFour",components:{Steps:y["default"],WizardWrapper:_["WizardWrapper"],WizardFour:_["WizardFour"],BasicFormWrapper:k["BasicFormWrapper"]},setup:function(){var e=Object(E["c"])(),t=e.state,c=Object(r["computed"])((function(){return t.cart.loading})),n=Object(r["computed"])((function(){return t.themeLayout.rtlData})),a=Object(r["ref"])("process"),o=Object(r["ref"])(!1),l=Object(r["ref"])(!0),i=Object(r["ref"])(1),s=Object(r["ref"])(123456),u=Object(r["ref"])(),d=Object(r["reactive"])({fname:"",lname:"",email:"",address:""}),b=function(){a.value="process",i.value=i.value+1},f=function(){a.value="process",i.value=i.value-1},O=function(){var e=window.confirm("Are sure to submit order?");e&&(a.value="finish",o.value=!0,i.value=0)};return{done:O,prev:f,next:b,isLoading:c,rtl:n,status:a,isFinished:o,isVertical:l,current:i,profile:d,password:s,confirm_password:u,checked:Object(r["ref"])(!1),steps:[{title:"Start",content:"start"},{title:"Profile",content:"profile"},{title:"Hints",content:"hints"},{title:"Finish",content:"finish"}]}}},g=F,W=c("d959"),T=c.n(W);const B=T()(g,[["render",C]]);t["default"]=B}}]);
//# sourceMappingURL=wizard4.fef33b21.js.map