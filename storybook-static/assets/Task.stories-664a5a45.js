import{r as E}from"./index-76fb7be0.js";import{P as o}from"./index-8d47fad6.js";var S={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=E,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,P=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function A(s,e,a){var r,n={},u=null,m=null;a!==void 0&&(u=""+a),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(m=e.ref);for(r in e)I.call(e,r)&&!j.hasOwnProperty(r)&&(n[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:O,type:s,key:u,ref:m,props:n,_owner:P.current}}p.Fragment=D;p.jsx=A;p.jsxs=A;S.exports=p;var N=S.exports;const i=N.jsx,k=N.jsxs;function d({task:{id:s,title:e,state:a},onArchiveTask:r,onPinTask:n}){return k("div",{className:`list-item ${a}`,children:[k("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[i("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:a==="TASK_ARCHIVED"}),i("span",{className:"checkbox-custom",onClick:()=>r(s)})]}),i("label",{htmlFor:"title","aria-label":e,className:"title",children:i("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&i("button",{className:"pin-button",onClick:()=>n(s),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:i("span",{className:"icon-star"})},`pinTask-${s}`)]})}d.propTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};d.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}};const q={component:d,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...t.args.task,state:"TASK_PINNED"}}},l={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var _,f,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var h,g,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,b,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const $=["Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:t,Pinned:c,__namedExportsOrder:$,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,d as T,i as a,w as b,k as j};
//# sourceMappingURL=Task.stories-664a5a45.js.map
