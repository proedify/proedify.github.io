(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"30c4":function(e,t,s){"use strict";var o=s("cb73"),i=s.n(o);i.a},3574:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-test-guide__review"},[s("div",{staticClass:"pe-content-container"},[s("h5",{staticClass:"pe-module-heading col-xs-12"},[e._v(e._s(e.subjectName)+" - Review")]),e.activeCategory?s("h6",{staticClass:"pe-module-subheading"},[s("span",{staticClass:"pe-color-indicator",class:e.categoryColorClass}),e._v(e._s(e.activeCategory.displayName))]):s("q-banner",{staticClass:"pe-banner--negative pe-test-guide__review-banner"},[e._v("\n            Choose a Content Area to Start Review\n        ")])],1),"subjectCategories"==e.activeReviewPanel?[s("div",{staticClass:"pe-content-container"},[s("pe-review-progress",{attrs:{routeToTestGuide:e.$parent.routeToTestGuide,productName:e.activeTestGuide.purchase.product.productName,subject:e.activeSubject}}),s("pe-review-history",{attrs:{lessons:e.activeCategory?e.activeCategory.lessons:[],category:e.activeCategory,categoryColorClass:e.categoryColorClass}})],1)]:"topics"==e.activeReviewPanel?[s("div",{staticClass:"pe-content-container"},[s("pe-review-topics")],1)]:[e._v("\n        ERROR!\n    ")]],2)},i=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-scroll-area",{staticClass:"pe-review-progress bg-grey-1 rounded-borders",attrs:{visible:!0,horizontal:""}},[s("div",{staticClass:"row no-wrap pe-review-progress__categories"},e._l(e.subject.currentReviewPlan.subjectCategories,(function(t,o){return s("pe-progress-card",{key:t.name,attrs:{routeToTestGuide:e.routeToTestGuide,productName:e.productName,categoryIndex:o,subjectCategory:t,subject:e.subject}})})),1)])},r=[],n=(s("fb6a"),s("b484")),l=s("015c"),c=s("6165"),p={mixins:[c["a"]],props:["routeToTestGuide","productName","subject"],data(){return{showResults:!1}},components:{"pe-linear-progress":n["a"],"pe-progress-card":l["a"]},computed:{subjectProgress(){let e=this.subject.name,t=0,s=0;this.subject.currentReviewPlan.subjectCategories.forEach(e=>{t+=e.topicsToReview.length,s+=e.topicsCompleted.length});let o=s/t;return{name:e,percentComplete:o}},totalHours(){let e=0;this.subject.currentReviewPlan.subjectCategories.forEach(t=>{e+=t.timeSpent});let t=e/36e5;return t},colorArray(){return this.colorsAlt.slice(0,this.subject.currentReviewPlan.subjectCategories.length)}},methods:{}},d=p,u=s("2877"),m=s("4983"),h=s("eebe"),v=s.n(h),_=Object(u["a"])(d,a,r,!1,null,null,null),b=_.exports;v()(_,"components",{QScrollArea:m["a"]});var f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-review-history",attrs:{id:"reviewHistory"}},[s("q-table",{ref:"reviewTable",staticClass:"row",attrs:{data:e.lessons,columns:e.columns,"row-key":"name",grid:"","grid-header":"","card-container-class":"pe-review-item","rows-per-page-label":"Lessons per page","rows-per-page-options":[10,20,40,50],"table-header-class":"pe-table-header"},scopedSlots:e._u([{key:"no-data",fn:function(t){return[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showResultsMessage,expression:"showResultsMessage"}]},[s("div",{staticClass:"full-width row flex-center q-gutter-sm pe-no-results-message"},[s("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),s("span",[e._v("No Lesson History")])],1)])])]}},{key:"item",fn:function(t){return[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("review-history-item",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2",staticStyle:{transform:"scale(0.95)"},attrs:{lesson:t.row,category:e.category,categoryColorClass:e.categoryColorClass}})],1)]}}])})],1)},g=[],C=s("bd4c"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pe-info-card",{staticClass:"pe-review-history-item",scopedSlots:e._u([{key:"header",fn:function(){return[s("h6",{staticClass:"pe-review-history-item__heading"},[s("span",{staticClass:"pe-color-indicator",class:e.categoryColorClass}),e._v(e._s(e.lesson.displayName))])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"row pe-review-history-item__footer"},[s("div",{staticClass:"col-xs-10"},[s("p",[e._v("Topics Completed: "+e._s(e.lesson.topicsCompleted.length)+" / "+e._s(e.lesson.topics.length))]),s("p",[e._v("Last Accessed: "+e._s(e._f("formatDate")(e.lesson.lastAccessed)))])]),s("q-btn",{staticClass:"pe-circle-button",attrs:{round:"",ripple:{color:"white"},icon:"view_list"},on:{click:e.loadLessonReview}})],1)]},proxy:!0}])},[s("ul",{staticClass:"pe-review-history-item__list"},e._l(e.lesson.topics,(function(t){return s("li",{key:t._id},[e._v(" "+e._s(t.displayName))])})),0)])},y=[],T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-info-card"},[s("div",{staticClass:"pe-info-card__header"},[e._t("header")],2),s("div",{staticClass:"pe-info-card__body"},[e._t("default")],2),s("div",{staticClass:"pe-info-card__footer"},[e._t("footer")],2)])},x=[],S={},q=S,R=Object(u["a"])(q,T,x,!1,null,null,null),k=R.exports,Q={props:{lesson:{type:Object,default(){return{_id:1,name:"respiratorySystem",displayName:"Respiratory System",lastAccessed:new Date(1594502323e3),timeSpent:1754e5,topics:Array.from({length:7},(e,t)=>t+1),topicsCompleted:Array.from({length:1},(e,t)=>t+1)}}},categoryColorClass:{type:String},category:{type:Object}},components:{"pe-info-card":k},data(){return{}},beforeDestroy(){this.$emit("videoDestroyed")},methods:{loadLessonReview(){console.log("LOAD LESSON INTO TOPIC PANEL");let e={categoryColorClass:this.categoryColorClass,lessonID:this.lesson._id,categoryID:this.category._id,callback:null};this.$root.$emit("loadTestGuideLesson",e)}},filters:{durationFilter(e){let t=parse(e);return`${t.minutes}:${("0"+t.seconds).slice(-2)}`},formatDate(e){return C["a"].formatDate(e,"MMM d YYYY")}}},L=Q,N=s("9c40"),M=Object(u["a"])(L,w,y,!1,null,null,null),j=M.exports;v()(M,"components",{QBtn:N["a"]});var $={props:["lessons","categoryColorClass","category"],components:{"review-history-item":j},data(){return{tableComponent:null,observer:null,showResultsMessage:!1,selected:[],columns:[{name:"lastAccessed",label:"Last Accessed",field:"lastAccessed",sortable:!0,format:e=>C["a"].formatDate(e,"MMM d YYYY"),sort:(e,t)=>C["a"].formatDate(e,"x")-C["a"].formatDate(t,"x")},{name:"percentComplete",label:"Percent Complete",field:"percentComplete",sortable:!0,sort:(e,t)=>e-t}]}},methods:{},computed:{noTableResults(){return!!this.tableComponent&&this.tableComponent.nothingToDisplay},tableData(){return this.lessons?this.lessons:[]}},mounted(){this.lessons.forEach(e=>{e.percentComplete=e.topicsCompleted.length/e.topics.length*100}),this.$nextTick(()=>{console.log("Finished rendering the complete view"),this.tableComponent=this.$refs.reviewTable})},beforeDestroy(){this.observer.disconnect(),console.log("disconnected")},created(){let e=this;this.observer=new MutationObserver((function(t){let s=document.getElementsByClassName("q-table__bottom--nodata")[0];s?document.contains(s)&&setTimeout(()=>{e.showResultsMessage=!0},350):e.showResultsMessage=!1})),this.observer.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})}},O=$,E=(s("30c4"),s("eaac")),D=s("0016"),P=Object(u["a"])(O,f,g,!1,null,null,null),A=P.exports;v()(P,"components",{QTable:E["a"],QIcon:D["a"]});var I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row pe-review-topics"},[s("div",{staticClass:"gt-sm col-md-4 pe-review-topics__lessons"},[s("div",{staticClass:"pe-review-topics__lessons-card"},[s("pe-lesson-tree")],1)]),s("div",{staticClass:"col-xs-12 col-md-8 pe-review-topics__lesson"},[s("h6",{staticClass:"pe-review-topics__lesson-header"},[e._v("\n            "+e._s(e.activeLesson.displayName)+"\n        ")]),e._l(e.activeLesson.topics,(function(t){return s("pe-topic-to-review",{key:t.displayName,attrs:{topic:t,lesson:e.activeLesson}})}))],2),s("q-btn",{staticClass:"lt-md pe-circle-button pe-circle-button_color-primary pe-review-topics__button",staticStyle:{color:"white"},attrs:{ripple:{color:"white"},round:"",dense:"",icon:"account_tree"},on:{click:e.toggleModal}}),s("q-dialog",{attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:e.lessonTreeModal,callback:function(t){e.lessonTreeModal=t},expression:"lessonTreeModal"}},[s("pe-modal-card",{attrs:{hasActions:!1,footerPadding:"10px",headerPadding:"10px",hasFooter:!1,maxHeight:"80vh"},scopedSlots:e._u([{key:"header",fn:function(){return[e._t("header",[e._v("\n                    Select Lesson\n                ")])]},proxy:!0}],null,!0)},[s("pe-lesson-tree",{staticStyle:{width:"100%"},style:e.$q.platform.is.mobile?"padding: 11px 11px 20vh 11px":""})],1)],1)],1)},G=[],F=s("ded3"),V=s.n(F),B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return!e.showTopicsToReview||e.isTopicToReview?s("div",{staticClass:"row pe-topic-to-review"},[s("div",{staticClass:"col-xs-9 col-md-5 pe-topic-to-review__info"},[s("h5",{staticClass:"col-xs-12 pe-topic-to-review__info-heading"},[e._v("\n            "+e._s(e.topic.displayName)+"\n        ")]),s("p",{staticClass:"col-xs-12 pe-topic-to-review__info-description"},[e._v("\n            200 character max. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.\n        ")])]),e.topicVideo?[s("div",{staticClass:"col-md-4 pe-topic-to-review__video"},[s("pe-video-item",{staticClass:"pe-video-item",attrs:{videoObject:e.topicVideo}})],1)]:e.topicTranscript?[s("div",{staticClass:"col-md-4 pe-topic-to-review__transcript"},[s("review-topic-transcript",{attrs:{topic:e.topic,topicTranscript:e.topicTranscript}})],1)]:e._e(),s("div",{staticClass:"col-xs-3 col-md-3 pe-topic-to-review__controls"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-6 text-center"},[s("span",{staticClass:"gt-sm pe-topic-to-review__controls-text"},[e._v("Drill")]),s("q-btn",{staticClass:"pe-circle-button",class:e.drillCompleted?"pe-circle-button_color-primary":"pe-circle-button_color-accent",attrs:{round:"",ripple:{color:"white"},icon:e.drillCompleted?"alarm_on":"alarm"},on:{click:function(t){e.drillStartModal=!0}}}),s("span",{staticClass:"lt-md pe-topic-to-review__controls-text"},[e._v("Drill")])],1),e.isTopicToReview&&e.showTopicsToReview?s("div",{staticClass:"col-xs-12 col-md-6 text-center"},[s("span",{staticClass:"gt-sm pe-topic-to-review__controls-text"},[e._v("Mark Complete")]),s("pe-checkbox",{attrs:{id:"topicCompleted"+e.topic._id,"modifier-styles":[""]},model:{value:e.topicCompleted,callback:function(t){e.topicCompleted=t},expression:"topicCompleted"}},[e._v("\n                     \n                ")]),s("span",{staticClass:"lt-md pe-topic-to-review__controls-text"},[e._v("Mark Complete")])],1):e._e()])]),e.topicVideo?[s("div",{staticClass:"col-xs-12 lt-md pe-topic-to-review__video--mobile"},[s("pe-video-item",{staticClass:"pe-video-item",attrs:{videoObject:e.topicVideo}})],1)]:e.topicTranscript?[s("div",{staticClass:"col-xs-12 lt-md pe-topic-to-review__transcript--mobile"},[s("review-topic-transcript",{attrs:{topic:e.topic,topicTranscript:e.topicTranscript}})],1)]:e._e(),s("q-dialog",{attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:e.drillStartModal,callback:function(t){e.drillStartModal=t},expression:"drillStartModal"}},[s("pe-modal-card",{attrs:{hasNotification:!0,hasActions:!0,hasFooter:!1,hasHeader:!1},scopedSlots:e._u([{key:"notificationHeading",fn:function(){return[s("h5",{staticStyle:{width:"100%",position:"relative"}},[e._v("\n                    "+e._s(e.topic.displayName)+" \n                ")])]},proxy:!0},{key:"notificationText",fn:function(){return[s("p",[e._v("\n                    There are 5 questions per drill. Your attempt will be timed in order to analyze your performance. Questions are curated based on your review plan.                        \n                ")]),s("br"),s("p",[e._v("\n                    The primary goal of this exercise is to assimilate concepts related to this topic. If you are not sure of the answer, explanations will be shown upon submission—regardless if it is correct/incorrect.\n                ")])]},proxy:!0},{key:"actions",fn:function(){return[s("div",{staticClass:"col-xs-12 text-right"},[s("q-btn",{staticClass:"button button_color-primary",attrs:{flat:"",ripple:{color:"white"},icon:"alarm_on",label:"Begin Drill"},on:{click:e.startDrill}})],1)]},proxy:!0}],null,!1,3667240427)})],1),s("q-dialog",{staticClass:"pe-global-modal",attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":"",maximized:e.globalModal},model:{value:e.drillStarted,callback:function(t){e.drillStarted=t},expression:"drillStarted"}},[s("pe-drill",{attrs:{topic:e.topic,colorModifier:""}})],1)],2):e._e()},H=[],Y=(s("c975"),s("2f62")),z=s("2ef0"),U=s.n(z),J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-img",{staticClass:"text-center pe-topic-transcript",attrs:{src:"/images/transcript-placeholder@2x.png",transition:"fade",ratio:16/9}},[s("div",{staticClass:"absolute-center pe-topic-transcript__center"},[s("q-btn",{staticClass:"pe-circle-button pe-circle-button_color-primary pe-topic-transcript__center-button",attrs:{round:"",ripple:{color:"white"},icon:"local_library"},on:{click:function(t){e.transcriptModal=!0}}})],1),s("q-dialog",{attrs:{"no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:e.transcriptModal,callback:function(t){e.transcriptModal=t},expression:"transcriptModal"}},[s("pe-modal-card",{attrs:{hasNotification:!1,hasActions:!1,footerPadding:"10px",headerPadding:"10px",hasFooter:!1},scopedSlots:e._u([{key:"header",fn:function(){return[e._t("header",[e._v("\n                    "+e._s(e.topic.displayName)+"\n                ")])]},proxy:!0}],null,!0)},[s("div",{staticClass:"pe-topic-transcript__transcript",style:e.$q.platform.is.mobile?"padding: 10px 10px 20vh 10px":"",domProps:{innerHTML:e._s(e.topicTranscript)}})])],1)],1)},W=[],K=s("9d2b"),X={props:["topic","topicTranscript"],data(){return{transcriptModal:!1}},components:{"pe-modal-card":K["a"]},computed:{}},Z=X,ee=s("068f"),te=s("24e8"),se=Object(u["a"])(Z,J,W,!1,null,null,null),oe=se.exports;v()(se,"components",{QImg:ee["a"],QBtn:N["a"],QDialog:te["a"]});var ie=s("792e"),ae=s("8773"),re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-global-modal pe-drill"},[s("div",{staticClass:"pe-global-modal__header"},[s("q-tabs",{staticClass:"pe-content-container pe-global-modal__header-tabs gt-sm",attrs:{align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("div",{staticClass:"pe-global-modal__tab-border"}),s("q-tab",{attrs:{name:"0"}},[e._v("Question 1")]),s("q-tab",{attrs:{name:"1"}},[e._v("Question 2")]),s("q-tab",{attrs:{name:"2"}},[e._v("Question 3")]),s("q-tab",{attrs:{name:"3"}},[e._v("Question 4")]),s("q-tab",{attrs:{name:"4"}},[e._v("Question 5")])],1),s("q-tabs",{staticClass:"pe-global-modal__header-tabs lt-md",attrs:{dense:"",align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("div",{staticClass:"pe-global-modal__tab-border"}),s("q-tab",{attrs:{name:"0"}},[e._v("Q1")]),s("q-tab",{attrs:{name:"1"}},[e._v("Q2")]),s("q-tab",{attrs:{name:"2"}},[e._v("Q3")]),s("q-tab",{attrs:{name:"3"}},[e._v("Q4")]),s("q-tab",{attrs:{name:"4"}},[e._v("Q5")])],1)],1),s("div",{staticClass:"pe-global-modal__close"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",icon:"app:iconic-close"},on:{click:e.closeModal}})],1),s("div",{staticClass:"row pe-content-container pe-global-modal__heading"},[s("h6",{staticClass:"col-xs-12 col-md-6 pe-drill__name"},[e._v("\n            "+e._s(e.topic.displayName)+" Drill \n        ")]),e.currentAttempt?s("pe-questions-answered",{staticClass:"col-xs-12 col-md-2 pe-drill__questions-answered",attrs:{total:e.totalQuestions,answered:e.currentAttempt.questionsAnswered.length}}):e._e(),s("q-space")],1),e.questionsLoaded?s("div",{staticClass:"pe-global-modal__body"},[e.currentQuestion?s("div",{staticClass:"pe-drill__question"},[s("pe-card",{attrs:{hasExpansion:!0,expansionLabel:"See Question",hasFooter:!1,hasHeader:!0,headerPadding:"10px 20px"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("                \n                    Question "+e._s(e.currentQuestionNumber)+" \n                ")]},proxy:!0},{key:"expansion",fn:function(){return[s("p",{staticClass:"row"},[e._v("\n                        Explanation Text\n                    ")])]},proxy:!0}],null,!1,293032077)},[[s("pe-test-question",{ref:"questionComponent",staticClass:"col-xs-12",attrs:{question:e.currentQuestion,questionNumber:e.currentQuestion.questionNumber,parentProps:e.parentProps}})]],2)],1):e._e()]):e._e()])},ne=[],le=s("679a"),ce=s("9be3"),pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",{staticClass:"pe-card",style:{width:e.width,padding:e.padding}},[e.hasHeader?s("q-card-section",{staticClass:"row pe-card__header",style:{padding:e.headerPadding}},[e.hasExpansion?[s("h6",{staticClass:"row",staticStyle:{position:"relative",width:"100%"}},[s("span",{staticClass:"absolute-left",staticStyle:{display:"block",height:"100%"}},[e._t("header")],2),e.hasExpansion?s("q-expansion-item",{staticClass:"col-xs-12",attrs:{dense:"","expand-separator":"",label:e.expansionLabel}},[e._t("expansion",[e._v("\n                            Expansion Content\n                        ")])],2):e._e()],1)]:[e._t("header")]],2):e._e(),s("q-card-section",{staticClass:"row pe-card__body",style:{"max-height":e.maxHeight,display:"block"}},[e._t("default",[e._v("\n                Body\n            ")])],2),e.hasFooter?s("q-card-section",{staticClass:"row pe-card__footer",style:{padding:e.footerPadding}},[e._t("footer",[e._v("\n                Footer\n            ")])],2):e._e()],1)},de=[],ue={props:{hasHeader:{type:Boolean,default:!0},hasExpansion:{type:Boolean,default:!0},expansionLabel:{type:String,default:"Expansion Label"},hasFooter:{type:Boolean,default:!0},width:{type:String,default:"100%"},maxHeight:{type:String,default:"unset"},padding:{type:String,default:"0px"},headerPadding:{type:String,default:"0px"},footerPadding:{type:String,default:"20px"}},data(){return{}},components:{},methods:{}},me=ue,he=s("f09f"),ve=s("a370"),_e=s("3b73"),be=s("7f67"),fe=Object(u["a"])(me,pe,de,!1,null,null,null),ge=fe.exports;function Ce(){return{attemptNumber:0,percentileScore:0,timeToComplete:null,numberCorrect:0,lastAttemptDate:null,questionsAnswered:[]}}v()(fe,"components",{QCard:he["a"],QBtn:N["a"],QCardSection:ve["a"],QExpansionItem:_e["a"]}),v()(fe,"directives",{ClosePopup:be["a"]});var we=Ce,ye={props:["topic","colorModifier"],data(){return{showAnswer:!1,showExplanation:!1,showRightOrWrong:!1,tab:"0",currentAttempt:null,questionsLoaded:!1}},components:{"pe-test-question":le["a"],"pe-questions-answered":ce["a"],"pe-card":ge},computed:V()(V()({},Object(Y["c"])("testGuide",["testQuestions"])),{},{totalQuestions(){return this.topic.drill.questions.length},drillQuestions(){console.log("TEST QUESTIONS: ",this.testQuestions),console.log("DRILL QUESTIONS FROM TOPIC: ",this.topic.drill.questions);let e=U.a.filter(this.testQuestions,e=>U.a.includes(this.topic.drill.questions,e._id));return console.log("DRILL QUESTIONS: ",e),e},currentQuestion(){return this.drillQuestions[parseInt(this.tab)]},currentQuestionNumber(){return parseInt(this.tab)+1},parentProps(){return this.$props}}),methods:V()(V()({},Object(Y["b"])("testGuide",["fetchTestQuestions","setTestQuestions"])),{},{closeModal(){this.$root.$emit("globalModal",!1)}}),mounted(){console.log("TOPIC FOR DRILL: ",this.topic),this.$root.$emit("appLoading",!0),this.fetchTestQuestions().then(e=>this.setTestQuestions(e)).then(()=>{this.$root.$emit("appLoading",!1),this.questionsLoaded=!0,this.currentAttempt=we(),this.$nextTick(()=>{console.log("Finished rendering the drill")})})}},Te=ye,xe=s("429b"),Se=s("7460"),qe=s("2c91"),Re=Object(u["a"])(Te,re,ne,!1,null,null,null),ke=Re.exports;v()(Re,"components",{QTabs:xe["a"],QTab:Se["a"],QBtn:N["a"],QSpace:qe["a"]}),v()(Re,"directives",{ClosePopup:be["a"]});var Qe={props:["topic","lesson"],data(){return{drillStartModal:!1,drillStarted:!1}},components:{"review-topic-transcript":oe,"pe-video-item":ie["a"],"pe-checkbox":ae["a"],"pe-modal-card":K["a"],"pe-drill":ke},mounted(){},computed:V()(V()(V()(V()({},Object(Y["c"])("videos",["searchFilter","videos","formattedVideos","transcripts"])),Object(Y["c"])("testGuide",["showTopicsToReview"])),Object(Y["c"])("display",["globalModal"])),{},{topicVideo(){let e=U.a.find(this.formattedVideos,e=>e._id==this.topic.video);return e},topicTranscript(){let e=U.a.find(this.transcripts,e=>e._id==this.topic.transcript);return e?e.htmlText:void 0},drillCompleted(){return!!this.topicVideo},isTopicToReview(){let e=this,t=U.a.find(this.lesson.topicsToReview,(function(t){return t._id==e.topic._id}));return console.log("TOPIC isTopicToReview: ",t),!!t},topicCompleted:{get(){let e=U.a.indexOf(this.lesson.topicsCompleted,this.topic._id);return e>-1},set(e){let t={topicID:this.topic._id,lessonID:this.lesson._id};e?this.setTopicComplete(t):this.setTopicIncomplete(t),this.$root.$emit("updateLessonTree")}}}),methods:V()(V()({},Object(Y["b"])("testGuide",["setTopicComplete","setTopicIncomplete"])),{},{startDrill(){this.drillStartModal=!1,this.drillStarted=!0,this.$root.$emit("globalModal",!0)}})},Le=Qe,Ne=Object(u["a"])(Le,B,H,!1,null,null,null),Me=Ne.exports;v()(Ne,"components",{QBtn:N["a"],QDialog:te["a"]}),v()(Ne,"directives",{ClosePopup:be["a"]});var je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pe-lesson-tree"},[s("pe-input-field",{staticStyle:{padding:"5px"},attrs:{placeholder:"Search Lessons",icon:"iconic-magnifying-glass","on-icon-click":e.resetFilter,"modifier-styles":[""]},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),s("pe-checkbox",{staticStyle:{"margin-top":"5px",padding:"5px"},attrs:{id:"showTopicsToReview",value:e.showTopicsToReview,"modifier-styles":[""]},on:{input:e.setShowTopicsToReview}},[e._v("\n            Show Topics To Review\n        ")]),s("q-tree",{ref:"lessonTree",staticClass:"pe-lesson-tree__tree",attrs:{nodes:e.categoryNodes,accordion:"",expanded:e.expanded,filter:e.filter,"node-key":"label"},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){return[s("span",{staticClass:"pe-lesson-tree__tree-node",class:[{"pe_text-lightgrey":t.node.lessonName==e.activeLesson.name||"category"==t.node.dataType}],staticStyle:{cursor:"pointer"}},[e._v("\n                    "+e._s(t.node.label)+"\n                ")])]}},{key:"body-hasContent",fn:function(t){return[s("span",{staticClass:"pe-lesson-tree__tree-node-content",class:[{"pe_text-primary-3":t.node.numberTopicsCompleted==t.node.numberTopicsToReview}]},[t.node.numberTopicsCompleted==t.node.numberTopicsToReview&&t.node.content?s("q-icon",{attrs:{name:"app:iconic-checkmark"}}):e._e(),e._v(" \n                    "+e._s(t.node.content)+"\n                ")],1)]}}])})],1)},$e=[],Oe=s("eac7"),Ee={data(){return{categoryNodes:[],expanded:[],filter:""}},components:{"pe-checkbox":ae["a"],"pe-input-field":Oe["a"]},methods:V()(V()({},Object(Y["b"])("testGuide",["setShowTopicsToReview"])),{},{hasIncompleteTopics(e){if(e)return!0},isTopicToReview(e){let t=this,s=U.a.find(this.activeCategory.topicsToReview,(function(e){return e._id==t.topic._id}));return console.log("FOUND TOPIC isTopicToReview TREE: ",s),!!s},lessonNodeContent(e){return`${e.topicsCompleted.length} / ${e.topicsToReview.length}`},setActiveLesson(e){this.$root.$emit("loadTestGuideLesson",{lessonID:e,callback:this.setTreeValues})},renderLessonComplete(e){},resetFilter(){this.filter="",this.$refs.filter.focus()},setTreeValues(){let e=this,t=function(t){return{numberTopicsCompleted:t.topicsCompleted.length,numberTopicsToReview:t.topicsToReview.length,lessonName:t.name,dataType:"lesson",label:t.displayName,noTick:!0,content:e.showTopicsToReview?e.lessonNodeContent(t):null,body:"hasContent",handler:s=>{e.setActiveLesson(t._id)}}},s=function(e){return{categoryName:e.name,label:e.displayName,dataType:"category",noTick:!0,children:[],expanded:!0,icon:"none",header:"main"}};this.categoryNodes=[],this.categoryNodes.push(s(this.activeCategory)),this.categoryNodes[0].children=U.a.map(this.activeCategory.lessons,e=>{let s=t(e);if(s)return s}),this.showTopicsToReview&&(this.categoryNodes[0].children=this.categoryNodes[0].children.filter(e=>!!e&&e.numberTopicsToReview>0)),this.expanded=[this.activeCategory.displayName]}}),computed:V()({},Object(Y["c"])("testGuide",["activeCategory","activeLesson","showTopicsToReview"])),watch:{activeLesson:function(){this.setTreeValues(),this.$refs.lessonTree.expandAll()},showTopicsToReview:function(){this.setTreeValues()}},beforeMount(){},mounted(){this.setTreeValues(),this.$root.$on("updateLessonTree",this.setTreeValues)},beforeDestroy(){this.$root.$off("updateLessonTree",this.setTreeValues),console.log("TREE DESTROYED")}},De=Ee,Pe=(s("b15a"),s("7f41")),Ae=s("8f8e"),Ie=Object(u["a"])(De,je,$e,!1,null,null,null),Ge=Ie.exports;v()(Ie,"components",{QTree:Pe["a"],QIcon:D["a"],QCheckbox:Ae["a"]});var Fe={components:{"pe-topic-to-review":Me,"pe-lesson-tree":Ge,"pe-modal-card":K["a"]},computed:V()(V()({},Object(Y["c"])("testGuide",["showLessonTreeModal"])),{},{activeLesson(){return this.$parent.activeLesson?this.$parent.activeLesson:this.$parent.activeCategory.lessons[0]},lessonTreeModal:{get(){return this.showLessonTreeModal},set(e){this.setShowLessonTreeModal(e)}}}),methods:V()(V()({},Object(Y["b"])("testGuide",["setShowLessonTreeModal"])),{},{toggleModal(){this.showLessonTreeModal?this.setShowLessonTreeModal(!1):this.setShowLessonTreeModal(!0)}})},Ve=Fe,Be=Object(u["a"])(Ve,I,G,!1,null,null,null),He=Be.exports;v()(Be,"components",{QBtn:N["a"],QDialog:te["a"]});var Ye=s("d785"),ze={mixins:[Ye["a"]],components:{"pe-review-progress":b,"pe-review-history":A,"pe-review-topics":He},computed:{testName(){return this.activeTestGuide.name},subjectName(){return this.activeSubject.displayName}},mounted(){}},Ue=ze,Je=s("54e1"),We=Object(u["a"])(Ue,o,i,!1,null,null,null);t["default"]=We.exports;v()(We,"components",{QBanner:Je["a"]})},"6d1c":function(e,t,s){},b15a:function(e,t,s){"use strict";var o=s("6d1c"),i=s.n(o);i.a},cb73:function(e,t,s){}}]);