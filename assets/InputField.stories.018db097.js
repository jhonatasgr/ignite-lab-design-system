var s=Object.defineProperty;var c=(t,r)=>s(t,"name",{value:r,configurable:!0});import{I as o}from"./iconify.ef37480c.js";import{c as p,$ as u}from"./index.module.9eb2b01f.js";import{j as e,a as i,F as l}from"./jsx-runtime.66918ad9.js";import"./index.e88437f7.js";import"./iframe.02b0bf1e.js";function a({hasError:t,children:r}){return e("div",{className:p("flex items-center w-full gap-3 py-4 px-3 max-h-12 bg-gray-800 rounded focus-within:ring-2  ",{"ring-cyan":t===!1,"ring-red":t===!0}),children:r})}c(a,"InputFieldRoot");function m({type:t,...r}){return e("input",{type:t,className:"bg-transparent flex-1 h-12 justify-center text-gray-100 text-xs placeholder:text-gray-400 outline-none",...r})}c(m,"InputFieldInput");function d({children:t}){return e(u,{className:"w-6 h-6 text-gray-600",children:t})}c(d,"InputFieldIcon");d.displayName="InputField.Icon";a.displayName="InputField.Root";const n={Root:a,Input:m,Icon:d},w={title:"Components/InputField",component:n.Root,args:{children:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:email-outline"})}),e(n.Input,{})]}),hasError:!1},argTypes:{hasError:{options:[!1,!0],control:{type:"boolean"}},children:{name:"type",options:["email","password","text"],mapping:{email:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:email-outline"})}),e(n.Input,{placeholder:"Type your e-mail address",type:"email"})]}),password:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:lock-outline"})}),e(n.Input,{placeholder:"************",type:"password"}),e(n.Icon,{children:e(o,{icon:"mdi:eye-off-outline"})})]}),text:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:lock-outline"})}),e(n.Input,{placeholder:"your password",type:"text"}),e(n.Icon,{children:e(o,{icon:"mdi:eye-outline"})})]})}}}},F={},b={args:{children:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:email-outline"})}),e(n.Input,{placeholder:"Type your e-mail address",type:"email"})]})},argTypes:{children:{table:{disable:!0}}}},T={args:{children:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:lock-outline"})}),e(n.Input,{placeholder:"************",type:"password"}),e(n.Icon,{children:e(o,{icon:"mdi:eye-outline"})})]})},argTypes:{children:{table:{disable:!0}}}},N={args:{children:i(l,{children:[e(n.Icon,{children:e(o,{icon:"mdi:lock-outline"})}),e(n.Input,{placeholder:"your password",type:"text"}),e(n.Icon,{children:e(o,{icon:"mdi:eye-off-outline"})})]})},argTypes:{children:{table:{disable:!0}}}},j=["Default","Email","Password","Text"];export{F as Default,b as Email,T as Password,N as Text,j as __namedExportsOrder,w as default};
//# sourceMappingURL=InputField.stories.018db097.js.map