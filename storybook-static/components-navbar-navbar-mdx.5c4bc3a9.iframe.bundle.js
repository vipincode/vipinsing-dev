(self.webpackChunkvipinsingh_dev=self.webpackChunkvipinsingh_dev||[]).push([[791,473],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/navbar/navbar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),D_Apps_11_Vipin_vipinsingh_dev_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_navbar_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/navbar/navbar.stories.tsx");function _createMdxContent(props){const _components={h2:"h2",p:"p",...(0,D_Apps_11_Vipin_vipinsingh_dev_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{children:"Navbar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_navbar_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"(Here some notes how to use Navbar)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-variations",children:"Other Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,D_Apps_11_Vipin_vipinsingh_dev_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/navbar/navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>navbar_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),box=__webpack_require__("./src/components/box/index.tsx"),check=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),heart=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/heart.js"),rotate_3d=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/rotate-3d.js"),house=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/house.js"),user=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/user.js"),icons_layers=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/layers.js"),clipboard_pen_line=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/clipboard-pen-line.js"),message_square_text=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/message-square-text.js"),moon=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/moon.js"),sun_medium=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/sun-medium.js"),trending_up=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/trending-up.js"),facebook=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/facebook.js"),linkedin=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/linkedin.js"),youtube=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/youtube.js"),move_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/move-right.js"),arrow_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-right.js"),align_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/align-right.js");const iconComponents={check:check.A,heart:heart.A,logo:rotate_3d.A,home:house.A,user:user.A,layers:icons_layers.A,writing:clipboard_pen_line.A,chat:message_square_text.A,moon:moon.A,sun:sun_medium.A,trendingUp:trending_up.A,facebook:facebook.A,linkedin:linkedin.A,youtube:youtube.A,moveRight:move_right.A,arrowRight:arrow_right.A,alignRight:align_right.A},Icon=({type,...props})=>{const IconComponent=iconComponents[type];return(0,jsx_runtime.jsx)(IconComponent,{...props})};Object.keys(iconComponents);Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{type:{required:!0,tsType:{name:"union",raw:"| 'check'\r\n| 'heart'\r\n| 'logo'\r\n| 'home'\r\n| 'user'\r\n| 'layers'\r\n| 'writing'\r\n| 'chat'\r\n| 'moon'\r\n| 'sun'\r\n| 'trendingUp'\r\n| 'facebook'\r\n| 'linkedin'\r\n| 'youtube'\r\n| 'arrowRight'\r\n| 'alignRight'\r\n| 'moveRight'",elements:[{name:"literal",value:"'check'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'logo'"},{name:"literal",value:"'home'"},{name:"literal",value:"'user'"},{name:"literal",value:"'layers'"},{name:"literal",value:"'writing'"},{name:"literal",value:"'chat'"},{name:"literal",value:"'moon'"},{name:"literal",value:"'sun'"},{name:"literal",value:"'trendingUp'"},{name:"literal",value:"'facebook'"},{name:"literal",value:"'linkedin'"},{name:"literal",value:"'youtube'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'alignRight'"},{name:"literal",value:"'moveRight'"}]},description:""}}};var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs");(0,dist.F)(["text-gray-950 dark:text-gray-100 font-bricolage font-semibold pb-3 pt-1"],{variants:{variant:{xs:["text-base","leading-5"],sm:["text-lg","leading-6"],md:["text-2xl","leading-7"],lg:["text-3xl","leading-9"]}},defaultVariants:{variant:"md"}}),(0,dist.F)(["text-gray-950 dark:text-gray-100 font-bricolage font-semibold"],{variants:{variant:{xs:["text-base","leading-5"],sm:["text-sm","leading-6"],md:["text-lg","leading-7"],lg:["text-xl","leading-8"]}},defaultVariants:{variant:"md"}}),(0,dist.F)(["text-gray-600","dark:text-gray-200"],{variants:{variant:{DEFAULT:["text-base","font-medium","leading-7"],xs:["text-xs","font-medium","leading-4"],sm:["text-sm","font-normal","leading-[26px]"],md:["text-lg","font-medium","leading-7"],lg:["text-xl","font-bold","leading-8"]}},defaultVariants:{variant:"DEFAULT"}});const text_outline_variants_variants=(0,dist.F)(["text-outline","font-bold","font-poppins"],{variants:{variant:{sm:["text-lg","lg:text-2xl","leading-[30px]"],md:["text-3xl","lg:text-3xl","leading-[36px]"],lg:["text-4xl","lg:text-8xl"," leading-[110px]"],xl:["text-6xl","lg:text-9xl"," leading-[152px]"]}},defaultVariants:{variant:"md"}}),TextOutline=({variant,className,...props})=>(0,jsx_runtime.jsx)("span",{className:text_outline_variants_variants({variant,className}),...props});TextOutline.__docgenInfo={description:"",methods:[],displayName:"TextOutline"};const Logo=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Icon,{type:"logo",size:34,className:"text-gray-950 dark:text-gray-200"}),(0,jsx_runtime.jsxs)("div",{className:"font-bricolage text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-200",children:["Vipin ",(0,jsx_runtime.jsx)(TextOutline,{children:"Folio"})]})]}),logo=Logo;Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"};const routes_home="/",routes_contact="/contact",NavMenus=[{label:"Home",icon:"home",href:routes_home},{label:"About",icon:"user",href:"/about"},{label:"Portfolio",icon:"layers",href:"/portfolio"},{label:"Contact",icon:"chat",href:routes_contact},{label:"Blog",icon:"writing",href:"/blog"}];var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),navigation=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const NavLinks=()=>{const path=(0,navigation.usePathname)();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:NavMenus.map((menu=>(0,jsx_runtime.jsxs)(link_default(),{href:menu.href,className:(0,bundle_mjs.QP)("flex items-center gap-2 rounded px-4 py-2 font-semibold duration-75 hover:bg-primary-50 dark:text-gray-500 dark:transition-all dark:ease-in dark:hover:bg-gray-950 dark:hover:text-white",path===menu.href&&"bg-primary-50 dark:bg-gray-950 dark:text-white"),children:[(0,jsx_runtime.jsx)(Icon,{type:menu.icon,size:16}),menu.label]},menu.label)))})},nav_links=NavLinks;NavLinks.__docgenInfo={description:"",methods:[],displayName:"NavLinks"};var next_themes_dist=__webpack_require__("./node_modules/next-themes/dist/index.mjs");const ThemeToggle=()=>{const{theme,setTheme}=(0,next_themes_dist.D)(),[mounted,setMounted]=(0,react.useState)(!1);if((0,react.useEffect)((()=>{setMounted(!0)}),[]),!mounted)return null;return(0,jsx_runtime.jsx)("button",{onClick:()=>{setTheme("light"===theme?"dark":"light")},children:"light"===theme?(0,jsx_runtime.jsx)(Icon,{type:"moon"}):(0,jsx_runtime.jsx)(Icon,{type:"sun"})})},theme_toggle=ThemeToggle;ThemeToggle.__docgenInfo={description:"",methods:[],displayName:"ThemeToggle"};const Navbar=()=>(0,jsx_runtime.jsx)(box.a,{children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between",children:[(0,jsx_runtime.jsx)(link_default(),{href:routes_home,className:"flex items-center gap-1",children:(0,jsx_runtime.jsx)(logo,{})}),(0,jsx_runtime.jsx)("div",{className:"hidden items-center gap-1 font-bricolage lg:flex",children:(0,jsx_runtime.jsx)(nav_links,{})}),(0,jsx_runtime.jsxs)("div",{className:"hidden items-center gap-10 font-semibold text-gray-600 dark:text-gray-500 lg:flex",children:[(0,jsx_runtime.jsx)(theme_toggle,{}),(0,jsx_runtime.jsxs)(link_default(),{href:routes_contact,className:"flex items-center gap-1",children:["Let's Talk ",(0,jsx_runtime.jsx)(Icon,{type:"trendingUp"})]})]}),(0,jsx_runtime.jsx)("div",{className:"lg:hidden",children:(0,jsx_runtime.jsx)("button",{children:(0,jsx_runtime.jsx)(Icon,{type:"alignRight"})})})]})});Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar"};const navbar_stories={title:"Components/navbar",component:Navbar},Primary={},Dark={parameters:{themes:{themeOverride:"dark"}}},__namedExportsOrder=["Primary","Dark"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    themes: {\n      themeOverride: 'dark'\n    }\n  }\n}",...Dark.parameters?.docs?.source}}}},"./src/components/box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const variants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)(["shadow-sm","rounded"],{variants:{variant:{primary:["bg-white","dark:bg-black","dark:text-gray-100"],secondary:["dark:bg-primary-600","dark:text-white","bg-primary-200","text-primary-600"]},size:{small:["py-4","px-4"],medium:["px-6","py-6"],large:["px-8","py-8"]}},defaultVariants:{variant:"primary",size:"small"}}),Box=({variant="primary",size="small",className,...props})=>(0,jsx_runtime.jsx)("div",{className:variants({variant,size,className}),...props});Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'small'",computed:!1},required:!1}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);