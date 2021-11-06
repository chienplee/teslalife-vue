(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["note-all"],{4566:function(n,t,e){"use strict";e.r(t),e.d(t,"NoteStyleCard",(function(){return c})),e.d(t,"Bullet",(function(){return l}));var r,a,o=e("8785"),i=e("f6f8"),c=i["b"].div(r||(r=Object(o["a"])(["\n    .ant-card{\n        border-radius: 15px !important;\n    }\n    .ant-card .ant-card-body{        \n        border-radius: 15px !important;\n        color: ",";    \n        padding-bottom: 20px !important;\n        padding-top: 20px !important;\n        transition: .35s;\n        h4{\n            display: flex;\n            align-items: center;\n            font-size: 16px;\n            margin-bottom: 16px;\n            color: ",";\n            justify-content: space-between;\n            svg{\n                color: #5A5F7D !important;\n                cursor: move;\n            }\n            .status-bullet{\n                position: relative;\n                bottom: 2px;\n                min-width: 7px;\n                height: 7px;\n                display: inline-block;\n                border-radius: 50%;\n               "," : 8px;\n               &.personal{\n                background: #5F63F2;\n               }\n               &.work{\n                background: #20C997;\n               }\n               &.social{\n                background: #FA8B0C;\n               }\n               &.important{\n                background: #2C99FF;\n               }\n            }\n        }\n        .actions{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 18px;\n            .star{\n                svg,\n                i,\n                span{\n                    color: "," !important;\n                }\n                &.active{\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    } \n                } \n            }\n            span{\n                display: inline-block;\n                margin: -5px;\n                a {\n                    margin: 5px;\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    }\n                }\n            }\n            .ant-dropdown-trigger{\n                svg{\n                    color: #868EAE;\n                }\n            }\n        }        \n    } \n    &.personal .ant-card .ant-card-body{\n        background: #5F63F240;\n        &:hover{\n            background: #5F63F290;\n        }\n    }\n    &.work .ant-card .ant-card-body{\n        background: #20C99740;\n        &:hover{\n            background: #20C99790;\n        }\n    }\n    &.social .ant-card .ant-card-body{\n        background: #FA8B0C40;\n        &:hover{\n            background: #FA8B0C90;\n        }\n    }\n    &.important .ant-card .ant-card-body{\n        background: #2C99FF40;\n        &:hover{\n            background: #2C99FF90;\n        }\n    }  \n"])),(function(n){var t=n.theme;return t["gray-color"]}),(function(n){var t=n.theme;return t["dark-color"]}),(function(n){var t=n.theme;return t.rtl?"margin-right":"margin-left"}),(function(n){var t=n.theme;return t["gray-color"]}),(function(n){var t=n.theme;return t["warning-color"]}),(function(n){var t=n.theme;return t["gray-color"]})),l=i["b"].span(a||(a=Object(o["a"])(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    ",": 10px;\n    &.personal{\n        background: #5F63F2;\n    }\n    &.work{\n        background: #20C997;\n    }\n    &.social{\n        background: #FA8B0C;\n    }\n    &.important{\n        background: #2C99FF;\n    }\n"])),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"}))},"7f52":function(n,t,e){"use strict";e.r(t);var r=e("7a23");function a(n,t,e,a,o,i){var c=Object(r["resolveComponent"])("NoteCard"),l=Object(r["resolveComponent"])("a-col"),d=Object(r["resolveComponent"])("draggable"),p=Object(r["resolveComponent"])("NoteCardWrap"),u=Object(r["resolveComponent"])("sdCards");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{title:"Note Lists"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{modelValue:n.myList,"onUpdate:modelValue":t[0]||(t[0]=function(t){return n.myList=t}),tag:"a-row","component-data":n.getComponentData(),handle:".handle","item-key":"key"},{item:Object(r["withCtx"])((function(n){var t=n.element;return[Object(r["createVNode"])(l,{xxl:8,xl:12,lg:12,sm:12,xs:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{data:t},null,8,["data"])]})),_:2},1024)]})),_:1},8,["modelValue","component-data"])]})),_:1})]})),_:1})}var o=e("9443"),i=e("cc71"),c=e("b76a"),l=e.n(c),d={name:"All",components:{NoteCardWrap:o["NoteCardWrap"],NoteCard:i["default"],draggable:l.a},setup:function(){function n(){return{gutter:24}}return{getComponentData:n}},computed:{myList:{get:function(){return this.$store.state.note.data},set:function(n){this.$store.dispatch("noteDraggable",n)}}}},p=d,u=e("d959"),s=e.n(u);const m=s()(p,[["render",a]]);t["default"]=m},9443:function(n,t,e){"use strict";e.r(t),e.d(t,"Span",(function(){return g})),e.d(t,"Style",(function(){return b})),e.d(t,"NoteNav",(function(){return h})),e.d(t,"MessageAction",(function(){return f})),e.d(t,"MailRightAction",(function(){return x})),e.d(t,"NoteWrapper",(function(){return j})),e.d(t,"NoteCardWrap",(function(){return v})),e.d(t,"Bullet",(function(){return y}));e("c68a");var r,a,o,i,c,l,d,p,u=e("0020"),s=e("8785"),m=e("f6f8"),g=m["b"].span(r||(r=Object(s["a"])(["\n    &.active{\n        color: green;\n        text-decoration: line-through;\n    }\n"]))),b=Object(m["b"])(u["a"])(a||(a=Object(s["a"])(["\n  margin-bottom: 30px;  \n  .ant-table{\n    padding-bottom: 30px;\n    border-radius: 10px;\n    tr{\n      th,\n      td{\n        &:first-child{\n          ",": 30px;\n        }\n        &:last-child{\n          ",": 30px;\n        }\n      }\n    }\n    .ant-table-selection-extra{\n      /* "," */\n      right: 15px;\n    }\n  }\n  .ant-table-thead{\n    >tr{\n      >th{\n        background: #fff;\n        &:first-child{\n          ",": 20px;\n          border-top-left-radius: 10px !important;\n        }\n        &:last-child{\n          border-top-right-radius: 10px !important;\n        }\n        .ant-table-selection-extra{\n          ",": -25px\n        }\n        .ant-dropdown-trigger{\n          svg{\n            width: 20px;\n            color: ",";\n          }\n        }\n        .email-top-search{\n          display: flex;\n          justify-content: ",";\n          align-items: center;\n          @media only screen and (max-width: 575px){\n            display: none;\n          }\n          .ant-select{\n            max-width: 350px;\n          }\n          .ant-select-selector{\n            height: 46px !important;\n          }\n          .ant-select-selection-search{\n            width: 100% !important;\n            .ant-select-selection-search-input{\n              text-align: right;\n              border-radius: 24px;\n              background: ",";\n              border: 0 none;\n              input{\n                height: 44px !important;\n                background: ",";\n                &:placeholder{\n                  color: ",";\n                }\n              }\n              .ant-input-suffix{\n                ",": 0;\n                .anticon-search{\n                  svg{\n                    color: ",";\n                  }\n                }\n              }\n            }\n          }\n        }\n        .email-top-right{\n          justify-content: flex-end;\n          .email-extra{\n            line-height: 1;\n            a{\n              color: ",";\n              &:not(:last-child){\n                ",": 25px;\n              }\n            }\n          }\n          .page-number{\n            display: inline-block\n            font-size: 14px;\n            font-weight: 400;\n            color: ",";\n            @media only screen and (max-width: 575px){\n              display: none;\n            }\n          }\n          .pagination-slider{\n            margin: ",";\n            .btn-paging{\n              display: inline-flex;\n              height: 30px;\n              width: 30px;\n              border-radius: 50%;\n              align-items: center;\n              justify-content: center;\n              &:hover{\n                background: ","10;\n              }\n              svg{\n                color: ",";\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  \n  .ant-table-tbody{\n    .ant-table-cell{\n      white-space: normal !important;\n      text-align: ",";\n    }\n    >tr{\n      &:hover{\n        box-shadow: 0 15px 40px ","20;\n        h1{\n          font-weight: 600;\n          color: ",";\n          a{\n            color: ",";\n          }\n        }\n        .email-time{\n          font-weight: 500;\n          color: ",";\n        }\n        >td{\n          background: #fff !important;\n          border-color: #ffffff;\n        }\n      }\n      h1 a{\n        font-weight: 500;\n        transition: 0s;\n      }\n      &.ant-table-row-selected{\n        &:hover{\n            >td{\n              background: #fff;\n            }\n        }\n        >td{\n          background: #fff;\n        }\n      }\n      >td{\n        padding: 15px 16px;\n        &:last-child{\n          text-align: ",";\n        }\n        .ant-checkbox-wrapper{\n          margin-top: 5px;\n        }\n        .email-time{\n          font-size: 13px;\n          font-weight: 400;\n          color: ",";\n        }\n      }\n    }\n  }\n  .ant-table-thead > tr > th .ant-table-header-column {\n    width: 100%;\n  }\n  .ant-table-thead > tr:first-child > th:last-child {\n    border-top-right-radius: 4px;\n    text-align: ",";\n  }\n  .ant-pagination-item {\n    display: none;\n  }\n  .ant-table-pagination.ant-pagination {\n    position: absolute;\n    z-index: 1;\n    ",": 0;\n  }\n  \n"])),(function(n){var t=n.theme;return t.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t.rtl?"padding-left":"padding-right"}),(function(n){var t=n.theme;return t.rtl?"right: 15px;":"left: -15px;"}),(function(n){var t=n.theme;return t.rtl?"padding-left":"padding-right"}),(function(n){var t=n.theme;return t.rtl?"left":"right"}),(function(n){var t=n.theme;return t["gray-solid"]}),(function(n){var t=n.theme;return t.rtl?"flex-start":"flex-end"}),(function(n){var t=n.theme;return t["bg-color-normal"]}),(function(n){var t=n.theme;return t["bg-color-normal"]}),(function(n){var t=n.theme;return t["extra-light-color"]}),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t["gray-solid"]}),(function(n){var t=n.theme;return t["gray-solid"]}),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t["light-color"]}),(function(n){var t=n.theme;return t.rtl?"0 15px 0 20px":"0 20px 0 15px"}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["light-color"]}),(function(n){var t=n.theme;return t.rtl?"right":"left"}),(function(n){var t=n.theme;return t["gray-solid"]}),(function(n){var t=n.theme;return t["dark-color"]}),(function(n){var t=n.theme;return t["dark-color"]}),(function(n){var t=n.theme;return t["dark-color"]}),(function(n){var t=n.theme;return t.rtl?"left":"right"}),(function(n){var t=n.theme;return t["gray-color"]}),(function(n){var t=n.theme;return t.rtl?"left":"right"}),(function(n){var t=n.theme;return t.rtl?"left":"right"})),h=m["b"].nav(o||(o=Object(s["a"])(["\n  ul{\n    list-style: none;\n    margin: 20px 0;\n    padding: 0;\n    li{\n      position: relative;\n      &.add-label-btn{\n        &:hover{\n          background: transparent;\n          a{\n            background: transparent;\n            color: "," !important;\n          }\n        }\n        a{\n          color: "," !important;\n          transition: .3s;\n          &:hover{\n            background: transparent;\n            svg,\n            i,\n            span{\n              color: ",";\n            }\n          }\n        }\n      }\n      a{\n        padding: 8px 20px;\n        display: flex;\n        align-items: center;\n        transition: 0.3s ease;\n        border-radius: 4px;\n        color: ",";\n        svg{\n          min-width: 18px;\n          ",": 14px;\n          color: ",";\n        }\n        &.active{\n          background: rgba(95,99,242,0.1);\n          color: ",";\n          svg,\n          i{\n            color: ",";\n          }\n        }\n      }\n\n      &:hover{\n        a{\n          background: rgba(95,99,242,0.1);\n          color: ",";\n          svg,\n          i{\n            color: ",";\n          }\n        }\n      }\n      .nav-text{\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n      }\n      .add-label{\n        box-shadow: 0 10px 40px rgba(146,153,184,0.2);\n        padding: 25px 30px;\n        position: relative;\n        width: calc(100% + 60px);\n        ",": 50%;\n        transform: translateX(-50%);\n        background: #fff;\n        border-radius: 8px;\n        @media only screen and (max-width: 1199px){\n          width: calc(100% + 40px);\n          padding: 15px;\n        }\n        h1{\n          text-align: left;\n          font-size: 16px;\n          line-height: 20px;\n          margin-bottom: 16px;\n          font-weight: 500;\n          transition: .3s;\n          color: ",";\n        }\n        input{\n          height: 44px;\n          border-radius: 2px;\n          border: 1px solid ",";\n        }\n        .btn-group{\n          margin-top: 15px;\n          display: flex;\n          align-items: center;\n          flex-wrap: wrap;\n          margin: 10px -5px -5px;\n          button{\n            margin: 5px;\n            height: 38px;\n          }\n          .ant-btn-default{\n            padding: 0 12px;\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .nav-labels{\n    margin-top: 35px;\n    p{\n      font-size: 12px;\n      text-align: left;\n      margin: 0;\n      padding: 0 15px;\n      color: #9299b8;\n      text-align: ",";\n      img,\n      svg,\n      i{\n        ",": 6px;\n      }\n    }\n    ul{\n      margin-top: 6px;\n      margin-bottom: 0;\n    }\n  }\n"])),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["light-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["gray-color"]}),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t["extra-light-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t.rtl?"right":"left"}),(function(n){var t=n.theme;return t["dark-color"]}),(function(n){var t=n.theme;return t["border-color-light"]}),(function(n){var t=n.theme;return t["light-color"]}),(function(n){var t=n.theme;return t.rtl?"right":"left"}),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"})),f=m["b"].div(i||(i=Object(s["a"])(["\n  display: flex;\n  align-items: center;\n  margin: 0 -5px;\n  @media only screen and (max-width: 575px){\n    flex-flow: row !important;\n    margin-bottom: 5px;\n  }\n  a{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    margin: 0 4px;\n    transition: 0.3s ease;\n    @media only screen and (max-width: 575px){\n      width: 25px;\n      height: 25px;\n    }\n    svg{\n      width: 16px;\n      color: ",";\n    }\n    &:hover{\n      background: rgba(95,99,242,0.05);\n      svg{\n        color: ",";\n      }\n    }\n  }\n"])),(function(n){var t=n.theme;return t["gray-solid"]}),(function(n){var t=n.theme;return t["primary-color"]})),x=m["b"].div(c||(c=Object(s["a"])(["\n  span{\n    color: ",";\n  }\n"])),(function(n){var t=n.theme;return t["light-color"]})),v=m["b"].div(l||(l=Object(s["a"])(["\n  min-height: 625px;\n  @media only screen and (max-width: 1199px){\n    min-height: 100%;\n  }\n"]))),j=m["b"].div(d||(d=Object(s["a"])(["\n  position: relative;\n  .sidebar-card{\n    .ant-card{\n      min-height: 710px;\n      .ant-card-body{\n        padding: 25px 0 !important;\n      }\n    }\n  }\n  .ant-card-body{\n    padding: 30px 30px 0 30px !important;\n  }\n  .trigger-close.ant-btn-link{\n    margin: 0 !important;\n    position: absolute;\n    ",": 20px;\n    top: 20px;\n    z-index: 99;\n    padding: 0;\n    background: transparent !important;\n  }\n  .trigger-col {\n    @media only screen and (max-width: 991px){\n      text-align: center;\n    }\n  }\n  .ant-btn-link{\n    background: #fff !important;\n    margin-bottom: 25px;\n    border-radius: 6px;\n    color: "," !important;\n    &:focus{\n      color: "," !important;\n    }\n  }\n  .note-sideabr{\n    &.hide{\n      transform: translateX(",");\n      transition: .35s ease-in;\n    }\n    &.show{\n      transform: translateX(0%);\n      transition: .35s ease-in;\n    }\n    @media only screen and (max-width: 991px){\n      display: block;\n      background: #fff;\n      position: fixed;\n      ",": 0;\n      top: 60px;\n      width: 280px;\n      height: 100%;\n      z-index: 99;\n    }\n    .ant-card{\n      min-height: 900px;\n      .ant-card-body{\n        padding: 0px !important;\n      }\n    }\n  }\n\n  .note-sidebar-top{\n    padding: 30px 30px 0;\n    @media only screen and (max-width: 991px){\n      padding: 60px 30px 0;\n    }\n    .ant-btn{\n      height: 44px;\n    }\n  }\n\n  .note-sidebar-bottom{\n    padding: 0 15px 25px 15px;\n  }\n\n  table{\n    .ant-table-tbody{\n      .ant-table-cell{\n        vertical-align: top;\n      }\n    }\n  }\n"])),(function(n){var t=n.theme;return t.rtl?"left":"right"}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t["primary-color"]}),(function(n){var t=n.theme;return t.rtl?"100%":"-100%"}),(function(n){var t=n.theme;return t.rtl?"right":"left"})),y=m["b"].span(p||(p=Object(s["a"])(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    ",": 10px;\n    &.personal{\n        background: #5F63F2;\n    }\n    &.work{\n        background: #20C997;\n    }\n    &.social{\n        background: #FA8B0C;\n    }\n    &.important{\n        background: #2C99FF;\n    }\n"])),(function(n){var t=n.theme;return t.rtl?"margin-left":"margin-right"}))},cc71:function(n,t,e){"use strict";e.r(t);e("a4d3"),e("e01a");var r=e("7a23"),a={class:"actions"},o={class:"nav-labels"},i=Object(r["createTextVNode"])(" Personal "),c=Object(r["createTextVNode"])(" Work "),l=Object(r["createTextVNode"])(" Social "),d=Object(r["createTextVNode"])(" Important "),p={to:"#"};function u(n,t,e,u,s,m){var g=Object(r["resolveComponent"])("sdFeatherIcons"),b=Object(r["resolveComponent"])("Bullet"),h=Object(r["resolveComponent"])("sdDropdown"),f=Object(r["resolveComponent"])("sdCards"),x=Object(r["resolveComponent"])("NoteStyleCard");return Object(r["openBlock"])(),Object(r["createBlock"])(x,{class:Object(r["normalizeClass"])(n.data.label)},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{headless:""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("h4",null,[Object(r["createElementVNode"])("span",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.data.title)+" ",1),Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])("status-bullet ".concat(n.data.label))},null,2)]),Object(r["createVNode"])(g,{class:"handle",type:"move"})]),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(n.data.description),1),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("span",null,[Object(r["createElementVNode"])("a",{class:Object(r["normalizeClass"])(n.data.stared?"star active":"star"),onClick:t[0]||(t[0]=function(){return n.onStarUpdate&&n.onStarUpdate.apply(n,arguments)}),to:"#"},[Object(r["createVNode"])(g,{type:"star",size:"16"})],2),Object(r["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(){return n.onHandleDelete()}),to:"#"},[Object(r["createVNode"])(g,{type:"trash-2",size:"16"})])]),Object(r["createVNode"])(h,null,{overlay:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("ul",null,[Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(){return n.onLabelChange("personal")}),to:"#"},[Object(r["createVNode"])(b,{class:"personal"}),i])]),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",{onClick:t[3]||(t[3]=function(){return n.onLabelChange("work")}),to:"#"},[Object(r["createVNode"])(b,{class:"work"}),c])]),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",{onClick:t[4]||(t[4]=function(){return n.onLabelChange("social")}),to:"#"},[Object(r["createVNode"])(b,{class:"social"}),l])]),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",{onClick:t[5]||(t[5]=function(){return n.onLabelChange("important")}),to:"#"},[Object(r["createVNode"])(b,{class:"important"}),d])])])])]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("a",p,[Object(r["createVNode"])(g,{type:"more-vertical",size:"20"})])]})),_:1})])]})),_:1})]})),_:1},8,["class"])}e("4de4");var s=e("84d4"),m=e("5502"),g=e("4566"),b={name:"NoteCard",props:{data:s["a"].object},components:{NoteStyleCard:g["NoteStyleCard"],Bullet:g["Bullet"]},setup:function(n){var t=Object(m["c"])(),e=t.state,a=t.dispatch,o=Object(r["computed"])((function(){return e.note.data})),i=Object(r["toRefs"])(n),c=i.data,l=function(n){a("onLabelUpdate",{data:o.value,id:c.value.key,value:n})},d=function(){var n=o.value.filter((function(n){return n.key!==c.value.key}));a("noteDeleteData",n)},p=function(){a("onStarUpdate",{data:o.value,id:c.value.key})};return{onStarUpdate:p,noteData:o,dispatch:a,onHandleDelete:d,onLabelChange:l}}},h=b,f=e("d959"),x=e.n(f);const v=x()(h,[["render",u]]);t["default"]=v}}]);
//# sourceMappingURL=note-all.1dbf8fe7.js.map