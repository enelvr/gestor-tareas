import{T as x,d as w,p as V,o as T,c as g,w as a,g as n,b as f,a as t,i as y,l as m,G as h,u as i}from"./app-55d67c3b.js";import{_ as B}from"./AppLayout-fc599bfc.js";const D={class:"card"},N=t("h1",{class:"text-2xl font-semibold text-gray-800 border-b py-2 mb-4"},"Datos de la tarea",-1),S=["onSubmit"],j={class:"section"},C={class:"article-full"},E=t("label",{class:"label mb-1"},"Titulo",-1),L={class:"section"},M={class:"article-full"},O=t("label",{class:"label mb-1"},"Descripción",-1),U={class:"section-reverse"},$={__name:"Show",props:{task:Object,users:Object},setup(v){var d,r,c,u;const e=v,s=x({id:((d=e==null?void 0:e.task)==null?void 0:d.id)||"",title:((r=e==null?void 0:e.task)==null?void 0:r.title)||"",description:((c=e==null?void 0:e.task)==null?void 0:c.description)||"",user:((u=e==null?void 0:e.task)==null?void 0:u.user.name)||""}),k=w(!1),p=()=>{k.value=!0,s.put(route("tasks.update",s.id))};return(_,o)=>{const b=V("Link");return T(),g(B,{title:"Tareas / Editar"},{header:a(()=>[n(" Tareas / Editar ")]),"action-buttons":a(()=>[f(b,{href:_.route("tasks.index"),class:"btn btn-blue"},{default:a(()=>[n("Volver")]),_:1},8,["href"])]),default:a(()=>[t("div",D,[N,t("form",{onSubmit:y(p,["prevent"])},[t("div",j,[t("div",C,[E,m(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>i(s).title=l),class:"w-full",required:"",placeholder:"",disabled:""},null,512),[[h,i(s).title]])])]),t("div",L,[t("div",M,[O,m(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=l=>i(s).description=l),class:"w-full",rows:"10",disabled:""},null,512),[[h,i(s).description]])])]),t("div",U,[f(b,{href:_.route("tasks.index"),class:"btn btn-blue"},{default:a(()=>[n("Volver")]),_:1},8,["href"])])],40,S)])]),_:1})}}};export{$ as default};
