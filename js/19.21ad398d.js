(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{bc13:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-page pe-home row justify-center"},[s("q-inner-loading",{staticClass:"absolute-full text-subtitle2 flex flex-center",attrs:{showing:e.showLoadingSpinner}},[s("q-spinner-pie",{attrs:{color:"teal",size:"5.5em"}})],1),e._l(e.getProducts,(function(t){return s("div",{key:t._id,staticClass:"pe-home__product col-xs-12 col-sm-12 col-md-6 col-lg-6"},[e.purchased(t._id)&&"testguide"==t.type?[s("pe-tg-continue",{attrs:{routeToTGDashboard:e.routeToTGDashboard,testGuideProductID:t._id,productName:t.productName}})]:[s("pe-learn-more",{},[s("h3",{staticClass:"pe-learn-more__content-heading"},[e._v("NCLEX")]),s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),s("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button button_color-accent",attrs:{label:"Learn More",flat:"",ripple:{color:"white"}},on:{click:function(s){return e.routeToProductPage(t.productName)}}})],1)]],2)}))],2)},a=[],i=s("c6e7"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-tg-continue"},[s("div",{staticClass:"pe-tg-continue__overlay"}),s("div",{staticClass:"pe-tg-continue__content"},[s("h3",{staticClass:"pe-tg-continue__content-heading"},[e._v(e._s(e.testGuideObject.name))]),e.subjectProgress?s("pe-bordered-card",[s("div",{staticClass:"pe-tg-continue__progress"},e._l(e.subjectProgress,(function(t,r){return s("pe-linear-progress",{key:t.name,class:e.progressClass(t,r),attrs:{progress:t}})})),1),s("q-separator",{staticStyle:{margin:"10px 0"}}),s("div",{staticClass:"pe-tg-continue__subjects row"},e._l(e.subjectProgress,(function(t){return s("div",{key:t.name,staticClass:"pe-tg-continue__subjects-item col-6"},[s("span",{class:e.progressClass(t,-1)}),s("p",[e._v(e._s(t.name))])])})),0)],1):s("div",[e._v("\n                NO PROGRESS MADE!\n            ")]),s("div",[s("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button button_color-primary",attrs:{label:"Resume",flat:"",ripple:{color:"rgba(240, 240, 240, 0.1)"}},on:{click:function(t){return e.loadTestGuideDashboard(e.productName,e.testGuideRecordID)}}})],1)],1)])},o=[],c=s("ded3"),u=s.n(c),l=s("2ef0"),d=s.n(l),p=s("2f62"),m=s("f09b"),b=s("b484"),_=s("6165"),h={mixins:[_["a"]],props:["routeToTGDashboard","testGuideProductID","productName"],components:{"pe-bordered-card":m["a"],"pe-linear-progress":b["a"]},computed:u()(u()({},Object(p["c"])("testGuide",["testGuides"])),{},{testGuideObject(){let e=d.a.find(this.testGuides,e=>e.purchase.product._id===this.testGuideProductID);return e},testGuideRecordID(){return this.testGuideObject._id},subjectProgress(){if(this.testGuideObject){let e=[];return this.testGuideObject.subjects.forEach(t=>{let s=t.name,r=0,a=0;t.progress.subjectCategories.forEach(e=>{r+=e.topics.length,a+=e.topicsCompleted.length});let i=a/r;e.push({name:s,percentComplete:i})}),e}return null}}),methods:u()(u()({},Object(p["b"])("testGuide",["setActiveTestGuide"])),{},{loadTestGuideDashboard(e,t){let s=()=>{this.routeToTGDashboard(this.productName)};this.setActiveTestGuide(t).then(s)}})},g=h,v=s("2877"),f=s("eb85"),C=s("9c40"),G=s("714f"),j=s("eebe"),w=s.n(j),x=Object(v["a"])(g,n,o,!1,null,null,null),D=x.exports;w()(x,"components",{QSeparator:f["a"],QBtn:C["a"]}),w()(x,"directives",{Ripple:G["a"]});var P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-learn-more"},[s("div",{staticClass:"pe-learn-more__overlay"}),s("div",{staticClass:"pe-learn-more__content"},[e._t("default",[e._v("Card Content Goes here!")])],2)])},T=[],O={components:{"pe-bordered-card":m["a"]}},q=O,N=Object(v["a"])(q,P,T,!1,null,null,null),y=N.exports,E={mixins:[i["a"]],data(){return{}},components:{"pe-tg-continue":D,"pe-learn-more":y},methods:{purchased(e){let t=this.getPurchases,s=!1;for(var r=0;r<t.length;r++)if(t[r].product===e){s=!0;break}return s}},mounted(){}},k=E,R=s("74f7"),I=s("163c"),S=Object(v["a"])(k,r,a,!1,null,null,null);t["default"]=S.exports;w()(S,"components",{QInnerLoading:R["a"],QSpinnerPie:I["a"],QBtn:C["a"]}),w()(S,"directives",{Ripple:G["a"]})}}]);