(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"709f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"pe-tg-dashboard"},[s("q-inner-loading",{staticClass:"absolute-full text-subtitle2 flex flex-center",attrs:{showing:e.showLoadingSpinner}},[s("q-spinner-pie",{attrs:{color:"teal",size:"5.5em"}})],1),s("h3",{staticClass:"pe-tg-dashboard__headline"},[e._v("Test Guide Dashboard")]),e._l(e.subjects,(function(e){return[s("subject-progress",{key:e.id,attrs:{subject:e}})]}))],2)},r=[],o=(s("5df3"),s("1c4c"),s("2f62"),s("c6e7")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-subject-progress row"},[s("div",{staticClass:"pe-subject-progress__heading col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("h5",[e._v(e._s(e.subject.name))]),s("q-btn",{staticClass:"pe-subject-progress__heading-button",attrs:{round:"",ripple:{color:"white"},icon:"trending_up"},on:{click:e.toggleResults}})],1),s("q-separator"),s("div",{staticClass:"pe-subject-progress__progress col-xs-12 col-sm-12 col-md-12 col-lg-12"}),s("div",{staticClass:"pe-subject-progress__categories col-xs-12 col-sm-12 col-md-12 col-lg-12"})],1)},a=[],i={props:["subject"],data:function(){return{showResults:!0}},methods:{toggleResults:function(){this.showResults=!this.showResults}}},l=i,u=s("2877"),p=Object(u["a"])(l,c,a,!1,null,null,null),d=p.exports,m={mixins:[o["a"]],data:function(){return{subjects:[{id:1,name:"TEAS VI Science",progress:{subjectCategories:[{name:"Human Anatomy",lastAccessed:new Date(1594502323e3),timeSpent:2754e5,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:51},(function(e,t){return t+1}))},{name:"Life and Physical Sciences",lastAccessed:new Date(1589232044e3),timeSpent:1296e5,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:24},(function(e,t){return t+1}))},{name:"Scientific Reasoning",lastAccessed:new Date(1592688044e3),timeSpent:135e6,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:25},(function(e,t){return t+1}))}]}},{id:2,name:"TEAS VI Reading",progress:{subjectCategories:[{name:"Key Ideas and Details",lastAccessed:new Date(1594502323e3),timeSpent:2754e5,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:51},(function(e,t){return t+1}))},{name:"Craft and Structure",lastAccessed:new Date(1589232044e3),timeSpent:1296e5,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:24},(function(e,t){return t+1}))},{name:"Integration of Knowledge and Ideas",lastAccessed:new Date(1592688044e3),timeSpent:135e6,topics:Array.from({length:100},(function(e,t){return t+1})),topicsCompleted:Array.from({length:25},(function(e,t){return t+1}))}]}}]}},components:{"subject-progress":d},computed:{},methods:{},mounted:function(){}},f=m,g=Object(u["a"])(f,n,r,!1,null,null,null);t["default"]=g.exports}}]);