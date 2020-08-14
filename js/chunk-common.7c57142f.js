(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"1d51":function(e,t,a){"use strict";var r=a("e173");t["a"]={mixins:[r["a"]],data(){return{drawerRoutes:[{routerLink:{name:"register"},label:"Sign Up",icon:"how_to_reg",caption:"Start Your Free Trial!"},{routerLink:{name:"about"},label:"About",icon:"face",caption:"Learn about ProEdify"},{routerLink:{name:"faq"},label:"FAQs",icon:"question_answer",caption:"Frequently Asked Questions"},{routerLink:{name:"contact"},label:"Contact",icon:"contact_support",caption:"Reach out to us!"},{routerLink:{name:"b2b"},label:"B2B",icon:"business_center",caption:"ProEdify for Business!"}],drawerRoutesAuthenticated:[{routerLink:{name:"announcements"},label:"Announcements",icon:"notifications",caption:""},{routerLink:{name:"about"},label:"About",icon:"face",caption:""},{routerLink:{name:"faq"},label:"FAQs",icon:"question_answer",caption:""},{routerLink:{name:"contact"},label:"Contact Us",icon:"contact_support",caption:""}]}},methods:{logoutUser(){this.logout(),this.showDrawer=!1,this.$router.push({name:"landingPage"})},routeToHome(){this.isAuthenticated?this.$router.push({name:"home"}):this.$router.push({name:"landingPage"})},routeTo(e){this.$router.push({name:e})},routeToTestGuide(e,t,a){this.$router.push({name:e,params:{product:t,subject:a}})},goBack(){this.$router.go(-1)},hasRoute(e){const t=this.$router.resolve({name:e});return!(!t||"/"===t.href)}}}},"1f4a":function(e,t,a){e.exports=a.p+"img/ProEdify-Logo_FINAL.a9a06453.png"},"1f8c":function(e,t,a){"use strict";a("bd4c");var r=a("ff0a"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticClass:"pe-login-card"},[r("q-card-section",{staticClass:"row pe-login-card__section"},[r("div",{staticClass:"col-xs-3 pe-login-card__brand"},[r("img",{staticClass:"pe-login-card__brand-image",attrs:{sizes:"(max-width: 479px) 30vw, 100px",src:"images/ProEdify-Logo_FINAL.png",srcset:"images/ProEdify-Logo_FINAL.png 500w, images/ProEdify-Logo_FINAL.png 800w, images/ProEdify-Logo_FINAL.png 1080w, "+a("1f4a")+" 1600w, "+a("1f4a")+" 2000w, images/ProEdify-Logo_FINAL.png 2438w"}})]),r("h1",{staticClass:"col-xs-8 pe-login-card__headline text-right"},[e._v("Sign In")]),r("div",{staticClass:"absolute-right pe-login-card__close"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",flat:"",dense:"",icon:"close"}})],1)]),r("q-card-section",{staticClass:"row justify-center pe-login-card__section"},[r("div",{staticClass:"col-xs-10 pe-login-card__login"},[r("q-form",{ref:"loginForm",staticClass:"pe-login-form",on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[r("q-field",{staticClass:"pe-field",attrs:{"no-error-icon":"",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"control",fn:function(){return[r("pe-input-field",{staticClass:"col",attrs:{placeholder:"E-mail"},model:{value:e.loginEmail,callback:function(t){e.loginEmail=t},expression:"loginEmail"}})]},proxy:!0}]),model:{value:e.loginEmail,callback:function(t){e.loginEmail=t},expression:"loginEmail"}},[r("template",{slot:"append"}),r("template",{slot:"loading"},[r("span")])],2),r("q-field",{staticClass:"pe-field",attrs:{"no-error-icon":"",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"control",fn:function(){return[r("pe-input-field",{staticClass:"col",attrs:{type:"password",placeholder:"Password"},model:{value:e.loginPassword,callback:function(t){e.loginPassword=t},expression:"loginPassword"}})]},proxy:!0}]),model:{value:e.loginPassword,callback:function(t){e.loginPassword=t},expression:"loginPassword"}},[r("template",{slot:"append"}),r("template",{slot:"loading"},[r("span")])],2)],1)],1)]),r("q-card-actions",{staticClass:"row pe-login-card__actions",attrs:{align:"center"}},[r("div",{staticClass:"col-xs-10 text-left"},[r("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button button_color-primary",attrs:{label:"Submit",flat:""},on:{click:e.loginUser}}),r("pe-checkbox",{attrs:{id:"rememberMe","modifier-styles":[""]},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v("\n                    Remember Me\n                ")])],1)]),r("q-separator",{attrs:{inset:""}}),r("q-card-section",{staticClass:"row pe-login-card__section"},[r("div",{staticClass:"col-xs-3 pe-login-card__brand"}),r("h1",{staticClass:"col-xs-8 pe-login-card__headline text-right"},[e._v("Forgot Password")])]),r("q-card-section",{staticClass:"row justify-center pe-login-card__section"},[r("div",{staticClass:"col-xs-10 pe-login-card__forgot"},[r("q-form",{ref:"forgotForm",staticClass:"pe-login-form",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("q-field",{staticClass:"pe-field",attrs:{"no-error-icon":"",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"control",fn:function(){return[r("pe-input-field",{staticClass:"col",attrs:{type:"email",placeholder:"E-mail"},model:{value:e.forgotEmail,callback:function(t){e.forgotEmail=t},expression:"forgotEmail"}})]},proxy:!0}]),model:{value:e.forgotEmail,callback:function(t){e.forgotEmail=t},expression:"forgotEmail"}},[r("template",{slot:"append"}),r("template",{slot:"loading"},[r("span")])],2)],1)],1)]),r("q-card-actions",{staticClass:"row pe-login-card__actions",attrs:{align:"center"}},[r("div",{staticClass:"col-xs-10 text-left"},[r("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button button_color-primary",attrs:{label:"Submit",flat:""}})],1)])],1)},s=[],i=a("ded3"),n=a.n(i),l=a("2f62"),c=a("eac7"),u=a("8773"),p={data(){return{loginEmail:"",loginPassword:"",forgotEmail:"",rememberMe:""}},components:{"pe-input-field":c["a"],"pe-checkbox":u["a"]},methods:n()(n()({},Object(l["b"])("auth",["login"])),{},{loginUser(){this.$refs.loginForm.validate().then(e=>{e&&(this.$root.$emit("closeLogin"),this.$root.$emit("appLoading",!0),this.login({password:this.loginPassword,username:this.loginEmail}).then(e=>{console.log(e),this.$route.query.redirect?(this.$router.push(this.$route.query.redirect||"/"),this.$root.$emit("appLoading",!1)):this.$root.$emit("appLoading",!1)}))})}})},d=p,m=a("2877"),h=a("f09f"),f=a("a370"),g=a("9c40"),b=a("0378"),v=a("8572"),_=a("4b7e"),w=a("eb85"),y=a("7f67"),C=a("714f"),x=a("eebe"),k=a.n(x),$=Object(m["a"])(d,o,s,!1,null,null,null),q=$.exports;k()($,"components",{QCard:h["a"],QCardSection:f["a"],QBtn:g["a"],QForm:b["a"],QField:v["a"],QCardActions:_["a"],QSeparator:w["a"]}),k()($,"directives",{ClosePopup:y["a"],Ripple:C["a"]});var L=a("6165"),A=a("1d51");t["a"]={mixins:[L["a"],A["a"]],components:{"video-search":r["a"],login:q},methods:{checkAlerts(){setTimeout(()=>{this.showAlertsDropdown&&this.userCheckedUpdates({user:this.currentUser,date:Date.now()})},2e3)}},computed:{breadcrumbs(){let e=this.$route.path.split("/");e.shift();let t=null,a=null,r=null,o=e.reduce((e,o,s)=>(r=this.$route.matched[s],r&&(t=r.meta.breadCrumb,a=r.name),e.push({breadcrumb:t,path:o,routerLink:{name:a,params:this.$route.params}}),e),[]);return o}}}},6165:function(e,t,a){"use strict";a("fb6a"),a("5319");var r=a("ded3"),o=a.n(r),s=a("bd4c"),i=a("2f62");t["a"]={data(){return{colorsAlt:["#FFA96E","#EA6666","#9FACED","#419ACC","#EFB3B7","#868686"],colorClassesAccent:["pe-color--accent2","pe-color--accent3","pe-color--accent4","pe-color--accent5","pe-color--accent6"],colorClassesPrimary:["pe-color--primary5","pe-color--primary4","pe-color--primary3","pe-color--primary2","pe-color--primary1"],colorClassesAlt:["pe-color--orange","pe-color--red","pe-color--lavender","pe-color--blue","pe-color--pink","pe-color--lightgrey"],backgroundColorClassesAccent:["pe-background-color--accent2","pe-background-color--accent3","pe-background-color--accent4","pe-background-color--accent5","pe-background-color--accent6"],backgroundColorClassesPrimary:["pe-background-color--primary5","pe-background-color--primary4","pe-background-color--primary3","pe-background-color--primary2","pe-background-color--primary1"],backgroundColorClassesAlt:["pe-background-color--orange","pe-background-color--red","pe-background-color--lavender","pe-background-color--blue","pe-background-color--pink","pe-background-color--lightgrey"]}},computed:o()(o()({},Object(i["c"])("display",["loadingSpinner","loginModal","drawer","alertsDropdown","focusView"])),{},{showLoadingSpinner:{get(){return this.loadingSpinner},set(e){this.setLoadingSpinner(e)}},showLoginModal:{get(){return this.loginModal},set(e){this.setLoginModal(e)}},showDrawer:{get(){return this.drawer},set(e){this.setDrawer(e)}},showAlertsDropdown:{get(){return this.alertsDropdown},set(e){this.setAlertsDropdown(e)}},showFocusView:{get(){return this.focusView},set(e){this.setFocusView(e)}}}),methods:o()(o()({},Object(i["b"])("display",["setLoadingSpinner","setLoginModal","setDrawer","setAlertsDropdown","setFocusView"])),{},{openLoginModal(){this.showLoginModal=!0},peNotify(e,t){this.$q.notify({message:e,icon:"announcement",position:"bottom-left",color:t||"primary"})},backgroundColorClass(e,t="primary"){let a=this.backgroundColorClassesPrimary;return"alt"==t?a=this.backgroundColorClassesAlt:(t="accent")&&(a=this.backgroundColorClassesAccent),a[e]?a[e]:"no-background-at-index"},colorClass(e,t="primary"){let a=this.colorClassesPrimary;return"alt"==t?a=this.colorClassesAlt:(t="accent")&&(a=this.colorClassesAccent),a[e]?a[e]:"no-color-at-index"},progressClass(e,t){let a=[],r=0;return-1!=t?e.percentComplete<=.5?(r=Math.round(10*e.percentComplete-1),a.push(this.colorClassesAccent[r])):1==e.percentComplete?a.push(this.colorClassesPrimary[4]):(r=Math.floor(10*e.percentComplete-5),a.push(this.colorClassesPrimary[r])):e.percentComplete<=.5?(r=Math.round(10*e.percentComplete-1),a.push(this.backgroundColorClassesAccent[r])):1==e.percentComplete?a.push(this.backgroundColorClassesPrimary[4]):(r=Math.floor(10*e.percentComplete-5),a.push(this.backgroundColorClassesPrimary[r])),a}}),filters:{displayDate(e){return s["a"].formatDate(e,"hh:mma, MM/DD/YY")},formatDate(e){return s["a"].formatDate(e,"MMM D YYYY")},abbreviate(e){let t=this.stripHTML(e);return t.length>25?t.slice(0,22)+"...":t},stripHTML(e){return e.replace(/(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/g,"")}},mounted(){this.$root.$on("closeLogin",()=>{this.showLoginModal=!1}),this.$root.$on("appLoading",e=>{this.showLoadingSpinner=e}),this.$route.query&&this.$route.query.login&&(this.showLoginModal=!0)}}},"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"pe-layout",attrs:{view:"hHr lpR ffr"}},[a("q-header",[a("q-toolbar",{staticClass:"row"},[a("div",{staticClass:"col-md-2 col-sm-2 col-xs-4 pe-nav-item pe-nav-item--brand"},[a("q-btn",{staticClass:"pe-nav-item__brand",attrs:{stretch:"",flat:""},on:{click:e.routeToHome}},[a("img",{staticClass:"pe-nav-item__brand-image",attrs:{sizes:"(max-width: 479px) 30vw, 100px",src:"/images/ProEdify-Logo_FINAL_WHITE.png",srcset:"/images/ProEdify-Logo_FINAL_WHITE.png 500w, /images/ProEdify-Logo_FINAL_WHITE.png 800w, /images/ProEdify-Logo_FINAL_WHITE.png 1080w, /assets/images/ProEdify-Logo_FINAL_WHITE.png 1600w, /assets/images/ProEdify-Logo_FINAL_WHITE.png 2000w, /images/ProEdify-Logo_FINAL_WHITE.png 2438w"}})])],1),a("div",{staticClass:"col-md-8 col-sm-6 pe-nav-item pe-nav-item--search"},[a("video-search",{attrs:{navbar:!0}})],1),a("div",{staticClass:"col-md-8 col-sm-6 col-xs-3 pe-nav-item pe-nav-item--videos"},[a("q-btn",{staticClass:"col pe-nav-item__button",attrs:{stretch:"",flat:"",icon:"play_arrow"},on:{click:function(t){return e.routeTo("videoBrowser")}}})],1),e.isAuthenticated?[a("div",{staticClass:"col-md-1 col-sm-2 col-xs-3 pe-nav-item",class:e.showAlertsDropdown?"is-active":""},[a("q-btn-dropdown",{staticClass:"pe-nav-item__dropdown",attrs:{stretch:"",flat:""},on:{click:e.checkAlerts},scopedSlots:e._u([{key:"label",fn:function(){return[a("q-icon",{attrs:{name:"notifications"}},[e.getUserAlerts?a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[a("span",{staticClass:"pe-user-alerts"},[e._v(e._s(e.getUserAlerts.length))])]):e._e()],1)]},proxy:!0}],null,!1,4109624161),model:{value:e.showAlertsDropdown,callback:function(t){e.showAlertsDropdown=t},expression:"showAlertsDropdown"}},[a("q-list",e._l(e.getAnnouncements,(function(t){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.id,attrs:{clickable:"",tabindex:"0"},on:{click:function(t){return e.routeTo("announcements")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{icon:"folder",color:"secondary","text-color":"white"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e._f("formatDate")(t.datePublished)))])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"info"}})],1)],1)})),1)],1)],1)]:[a("div",{staticClass:"col-md-2 col-sm-2 col-xs-3 pe-nav-item"},[a("q-btn",{staticClass:"col pe-nav-item__button",attrs:{stretch:"",flat:"",label:"Sign In"},on:{click:e.openLoginModal}})],1),a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showLoginModal,callback:function(t){e.showLoginModal=t},expression:"showLoginModal"}},[a("login")],1)],a("div",{staticClass:"col-md-1 col-sm-2 col-xs-2 pe-nav-item",class:e.showDrawer?"is-active":""},[a("q-btn",{staticClass:"col pe-nav-item__button pe-nav-item__button--menu",attrs:{stretch:"",flat:"",icon:e.showDrawer?"close":"menu"},on:{click:function(t){e.showDrawer=!e.showDrawer}}})],1)],2),e._t("header")],2),a("q-drawer",{attrs:{persistent:!0,bordered:"","content-class":"",side:"right"},model:{value:e.showDrawer,callback:function(t){e.showDrawer=t},expression:"showDrawer"}},[e.isAuthenticated?[e.showDrawer?a("q-btn",{staticClass:"pe-drawer-button",class:e.showDrawer?"is-active":"",attrs:{flat:"",stretch:"","aria-label":"Menu",icon:"close"},on:{click:function(t){e.showDrawer=!e.showDrawer}}}):e._e(),a("q-img",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-center pe-drawer-avatar",on:{click:function(t){return e.routeTo("settings")}}},[a("div",{staticClass:"pe-drawer-avatar__content",class:"settings"==e.$route.name?"is-active":""},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"50px"}},[a("img",{attrs:{src:"/images/avatar-placeholder.jpg"}})]),a("div",{},[e._v(e._s(e.currentUserFullname))]),a("div",[e._v(e._s(e.currentUsername))])],1)]),a("q-list",{staticClass:"pe-drawer-list"},[e._l(e.drawerRoutesAuthenticated,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.label,class:t.routerLink.name==e.$route.name?"is-active":"",attrs:{clickable:"",tag:"a",to:t.routerLink}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.caption))])],1)],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",tag:"a"},on:{click:e.logoutUser}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"power_settings_new"}})],1),a("q-item-section",[a("q-item-label",[e._v("Sign Out")])],1)],1)],2)]:[e.showDrawer?a("q-btn",{staticClass:"pe-drawer-button",class:e.showDrawer?"is-active":"",attrs:{stretch:"",outline:"","aria-label":"Menu",icon:"close"},on:{click:function(t){e.showDrawer=!e.showDrawer}}}):e._e(),a("q-list",{staticClass:"pe-drawer-list"},e._l(e.drawerRoutes,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.label,staticClass:"q-item--logged-out",class:t.routerLink.name==e.$route.name?"is-active":"",attrs:{clickable:"",tag:"a",to:t.routerLink}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.caption))])],1)],1)})),1)]],2),a("q-scroll-area",{ref:"scrollArea",attrs:{"bar-style":{width:"10px",opacity:1,zIndex:"1001"},"thumb-style":{width:"10px",opacity:.3,zIndex:"1002"}},on:{scroll:e.scroll}},[a("q-page-container",[e._t("default",[a("router-view")]),e._t("footer",[a("q-footer",{staticClass:"pe-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12 pe-footer__patreon"},[a("img",{attrs:{src:"/images/footer/Patreon_Wordmark_Black.svg",alt:"Patreon"}}),a("a",{attrs:{href:"https://www.patreon.com/proedify"}},[e._v("Support our content by becoming a patron")])]),a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12 pe-footer__social"},[a("h5",{on:{click:function(t){return e.router.push({name:"newsletter"})}}},[e._v("Sign Up For Our Newsletter")]),a("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"img:/images/footer/instagram-brands.svg"}}),a("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"img:/images/footer/twitter-brands.svg"}}),a("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"img:/images/footer/facebook-f-brands.svg"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 pe-footer__legal"},[a("p",{staticClass:"pe-footer__legal-terms"},[a("span",[e._v("Terms of Service")]),e._v(" |\n                                    "),a("span",[e._v("EULA")]),e._v(" |\n                                    "),a("span",[e._v("Privacy Policy")])]),a("p",{staticClass:"pe-footer__legal-copyright"},[e._v("\n                                    © ProEdify Inc., 2020\n                                ")])])])])])],2)],1)],1)},o=[],s=a("1f8c"),i={mixins:[s["a"]],data(){return{target:null}},mounted(){this.target=this.$refs.scrollArea.$el.querySelector(".scroll")},methods:{scroll(e){}}},n=i,l=a("2877"),c=a("4d5a"),u=a("e359"),p=a("65c6"),d=a("9c40"),m=a("2c91"),h=a("f20b"),f=a("0016"),g=a("58a8"),b=a("1c1c"),v=a("0170"),_=a("66e5"),w=a("4074"),y=a("cb32"),C=a("24e8"),x=a("9404"),k=a("068f"),$=a("4983"),q=a("09e3"),L=a("7ff0"),A=a("7f67"),S=a("714f"),E=a("eebe"),P=a.n(E),D=Object(l["a"])(n,r,o,!1,null,null,null);t["default"]=D.exports;P()(D,"components",{QLayout:c["a"],QHeader:u["a"],QToolbar:p["a"],QBtn:d["a"],QSpace:m["a"],QBtnDropdown:h["a"],QIcon:f["a"],QBadge:g["a"],QList:b["a"],QItemLabel:v["a"],QItem:_["a"],QItemSection:w["a"],QAvatar:y["a"],QDialog:C["a"],QDrawer:x["a"],QImg:k["a"],QScrollArea:$["a"],QPageContainer:q["a"],QFooter:L["a"]}),P()(D,"directives",{ClosePopup:A["a"],Ripple:S["a"]})},8773:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"checkbox",class:[e.modifierStyles,{"is-disabled":e.disabled,"is-checked":e.isChecked,"is-indeterminate":e.indeterminate,"is-focus":e.focus}]},[e.trueLabel||e.falseLabel?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"checkbox__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled,"true-value":e.trueLabel,"false-value":e.falseLabel},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e._q(e.model,e.trueLabel)},on:{change:[function(t){var a=e.model,r=t.target,o=r.checked?e.trueLabel:e.falseLabel;if(Array.isArray(a)){var s=null,i=e._i(a,s);r.checked?i<0&&(e.model=a.concat([s])):i>-1&&(e.model=a.slice(0,i).concat(a.slice(i+1)))}else e.model=o},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"checkbox__input",attrs:{type:"checkbox",id:e.id,disabled:e.disabled,name:e.name},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var a=e.model,r=t.target,o=!!r.checked;if(Array.isArray(a)){var s=e.label,i=e._i(a,s);r.checked?i<0&&(e.model=a.concat([s])):i>-1&&(e.model=a.slice(0,i).concat(a.slice(i+1)))}else e.model=o},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}),e.$slots.default||e.label?a("label",{staticClass:"checkbox__label",attrs:{for:e.id}},[a("span",[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.label))]],2)]):e._e()])},o=[],s=(a("c975"),a("920c"));var i={name:"Checkbox",mixins:[s["a"]],componentName:"Checkbox",data(){return{selfModel:!1,focus:!1}},computed:{model:{get(){return this.isGroup?this.store:void 0!==this.value?this.value:this.selfModel},set(e){if(this.isGroup){let t=!1;void 0!==this._checkboxGroup.min&&e.length<this._checkboxGroup.min&&(t=!0),void 0!==this._checkboxGroup.max&&e.length>this._checkboxGroup.max&&(t=!0),!1===t&&this.dispatch("CheckboxGroup","input",[e])}else void 0!==this.value?this.$emit("input",e):this.selfModel=e}},isChecked(){return"[object Boolean]"==={}.toString.call(this.model)?this.model:Array.isArray(this.model)?this.model.indexOf(this.label)>-1:null!==this.model&&void 0!==this.model?this.model===this.trueLabel:void 0},isGroup(){let e=this.$parent;while(e){if("CheckboxGroup"===e.$options.componentName)return this._checkboxGroup=e,!0;e=e.$parent}return!1},store(){return this._checkboxGroup?this._checkboxGroup.value:this.value}},props:{id:String,value:{},label:{},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:String,trueLabel:[String,Number],falseLabel:[String,Number],modifierStyles:{type:Array,default:null}},methods:{addToStore(){Array.isArray(this.model)&&-1===this.model.indexOf(this.label)?this.model.push(this.label):this.model=this.trueLabel||!0},handleChange(e){this.isGroup?this.$nextTick(e=>{this.dispatch("CheckboxGroup","change",[this._checkboxGroup.value])}):this.$emit("change",e)}},created(){this.checked&&this.addToStore()}},n=i,l=a("2877"),c=Object(l["a"])(n,r,o,!1,null,null,null);t["a"]=c.exports},"920c":function(e,t,a){"use strict";function r(e,t,a){this.$children.forEach(o=>{var s=o.$options.componentName;s===e?o.$emit.apply(o,[t].concat(a)):r.apply(o,[e,t].concat([a]))})}t["a"]={methods:{dispatch(e,t,a){var r=this.$parent||this.$root,o=r.$options.componentName;while(r&&(!o||o!==e))r=r.$parent,r&&(o=r.$options.componentName);r&&r.$emit.apply(r,[t].concat(a))},broadcast(e,t,a){r.call(this,e,t,a)}}}},b484:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-linear-progress",{staticClass:"pe-linear-progress q-mt-sm",attrs:{value:e.progress.percentComplete,rounded:"",size:"20px"}},[a("p",{staticClass:"pe-linear-progress__percent absolute-full flex text-left"},[1==e.progress.percentComplete?a("q-icon",{attrs:{name:"app:iconic-checkmark"}}):a("span",[e._v(e._s((100*e.progress.percentComplete).toFixed(1))+"%")])],1)])},o=[],s={props:["progress"]},i=s,n=a("2877"),l=a("6b1d"),c=a("0016"),u=a("eebe"),p=a.n(u),d=Object(n["a"])(i,r,o,!1,null,null,null);t["a"]=d.exports;p()(d,"components",{QLinearProgress:l["a"],QIcon:c["a"]})},c6e7:function(e,t,a){"use strict";var r=a("6165"),o=a("e173");t["a"]={mixins:[r["a"],o["a"]]}},e173:function(e,t,a){"use strict";var r=a("ded3"),o=a.n(r),s=a("2f62");t["a"]={methods:o()(o()({},Object(s["b"])("auth",["logout"])),Object(s["b"])("announcements",["userCheckedUpdates"])),computed:o()(o()(o()(o()({},Object(s["c"])("auth",["currentUser","isAuthenticated"])),Object(s["c"])("purchases",["getPurchases"])),Object(s["c"])("announcements",["getUserAlerts","getAnnouncements"])),{},{currentUsername(){return this.currentUser?"@"+this.currentUser.username:null},currentUserFullname(){return this.currentUser?`${this.currentUser.profile.firstName} ${this.currentUser.profile.lastName}`:null}}),mounted(){}}},eac7:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["textarea"===e.type?"text-area-field":"input-field",{"is-disabled":e.disabled}]},["textarea"!==e.type?[a("input-component",{ref:"inputComponent",attrs:{"parent-props":e.parentProps,"modifier-styles":e.modifierStyles,"is-valid":e.isValid,"is-invalid":e.isInvalid}},[e.icon?a("template",{slot:"icon"},[e.loading?a("i",{staticClass:"input__icon icon-loading"}):a("i",{staticClass:"input__icon",class:[e.icon,e.onIconClick?"is-clickable":""],attrs:{slot:"icon"},on:{click:e.handleIconClick},slot:"icon"})]):e._e()],2)]:[a("text-area",{ref:"textarea",attrs:{"parent-props":e.parentProps,"modifier-styles":e.modifierStyles,"is-valid":e.isValid,"is-invalid":e.isInvalid,styles:e.textareaStyle},on:{input:e.handleInput}})]],2)},o=[],s=a("2ef0"),i=a.n(s);let n;const l="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",c=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function u(e){const t=window.getComputedStyle(e),a=t.getPropertyValue("box-sizing"),r=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),o=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),s=c.map(e=>`${e}:${t.getPropertyValue(e)}`).join(";");return{contextStyle:s,paddingSize:r,borderSize:o,boxSizing:a}}function p(e,t=null,a=null){n||(n=document.createElement("textarea"),document.body.appendChild(n));let{paddingSize:r,borderSize:o,boxSizing:s,contextStyle:i}=u(e);n.setAttribute("style",`${i};${l}`),n.value=e.getAttribute("value")||e.value||e.placeholder||"";let c=n.scrollHeight;"border-box"===s?c+=o:"content-box"===s&&(c-=r),n.value="";let p=n.scrollHeight-r;if(null!==t){let e=p*t;"border-box"===s&&(e=e+r+o),c=Math.max(e,c)}if(null!==a){let e=p*a;"border-box"===s&&(e=e+r+o),c=Math.min(e,c)}return{height:c+"px"}}var d=a("920c"),m=function(e){for(let t=1,a=arguments.length;t<a;t++){let a=arguments[t]||{};for(let t in a)if(a.hasOwnProperty(t)){let r=a[t];void 0!==r&&(e[t]=r)}}return e},h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input",class:[e.modifierStyles,{"is-valid":e.isValid,"is-invalid":e.isInvalid}]},[e.parentProps?a("input",e._b({ref:"input",staticClass:"input__input",on:{input:function(t){return e.handleInput(t)},keyup:function(t){return e.handleEvent(t,"keyup")},focus:function(t){return e.handleEvent(t,"focus")},blur:function(t){return e.handleEvent(t,"blur")}}},"input",e.parentProps,!1)):a("input",{ref:"input",staticClass:"input__input",attrs:{type:"text",placeholder:e.placeholder},on:{input:function(t){return e.handleInput(t)},keyup:function(t){return e.handleEvent(t,"keyup")},focus:function(t){return e.handleEvent(t,"focus")},blur:function(t){return e.handleEvent(t,"blur")}}}),a("div",{staticClass:"input__border"}),e._t("icon")],2)},f=[];var g={name:"pe-input",props:{placeholder:{type:String,default:"Basic Text Input"},modifierStyles:{type:Array,default:null},parentProps:{type:Object,default:null},isValid:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1}},methods:{handleInput:function(e){this.$parent?this.$parent.$emit("input",e.target.value):this.$emit("input",e.target.value)},handleEvent:function(e,t){this.$parent?this.$parent.$emit(t,e):this.$emit(t,e)}}},b=g,v=a("2877"),_=Object(v["a"])(b,h,f,!1,null,null,null),w=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-area",class:e.modifierStyles},[a("div",e._b({ref:"input",staticClass:"text-area__input",class:{"is-valid":e.isValid,"is-invalid":e.isInvalid},style:e.styles,attrs:{contenteditable:"true"},on:{paste:e.pasted,cut:e.changed,keyup:e.changed,focus:function(t){return e.handleEvent(t,"focus")},blur:function(t){return e.handleEvent(t,"blur")}}},"div",e.parentProps,!1)),e.placeHolder?a("span",{staticClass:"text-area__placeholder"},[e._v(e._s(e.placeHolder))]):e._e(),a("div",{staticClass:"text-area__border"})])},C=[];var x={props:{placeholder:{type:String,default:"Basic Text Area"},parentProps:{type:Object},modifierStyles:{type:Array,default:null},styles:{type:Object},isValid:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1}},data:function(){return{height:40,observer:null,currentValue:""}},computed:{placeHolder:function(){return""===this.currentValue?this.parentProps&&this.parentProps.placeholder?this.parentProps.placeholder:this.placeholder:null}},mounted:function(){var e=this.$el,t=e.getElementsByClassName("text-area__input")[0];e.style.height=t.style.height;var a=new MutationObserver((function(a){a.forEach((function(a){e.style.height=t.style.height}))}));a.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.observer=a},beforeDestroy:function(){this.observer.disconnect()},methods:{changed:function(e){this.currentValue=e.target.textContent,this.$parent?this.$parent.$emit("input",this.currentValue):this.$emit("input",this.currentValue)},pasted:function(e){var t=e.target,a="";e.preventDefault(),e.clipboardData?(a=(e.originalEvent||e).clipboardData.getData("text/plain"),document.execCommand("insertText",!1,a)):window.clipboardData&&(a=window.clipboardData.getData("Text"),document.selection.createRange().pasteHTML(a)),this.currentValue=t.textContent,this.$emit("input",this.currentValue)},handleEvent:function(e,t){this.$parent?this.$parent.$emit(t,e):this.$emit(t,e)}}},k=x,$=Object(v["a"])(k,y,C,!1,null,null,null),q=$.exports;var L={name:"InputField",componentName:"InputField",mixins:[d["a"]],components:{"input-component":w,"text-area":q},data(){return{currentValue:this.value,textareaCalcStyle:{}}},props:{value:[String,Number],placeholder:String,resize:String,readonly:Boolean,autofocus:Boolean,icon:String,disabled:Boolean,type:{type:String,default:"text"},name:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},autoComplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},form:String,maxlength:Number,minlength:Number,max:{},min:{},step:{},onIconClick:Function,modifierStyles:{type:Array,default:null}},computed:{textareaStyle(){return m({},this.textareaCalcStyle,{resize:this.resize})},parentProps(){return i.a.omit(this.$props,["modifierStyles"])},loading(){return!!this.$parent&&(!!this.$parent.loading||void 0)},isValid(){return!!this.$parent&&(!(this.$parent.hasError||!this.$parent.hasValue)||void 0)},isInvalid(){return!!this.$parent&&(!!this.$parent.hasError||void 0)}},methods:{inputSelect(){this.$refs.inputComponent.select()},resizeTextarea(){if(this.$isServer)return;var{autosize:e,type:t}=this;if(!e||"textarea"!==t)return;const a=e.minRows,r=e.maxRows;this.textareaCalcStyle=p(this.$refs.textarea.$refs.input,a,r)},handleInput(e){let t;t=e.target?e.target.value:e,this.setCurrentValue(t)},handleIconClick(e){this.onIconClick&&this.onIconClick(e),this.$emit("click",e)},setCurrentValue(e){e!==this.currentValue&&(this.$nextTick(e=>{this.resizeTextarea()}),this.$emit("input",e),this.currentValue=e)}},created(){this.$on("inputSelect",this.inputSelect)},mounted(){this.resizeTextarea()}},A=L,S=a("8572"),E=a("eebe"),P=a.n(E),D=Object(v["a"])(A,r,o,!1,null,null,null);t["a"]=D.exports;P()(D,"components",{QField:S["a"]})},f09b:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pe-bordered-card"},[a("div",{staticClass:"pe-borders"},[a("span",{staticClass:"pe-borders__right"}),a("span",{staticClass:"pe-borders__top"}),a("span",{staticClass:"pe-borders__left"}),a("span",{staticClass:"pe-borders__bottom"}),a("div",{staticClass:"pe-borders__content"},[e._t("default")],2)])])},o=[],s={},i=s,n=a("2877"),l=Object(n["a"])(i,r,o,!1,null,null,null);t["a"]=l.exports},ff0a:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pe-input-field",{class:e.navbar?"pe-nav-item__search":"",attrs:{placeholder:"Search Videos",icon:"iconic-magnifying-glass","on-icon-click":e.routeToResults,"modifier-styles":e.navbar?["input_color-white"]:[""]},on:{keyup:e.keyupHandler},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})},o=[],s=a("ded3"),i=a.n(s),n=a("eac7"),l=a("2f62"),c={props:["navbar"],components:{"pe-input-field":n["a"]},methods:i()(i()({},Object(l["b"])("videos",["setSearchFilter"])),{},{routeToResults(){this.$router.push({name:"videoSearch"})},keyupHandler(e){27===e.which?this.filter="":13===e.which&&this.routeToResults()}}),computed:i()(i()({},Object(l["c"])("videos",["searchFilter"])),{},{filter:{get(){return this.searchFilter},set(e){this.setSearchFilter(e)}}})},u=c,p=a("2877"),d=Object(p["a"])(u,r,o,!1,null,null,null);t["a"]=d.exports}}]);