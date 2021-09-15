var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{r as a,w as s,a as i,b as o,_ as d,c as u,o as c,d as p,e as g,f as m,g as v,h as f,t as x,u as b,F as h,i as y,j as w,v as k,k as O,l as S,m as j,n as P,p as V}from"./vendor.e43a8225.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const z={gifts:{1:{props:"1.2.4",text:"gift 1",order:1},2:{props:"1.2.4",text:"gift 2",order:1},3:{props:"1.2.4",text:"gift 3",order:1},4:{props:"1.2.4",text:"gift 4",order:1}},greets:{1:{props:"1.2.4",text:"lorem upsum 1",order:1},2:{props:"1.2.4",text:"lorem upsum 2",order:1},3:{props:"1.2.4",text:"lorem upsum 3",order:1},4:{props:"1.2.4",text:"lorem upsum 4",order:1}},giftsProps:{1:{title:"שוברי מסעדות"},2:{title:"הצגות"},3:{title:"הופעות חיות"},4:{title:"גאדגטים טכנולוגים"},5:{title:"גאדגטים למטבח"},6:{title:"משהו מתוק"},7:{title:"סיור קולינארי"},8:{title:"אופנה וסטייל"},9:{title:"ספורט אקסטרים"},10:{title:"פרחים"}},greetsProps:{1:{parent:0,title:"מינו של חוגג הארוע",order:1},1:{parent:0,title:"אופי הארוע",order:1},2:{parent:1,title:"קריירה"},3:{parent:1,title:"ארוע עצוב"},4:{parent:1,title:"חגים"},5:{parent:2,title:"שירות צבאי"},6:{parent:1,title:"משפחה"},7:{parent:4,title:"יום הולדת"},8:{parent:4,title:"יום נישואין"},9:{parent:1,title:"נישואין"},10:{parent:1,title:"בר מצווה"},11:{parent:1,title:"בת מצווה"}},senderProps:{1:{parent:0,title:"מין",order:1},2:{parent:1,title:"נקבה"},3:{parent:1,title:"זכר"},4:{parent:0,title:"ספרו לנו על מתנות שאתם אוהבים לקבל"}}};var N=e=>z[e]||null;const G=a({count:0});s(G,((e,t)=>console.log("newState:",e)));const _=()=>N("gifts"),H=()=>N("greets"),U=()=>N("giftsProps"),A=()=>N("senderProps");var B={state:i(G),increment:function(){G.count++},getGift:e=>_()[e],getGifts:_,getGreets:H,getGreet:e=>H()[e],getGiftsProps:U,getGiftsProp:e=>U()[e],getSenderProps:A,getSenderProp:e=>A()[e]};const J=(e,t)=>{let n=localStorage["appstate_"+e];if(!n)return t;let r=JSON.parse(n);return"val"in r?r.val:t},L=o(J("state",((e,a)=>{for(var s in a||(a={}))n.call(a,s)&&l(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&l(e,s,a[s]);return e})({count:0},{wizard:{sender:{gender:null},receiver:{greet:{gender:null,props:[]},gift:{props:[]}}}})));var C={state:i(L.value),save:function(e,t){const n=e.substr(0,e.indexOf(".")),r=e.substr(e.indexOf(".")+1);let l=J(n,{});d.set(l,r,t),((e,t)=>{const n=JSON.stringify({val:d.cloneDeep(t)});localStorage["appstate_"+e]=n})(n,l)},get:function(e){const t=e.substr(0,e.indexOf(".")),n=e.substr(e.indexOf(".")+1);let r=J(t,{});return d.get(r,n,r)},increment:function(){L.value.count++},api:B};const M={},E={class:"bg-gray-800 p-2 mt-0 w-full",dir:"rtl"},I={class:"container mx-auto flex flex-wrap items-center"},T={class:"flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold"},D=g("span",{class:"text-2xl pl-2"},[g("i",{class:"em em-grinning"}),f(" Bliss & Bless")],-1),F={class:"flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"},W={class:"list-reset flex justify-between flex-1 md:flex-none items-center"},q={class:"mr-3"},K=f("אשף"),R={class:"mr-3"},Q=f("החשבון שלי"),X={class:"mr-3"},Y=f("היסטוריה");M.render=function(e,t){const n=u("router-link");return c(),p("nav",E,[g("div",I,[g("div",T,[m(n,{class:"text-white no-underline hover:text-white hover:no-underline",to:"/"},{default:v((()=>[D])),_:1})]),g("div",F,[g("ul",W,[g("li",q,[m(n,{class:"inline-block text-gray-300 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",to:"/wizard"},{default:v((()=>[K])),_:1})]),g("li",R,[m(n,{class:"inline-block py-2 px-4 text-white no-underline",to:"/account"},{default:v((()=>[Q])),_:1})]),g("li",X,[m(n,{class:"inline-block text-gray-300 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",to:"/history"},{default:v((()=>[Y])),_:1})])])])])])};const Z={dir:"ltr"},$={setup:e=>(C.api.getGift(1),C.api.getGreet(1),setInterval((()=>{C.increment()}),1e3),(e,t)=>{const n=u("router-view");return c(),p(h,null,[m(M),m(n),g("pre",Z,x(b(C)),1)],64)})},ee={},te={class:"inline-flex ml-3 rounded-md shadow"},ne=[g("a",{target:"_blank",href:"https://github.com/web2033/vite-vue3-tailwind-starter",class:"inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none"},"Learn more",-1),g("button",{class:"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button"},[g("i",{class:"fas fa-heart"}),f(" Regular ")],-1)];ee.render=function(e,t){return c(),p("div",te,ne)};const re={class:"container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24"},le=[y('<div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6"><p class="uppercase tracking-loose">Witty Tagline</p><h1 class="font-bold text-3xl my-4">My Super App</h1><p class="leading-normal mb-4"> Enter your super app&#39;s description here... The key is to find the right length. Don&#39;t want it to be too long, but then don&#39;t want it to be too short so that it looks weird between the title and button below. </p><button class="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent"> Super Button </button></div><div class="w-full lg:w-1/2 lg:py-6 text-center"><svg class="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div>',2)],ae={setup:e=>(e,t)=>(c(),p("div",re,le))},se={class:"bg-gray-50"},ie={class:"max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},oe=g("h2",{class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},[f(" About Page "),g("br"),g("span",{class:"text-indigo-600"},"Vite + Vue 3 + Tailwind CSS")],-1),de={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},ue={class:"inline-flex rounded-md shadow"},ce=f("Back Home"),pe={setup:e=>(e,t)=>{const n=u("router-link");return c(),p("div",se,[g("div",ie,[oe,g("div",de,[g("div",ue,[m(n,{to:"/",class:"inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"},{default:v((()=>[ce])),_:1})]),m(ee)])])])}},ge={},me={class:"bg-white shadow"},ve=[g("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[g("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)];ge.render=function(e,t){return c(),p("header",me,ve)};const fe=g("div",{class:"bg-gray-50"},"קצת על שולח המתנה",-1),xe={class:"block"},be=g("span",{class:"text-gray-700"},"מין השולח",-1),he={class:"mt-2"},ye={class:"inline-flex items-center"},we=g("span",{class:"mr-2"},"בת",-1),ke={class:"inline-flex items-center mr-8"},Oe=g("span",{class:"mr-2"},"בן",-1),Se={class:"inline-flex items-center mr-8"},je=g("span",{class:"mr-2"},"אנחנו",-1),Pe=g("div",null,"תאריך לידה",-1),Ve=g("div",null,"אשף להעדפת מתנות",-1),ze={setup(e){const t=o(C.get("wizard.sender",{gender:null}));return console.log(t),s((()=>JSON.stringify(t.value)),(e=>C.save("wizard.sender",t.value))),(e,n)=>(c(),p("div",{ref:(e,t)=>{t.root=e}},[fe,g("div",xe,[be,g("div",he,[g("div",null,[g("label",ye,[w(g("input",{type:"radio","onUpdate:modelValue":n[0]||(n[0]=e=>t.value.gender=e),class:"form-radio",name:"radio",value:"female"},null,512),[[k,t.value.gender]]),we]),g("label",ke,[w(g("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>t.value.gender=e),class:"form-radio",name:"radio",value:"male"},null,512),[[k,t.value.gender]]),Oe]),g("label",Se,[w(g("input",{type:"radio","onUpdate:modelValue":n[2]||(n[2]=e=>t.value.gender=e),class:"form-radio",name:"radio",value:"universal"},null,512),[[k,t.value.gender]]),je])])])]),Pe,Ve],512))}},Ne=[y('<div class="bg-gray-50">התאמת מתנה מועדפת</div><div>נופש</div><div>רוחני</div><div>פרחים</div><div>משהו מתוק</div><div>גאדגטים</div><div>גאדגטים למטבח</div><div>מופעי תרבות</div><div>מופעי ספורט</div><div>מסעדות</div><div>שוברי קנייה</div><div>טווח מחירים</div>',12)],Ge={setup(e){const t=o(C.get("wizard.recevier.gift",{gender:null}));return s((()=>JSON.stringify(t.value)),(e=>C.save("wizard.sender",t.value))),(e,t)=>(c(),p("div",{ref:(e,t)=>{t.root=e}},Ne,512))}},_e=y('<div class="bg-gray-50">קצת על מקבל הברכה</div><div class="block"><span class="text-gray-700">שם כינוי של מקבל הברכה</span></div><div class="block"><span class="text-gray-700">האם לשמור לארוע מתחדש </span></div><div class="block"><span class="text-gray-700">תזכורת לארוע </span></div>',4),He={class:"block"},Ue=g("span",{class:"text-gray-700"},"מין",-1),Ae={class:"mt-2"},Be={class:"inline-flex items-center"},Je=g("span",{class:"mr-2"},"בת",-1),Le={class:"inline-flex items-center mr-8"},Ce=g("span",{class:"mr-2"},"בן",-1),Me={class:"inline-flex items-center mr-8"},Ee=g("span",{class:"mr-2"},"הן",-1),Ie={class:"inline-flex items-center mr-8"},Te=g("span",{class:"mr-2"},"הם",-1),De=g("div",null,"משפחה/קריירה/שירות צבאי/ארוע עצוב",-1),Fe=g("div",null,"יום הולדת/יום נישואין/בר מצווה/בת מצווה",-1),We=g("div",null,"תפקיד חדש/ סיום תפקיד/עבודה חדשה/קידום",-1),qe=g("div",null,"פטירה/מחלה קשה/פרידה",-1),Ke={setup(e){const t="wizard.receiver.greet",n=o(C.get(t,{gender:null}));return s((()=>JSON.stringify(n.value)),(e=>C.save(t,n.value))),(e,t)=>(c(),p("div",{ref:(e,t)=>{t.root=e}},[_e,g("div",He,[Ue,g("div",Ae,[g("div",null,[g("label",Be,[w(g("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>n.value.gender=e),class:"form-radio",name:"radio",value:"female"},null,512),[[k,n.value.gender]]),Je]),g("label",Le,[w(g("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>n.value.gender=e),class:"form-radio",name:"radio",value:"male"},null,512),[[k,n.value.gender]]),Ce]),g("label",Me,[w(g("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>n.value.gender=e),class:"form-radio",name:"radio",value:"universal"},null,512),[[k,n.value.gender]]),Ee]),g("label",Ie,[w(g("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=e=>n.value.gender=e),class:"form-radio",name:"radio",value:"they"},null,512),[[k,n.value.gender]]),Te])])])]),De,Fe,We,qe],512))}},Re={class:"bg-gray-50 mt-7 mr-24"},Qe=g("h1",{class:"text-center text-3xl m-4"},"אשף המערכת",-1),Xe=g("h1",{class:"text-center text-1xl m-4"}," המערכת שלנו מאוד חכמה אבל בואו נעזור לה להתאים ברכה ומתנה במספר דקות ",-1),Ye={class:"w-full text-center mx-auto"},Ze={setup(e){let t=o(ze);const n=e=>(t.value=e,console.log(1),!0);return(e,r)=>(c(),p("div",Re,[Qe,Xe,g("div",Ye,[g("button",{class:"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-3 mb-3 ease-linear transition-all duration-150",type:"button",onClick:r[0]||(r[0]=e=>n(ze))}," בואו נכיר אותכם "),g("button",{class:"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-3 mb-3 ease-linear transition-all duration-150",type:"button",onClick:r[1]||(r[1]=e=>n(Ke))}," נתאים ברכה "),g("button",{class:"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-3 mb-3 ease-linear transition-all duration-150",type:"button",onClick:r[2]||(r[2]=e=>n(Ge))}," נתאים מתנה ")]),(c(),O(S(b(t))))]))}},$e={},et={class:"bg-gray-50"};$e.render=function(e,t){return c(),p("div",et,"Account")};const tt={},nt={class:"bg-gray-50"};tt.render=function(e,t){return c(),p("div",nt,"History")};const rt=[{path:"/",component:ae,meta:{title:"Home"}},{path:"/wizard",component:Ze,meta:{title:"Wizard"}},{path:"/account",component:$e,meta:{title:"Account"}},{path:"/history",component:tt,meta:{title:"History"}},{path:"/about",meta:{title:"About"},component:pe},{path:"/:path(.*)",component:ge}],lt=j($),at=P({history:V(),routes:rt});lt.use(at),lt.mount("#app");