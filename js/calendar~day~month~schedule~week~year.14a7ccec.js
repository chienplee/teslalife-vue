(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calendar~day~month~schedule~week~year"],{5045:function(n,r,t){"use strict";t.r(r),t.d(r,"CalendarWrapper",(function(){return h})),t.d(r,"Aside",(function(){return p})),t.d(r,"UpdatePopup",(function(){return u})),t.d(r,"BlockViewCalendarWrapper",(function(){return m})),t.d(r,"AddEventWrap",(function(){return f}));var e,o,a,i,l,c=t("8785"),d=t("f6f8"),p=d["b"].aside(e||(e=Object(c["a"])(["\n    @media only screen and (max-width: 1199px){\n        max-width: 370px;\n        margin: 0 auto;\n    }\n    .btn-create{\n        height: 50px;\n        font-size: 14px;\n        font-weight: 500;\n        width: 100%;\n        border-radius: 8px;\n        box-shadow: 0 3px 5px #FF69A505;\n        margin-bottom: 25px;\n    }\n    .ant-picker{\n        visibility: hidden;\n    }\n    .ant-picker .ant-picker-input{\n        display: none;\n    }\n    .listHeader{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 18px;\n        .add-label{\n            color: ",";\n        }\n    }\n\n    .event-list{\n        li{\n            &:not(:last-child){\n                margin-bottom: 14px;\n            }\n            a{\n                font-size: 14px;\n                font-weight: 400;\n                display: block;\n                color: ",";\n            }\n        }\n    }\n\n"])),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["gray-color"]})),h=d["b"].div(o||(o=Object(c["a"])(["\n    .calendar-display{\n        .vc-container{\n            border: 0 none;\n            .vc-header{\n                padding-top: 20px;\n                .vc-title{\n                    font-size: 16px;\n                }\n            }\n            .vc-weeks{\n                padding: 15px 15px 25px;\n            }\n            .vc-arrows-container{\n                padding: 20px 20px 8px;\n                svg{\n                    width: 8px;\n                    color: ",";\n                }\n                .vc-arrow{\n                    &:hover{\n                        background-color: transparent;\n                    }\n                }\n            }\n            .vc-day.is-not-in-month *{\n                color: ",";\n                opacity: 1;\n            }\n            .vc-day{\n                span{\n                    color: ",";\n                    font-weight: 400;\n                }\n                &.is-today{\n                    span{\n                        background: ",";\n                        color: #fff;\n                    }\n                }\n            }\n        }\n    }\n\n    .react-calendar{\n        font-family: 'Inter', sans-serif;\n        width: 100%;\n        border-radius: 10px;\n        padding: 24px 35px;\n        border: 0 none;\n        background-color: #fff;\n        box-shadow: 0 5px 20px ","03;\n        @media only screen and (max-width: 575px){\n            padding: 15px;\n        }\n        .react-calendar__viewContainer{\n            .react-calendar__year-view__months__month {\n                &:hover{\n                    background-color: transparent;\n                }\n                &.react-calendar__tile--hasActive{\n                    background-color: transparent;\n                    color: ","\n                }\n            }\n        }\n    }\n    .react-calendar__navigation{\n        margin-bottom: .5rem;\n        button{\n            &:hover,\n            &:focus{\n                background-color: #fff !important;\n            }\n        }\n        .react-calendar__navigation__arrow{\n            font-size: 20px;\n            min-width: auto;\n            color: ",";\n        }\n        .react-calendar__navigation__label{\n            font-size: 16px;\n            font-weight: 500;\n            color: ",";\n        }\n    }\n    .react-calendar__month-view__weekdays{\n        .react-calendar__month-view__weekdays__weekday{\n            abbr{\n                font-size: 13px;\n                font-weight: 500;\n                text-decoration: none;\n                color: ",";\n                @media only screen and (max-width: 1300px){\n                    font-size: 11px;\n                  }\n            }\n        }\n    }\n    .react-calendar__month-view__days{\n        .react-calendar__tile{\n            max-width: 43px !important;\n            padding: 1em 0.5em;\n            &:hover{\n                background-color: transparent;\n                font-weight: 500;\n                color: ",";\n            }\n            &.react-calendar__month-view__days__day--neighboringMonth{\n                abbr{\n                    color: ",";\n                }\n            }\n            abbr{\n                font-size: 14px;\n                color: ",";\n            }\n            &.react-calendar__tile--now{\n                padding: 0.929em 0.5em;\n                background-color: transparent;\n                border-radius: 50%;\n                border: 1px solid ",";\n            }\n            &.react-calendar__tile--active{\n                border-radius: 50%;\n                background-color: ",";\n                abbr{\n                    color: #fff;\n                }\n            }\n        }\n    }\n    .calendar-header{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 25px;\n        @media only screen and (max-width: 1599px){\n            flex-flow: column;\n        }\n        .calendar-header__left{\n            display: flex;\n            align-items: center;\n            position: relative;\n            .react-calendar__viewContainer{\n                min-width: 320px;\n                border-radius: 8px;\n                padding: 15px !important;\n                border: 0 none !important;\n                box-shadow: rgba(82, 63, 105, 0.15) 0px 15px 40px 0px !important;\n                @media only screen and (max-width: 479px){\n                    min-width: 280px;\n                }\n            }\n            @media only screen and (max-width: 1599px){\n                margin-bottom: 20px;\n            }\n            @media only screen and (max-width: 479px){\n                flex-flow: column;\n            }\n            .btn-today{\n                font-size: 13px;\n                font-weight: 500;\n                height: 34px;\n                color: ",";\n                border-color: ",";\n                background: transparent !important;\n                @media only screen and (max-width: 479px){\n                    margin-bottom: 15px;\n                }\n            }\n            .btn-navigate{\n                background: transparent !important;\n            }\n            .year-select{\n                .ant-select-selector{\n                    border: 0 none;\n                    .ant-select-selection-search{\n                        input{\n                            height: 35px;\n                        }\n                    }\n                    .ant-select-selection-item{\n                        font-size: 16px;\n                        font-weight: 500;\n                        color: ",";\n                    }\n                }\n                .ant-select-arrow{\n                    right: 18px;\n                    ",": 18px;\n                }\n            }\n            .react-calendar{\n                ",": 30px;\n                padding: 0;\n                border: none;\n                .react-calendar__navigation{\n                    align-items: center;\n                    margin: 0;\n                    border: none;\n                    .react-calendar__navigation__label{\n                        padding: 0 20px;\n                    }\n                    .react-calendar__navigation__arrow {\n                        border: 1px solid ",";\n                        border-radius: 5px;\n                        width: 34px;\n                        height: 34px;\n                        svg,\n                        img{\n                            width: 14px;\n                        }\n                    }\n                }\n                .react-calendar__viewContainer{\n                    position: absolute;\n                    background: #fff;\n                    z-index: 999;\n                    border: 1px solid #ddd;\n                    display: none;\n                    &.show{\n                        display: block;\n                    }\n                    .react-calendar__month-view__days{\n                        /* display: none !important; */\n                    }\n                }\n            }\n            .calender-head__navigation{\n                display: flex;\n                align-items: center;\n                ",": 30px;\n                @media only screen and (max-width: 479px){\n                    ",": 0px;\n                }\n                .btn-navigate{\n                    width: 34px;\n                    height: 34px;\n                    padding: 0;\n                    i,\n                    svg{\n                        color: ",";\n                        margin-right: 0;\n                    }\n                }\n                .date-label{\n                    display: inline-block;\n                    margin: 0 20px;\n                    font-size: 16px;\n                    font-weight: 500;\n                    color: ",";\n                    a{\n                        color: ",";\n                    }\n                    .ant-select-selector{\n                        display: flex;\n                        align-items: center;\n                        padding: 0;\n                    }\n                }\n            }\n        }\n        .calendar-header__right{\n            display: flex;\n            @media only screen and (max-width: 479px){\n                flex-flow: column;\n                align-items: center;\n            }\n            svg{\n                width: 14px;\n            }\n            ul{\n                li{\n                    display: inline-block;\n                    &:first-child{\n                        ",": 1px solid ",";\n                    }\n                    &:not(:first-child){\n                        a{\n                            ",": 0px;\n                            ",": 0px;\n                        }\n                    }\n                    &:not(:last-child){\n                        a{\n                            ",": 0px;\n                            ",": 0px;\n                        }\n                    }\n                    a{\n                        font-size: 13px;\n                        font-weight: 500;\n                        color: ",";\n                        border: 1px solid ",";\n                        ",": 0px;\n                        display: block;\n                        border-radius: 4px;\n                        padding: 6px 13.24px;\n                        &.active{\n                            color: #fff;\n                            border-color: ",";\n                            background-color: ",";\n                        }\n                    }\n                }\n            }\n            .schedule-list{\n                margin-left: 20px;\n                ",": 20px;\n                display: flex;\n                align-items: center;\n                color: ",";\n                @media only screen and (max-width: 479px){\n                    margin: 15px 0 0 0;\n                }\n                svg,\n                img,\n                i{\n                    margin-right: 6px;\n                    ",": 6px;\n                    color: ",";\n                }\n                &.active{\n                    color: ",";\n                }\n            }\n        }\n    }\n\n    .table-event{\n\n        border: 1px solid ",";\n        &.table-responsive{\n            @media only screen and (max-width: 1599px){\n                display: block;\n                width: 100%;\n                overflow-x: auto;\n            }\n        }\n        tr{\n            th,\n            td{\n                padding: 16px 0;\n                border-bottom: 1px solid ",";\n                &:first-child{\n                    min-width: 75px;\n                    padding: 16px 18px 16px 18px;\n                    ",": 1px solid ",";\n\n                }\n            }\n        }\n        thead{\n            th{\n                padding: 0 22px;\n                background-color: ",";\n                p{\n                    font-size: 14px;\n                    font-weight: 500;\n                    margin-bottom: 0;\n                }\n            }\n        }\n        tbody{\n            td{\n                padding: 0 10px;\n                font-size: 12px;\n                min-width: 140px;\n                color: ",";\n                .currentTime{\n                    width: calc(100% + 20px);\n                    height: 1px;\n                    display: block;\n                    position: relative;\n                    ",": -10px;\n                    z-index: 222;\n                    &:after{\n                        position: absolute;\n                        left: 0;\n                        ",": 0px;\n                        top: -6px;\n                        width: 12px;\n                        height: 12px;\n                        border-radius: 50%;\n                        content: '';\n                        background-color: ",";\n                    }\n                }\n                .day-event-item{\n                    width: 100%;\n                    display: block;\n                    border-radius: 3px 6px 6px 3px;\n                    padding: 6px 12px !important;\n                    margin: 2px 0 !important;\n                    position: relative;\n                    &:after{\n                        position: absolute;\n                        left: 0;\n                        ",": 0px;\n                        bottom: 0;\n                        width: 2px;\n                        height: 100%;\n                        border-radius: 6px 0 0 6px;\n                        content: '';\n                    }\n                    &.primary{\n                        background-color: #EFEFFE;\n                        color: ",";\n                        &:hover{\n                            color: ",";\n                        }\n                        &:after{\n                            background-color: ",";\n                        }\n                    }\n                    &.secondary{\n                        background-color: #FFF0F6;\n                        color: ",";\n                        &:hover{\n                            color: ",";\n                        }\n                        &:after{\n                            background-color: ",";\n                        }\n                    }\n                    &.success{\n                        background-color: #E8FAF4;\n                        color: ",";\n                        &:after{\n                            background-color: ",";\n                        }\n                    }\n                    &.warning{\n                        background-color: #FFF3E6;\n                        color: ",";\n                        &:after{\n                            background-color: ",";\n                        }\n                    }\n                    &.info{\n                        background-color: ","10;\n                        color: ",";\n                        &:after{\n                            background-color: ",";\n                        }\n                    }\n                    .event-title{\n                        display: block;\n                        font-size: 13px;\n                        font-weight: 500;\n                        margin-bottom: 4px;\n                    }\n                }\n            }\n\n        }\n    }\n\n    .emptyData{\n        min-height: 110px;\n        font-size: 18px;\n        align-items: center;\n        justify-content: center;\n        color: ",";\n        display: flex;\n    }\n\n    .event-week{\n        tr{\n            th,\n            td{\n                &:not(:last-child){\n                    ",": 1px solid ",";\n                }\n            }\n        }\n        thead{\n            tr{\n                th{\n                    text-align: center;\n                    .week-dayName{\n                        font-size: 13px;\n                        font-weight: 400;\n                        margin-bottom: 2px;\n                        color: ",";\n                    }\n                    .week-date{\n                        display: inline-block;\n                        line-height: 1.45;\n                        border-radius: 9px;\n                        font-size: 13px;\n                        &.primary{\n                            padding: 0 10px;\n                        }\n                    }\n                }\n            }\n        }\n        tbody{\n            .ant-dropdown-trigger{\n                display: inline-block;\n            }\n        }\n    }\n\n    .schedule-event{\n        tr{\n            &:hover{\n                box-shadow: 0 15px 40px ","15;\n                td{\n                    border-color: #fff;\n                }\n            }\n            td{\n                padding: 10px 20px !important;\n                vertical-align: top;\n                font-size: 14px;\n                &:first-child{\n                    ",": 0 none;\n                }\n                &.schedule-time{\n                    direction: ltr;\n                    min-width: 100px;\n                    width: 130px;\n                }\n                .ant-row{\n                    &:not(:last-child){\n                        margin-bottom: 10px;\n                    }\n                }\n                .schedule-date{\n                    font-weight: 500;\n                    color: ",";\n                }\n                .schedule-date-name{\n                    margin-left: 10px;\n                }\n                .event-title{\n                    font-weight: 500;\n                    color: ",";\n                    @media only screen and (max-width: 575px){\n                        display: inline-block;\n                        margin-top: 6px;\n                    }\n                }\n                .schedule-time{\n                    font-size: 13px;\n                    color: ",";\n                }\n            }\n        }\n    }\n\n    .events{\n        li{\n            position: relative;\n            height: 35px;\n            a{\n                position: absolute;\n                top: 0;\n                left: 0;\n                ",": 0;\n                padding: 5px 12px;\n                z-index: 1;\n                border-radius: 4px;\n                font-size: 13px;\n                &:hover{\n                    color: #fff;\n                }\n            }\n        }\n    }\n\n    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {\n        overflow-y: unset;\n    }\n\n"])),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r["extra-light-color"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["extra-light-color"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r.rtl?"left":"right"}),(function(n){var r=n.theme;return r.rtl?"margin-right":"margin-left"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"margin-right":"margin-left"}),(function(n){var r=n.theme;return r.rtl?"margin-right":"margin-left"}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r.rtl?"border-right":"border-left"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"border-top-right-radius":"border-top-left-radius"}),(function(n){var r=n.theme;return r.rtl?"border-bottom-right-radius":"border-bottom-left-radius"}),(function(n){var r=n.theme;return r.rtl?"border-top-left-radius":"border-top-right-radius"}),(function(n){var r=n.theme;return r.rtl?"border-bottom-left-radius":"border-bottom-right-radius"}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"border-right":"border-left"}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r.rtl?"margin-right":"margin-left"}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"margin-left":"margin-right"}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r["bg-color-light"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r["secondary-color"]}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["secondary-color"]}),(function(n){var r=n.theme;return r["secondary-color"]}),(function(n){var r=n.theme;return r["secondary-color"]}),(function(n){var r=n.theme;return r["success-color"]}),(function(n){var r=n.theme;return r["success-color"]}),(function(n){var r=n.theme;return r["warning-color"]}),(function(n){var r=n.theme;return r["warning-color"]}),(function(n){var r=n.theme;return r["info-color"]}),(function(n){var r=n.theme;return r["info-color"]}),(function(n){var r=n.theme;return r["info-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"right":"left"})),u=d["b"].div(a||(a=Object(c["a"])(["\n    .ant-card{\n        width: 320px !important;\n        .ant-card-body{\n            padding: 0 !important;\n\n            .headerUpdate{\n                border-radius: 8px 8px 0 0;\n                padding: 13px 20px;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                h4{\n                    font-size: 16px;\n                    font-weight: 500;\n                    color: #fff;\n                    margin-bottom: 0;\n                }\n                .action{\n                    display: flex;\n                    align-items: center;\n                    width: 100px;\n                    justify-content: flex-end;\n                    color: #fff;\n                    a{\n                        display: inline-flex;\n                        align-items: center;\n                        justify-content: center;\n                        min-width: 36px;\n                        height: 36px;\n                        border-radius: 50%;\n                        background-color: transparent;\n                        padding: 0;\n                        color: #fff;\n                        transition: .3s;\n                        &:hover{\n                            background-color: #F4F5F715;\n                        }\n                        svg{\n                            margin: 0;\n                        }\n                    }\n                }\n            }\n            .bodyUpdate{\n                padding: 20px;\n                .event-info{\n                    display: flex;\n                    align-items: flex-start;\n                    color: ",";\n                    &:last-child{\n                        margin-bottom: 0;\n                    }\n                    strong{\n                        margin-left: 6px;\n                        ",": 6px;\n                        font-weight: 500;\n                        color: ",";\n                    }\n                    svg,\n                    i{\n                        color: ",";\n                    }\n                    svg,\n                    i,\n                    img{\n                        margin: ",";\n                    }\n                    label{\n                        font-size: 13px;\n                        color: ",";\n                    }\n                }\n            }\n        }\n    }\n"])),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r.rtl?"margin-right":"margin-left"}),(function(n){var r=n.theme;return r["dark-color"]}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r.rtl?"4px 0 0 12px":"4px 12px 0 0"}),(function(n){var r=n.theme;return r["light-color"]})),m=d["b"].div(i||(i=Object(c["a"])(["\n    &.table-responsive{\n        table{\n            @media only screen and (max-width: 1599px){\n                display: block;\n                width: 100%;\n                overflow-x: auto;\n            }\n        }\n    }\n    .ant-fullcalendar{\n        border: 1px solid ",";\n        .ant-fullcalendar-calendar-body{\n            padding: 0 !important;\n        }\n        .ant-picker-calendar-date {\n            padding-top: 10px;\n            margin: 0 !important;\n            border-top: 0 none !important;\n        }\n        .ant-fullcalendar-cell,\n        .ant-fullcalendar-month-panel-cell{\n            min-width: 155px;\n            padding: 0;\n            ",": 1px solid ",";\n            .ant-picker-cell-inner{\n                min-width: 155px;\n            }\n            &:hover{\n                .ant-fullcalendar-date{\n                    background-color: transparent !important;\n                }\n            }\n            &.ant-fullcalendar-today{\n                .ant-fullcalendar-date{\n                    background-color: #EFEFFE !important;\n                    position: relative;\n                    &:after{\n                        position: absolute;\n                        left: 0;\n                        ",": 0;\n                        top: 0;\n                        height: 2px;\n                        width: 100%;\n                        content: '';\n                        background-color: ",";\n                    }\n                }\n            }\n            &.ant-fullcalendar-selected-day{\n                .ant-fullcalendar-date{\n                    background-color: transparent;\n                }\n            }\n            &.ant-picker-cell-in-view{\n                .ant-picker-calendar-date{\n                    color: ",";\n                }\n            }\n            .ant-picker-calendar-date{\n                color: ",";\n            }\n            .ant-picker-calendar-date-value{\n                margin: 6px 4px 10px 0\n            }\n            .ant-fullcalendar-date, .ant-fullcalendar-month{\n                border-top:0;\n                margin: 0;\n            }\n        }\n        table{\n            thead{\n                tr{\n                    th{\n                        padding: 16px 20px !important;\n                        background-color: "," !important;\n                        color: ",";;\n                    }\n                }\n            }\n            tr{\n                &:last-child{\n                    td{\n                        border-bottom: 0 none;\n                    }\n                }\n                th,\n                td{\n                    ",": 0;\n                    border-bottom: 1px solid ",";\n                    &:last-child{\n                        border-right: 0 none;\n                        ",": 0 none;\n                    }\n                }\n            }\n        }\n    }\n"])),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r["primary-color"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r["extra-light-color"]}),(function(n){var r=n.theme;return r["bg-color-light"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r.rtl?"border-left":"border-right"})),f=d["b"].div(l||(l=Object(c["a"])(["\n    label{\n        font-weight: 400 !important;\n        color: "," !important;\n        margin-bottom: 0 !important;\n    }\n    .ant-form-item{\n        span.label{\n            @media only screen and (max-width: 575px){\n                display: inline-block;\n                margin-bottom: 10px;\n            }\n        }\n    }\n    .date-time-picker{\n        margin: -5px;\n        flex-wrap: wrap;\n    }\n    .ant-calendar-picker{\n        padding: 5px;\n        flex: 0 0 50%;\n    }\n    .ant-time-picker{\n        width: auto;\n        padding: 5px;\n        flex: 0 0 50%;\n        .ant-time-picker-input{\n            width: 100%;\n            height: 48px;\n        }\n    }\n    .ant-form-item-control-input{\n        min-height: 46px;\n        textarea{\n            min-height: 104px;\n            resize: none;\n        }\n        .ant-input{\n            border: 1px solid ",";\n            &::placeholder{\n                color: ",";\n            }\n        }\n    }\n    .ant-row{\n        flex-flow: row !important;\n        align-items: center;\n        @media only screen and (max-width: 575px){\n            flex-flow: column !important;\n            align-items: flex-start;\n        }\n        &.event-desc{\n            align-items: flex-start;\n        }\n        .ant-form-item-control{\n            @media only screen and (max-width: 575px){\n                width: 100%;\n            }\n        }\n    }\n\n    .date-time-picker {\n        .ant-picker{\n            min-width: auto;\n            width: 100%;\n            &:not(:last-child){\n                ",": 10px;\n            }\n        }\n        .ant-picker-input{\n            padding: 0 30px;\n            position: relative;\n            @media only screen and (max-width: 575px){\n                padding: 0 20px 0 25px;\n            }\n            .ant-picker-suffix{\n                position: absolute;\n                ",": 0;\n                top: 50%;\n                transform: translateY(-50%);\n                @media only screen and (max-width: 575px){\n                    ",": 0;\n                }\n                svg{\n                    color: ",";\n                }\n            }\n        }\n    }\n    .add-event-footer{\n        .ant-btn-white{\n            color: "," !important;\n        }\n        .btn-save{\n            height: 38px;\n            padding: 0 25px;\n        }\n    }\n"])),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["border-color-light"]}),(function(n){var r=n.theme;return r["gray-color"]}),(function(n){var r=n.theme;return r.rtl?"margin-left":"margin-right"}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r.rtl?"right":"left"}),(function(n){var r=n.theme;return r["light-color"]}),(function(n){var r=n.theme;return r["light-color"]}))}}]);
//# sourceMappingURL=calendar~day~month~schedule~week~year.14a7ccec.js.map