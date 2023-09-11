import{_ as Ve,o as l,e as p,a,K as Ce,d as T,J as Y,n as k,f as b,t as j,i as W,y as ue,z as Ee,k as g,r as A,L as he,u as B,l as ke,B as Ae,b as u,w as h,A as Ke,c as O,j as xe,p as Ze,s as H,M as ce,N as q,P as x,m as $e,Q as Pe,R as We,F as D,S as te,U as Ye,x as Je,Z as Qe,g as C,h as Ne,O as Le}from"./app-55d67c3b.js";const Xe={},et={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt=a("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),ot=a("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),nt=[tt,ot];function st(e,t){return l(),p("svg",et,nt)}const at=Ve(Xe,[["render",st]]),rt={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},it={class:"flex items-center justify-between flex-wrap"},lt={class:"w-0 flex-1 flex items-center min-w-0"},ut={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ct=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),dt=[ct],pt={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ft=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),mt=[ft],ht={class:"ml-3 font-medium text-sm text-white truncate"},gt={class:"shrink-0 sm:ml-3"},vt=a("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),_t=[vt],yt={__name:"Banner",setup(e){const t=Ce(),o=T(!0),s=T("success"),n=T("");return Y(async()=>{var r,i;s.value=((r=t.props.jetstream.flash)==null?void 0:r.bannerStyle)||"success",n.value=((i=t.props.jetstream.flash)==null?void 0:i.banner)||"",o.value=!0}),(r,i)=>(l(),p("div",null,[o.value&&n.value?(l(),p("div",{key:0,class:k({"bg-indigo-500":s.value=="success","bg-red-700":s.value=="danger"})},[a("div",rt,[a("div",it,[a("div",lt,[a("span",{class:k(["flex p-2 rounded-lg",{"bg-indigo-600":s.value=="success","bg-red-600":s.value=="danger"}])},[s.value=="success"?(l(),p("svg",ut,dt)):b("",!0),s.value=="danger"?(l(),p("svg",pt,mt)):b("",!0)],2),a("p",ht,j(n.value),1)]),a("div",gt,[a("button",{type:"button",class:k(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":s.value=="success","hover:bg-red-600 focus:bg-red-600":s.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=W(f=>o.value=!1,["prevent"]))},_t,2)])])])],2)):b("",!0)]))}},bt={class:"relative"},Ie={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(e){const t=e;let o=T(!1);const s=i=>{o.value&&i.key==="Escape"&&(o.value=!1)};ue(()=>document.addEventListener("keydown",s)),Ee(()=>document.removeEventListener("keydown",s));const n=g(()=>({48:"w-48"})[t.width.toString()]),r=g(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top");return(i,f)=>(l(),p("div",bt,[a("div",{onClick:f[0]||(f[0]=m=>he(o)?o.value=!B(o):o=!B(o))},[A(i.$slots,"trigger")]),ke(a("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=m=>he(o)?o.value=!1:o=!1)},null,512),[[Ae,B(o)]]),u(Ke,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:h(()=>[ke(a("div",{class:k(["absolute z-50 mt-2 rounded-md shadow-lg",[n.value,r.value]]),style:{display:"none"},onClick:f[2]||(f[2]=m=>he(o)?o.value=!1:o=!1)},[a("div",{class:k(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[A(i.$slots,"content")],2)],2),[[Ae,B(o)]])]),_:3})]))}},St={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},wt=["href"],oe={__name:"DropdownLink",props:{href:String,as:String},setup(e){return(t,o)=>(l(),p("div",null,[e.as=="button"?(l(),p("button",St,[A(t.$slots,"default")])):e.as=="a"?(l(),p("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[A(t.$slots,"default")],8,wt)):(l(),O(B(xe),{key:2,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:h(()=>[A(t.$slots,"default")]),_:3},8,["href"]))]))}},ne={__name:"NavLink",props:{href:String,active:Boolean},setup(e){const t=e,o=g(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(s,n)=>{const r=Ze("Link");return l(),O(r,{href:e.href,class:k(o.value)},{default:h(()=>[A(s.$slots,"default")]),_:3},8,["href","class"])}}},Z={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(e){const t=e,o=g(()=>t.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(s,n)=>(l(),p("div",null,[e.as=="button"?(l(),p("button",{key:0,class:k([o.value,"w-full text-left"])},[A(s.$slots,"default")],2)):(l(),O(B(xe),{key:1,href:e.href,class:k(o.value)},{default:h(()=>[A(s.$slots,"default")]),_:3},8,["href","class"]))]))}},X={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},z={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},S={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ct={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},Be={dangerouslyHTMLString:!1,multiple:!0,position:X.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},Et={rtl:!1,newestOnTop:!1,toastClassName:""},qe={...Be,...Et};({...Be,type:S.DEFAULT});var c=(e=>(e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e))(c||{}),ve=(e=>(e.ENTRANCE_ANIMATION_END="d",e))(ve||{});const xt={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Tt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},kt={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},At={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Fe(e){let t=xt;if(!e||typeof e=="string")switch(e){case"flip":t=At;break;case"zoom":t=kt;break;case"slide":t=Tt;break}else t=e;return t}function Nt(e){return e.containerId||String(e.position)}const de="will-unmount";function Lt(e=X.TOP_RIGHT){return!!document.querySelector(".".concat(c.CSS_NAMESPACE,"__toast-container--").concat(e))}function It(e=X.TOP_RIGHT){return"".concat(c.CSS_NAMESPACE,"__toast-container--").concat(e)}function Ot(e,t,o=!1){const s=["".concat(c.CSS_NAMESPACE,"__toast-container"),"".concat(c.CSS_NAMESPACE,"__toast-container--").concat(e),o?"".concat(c.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return U(t)?t({position:e,rtl:o,defaultClassName:s}):"".concat(s," ").concat(t||"")}function Mt(e){var t;const{position:o,containerClassName:s,rtl:n=!1,style:r={}}=e,i=c.CSS_NAMESPACE,f=It(o),m=document.querySelector(".".concat(i)),w=document.querySelector(".".concat(f)),y=!!w&&!((t=w.className)!=null&&t.includes(de)),M=m||document.createElement("div"),_=document.createElement("div");_.className=Ot(o,s,n),_.dataset.testid="".concat(c.CSS_NAMESPACE,"__toast-container--").concat(o),_.id=Nt(e);for(const I in r)if(Object.prototype.hasOwnProperty.call(r,I)){const me=r[I];_.style[I]=me}return m||(M.className=c.CSS_NAMESPACE,document.body.appendChild(M)),y||M.appendChild(_),_}function _e(e){var t,o,s;const n=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((o=e.target)==null?void 0:o.id),r=document.getElementById(n);r&&r.removeEventListener("animationend",_e,!1);try{Q[n].unmount(),(s=document.getElementById(n))==null||s.remove(),delete Q[n],delete v[n]}catch{}}const Q=H({});function $t(e,t){const o=document.getElementById(String(t));o&&(Q[o.id]=e)}function ye(e,t=!0){const o=String(e);if(!Q[o])return;const s=document.getElementById(o);s&&s.classList.add(de),t?(Bt(e),s&&s.addEventListener("animationend",_e,!1)):_e(o),L.items=L.items.filter(n=>n.containerId!==e)}function Pt(e){for(const t in Q)ye(t,e);L.items=[]}function je(e,t){const o=document.getElementById(e.toastId);if(o){let s=e;s={...s,...Fe(s.transition)};const n=s.appendPosition?"".concat(s.exit,"--").concat(s.position):s.exit;o.className+=" ".concat(n),t&&t(o)}}function Bt(e){for(const t in v)if(t===e)for(const o of v[t]||[])je(o)}function qt(e){const t=ee().find(o=>o.toastId===e);return t==null?void 0:t.containerId}function Te(e){return document.getElementById(e)}function Ft(e){const t=Te(e.containerId);return t&&t.classList.contains(de)}function Oe(e){var t;const o=Pe(e.content)?x(e.content.props):null;return o??x((t=e.data)!=null?t:{})}function jt(e){return e?L.items.filter(t=>t.containerId===e).length>0:L.items.length>0}function Rt(){if(L.items.length>0){const e=L.items.shift();ae(e==null?void 0:e.toastContent,e==null?void 0:e.toastProps)}}const v=H({}),L=H({items:[]});function ee(){const e=x(v);return Object.values(e).reduce((t,o)=>[...t,...o],[])}function Dt(e){return ee().find(t=>t.toastId===e)}function ae(e,t={}){if(Ft(t)){const o=Te(t.containerId);o&&o.addEventListener("animationend",be.bind(null,e,t),!1)}else be(e,t)}function be(e,t={}){const o=Te(t.containerId);o&&o.removeEventListener("animationend",be.bind(null,e,t),!1);const s=v[t.containerId]||[],n=s.length>0;if(!n&&!Lt(t.position)){const r=Mt(t),i=We(ro,t);i.mount(r),$t(i,r.id)}n&&(t.position=s[0].position),$e(()=>{t.updateId?N.update(t):N.add(e,t)})}const N={add(e,t){const{containerId:o=""}=t;o&&(v[o]=v[o]||[],v[o].find(s=>s.toastId===t.toastId)||setTimeout(()=>{var s,n;t.newestOnTop?(s=v[o])==null||s.unshift(t):(n=v[o])==null||n.push(t),t.onOpen&&t.onOpen(Oe(t))},t.delay||0))},remove(e){if(e){const t=qt(e);if(t){const o=v[t];let s=o.find(n=>n.toastId===e);v[t]=o.filter(n=>n.toastId!==e),!v[t].length&&!jt(t)&&ye(t,!1),Rt(),$e(()=>{s!=null&&s.onClose&&(s.onClose(Oe(s)),s=void 0)})}}},update(e={}){const{containerId:t=""}=e;if(t&&e.updateId){v[t]=v[t]||[];const o=v[t].find(s=>s.toastId===e.toastId);o&&setTimeout(()=>{for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){const n=e[s];o[s]=n}},e.delay||0)}},clear(e,t=!0){e?ye(e,t):Pt(t)},dismissCallback(e){var t;const o=(t=e.currentTarget)==null?void 0:t.id,s=document.getElementById(o);s&&(s.removeEventListener("animationend",N.dismissCallback,!1),setTimeout(()=>{N.remove(o)}))},dismiss(e){if(e){const t=ee();for(const o of t)if(o.toastId===e){je(o,s=>{s.addEventListener("animationend",N.dismissCallback,!1)});break}}}},Re=H({}),le=H({});function De(){return Math.random().toString(36).substring(2,9)}function Ut(e){return typeof e=="number"&&!isNaN(e)}function Se(e){return typeof e=="string"}function U(e){return typeof e=="function"}function pe(...e){return q(...e)}function re(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof(e==null?void 0:e.type)=="object")}function zt(e={}){Re["".concat(c.CSS_NAMESPACE,"-default-options")]=e}function Ht(){return Re["".concat(c.CSS_NAMESPACE,"-default-options")]||qe}function Gt(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ie=(e=>(e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e))(ie||{});const Ue={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:X.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:z.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:S.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Vt={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:S.DEFAULT},theme:{type:String,required:!1,default:z.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Kt=ce({name:"ProgressBar",props:Vt,setup(e,{attrs:t}){const o=T(),s=g(()=>e.hide?"true":"false"),n=g(()=>({...t.style||{},animationDuration:"".concat(e.autoClose===!0?5e3:e.autoClose,"ms"),animationPlayState:e.isRunning?"running":"paused",opacity:e.hide?0:1,transform:e.controlledProgress?"scaleX(".concat(e.progress,")"):"none"})),r=g(()=>["".concat(c.CSS_NAMESPACE,"__progress-bar"),e.controlledProgress?"".concat(c.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(c.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(c.CSS_NAMESPACE,"__progress-bar-theme--").concat(e.theme),"".concat(c.CSS_NAMESPACE,"__progress-bar--").concat(e.type),e.rtl?"".concat(c.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),i=g(()=>"".concat(r.value," ").concat((t==null?void 0:t.class)||"")),f=()=>{o.value&&(o.value.onanimationend=null,o.value.ontransitionend=null)},m=()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),f())},w=g(()=>e.controlledProgress?null:m),y=g(()=>e.controlledProgress?m:null);return Y(()=>{o.value&&(f(),o.value.onanimationend=w.value,o.value.ontransitionend=y.value)}),()=>u("div",{ref:o,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:i.value,style:n.value},null)}}),Zt=ce({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:z.AUTO},type:{type:String,required:!1,default:z.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>u("button",{class:"".concat(c.CSS_NAMESPACE,"__close-button ").concat(c.CSS_NAMESPACE,"__close-button--").concat(e.theme),type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[u("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[u("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),fe=({theme:e,type:t,path:o,...s})=>u("svg",q({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":"var(--toastify-icon-color-".concat(t,")")},s),[u("path",{d:o},null)]);function Wt(e){return u(fe,q(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Yt(e){return u(fe,q(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Jt(e){return u(fe,q(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Qt(e){return u(fe,q(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Xt(){return u("div",{class:"".concat(c.CSS_NAMESPACE,"__spinner")},null)}const we={info:Yt,warning:Wt,success:Jt,error:Qt,spinner:Xt},eo=e=>e in we;function to({theme:e,type:t,isLoading:o,icon:s}){let n;const r={theme:e,type:t};return o?n=we.spinner():s===!1?n=void 0:re(s)?n=x(s):U(s)?n=s(r):Pe(s)?n=Ye(s,r):Se(s)||Ut(s)?n=s:eo(t)&&(n=we[t](r)),n}const oo=()=>{};function no(e,t,o=c.COLLAPSE_DURATION){const{scrollHeight:s,style:n}=e,r=o;requestAnimationFrame(()=>{n.minHeight="initial",n.height=s+"px",n.transition="all ".concat(r,"ms"),requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,r)})})}function so(e){const t=T(!1),o=T(!1),s=T(!1),n=T(ie.Enter),r=H({...e,appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||c.COLLAPSE_DURATION}),i=r.done||oo,f=g(()=>r.appendPosition?"".concat(r.enter,"--").concat(r.position):r.enter),m=g(()=>r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit),w=g(()=>e.pauseOnHover?{onMouseenter:V,onMouseleave:G}:{});function y(){const E=f.value.split(" ");_().addEventListener(ve.ENTRANCE_ANIMATION_END,G,{once:!0});const $=R=>{const K=_();R.target===K&&(K.dispatchEvent(new Event(ve.ENTRANCE_ANIMATION_END)),K.removeEventListener("animationend",$),K.removeEventListener("animationcancel",$),n.value===ie.Enter&&R.type!=="animationcancel"&&K.classList.remove(...E))},P=()=>{const R=_();R.classList.add(...E),R.addEventListener("animationend",$),R.addEventListener("animationcancel",$)};e.pauseOnFocusLoss&&I(),P()}function M(){if(!_())return;const E=()=>{const P=_();P.removeEventListener("animationend",E),r.collapse?no(P,i,r.collapseDuration):i()},$=()=>{const P=_();n.value=ie.Exit,P&&(P.className+=" ".concat(m.value),P.addEventListener("animationend",E))};o.value||(s.value?E():setTimeout($))}function _(){return e.toastRef.value}function I(){document.hasFocus()||V(),window.addEventListener("focus",G),window.addEventListener("blur",V)}function me(){window.removeEventListener("focus",G),window.removeEventListener("blur",V)}function G(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}function V(){t.value=!1}function Ge(E){E&&(E.stopPropagation(),E.preventDefault()),o.value=!1}return Y(M),Y(()=>{const E=ee();o.value=E.findIndex($=>$.toastId===r.toastId)>-1}),Y(()=>{e.isLoading!==void 0&&(e.loading.value?V():G())}),ue(y),Ee(()=>{e.pauseOnFocusLoss&&me()}),{isIn:o,isRunning:t,hideToast:Ge,eventHandlers:w}}const ao=ce({name:"ToastItem",inheritAttrs:!1,props:Ue,setup(e){const t=T(),o=g(()=>!!e.isLoading),s=g(()=>e.progress!==void 0&&e.progress!==null),n=g(()=>to(e)),r=g(()=>["".concat(c.CSS_NAMESPACE,"__toast"),"".concat(c.CSS_NAMESPACE,"__toast-theme--").concat(e.theme),"".concat(c.CSS_NAMESPACE,"__toast--").concat(e.type),e.rtl?"".concat(c.CSS_NAMESPACE,"__toast--rtl"):void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:i,isIn:f,hideToast:m,eventHandlers:w}=so({toastRef:t,loading:o,done:()=>{N.remove(e.toastId)},...Fe(e.transition),...e});return()=>u("div",q({id:e.toastId,class:r.value,style:e.toastStyle||{},ref:t,"data-testid":"toast-item-".concat(e.toastId),onClick:y=>{e.closeOnClick&&m(),e.onClick&&e.onClick(y)}},w.value),[u("div",{role:e.role,"data-testid":"toast-body",class:"".concat(c.CSS_NAMESPACE,"__toast-body ").concat(e.bodyClassName||"")},[n.value!=null&&u("div",{"data-testid":"toast-icon-".concat(e.type),class:["".concat(c.CSS_NAMESPACE,"__toast-icon"),e.isLoading?"":"".concat(c.CSS_NAMESPACE,"--animate-icon ").concat(c.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[re(n.value)?te(x(n.value),{theme:e.theme,type:e.type}):U(n.value)?n.value({theme:e.theme,type:e.type}):n.value]),u("div",{"data-testid":"toast-content"},[re(e.content)?te(x(e.content),{toastProps:x(e),closeToast:m,data:e.data}):U(e.content)?e.content({toastProps:x(e),closeToast:m,data:e.data}):e.dangerouslyHTMLString?te("div",{innerHTML:e.content}):e.content])]),(e.closeButton===void 0||e.closeButton===!0)&&u(Zt,{theme:e.theme,closeToast:y=>{y.stopPropagation(),y.preventDefault(),m()}},null),re(e.closeButton)?te(x(e.closeButton),{closeToast:m,type:e.type,theme:e.theme}):U(e.closeButton)?e.closeButton({closeToast:m,type:e.type,theme:e.theme}):null,u(Kt,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:f.value,type:e.type,hide:e.hideProgressBar,isRunning:i.value,autoClose:e.autoClose,controlledProgress:s.value,progress:e.progress,closeToast:e.isLoading?void 0:m},null)])}});let J=0;function ze(){typeof window>"u"||(J&&window.cancelAnimationFrame(J),J=window.requestAnimationFrame(ze),le.lastUrl!==window.location.href&&(le.lastUrl=window.location.href,N.clear()))}const ro=ce({name:"ToastifyContainer",inheritAttrs:!1,props:Ue,setup(e){const t=g(()=>e.containerId),o=g(()=>v[t.value]||[]),s=g(()=>o.value.filter(n=>n.position===e.position));return ue(()=>{typeof window<"u"&&e.clearOnUrlChange&&window.requestAnimationFrame(ze)}),Ee(()=>{typeof window<"u"&&J&&(window.cancelAnimationFrame(J),le.lastUrl="")}),()=>u(D,null,[s.value.map(n=>{const{toastId:r=""}=n;return u(ao,q({key:r},n),null)})])}});let ge=!1;function He(){const e=[];return ee().forEach(t=>{const o=document.getElementById(t.containerId);o&&!o.classList.contains(de)&&e.push(t)}),e}function io(e){const t=He().length,o=e??0;return o>0&&t+L.items.length>=o}function lo(e){io(e.limit)&&!e.updateId&&L.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function F(e,t,o={}){if(ge)return;o=pe(Ht(),{type:t},x(o)),(!o.toastId||typeof o.toastId!="string"&&typeof o.toastId!="number")&&(o.toastId=De()),o={...o,content:e,containerId:o.containerId||String(o.position)};const s=Number(o==null?void 0:o.progress);return s<0&&(o.progress=0),s>1&&(o.progress=1),o.theme==="auto"&&(o.theme=Gt()),lo(o),le.lastUrl=window.location.href,o.multiple?L.items.length?o.updateId&&ae(e,o):ae(e,o):(ge=!0,d.clearAll(void 0,!1),setTimeout(()=>{ae(e,o)},0),setTimeout(()=>{ge=!1},390)),o.toastId}const d=(e,t)=>F(e,S.DEFAULT,t);d.info=(e,t)=>F(e,S.DEFAULT,{...t,type:S.INFO});d.error=(e,t)=>F(e,S.DEFAULT,{...t,type:S.ERROR});d.warning=(e,t)=>F(e,S.DEFAULT,{...t,type:S.WARNING});d.warn=d.warning;d.success=(e,t)=>F(e,S.DEFAULT,{...t,type:S.SUCCESS});d.loading=(e,t)=>F(e,S.DEFAULT,pe(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));d.dark=(e,t)=>F(e,S.DEFAULT,pe(t,{theme:z.DARK}));d.remove=e=>{e?N.dismiss(e):N.clear()};d.clearAll=(e,t)=>{N.clear(e,t)};d.isActive=e=>{let t=!1;return t=He().findIndex(o=>o.toastId===e)>-1,t};d.update=(e,t={})=>{setTimeout(()=>{const o=Dt(e);if(o){const s=x(o),{content:n}=s,r={...s,...t,toastId:t.toastId||e,updateId:De()},i=r.render||n;delete r.render,F(i,r.type,r)}},0)};d.done=e=>{d.update(e,{isLoading:!1,progress:1})};d.promise=uo;function uo(e,{pending:t,error:o,success:s},n){let r;t&&(r=Se(t)?d.loading(t,n):d.loading(t.render,{...n,...t}));const i={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},f=(w,y,M)=>{if(y==null){d.remove(r);return}const _={type:w,...i,...n,data:M},I=Se(y)?{render:y}:y;return r?d.update(r,{..._,...I,isLoading:!1,autoClose:!0}):d(I.render,{..._,...I,isLoading:!1,autoClose:!0}),M},m=U(e)?e():e;return m.then(w=>{f("success",s,w)}).catch(w=>{f("error",o,w)}),m}d.POSITION=X;d.THEME=z;d.TYPE=S;d.TRANSITIONS=Ct;const co={install(e,t={}){po(t)}};typeof window<"u"&&(window.Vue3Toastify=co);function po(e={}){const t=pe(qe,e);zt(t)}const fo={theme:"dark",dangerouslyHTMLString:!0};function se(e,t){e&&d[t](e,fo)}function Me(e=null){var r;const t=Ce().props,{success:o,info:s,error:n}=t.flash;if(e){const i=Object.entries(e).map(([f,m])=>`${f}: ${m}`).join("<br>");se(((r=t==null?void 0:t.flash)==null?void 0:r.error)+`<ul class='list-disc pl-6 text-sm'>${i}</ul>`,"error")}else se(o,"success"),se(s,"info"),se(n,"error")}const mo={__name:"FlashMessages",setup(e){const t=Ce().props;return ue(()=>{Me()}),Je(t,()=>{Me()}),(o,s)=>null}},ho={class:"min-h-screen bg-blue-100"},go={class:"bg-white border-b border-gray-100"},vo={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},_o={class:"flex justify-between h-16"},yo={class:"flex"},bo={class:"shrink-0 flex items-center"},So={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},wo={class:"hidden sm:flex sm:items-center sm:ml-6"},Co={class:"ml-3 relative"},Eo={class:"inline-flex rounded-md"},xo={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},To=a("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),ko={class:"w-60"},Ao=a("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),No=a("div",{class:"border-t border-gray-200"},null,-1),Lo=a("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Io=["onSubmit"],Oo={class:"flex items-center"},Mo={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},$o=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Po=[$o],Bo={class:"ml-3 relative"},qo={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Fo=["src","alt"],jo={key:1,class:"inline-flex rounded-md"},Ro={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Do=a("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Uo=a("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),zo=a("div",{class:"border-t border-gray-200"},null,-1),Ho=["onSubmit"],Go={class:"-mr-2 flex items-center sm:hidden"},Vo={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ko={class:"pt-2 pb-3 space-y-1"},Zo={class:"pt-4 pb-1 border-t border-gray-200"},Wo={class:"flex items-center px-4"},Yo={key:0,class:"shrink-0 mr-3"},Jo=["src","alt"],Qo={class:"font-medium text-base text-gray-800"},Xo={class:"font-medium text-sm text-gray-500"},en={class:"mt-3 space-y-1"},tn=["onSubmit"],on=a("div",{class:"border-t border-gray-200"},null,-1),nn=a("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),sn=a("div",{class:"border-t border-gray-200"},null,-1),an=a("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),rn=["onSubmit"],ln={class:"flex items-center"},un={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},cn=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),dn=[cn],pn={class:"bg-white shadow"},fn={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},mn={class:"content-container mx-auto sm:px-4"},hn={class:"container-header"},gn={class:"page-header"},vn={class:"text-2xl font-semibold"},_n={class:"page-action-buttons"},yn={class:"py-6"},bn={class:"max-w-7xl mx-auto sm:px-2 lg:px-2"},Sn={class:"animate-fade"},Cn={__name:"AppLayout",props:{title:String},setup(e){const t=T(!1),o=n=>{Le.put(route("current-team.update"),{team_id:n.id},{preserveState:!1})},s=()=>{Le.post(route("logout"))};return(n,r)=>(l(),p("div",null,[u(B(Qe),{title:e.title},null,8,["title"]),u(yt),a("div",ho,[a("nav",go,[a("div",vo,[a("div",_o,[a("div",yo,[a("div",bo,[u(B(xe),{href:n.route("dashboard")},{default:h(()=>[u(at,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),a("div",So,[u(ne,{href:n.route("dashboard"),active:n.route().current("dashboard")},{default:h(()=>[C(" Dashboard ")]),_:1},8,["href","active"]),n.$page.props.authroles.includes("admin")?(l(),O(ne,{key:0,href:n.route("users.index"),active:n.route().current("users.*")},{default:h(()=>[C(" Usuarios ")]),_:1},8,["href","active"])):b("",!0),n.$page.props.authroles.includes("admin")?(l(),O(ne,{key:1,href:n.route("roles.index"),active:n.route().current("roles.*")},{default:h(()=>[C(" Roles ")]),_:1},8,["href","active"])):b("",!0),n.$page.props.authpermisos.includes("consultar tarea")?(l(),O(ne,{key:2,href:n.route("tasks.index"),active:n.route().current("tasks.*")},{default:h(()=>[C(" Tareas ")]),_:1},8,["href","active"])):b("",!0)])]),a("div",wo,[a("div",Co,[n.$page.props.jetstream.hasTeamFeatures?(l(),O(Ie,{key:0,align:"right",width:"60"},{trigger:h(()=>[a("span",Eo,[a("button",xo,[C(j(n.$page.props.auth.user.current_team.name)+" ",1),To])])]),content:h(()=>[a("div",ko,[Ao,u(oe,{href:n.route("teams.show",n.$page.props.auth.user.current_team)},{default:h(()=>[C(" Team Settings ")]),_:1},8,["href"]),n.$page.props.jetstream.canCreateTeams?(l(),O(oe,{key:0,href:n.route("teams.create")},{default:h(()=>[C(" Create New Team ")]),_:1},8,["href"])):b("",!0),n.$page.props.auth.user.all_teams.length>1?(l(),p(D,{key:1},[No,Lo,(l(!0),p(D,null,Ne(n.$page.props.auth.user.all_teams,i=>(l(),p("form",{key:i.id,onSubmit:W(f=>o(i),["prevent"])},[u(oe,{as:"button"},{default:h(()=>[a("div",Oo,[i.id==n.$page.props.auth.user.current_team_id?(l(),p("svg",Mo,Po)):b("",!0),a("div",null,j(i.name),1)])]),_:2},1024)],40,Io))),128))],64)):b("",!0)])]),_:1})):b("",!0)]),a("div",Bo,[u(Ie,{align:"right",width:"48"},{trigger:h(()=>[n.$page.props.jetstream.managesProfilePhotos?(l(),p("button",qo,[a("img",{class:"h-8 w-8 rounded-full object-cover",src:n.$page.props.auth.user.profile_photo_url,alt:n.$page.props.auth.user.name},null,8,Fo)])):(l(),p("span",jo,[a("button",Ro,[C(j(n.$page.props.auth.user.name)+" ",1),Do])]))]),content:h(()=>[Uo,zo,a("form",{onSubmit:W(s,["prevent"])},[u(oe,{as:"button"},{default:h(()=>[C(" Salir ")]),_:1})],40,Ho)]),_:1})])]),a("div",Go,[a("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:r[0]||(r[0]=i=>t.value=!t.value)},[(l(),p("svg",Vo,[a("path",{class:k({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),a("path",{class:k({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),a("div",{class:k([{block:t.value,hidden:!t.value},"sm:hidden"])},[a("div",Ko,[u(Z,{href:n.route("dashboard"),active:n.route().current("dashboard")},{default:h(()=>[C(" Dashboard ")]),_:1},8,["href","active"])]),a("div",Zo,[a("div",Wo,[n.$page.props.jetstream.managesProfilePhotos?(l(),p("div",Yo,[a("img",{class:"h-10 w-10 rounded-full object-cover",src:n.$page.props.auth.user.profile_photo_url,alt:n.$page.props.auth.user.name},null,8,Jo)])):b("",!0),a("div",null,[a("div",Qo,j(n.$page.props.auth.user.name),1),a("div",Xo,j(n.$page.props.auth.user.email),1)])]),a("div",en,[a("form",{method:"POST",onSubmit:W(s,["prevent"])},[u(Z,{as:"button"},{default:h(()=>[C(" Salir ")]),_:1})],40,tn),n.$page.props.jetstream.hasTeamFeatures?(l(),p(D,{key:0},[on,nn,u(Z,{href:n.route("teams.show",n.$page.props.auth.user.current_team),active:n.route().current("teams.show")},{default:h(()=>[C(" Team Settings ")]),_:1},8,["href","active"]),n.$page.props.jetstream.canCreateTeams?(l(),O(Z,{key:0,href:n.route("teams.create"),active:n.route().current("teams.create")},{default:h(()=>[C(" Create New Team ")]),_:1},8,["href","active"])):b("",!0),n.$page.props.auth.user.all_teams.length>1?(l(),p(D,{key:1},[sn,an,(l(!0),p(D,null,Ne(n.$page.props.auth.user.all_teams,i=>(l(),p("form",{key:i.id,onSubmit:W(f=>o(i),["prevent"])},[u(Z,{as:"button"},{default:h(()=>[a("div",ln,[i.id==n.$page.props.auth.user.current_team_id?(l(),p("svg",un,dn)):b("",!0),a("div",null,j(i.name),1)])]),_:2},1024)],40,rn))),128))],64)):b("",!0)],64)):b("",!0)])])],2)]),a("header",pn,[a("div",fn,[a("div",mn,[a("div",hn,[a("header",gn,[a("h1",vn,[A(n.$slots,"header")])]),a("div",_n,[A(n.$slots,"action-buttons")])])])])]),a("div",yn,[a("div",bn,[u(mo),a("main",Sn,[A(n.$slots,"default")])])])])]))}};export{Cn as _,Me as s};
