(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Settings"],{20920:function(n,e,t){"use strict";t.r(e);var o=t("7a23"),r={class:"cover-image"},i=["src"],a={to:"#"},c=Object(o["createTextVNode"])(" Change Cover ");function l(n,e,l,d,u,p){var s=Object(o["resolveComponent"])("sdFeatherIcons"),f=Object(o["resolveComponent"])("a-upload");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("img",{style:{width:"100%"},src:t("e4ca"),alt:"banner"},null,8,i),Object(o["createVNode"])(f,{name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:n.headers,onChange:n.onChange},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("a",a,[Object(o["createVNode"])(s,{type:"camera",size:"16"}),c])]})),_:1},8,["headers","onChange"])])}t("b0c0");var d={name:"CoverSection",components:{},data:function(){return{headers:{authorization:"authorization-text"}}},methods:{onChange:function(n){"uploading"!==n.file.status&&console.log(n.file,n.fileList),"done"===n.file.status?this.$message.success("".concat(n.file.name," file uploaded successfully")):"error"===n.file.status&&this.$message.error("".concat(n.file.name," file upload failed."))}}},u=d,p=t("d959"),s=t.n(p);const f=s()(u,[["render",l]]);e["default"]=f},ad5a:function(n,e,t){"use strict";t.r(e),t.d(e,"ProfileAuthorBox",(function(){return p})),t.d(e,"SettingWrapper",(function(){return s})),t.d(e,"AccountWrapper",(function(){return f})),t.d(e,"ChangePasswordWrapper",(function(){return m})),t.d(e,"SocialProfileForm",(function(){return b})),t.d(e,"NotificationWrapper",(function(){return x}));var o,r,i,a,c,l,d=t("8785"),u=t("f6f8"),p=u["b"].div(o||(o=Object(d["a"])(["\n    .ant-card-body{\n        padding: 25px 0 25px !important;\n    }\n    .author-info{\n        padding: 0 20px 20px;\n        text-align: center;\n        border-bottom: 1px solid ",";\n        .info{\n            background-color: transparent;\n        }\n    }\n    figure{\n        position: relative;\n        max-width: 120px;\n        margin: 0 auto 18px;\n        .ant-upload-select{\n            position: absolute;\n            ",": 0;\n            bottom: -2px;\n            height: 40px;\n            width: 40px;\n            background: #fff;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50%;\n            span{\n                display: inline-flex;\n                height: 32px;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                width: 32px;\n                background: ",";\n            }\n            a{\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: #fff;\n            }\n            i{\n                color: #fff;\n            }\n        }\n    }\n    figcaption{\n        .info{\n            h1,\n            h2,\n            h3,\n            h4,\n            h5,\n            h6{\n                font-size: 18px;\n                margin-bottom: 4px;\n            }\n            p{\n                margin-bottom: 0;\n                color: ",";\n            }\n        }\n    }\n\n    .settings-menmulist{\n        padding: 20px 20px 0px 20px;\n        li{\n            a{\n                display: flex;\n                align-items: center;\n                padding: 12px 20px;\n                border-radius: 6px;\n                color: ",";\n                i,\n                svg,\n                img{\n                    ",": 6px;\n                }\n                &.router-link-active{\n                    font-weight: 500;\n                    color: ",";\n                    background: ","05;\n                }\n            }\n        }\n    }\n"])),(function(n){var e=n.theme;return e["border-color-light"]}),(function(n){var e=n.theme;return e.rtl?"left":"right"}),(function(n){var e=n.theme;return e["primary-color"]}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e["primary-color"]}),(function(n){var e=n.theme;return e["primary-color"]})),s=u["b"].div(r||(r=Object(d["a"])(["\n    .cover-image{\n        position: relative;\n        margin-bottom: 25px;\n        .ant-upload-select{\n            position: absolute;\n            ",": 20px;\n            top: 20px;\n            border: 1px solid #ffffff50;\n            border-radius: 6px;\n            @media only screen and (max-width: 991px){\n                top: 50%;\n                ",": auto;\n                left: 50%;\n                transform: translate(-50%,-50%);\n            }\n            a{\n                color: #fff;\n                padding: 8px 17.35px;\n                display: inline-flex;\n                align-items: center;\n                @media only screen and (max-width: 479px){\n                    padding: 5px 10px;\n                }\n                i,\n                svg,\n                img\n                {\n                    ",": 8px;\n                }\n            }\n        }\n    }\n    .setting-card-title{\n        @media only screen and (max-width: 479px){\n            text-align: center;\n        }\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n            margin-bottom: 0;\n            font-size: 16px;\n            font-weight: 500;\n        }\n        span{\n            font-size: 13px;\n            font-weight: 400;\n            margin: 0;\n            color: ",";\n        }\n    }\n"])),(function(n){var e=n.theme;return e.rtl?"left":"right"}),(function(n){var e=n.theme;return e.rtl?"left":"right"}),(function(n){var e=n.theme;return e.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e["light-color"]})),f=u["b"].div(i||(i=Object(d["a"])(["\n    .ant-card-body{\n        padding: 30px 25px 25px 25px !important;\n        @media only screen and (max-width: 767px){\n            padding: 20px !important;\n        }\n    }\n    .account-form-top{\n        margin-bottom: 26px;\n        padding-bottom: 30px;\n        border-bottom: 1px solid ",";\n    }\n    .account-form{\n        .ant-row{\n            &:not(:last-child){\n                margin-bottom: 0;\n            }\n        }\n        p{\n            margin: 2px 0 22px;\n            color: ",";\n            span{\n                    font-weight: 500;\n                    color: ",";\n            }\n        }\n    }\n    .account-closing{\n        .ant-row{\n            display: flex;\n            align-items: center;\n            width: 100%;\n        }\n        .account-closing__title{\n            font-size: 16px;\n        }\n        p{\n            margin-bottom: 0;\n            color: ",";\n        }\n        button{\n            height: 38px;\n            padding: 0 16.75px;\n            @media only screen and (max-width: 991px){\n                margin-top: 14px;\n            }\n            @media only screen and (max-width: 767px){\n                margin-top: 0px;\n            }\n            @media only screen and (max-width: 575px){\n                margin-top: 14px;\n            }\n        }\n    }\n    .account-action{\n        button{\n            height: 44px;\n        }\n        .ant-btn-light{\n            font-weight: 400;\n            background: ",";\n            border: 1px solid ",";\n        }\n    }\n"])),(function(n){var e=n.theme;return e["border-color-light"]}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["dark-color"]}),(function(n){var e=n.theme;return e["gray-color"]}),(function(n){var e=n.theme;return e["bg-color-light"]}),(function(n){var e=n.theme;return e["border-color-light"]})),m=u["b"].div(a||(a=Object(d["a"])(["\n    .ant-card-body{\n        min-height: 565px;\n    }\n    form{\n        .ant-input{\n            background: none !important;\n        }\n        .ant-form-item-control-input-content{\n            .ant-input-password{\n            padding: "," !important;\n            }\n        }\n        .input-message{\n            font-size: 13px;\n            color: ",";\n            margin: -22px 0 0;\n        }\n        .ant-form-item-control-input-content{\n            .anticon-eye-invisible{\n                svg,\n                i{\n                    color: ",";\n                }\n            }\n        }\n        .setting-form-actions{\n            button{\n                border-radius: 6px;\n            }\n            .ant-btn-light{\n                color: ",";\n                border: 1px solid ",";\n            }\n        }\n    }\n"])),(function(n){var e=n.theme;return e.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["extra-light-color"]}),(function(n){var e=n.theme;return e["gray-color"]}),(function(n){var e=n.theme;return e["border-color-light"]})),b=u["b"].div(c||(c=Object(d["a"])(["\n    .ant-form-item-control-input{\n        min-height: 44px;\n        .ant-form-item-control-input-content{\n            input{\n            padding: "," !important;\n            }\n            input::placeholder{\n                font-size: 13px;\n                color: ",";\n            }\n        }\n    }\n    .ant-form-item{\n        button{\n            padding: 0px 23px;\n        }\n        label{\n            color: ",";\n        }\n        .ant-input-affix-wrapper{\n            position: relative;\n            input{\n                ",": 50px;\n            }\n            span.fa,\n            i{\n                font-size: 18px;\n                color: #fff;\n            }\n            &.facebook{\n                .ant-input-prefix{\n                    background: #3B5998;\n                    border-radius: 4px;\n                }\n            }\n            &.twitter{\n                .ant-input-prefix{\n                    background: #1DA1F2;\n                    border-radius: 4px;\n                }\n            }\n            &.dribbble{\n                .ant-input-prefix{\n                    background: #DD3E7C;\n                    border-radius: 4px;\n                }\n            }\n            &.instagram{\n                .ant-input-prefix{\n                    background: #FF0300;\n                    border-radius: 4px;\n                }\n            }\n            &.github{\n                .ant-input-prefix{\n                    background: #23282D;\n                    border-radius: 4px;\n                }\n            }\n            &.medium{\n                .ant-input-prefix{\n                    background: #292929;\n                    border-radius: 4px;\n                }\n            }\n            .ant-input-prefix{\n                position: absolute;\n                height: 100%;\n                width: 44px;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                ",": 0;\n                top: 50%;\n                transform: translateY(-50%);\n                background: #ddd;\n                z-index: 1;\n                i,\n                svg{\n                    color: #fff;\n                }\n            }\n        }\n    }\n\n    .social-form-actions{\n        margin-top: 25px;\n    }\n"])),(function(n){var e=n.theme;return e.rtl?"12px 50px 12px 20px":"12px 20px 12px 50px"}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["dark-color"]}),(function(n){var e=n.theme;return e.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e.rtl?"right":"left"})),x=u["b"].div(l||(l=Object(d["a"])(["\n    .notification-box-single{\n        .ant-card{\n            border: 1px solid ",";\n        }\n        .notification-header{\n            margin-top: -8px;\n            .notification-header__text{\n                font-size: 15px;\n                font-weight: 500;\n                color: ",";\n            }\n            .btn-toggle{\n                font-size: 13px;\n                color: ",";\n            }\n        }\n        .notification-body{\n            box-shadow: 0 10px 30px ","10;\n            .ant-card{\n                margin-bottom: 0 !important;\n            }\n            .ant-card-body{\n                padding: 5px 0 !important;\n            }\n            nav{\n                li{\n                    padding: 15px 25px !important;\n                    @media only screen and (max-width: 575px){\n                        padding: 15px 20px !important;\n                    }\n                    &:not(:last-child){\n                        border-bottom: 1px solid ",";\n                    }\n                }\n            }\n        }\n        .notification-list-single{\n            .notification-list-single__title{\n                font-size: 14px;\n                font-weight: 500;\n                margin-bottom: 2px;\n                color: ",";\n            }\n            p{\n                margin-bottom: 3px;\n                color: ",";\n            }\n        }\n    }\n    .notification-actions{\n        margin: 26px 0 11px;\n        button{\n            border-radius: 6px;\n            height: 44px;\n            margin-bottom: 15px;\n        }\n    }\n"])),(function(n){var e=n.theme;return e["border-color-light"]}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["info-color"]}),(function(n){var e=n.theme;return e["light-color"]}),(function(n){var e=n.theme;return e["border-color-light"]}),(function(n){var e=n.theme;return e["gray-color"]}),(function(n){var e=n.theme;return e["light-color"]}))},bdcb:function(n,e,t){"use strict";t.r(e);var o=t("7a23"),r={class:"page-header-actions"},i=Object(o["createTextVNode"])(" Add New "),a={class:"spin"};function c(n,e,t,c,l,d){var u=Object(o["resolveComponent"])("sdCalendarButton"),p=Object(o["resolveComponent"])("sdExportButton"),s=Object(o["resolveComponent"])("sdShareButton"),f=Object(o["resolveComponent"])("sdFeatherIcons"),m=Object(o["resolveComponent"])("sdButton"),b=Object(o["resolveComponent"])("sdPageHeader"),x=Object(o["resolveComponent"])("author-box"),h=Object(o["resolveComponent"])("ProfileAuthorBox"),g=Object(o["resolveComponent"])("a-col"),j=Object(o["resolveComponent"])("CoverSection"),O=Object(o["resolveComponent"])("router-view"),v=Object(o["resolveComponent"])("a-spin"),w=Object(o["resolveComponent"])("SettingWrapper"),N=Object(o["resolveComponent"])("a-row"),V=Object(o["resolveComponent"])("Main");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(b,{title:"Profile Settings"},{buttons:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(u),Object(o["createVNode"])(p),Object(o["createVNode"])(s),Object(o["createVNode"])(m,{size:"small",type:"primary"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{type:"plus",size:"14"}),i]})),_:1})])]})),_:1}),Object(o["createVNode"])(V,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{gutter:25},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{xxl:6,lg:8,md:10,xs:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x)]})),_:1})]})),_:1}),Object(o["createVNode"])(g,{xxl:18,lg:16,md:14,xs:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j),(Object(o["openBlock"])(),Object(o["createBlock"])(o["Suspense"],null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O)]})),fallback:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(v)])]})),_:1}))]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}var l=t("23d0"),d=t("ad5a"),u=t("20920"),p=t("e11f"),s={name:"Settings",components:{Main:l["Main"],SettingWrapper:d["SettingWrapper"],AuthorBox:p["default"],CoverSection:u["default"],ProfileAuthorBox:d["ProfileAuthorBox"]},data:function(){return{}}},f=t("d959"),m=t.n(f);const b=m()(s,[["render",c]]);e["default"]=b},e11f:function(n,e,t){"use strict";t.r(e);var o=t("7a23"),r={class:"author-info"},i=["src"],a={to:"#"},c={class:"info"},l=Object(o["createTextVNode"])("Duran Clayton"),d=Object(o["createElementVNode"])("p",null,"UI/UX Designer",-1),u={class:"settings-menmulist"},p=Object(o["createTextVNode"])(" Edit Profile "),s=Object(o["createTextVNode"])(" Account Settings "),f=Object(o["createTextVNode"])(" Change Password "),m=Object(o["createTextVNode"])(" Social Profile "),b=Object(o["createTextVNode"])(" Notification ");function x(n,e,x,h,g,j){var O=Object(o["resolveComponent"])("sdFeatherIcons"),v=Object(o["resolveComponent"])("a-upload"),w=Object(o["resolveComponent"])("sdHeading"),N=Object(o["resolveComponent"])("router-link"),V=Object(o["resolveComponent"])("sdCards");return Object(o["openBlock"])(),Object(o["createBlock"])(V,{headless:""},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("figure",null,[Object(o["createElementVNode"])("img",{src:t("6a06"),alt:""},null,8,i),Object(o["createVNode"])(v,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("a",a,[Object(o["createVNode"])(O,{type:"camera",size:"16"})])]})),_:1})]),Object(o["createElementVNode"])("figcaption",null,[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(w,{as:"h4"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),d])])]),Object(o["createElementVNode"])("nav",u,[Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,[Object(o["createVNode"])(N,{to:{name:"set-profile"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{type:"user",size:"14"}),p]})),_:1})]),Object(o["createElementVNode"])("li",null,[Object(o["createVNode"])(N,{to:{name:"set-account"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{type:"settings",size:"14"}),s]})),_:1})]),Object(o["createElementVNode"])("li",null,[Object(o["createVNode"])(N,{to:{name:"set-password"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{type:"key",size:"14"}),f]})),_:1})]),Object(o["createElementVNode"])("li",null,[Object(o["createVNode"])(N,{to:{name:"set-social"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{type:"users",size:"14"}),m]})),_:1})]),Object(o["createElementVNode"])("li",null,[Object(o["createVNode"])(N,{to:{name:"set-notification"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{type:"bell",size:"14"}),b]})),_:1})])])])]})),_:1})}var h={name:"AuthorBox",components:{}},g=t("d959"),j=t.n(g);const O=j()(h,[["render",x]]);e["default"]=O},e4ca:function(n,e,t){n.exports=t.p+"img/cover-img.9b9a4af0.png"}}]);
//# sourceMappingURL=Settings.5632bcc9.js.map