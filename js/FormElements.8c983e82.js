(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["FormElements"],{"2fac":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("a-input"),u=Object(r["resolveComponent"])("a-form-item"),i=Object(r["resolveComponent"])("a-col"),d=Object(r["resolveComponent"])("a-row"),b=Object(r["resolveComponent"])("a-form"),s=Object(r["resolveComponent"])("sdCards"),f=Object(r["resolveComponent"])("BasicFormWrapper");return Object(r["openBlock"])(),Object(r["createBlock"])(f,{class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{title:"Sizes"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{name:"sDash_sized-form",layout:"horizontal"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{gutter:30},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{class:"large-input",label:"Large Input"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{size:"large",placeholder:"Large size"})]})),_:1}),Object(r["createVNode"])(u,{class:"small-input",label:"Default Input"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{placeholder:"default size"})]})),_:1}),Object(r["createVNode"])(u,{class:"mb-25",label:"Small Input"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{size:"small",placeholder:"small size"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var a=n("23d0"),c={name:"SizedForm",components:{BasicFormWrapper:a["BasicFormWrapper"]}},l=n("d959"),u=n.n(l);const i=u()(c,[["render",o]]);t["default"]=i},"661e":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={className:"sDash_color-picker"};function a(e,t,n,a,c,l){var u=Object(r["resolveComponent"])("a-input"),i=Object(r["resolveComponent"])("a-form-item"),d=Object(r["resolveComponent"])("a-input-password"),b=Object(r["resolveComponent"])("a-input-number"),s=Object(r["resolveComponent"])("a-date-picker"),f=Object(r["resolveComponent"])("a-month-picker"),m=Object(r["resolveComponent"])("a-time-picker"),O=Object(r["resolveComponent"])("a-form"),j=Object(r["resolveComponent"])("sdCards"),p=Object(r["resolveComponent"])("HorizontalFormStyleWrap"),h=Object(r["resolveComponent"])("BasicFormWrapper");return Object(r["openBlock"])(),Object(r["createBlock"])(h,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{title:"Basic Inputs"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{name:"input-form",layout:a.formState.layout,model:a.formState,"label-col":a.labelCol,"wrapper-col":a.wrapperCol,labelAlign:"left"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{label:"Text"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{value:a.formState.text,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.text=e}),placeholder:"input placeholder"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Email Address"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{value:a.formState.emailAddress,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.emailAddress=e}),placeholder:"input placeholder"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"URL"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{value:a.formState.url,"onUpdate:value":t[2]||(t[2]=function(e){return a.formState.url=e}),name:"input-url",placeholder:"https://strikingdash-vue-admin-dashboard-template"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Phone"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{value:a.formState.phone,"onUpdate:value":t[3]||(t[3]=function(e){return a.formState.phone=e}),name:"input-phone",placeholder:"017123456789"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Password"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{value:a.formState.password,"onUpdate:value":t[4]||(t[4]=function(e){return a.formState.password=e}),placeholder:"input placeholder"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Number"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{value:a.formState.number,"onUpdate:value":t[5]||(t[5]=function(e){return a.formState.number=e}),name:"input-number",placeholder:"12457485"},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Date"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{name:"input-date",value:a.formState.date,"onUpdate:value":t[6]||(t[6]=function(e){return a.formState.date=e})},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Month"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{name:"input-month",placeholder:"Select month",value:a.formState.month,"onUpdate:value":t[7]||(t[7]=function(e){return a.formState.month=e})},null,8,["value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Time"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{"default-value":l.moment("12:08:23","HH:mm:ss"),name:"input-time",value:a.formState.time,"onUpdate:value":t[8]||(t[8]=function(e){return a.formState.time=e})},null,8,["default-value","value"])]})),_:1}),Object(r["createVNode"])(i,{label:"Color"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(u,{style:{height:"55px"},name:"color",type:"color",value:a.formState.color,"onUpdate:value":t[9]||(t[9]=function(e){return a.formState.color=e})},null,8,["value"])])]})),_:1})]})),_:1},8,["layout","model","label-col","wrapper-col"])]})),_:1})]})),_:1})]})),_:1})}var c=n("23d0"),l=n("834f"),u=n("c1df"),i=n.n(u),d={name:"InputForm",components:{BasicFormWrapper:c["BasicFormWrapper"],HorizontalFormStyleWrap:l["HorizontalFormStyleWrap"]},methods:{moment:i.a},setup:function(){var e=Object(r["reactive"])({layout:"horizontal",text:"Duran Clayton",emailAddress:"username@email.com",password:"123456",number:"124",date:"",month:"",time:"",color:"#5F63F2"}),t={md:6,xs:24},n={md:18,xs:24};return{formState:e,labelCol:t,wrapperCol:n}}},b=n("d959"),s=n.n(b);const f=s()(d,[["render",a]]);t["default"]=f},7380:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("a-input"),u=Object(r["resolveComponent"])("a-form-item"),i=Object(r["resolveComponent"])("a-col"),d=Object(r["resolveComponent"])("a-row"),b=Object(r["resolveComponent"])("a-form"),s=Object(r["resolveComponent"])("sdCards"),f=Object(r["resolveComponent"])("BasicFormWrapper");return Object(r["openBlock"])(),Object(r["createBlock"])(f,{class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{title:"Form Group in Grid"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{name:"sDash_grid-form",layout:"horizontal"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{gutter:30},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{md:8,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-3-1",placeholder:"One of Three Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:8,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-3-2",placeholder:"One of Three Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:8,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-3-3",placeholder:"One of Three Columns"})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{gutter:30},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{md:6,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-4-1",placeholder:"One of Four Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:6,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-4-2",placeholder:"One of Four Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:6,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-4-3",placeholder:"One of Four Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:6,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-4-4",placeholder:"One of Four Columns"})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{gutter:30},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{md:12,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-2-1",placeholder:"One of Two Columns"})]})),_:1})]})),_:1}),Object(r["createVNode"])(i,{md:12,xs:24,class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{name:"grid-2-1",placeholder:"One of Two Columns"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var a=n("23d0"),c={name:"GridForm",components:{BasicFormWrapper:a["BasicFormWrapper"]}},l=n("d959"),u=n.n(l);const i=u()(c,[["render",o]]);t["default"]=i},"834f":function(e,t,n){"use strict";n.r(t),n.d(t,"HorizontalFormStyleWrap",(function(){return b})),n.d(t,"VerticalFormStyleWrap",(function(){return s})),n.d(t,"CheckListWrap",(function(){return f})),n.d(t,"DropDownListComponents",(function(){return m})),n.d(t,"FormComponentsWrap",(function(){return O})),n.d(t,"FormValidationWrap",(function(){return j}));var r,o,a,c,l,u,i=n("8785"),d=n("f6f8"),b=d["b"].div(r||(r=Object(i["a"])(["\n    .ant-card{\n        margin-bottom: 25px\n    }\n    .ant-form-horizontal{\n        .ant-form-item .ant-form-item-label{\n            label{\n                display: inline-block;\n                font-weight: 500;\n                margin-bottom: 0;\n                @media only screen and (max-width: 767px) {\n                    margin-bottom: 0;\n                }\n            }\n        }\n\n        .ant-form-item{\n            margin-bottom: 25px !important;\n        }\n        .ant-input-affix-wrapper .ant-input-prefix svg{\n            color: ",";\n        }\n        .sDash_form-action{\n            margin: -7.5px;\n            button{\n                font-size: 14px;\n                font-weight: 500;\n                border-radius: 6px;\n                margin: 7.5px;\n                padding: 6.4px 19px;\n                &.sDash_form-action__btn{\n                    height: 44px;\n                    padding: 6.4px 20px;\n                }\n                &.ant-btn-light{\n                    background-color: #F1F2F6;\n                    border-color: #F1F2F6;\n                }\n                &.sDash_form-action__btn{\n                    height: 44px;\n                }\n            }\n            .ant-btn-light{\n                background-color: #F8F9FB;\n            }\n        }\n    }\n    &.sDash_input-form{\n        .ant-picker{\n            width: 100%;\n            &:focus{\n                outline: none;\n                box-shadow: 0 0;\n            }\n        }\n    }\n    ant-picker-input{\n        &::placeholder{\n            color: #9299B8 !important;\n        }\n    }\n"])),(function(e){var t=e.theme;return t["gray-color"]})),s=d["b"].div(o||(o=Object(i["a"])(["\n    .ant-card{\n        margin-bottom: 25px\n    }\n\n    .ant-input-affix-wrapper .ant-input-prefix svg{\n        color: ",";\n    }\n    .sDash_form-action{\n        margin: -7.5px;\n        button{\n            font-size: 14px;\n            font-weight: 500;\n            border-radius: 6px;\n            margin: 7.5px;\n            padding: 6.4px 19px;\n            &.ant-btn-light{\n                height: 44px;\n                background-color: #F1F2F6;\n                border-color: #F1F2F6;\n            }\n        }\n        .ant-form-item{\n            margin-bottom: 25px !important;\n        }\n        .ant-btn-light{\n            background-color: #F8F9FB;\n        }\n    }\n    .ant-form-item{\n        padding-bottom: 0;\n    }\n"])),(function(e){var t=e.theme;return t["gray-color"]})),f=d["b"].div(a||(a=Object(i["a"])(["\n    .sDash_check-list-wrap{\n        display: flex;\n        justify-content: space-between;\n        .sDash_check-list{\n            li{\n                &:not(:last-child){\n                    margin-bottom: 20px;\n                }\n            }\n        }\n    }\n"]))),m=d["b"].div(c||(c=Object(i["a"])(["\n    .sDash_dropdown-list{\n        .ant-dropdown-trigger{\n            font-size: 14px;\n            font-weight: 400;\n            color: #9299B8;\n            width: 100%;\n            justify-content: flex-start;\n            &:not(:last-child){\n                margin-bottom: 25px;\n            }\n        }\n    }\n"]))),O=d["b"].div(l||(l=Object(i["a"])(["\n    .sDash_datepicker-list{\n        .ant-picker.ant-picker-range{\n            width: 100%;\n        }\n    }\n    .sDash_editor{\n        border-radius: 4px;\n        .EditorToolbar__root___3_Aqz{\n            padding: 12px 20px 0;\n        }\n        .DraftEditor-root{\n            min-height: 100px;\n            .public-DraftEditorPlaceholder-root{\n                padding: 12px 20px 0;\n            }\n        }\n        select{\n            margin-top: -4px;\n        }\n        .Dropdown__value___34Py9{\n            &:after,\n            &:before{\n                ",": auto;\n                ",": 10px;\n            }\n        }\n    }\n    .sDash_slider-list{\n        margin: -25px 0;\n        .ant-slider{\n            margin: 25px 0;\n        }\n    }\n"])),(function(e){var t=e.theme;return t.rtl?"right":"left"}),(function(e){var t=e.theme;return t.rtl?"left":"right"})),j=d["b"].div(u||(u=Object(i["a"])(["\n    .ant-card-body{\n        padding: 30px 25px 50px 25px !important;\n    }\n    .ant-form-item .has-error{\n        .ant-form-explain{\n            font-size: 13px;\n        }\n    }\n    .sDash_agree-check{\n        .ant-form-item-control-input{\n            min-height: auto;\n        }\n        .ant-form-item .has-error{\n            .ant-checkbox-wrapper{\n                span{\n                    font-size: 13px;\n                }\n                .ant-checkbox{\n                    border-color: ","30;\n                    &.ant-checkbox-checked{\n                        border-color: ","30;\n                        &:after{\n                            border-color: ","30;\n                        }\n                        .ant-checkbox-inner{\n                            &:after{\n                                border-color: ",";\n                            }\n                        }\n                    }\n                    .ant-checkbox-inner{\n                        border-color: ","30;\n                        background-color: ","30;\n                    }\n                }\n            }\n        }\n        .ant-form-item-explain{\n            margin-left: 25px;\n            font-size: 13px;\n        }\n    }\n    .sDash_form-action{\n        button{\n            border-radius: 4px;\n            padding: 6.4px 29.2px;\n            height: 44px;\n        }\n    }\n"])),(function(e){var t=e.theme;return t["danger-color"]}),(function(e){var t=e.theme;return t["danger-color"]}),(function(e){var t=e.theme;return t["danger-color"]}),(function(e){var t=e.theme;return t["danger-color"]}),(function(e){var t=e.theme;return t["danger-color"]}),(function(e){var t=e.theme;return t["danger-color"]}))},9229:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"page-header-actions"},a=Object(r["createTextVNode"])(" Add New "),c=Object(r["createTextVNode"])("1"),l=Object(r["createTextVNode"])("2"),u=Object(r["createTextVNode"])("3"),i=Object(r["createTextVNode"])("4"),d=Object(r["createTextVNode"])("1"),b=Object(r["createTextVNode"])("1"),s=Object(r["createTextVNode"])("2"),f=Object(r["createTextVNode"])("3"),m=Object(r["createTextVNode"])("4"),O=Object(r["createTextVNode"])("1"),j=Object(r["createTextVNode"])("2"),p=Object(r["createTextVNode"])("3"),h=Object(r["createTextVNode"])("4"),x=Object(r["createElementVNode"])("span",{class:"sDash_upload-text"},"Select File",-1),C=Object(r["createElementVNode"])("a",{to:"#",class:"sDash_upload-browse"}," Browse ",-1),N={class:"sDash_check-list-wrap"},V={class:"sDash_check-list sDash_check-list--left"},w=Object(r["createTextVNode"])("Checkbox"),_=Object(r["createTextVNode"])(" Checked "),v=Object(r["createTextVNode"])(" Disabled Unchecked "),g=Object(r["createTextVNode"])(" Disabled Checked "),k={class:"sDash_check-list sDash_check-list--right"},F=Object(r["createTextVNode"])("Uncheck"),D=Object(r["createTextVNode"])("Checked"),S=Object(r["createTextVNode"])("Disabled Unchecked"),z=Object(r["createTextVNode"])(" Disabled Checked ");function T(e,t,n,T,B,y){var E=Object(r["resolveComponent"])("sdCalendarButton"),W=Object(r["resolveComponent"])("sdExportButton"),U=Object(r["resolveComponent"])("sdShareButton"),L=Object(r["resolveComponent"])("sdFeatherIcons"),I=Object(r["resolveComponent"])("sdButton"),A=Object(r["resolveComponent"])("sdPageHeader"),H=Object(r["resolveComponent"])("GridForm"),P=Object(r["resolveComponent"])("a-col"),M=Object(r["resolveComponent"])("SizedForm"),G=Object(r["resolveComponent"])("InputForm"),J=Object(r["resolveComponent"])("a-textarea"),R=Object(r["resolveComponent"])("a-form-item"),q=Object(r["resolveComponent"])("a-form"),K=Object(r["resolveComponent"])("sdCards"),Q=Object(r["resolveComponent"])("a-select-option"),X=Object(r["resolveComponent"])("a-select"),Y=Object(r["resolveComponent"])("a-upload"),Z=Object(r["resolveComponent"])("a-checkbox"),$=Object(r["resolveComponent"])("a-radio"),ee=Object(r["resolveComponent"])("CheckListWrap"),te=Object(r["resolveComponent"])("a-row"),ne=Object(r["resolveComponent"])("Main");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(A,{title:"Form Elements"},{buttons:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(E),Object(r["createVNode"])(W),Object(r["createVNode"])(U),Object(r["createVNode"])(I,{size:"small",type:"primary"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{type:"plus",size:"14"}),a]})),_:1})])]})),_:1}),Object(r["createVNode"])(ne,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(te,{gutter:25},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(H)]})),_:1}),Object(r["createVNode"])(P,{lg:12,xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(M),Object(r["createVNode"])(G)]})),_:1}),Object(r["createVNode"])(P,{lg:12,xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(K,{title:"Text Input",class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{name:"sDash_textarea",layout:"vertical"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{name:"basic-textarea",label:"Basic Textarea"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(J,{placeholder:"Basic usage",rows:2})]})),_:1}),Object(r["createVNode"])(R,{label:"Unresizable Textarea"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(J,{placeholder:"Unresizable Textarea",name:"unresizable-textarea",class:"sDash_unresizable",rows:3})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(K,{title:"Select",class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{name:"sDash_Select",layout:"vertical"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"Basic Select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(X,{size:"large",name:"basic-select",class:"sDash_fullwidth-select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Q,{value:"1"},{default:Object(r["withCtx"])((function(){return[c]})),_:1}),Object(r["createVNode"])(Q,{"default-value":"2",value:"2"},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),Object(r["createVNode"])(Q,{value:"3"},{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])(Q,{value:"4"},{default:Object(r["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"Disabled Basic Select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(X,{size:"large",name:"disabled-select",class:"sDash_fullwidth-select",disabled:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Q,{value:"1"},{default:Object(r["withCtx"])((function(){return[d]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"Multiple Select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(X,{mode:"multiple","default-value":["1","2"],placeholder:"Please select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Q,{value:"1"},{default:Object(r["withCtx"])((function(){return[b]})),_:1}),Object(r["createVNode"])(Q,{value:"2"},{default:Object(r["withCtx"])((function(){return[s]})),_:1}),Object(r["createVNode"])(Q,{value:"3"},{default:Object(r["withCtx"])((function(){return[f]})),_:1}),Object(r["createVNode"])(Q,{value:"4"},{default:Object(r["withCtx"])((function(){return[m]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"Disabled Multiple Select"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(X,{mode:"multiple","default-value":["1","2"],placeholder:"Please select",disabled:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Q,{value:"1"},{default:Object(r["withCtx"])((function(){return[O]})),_:1}),Object(r["createVNode"])(Q,{value:"2"},{default:Object(r["withCtx"])((function(){return[j]})),_:1}),Object(r["createVNode"])(Q,{value:"3"},{default:Object(r["withCtx"])((function(){return[p]})),_:1}),Object(r["createVNode"])(Q,{value:"4"},{default:Object(r["withCtx"])((function(){return[h]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(K,{title:"File Browser",class:"sDash_upload-form mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(q,{name:"sDash_file_browser",layout:"vertical"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Y,{class:"sDash_upload-basic",name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:T.headers,onChange:T.handleChange},{default:Object(r["withCtx"])((function(){return[x,C]})),_:1},8,["headers","onChange"])]})),_:1})]})),_:1}),Object(r["createVNode"])(ee,{class:"mb-25"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(K,{title:"Checkboxes and Radios"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("ul",V,[Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(Z,null,{default:Object(r["withCtx"])((function(){return[w]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(Z,{checked:""},{default:Object(r["withCtx"])((function(){return[_]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(Z,{disabled:""},{default:Object(r["withCtx"])((function(){return[v]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(Z,{checked:"",disabled:""},{default:Object(r["withCtx"])((function(){return[g]})),_:1})])]),Object(r["createElementVNode"])("ul",k,[Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])($,null,{default:Object(r["withCtx"])((function(){return[F]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])($,{checked:""},{default:Object(r["withCtx"])((function(){return[D]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])($,{disabled:""},{default:Object(r["withCtx"])((function(){return[S]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])($,{checked:"",disabled:""},{default:Object(r["withCtx"])((function(){return[z]})),_:1})])])])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}n("3b18");var B=n("f64c"),y=(n("b0c0"),n("23d0")),E=n("834f"),W=n("7380"),U=n("2fac"),L=n("661e"),I={name:"FormElement",components:{Main:y["Main"],GridForm:W["default"],SizedForm:U["default"],InputForm:L["default"],CheckListWrap:E["CheckListWrap"]},setup:function(){var e=function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?B["a"].success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&B["a"].error("".concat(e.file.name," file upload failed."))},t=Object(r["ref"])([]);return{fileList:t,headers:{authorization:"authorization-text"},handleChange:e}}},A=n("d959"),H=n.n(A);const P=H()(I,[["render",T]]);t["default"]=P}}]);
//# sourceMappingURL=FormElements.8c983e82.js.map