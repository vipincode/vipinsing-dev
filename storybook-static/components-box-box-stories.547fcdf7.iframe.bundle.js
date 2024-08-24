"use strict";(self.webpackChunkvipinsingh_dev=self.webpackChunkvipinsingh_dev||[]).push([[295],{"./src/components/box/box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Large:()=>Large,Medium:()=>Medium,Mobile:()=>Mobile,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/box",component:__webpack_require__("./src/components/box/index.tsx").a,args:{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sed minus rerum reprehenderit! Repudiandae sed consectetur, minus voluptates magni cum similique. Quam sint quidem est corporis nulla officia, expedita modi!"},argTypes:{variant:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["small","medium","large"]}}},Primary={args:{variant:"primary"}},Secondary={args:{variant:"secondary"}},Small={args:{size:"small"}},Medium={args:{size:"medium"}},Large={args:{size:"large"}},Dark={parameters:{themes:{themeOverride:"dark"}}},Mobile={parameters:{viewport:{defaultViewport:"mobile1"}}},__namedExportsOrder=["Primary","Secondary","Small","Medium","Large","Dark","Mobile"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'medium'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    themes: {\n      themeOverride: 'dark'\n    }\n  }\n}",...Dark.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}}},"./src/components/box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const variants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)(["shadow-sm","rounded"],{variants:{variant:{primary:["bg-white","dark:bg-black","dark:text-gray-100"],secondary:["dark:bg-primary-600","dark:text-white","bg-primary-200","text-primary-600"]},size:{small:["py-4","px-4"],medium:["px-6","py-6"],large:["px-8","py-8"]}},defaultVariants:{variant:"primary",size:"small"}}),Box=({variant="primary",size="small",className,...props})=>(0,jsx_runtime.jsx)("div",{className:variants({variant,size,className}),...props});Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'small'",computed:!1},required:!1}}}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);