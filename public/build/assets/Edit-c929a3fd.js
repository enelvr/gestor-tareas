import{d as b,T as w,p as V,o as c,c as E,w as l,g as i,b as f,a as e,i as P,l as h,G as B,u as n,e as v,h as N,v as S,t as T,F as C}from"./app-55d67c3b.js";import{_ as D,s as F}from"./AppLayout-fc599bfc.js";import{_ as L}from"./LButton-c4fd0b32.js";const M={class:"card"},j=e("h1",{class:"text-2xl font-semibold text-gray-800 border-b py-2 mb-4"},"Datos del rol",-1),G=["onSubmit"],O={class:"section"},R={class:"article-full"},U=e("label",{class:"label mb-1"},"Nombre del rol",-1),$={class:"section"},q={class:"article-full"},z=e("label",{class:"text-lg font-semibold text-gray-800 border-b py-2 mb-4"},"Permisos - tareas",-1),A=["value"],H={class:"section-reverse"},Q={__name:"Edit",props:{permisos:Object,role:Object},setup(p){var u,m,_;const s=p,x=b(s.permisos),t=w({id:((u=s==null?void 0:s.role)==null?void 0:u.id)||"",name:((m=s==null?void 0:s.role)==null?void 0:m.name)||"",selectedPermisos:((_=s==null?void 0:s.role)==null?void 0:_.selectedPermisos)||""}),a=b(!1),y=()=>{a.value=!0,t.put(route("roles.update",t.id),{onStart:()=>{a.value=!0},onError:d=>{F(d)},onFinish:()=>{a.value=!1}})};return(d,r)=>{const k=V("Link");return c(),E(D,{title:"Roles / Editar"},{header:l(()=>[i(" Roles / Editar ")]),"action-buttons":l(()=>[f(k,{href:d.route("roles.index"),class:"btn btn-blue"},{default:l(()=>[i("Volver")]),_:1},8,["href"])]),default:l(()=>[e("div",M,[j,e("form",{onSubmit:P(y,["prevent"])},[e("div",O,[e("div",R,[U,h(e("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>n(t).name=o),class:"w-full",required:"",placeholder:""},null,512),[[B,n(t).name]])])]),e("div",$,[e("div",q,[z,e("ul",null,[(c(!0),v(C,null,N(x.value,o=>(c(),v("li",{key:o.id},[e("label",null,[h(e("input",{type:"checkbox","onUpdate:modelValue":r[1]||(r[1]=g=>n(t).selectedPermisos=g),value:o.name},null,8,A),[[S,n(t).selectedPermisos]]),i(" "+T(o.name),1)])]))),128))])])]),e("div",H,[f(L,{disabled:a.value,class:"btn btn-blue",type:"submit"},{default:l(()=>[i("Guardar!")]),_:1},8,["disabled"])])],40,G)])]),_:1})}}};export{Q as default};
