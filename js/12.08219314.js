(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"3edf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main-layout",{scopedSlots:e._u([{key:"default",fn:function(){return[a("user-banner",{attrs:{user:e.currentUser}}),a("router-view")]},proxy:!0}])})},s=[],r=a("713b"),n=a("1f8c"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pe-user-banner"},[a("div",{staticClass:"row pe-content-container"},[a("q-card",{staticClass:"pe-user-banner__card col-sm-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"pe-banner-bio col-xs-12 col-sm-12 col-md-8"},[a("h3",[e._v(e._s(e.user.profile.firstName)+" "+e._s(e.user.profile.lastName))]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    ")])]),a("div",{staticClass:"pe-banner-edit--mobile col-xs-12 col-sm-8 col-md-2 lt-lg"},[a("div",{staticClass:"pe-banner-edit__badges"},[a("h6",[e._v("Recent Badges")]),e._l(e.user.profile.badges,(function(e){return a("q-img",{key:e.image,attrs:{src:e.image,ratio:1}})}))],2),a("div",{staticClass:"pe-banner-edit__edit"},[a("q-btn",{attrs:{flat:"",label:"Edit Profile","icon-right":"app:pe-icon-arrow-right"}})],1)]),a("div",{staticClass:"pe-banner-edit col-md-2 text-right gt-md"},[a("div",{staticClass:"pe-banner-edit__badges"},[a("h6",[e._v("Recent Badges")]),e._l(e.user.profile.badges,(function(e){return a("q-img",{key:e.image,attrs:{src:e.image,ratio:1}})}))],2),a("q-btn",{attrs:{flat:"",label:"Edit Profile","icon-right":"app:pe-icon-arrow-right"}})],1),a("div",{staticClass:"pe-banner-profile col-xs-12 col-sm-4 col-md-2 text-center"},[a("q-img",{staticClass:"pe-banner-profile__img col-md-6 col-lg-12",attrs:{src:"/images/avatar-placeholder.jpg",ratio:1}}),a("div",{staticClass:"col-md-4 col-lg-12"},[a("q-chip",{staticClass:"pe-banner-profile__points",attrs:{size:"sm",color:"orange","text-color":"white","icon-right":"star"}},[e._v("\n                            "+e._s(e.user.profile.points)+"\n                        ")])],1)],1)])])],1)])},l=[],c={props:["user"]},u=c,d=a("2877"),p=a("f09f"),m=a("068f"),b=a("9c40"),f=a("b047"),g=a("eebe"),_=a.n(g),v=Object(d["a"])(u,o,l,!1,null,null,null),h=v.exports;_()(v,"components",{QCard:p["a"],QImg:m["a"],QBtn:b["a"],QChip:f["a"]});var C={mixins:[n["a"]],components:{"main-layout":r["default"],"user-banner":h},computed:{tabRoutes(){return this.$route.matched[0].meta.tabRoutes}}},x=C,q=a("de5e"),w=Object(d["a"])(x,i,s,!1,null,null,null);t["default"]=w.exports;_()(w,"components",{QPageSticky:q["a"],QBtn:b["a"]})}}]);