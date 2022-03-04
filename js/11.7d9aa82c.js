(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"9f58":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main-layout",{staticClass:"pe-layout--bg-white",class:{"pe-layout--normalize-padding":!0},scopedSlots:t._u([{key:"header",fn:function(){return[t.showFocusView?[o("div",{staticClass:"absolute-full fullscreen fixed-full pe-focus-view"})]:t._e(),o("q-tabs",t._l(t.tabRoutes,(function(t){return o("q-route-tab",{key:t.name,attrs:{icon:t.icon,to:{name:t.name,params:t.params}}})})),1)]},proxy:!0},{key:"default",fn:function(){return[o("router-view")]},proxy:!0},{key:"staticFooter",fn:function(){return[o("span")]},proxy:!0},{key:"footer",fn:function(){return[t.showPTFooter?[o("div",{staticClass:"pe-pt-footer"},[o("q-tabs",{attrs:{"active-color":"white","indicator-color":"transparent"}},[o("q-tab",{attrs:{name:"save",icon:"save"},on:{click:function(e){t.showSaveAndExitPT=!0}}}),o("q-tab",{attrs:{name:"close",icon:"cancel"},on:{click:function(e){t.showExitPT=!0}}})],1),o("q-dialog",{attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:t.showSaveAndExitPT,callback:function(e){t.showSaveAndExitPT=e},expression:"showSaveAndExitPT"}},[o("pe-modal-card",{attrs:{hasNotification:!0,hasActions:!0,hasFooter:!1,hasHeader:!1},scopedSlots:t._u([{key:"notificationHeading",fn:function(){return[o("h5",[t._v("Save and Exit?")])]},proxy:!0},{key:"notificationText",fn:function(){return[o("p",[t._v("\n                                All progress will be saved to your browser cache. Would you like to save and exit?\n                            ")])]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"col-xs-12 text-right"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"button",staticStyle:{"margin-left":"0"},attrs:{flat:"",ripple:{color:"white"},label:"Resume Test"}}),o("q-btn",{staticClass:"button button_color-accent",attrs:{flat:"",ripple:{color:"white"},label:"Save and Exit"},on:{click:t.saveAndClosePT}})],1)]},proxy:!0}],null,!1,2122550162)})],1),o("q-dialog",{attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:t.showExitPT,callback:function(e){t.showExitPT=e},expression:"showExitPT"}},[o("pe-modal-card",{attrs:{hasNotification:!0,hasActions:!0,hasFooter:!1,hasHeader:!1},scopedSlots:t._u([{key:"notificationHeading",fn:function(){return[o("h5",[t._v("Exit and Quit Test?")])]},proxy:!0},{key:"notificationText",fn:function(){return[o("p",[t._v("\n                                All progress will be discarded for this session. \n                                Are you sure you would like to quit?\n                            ")])]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"col-xs-12 text-right"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"button",staticStyle:{"margin-left":"0"},attrs:{flat:"",ripple:{color:"white"},label:"Resume Test"}}),o("q-btn",{staticClass:"button button_color-accent",attrs:{flat:"",ripple:{color:"white"},label:"Quit Session"},on:{click:t.closePT}})],1)]},proxy:!0}],null,!1,3756043449)})],1)],1)]:t.showReviewFooter?[o("div",{staticClass:"pe-review-footer"},[o("q-tabs",{attrs:{"active-color":"white","switch-indicator":"","indicator-color":"white"},model:{value:t.reviewTab,callback:function(e){t.reviewTab=e},expression:"reviewTab"}},[o("q-tab",{attrs:{name:"subjectCategories"}},[t._v("Content Areas")]),t.activeCategory?o("q-tab",{attrs:{name:"topics"}},[t._v("All Topics")]):t._e()],1)],1)]:[o("span",{staticStyle:{display:"none"}})]]},proxy:!0}])})},s=[],i=o("ded3"),n=o.n(i),c=o("2ef0"),r=o.n(c),l=o("2f62"),u=o("1f8c"),d=o("713b"),p=o("9d2b"),h={mixins:[u["a"]],data(){return{showSaveAndExitPT:!1,showExitPT:!1}},components:{"main-layout":d["default"],"pe-modal-card":p["a"]},computed:n()(n()({},Object(l["c"])("testGuide",["activePracticeTest","activeTestGuide","activeSubject","activeCategory","activeReviewPanel"])),{},{tabRoutes(){let t=r.a.cloneDeep(this.$route.matched[1].meta.tabRoutes),e=r.a.cloneDeep(this.$route.params);return t.forEach(t=>{t.params=e}),t},showPTFooter(){return this.showFocusView&&this.activePracticeTest},showReviewFooter(){return"review"==this.$route.name},reviewTab:{get(){return this.activeReviewPanel},set(t){t&&this.setActiveReviewPanel(t)}}}),watch:{showPTFooter(t){this.showModuleFooter=!!t}},methods:n()(n()({},Object(l["b"])("testGuide",["setActiveReviewPanel"])),{},{closePT(){this.showExitPT=!1,this.$root.$emit("closePracticeTest",{callback:()=>{console.log("CLOSE PTEST")}})},saveAndClosePT(){this.showSaveAndExitPT=!1,this.$root.$emit("saveAndClosePracticeTest",{callback:()=>{console.log("SAVE AND CLOSE PTEST")}})}})},v=h,f=o("2877"),w=o("429b"),b=o("de5e"),m=o("7867"),T=o("9c40"),x=o("7460"),y=o("24e8"),P=o("7f67"),k=o("eebe"),E=o.n(k),S=Object(f["a"])(v,a,s,!1,null,null,null);e["default"]=S.exports;E()(S,"components",{QTabs:w["a"],QPageSticky:b["a"],QRouteTab:m["a"],QBtn:T["a"],QTab:x["a"],QDialog:y["a"]}),E()(S,"directives",{ClosePopup:P["a"]})}}]);