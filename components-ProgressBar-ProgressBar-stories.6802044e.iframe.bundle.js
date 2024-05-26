"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[427],{"./src/components/ProgressBar/ProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressBarStoryTemplate:()=>ProgressBarStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/theme/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let __WEBPACK_DEFAULT_EXPORT__={component:_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.z,parameters:{controls:{include:["theme","isSegmented","totalCount","currentRoute","skipButton"]}},argTypes:_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var ProgressBarStoryTemplate={args:{theme:(0,_core_theme__WEBPACK_IMPORTED_MODULE_3__.O4)(),isSegmented:!0,totalCount:15,currentRoute:5,skipButton:"skip"}};ProgressBarStoryTemplate.storyName="ProgressBar",ProgressBarStoryTemplate.parameters={...ProgressBarStoryTemplate.parameters,docs:{...ProgressBarStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    isSegmented: true,\n    totalCount: 15,\n    currentRoute: 5,\n    skipButton: 'skip'\n  }\n}",...ProgressBarStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["ProgressBarStoryTemplate"]},"./src/components/ProgressBar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  max-width: ","px;\n  height: 20px;\n  position: fixed;\n  top: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-size: 16px;\n  line-height: 20px;\n  margin-left: 20px;\n  cursor: pointer;\n\n  @media screen and (min-width: ","px) and (hover: hover) {\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n\n  ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: flex;\n  flex: 1 0 auto;\n  height: 8px;\n  border-radius: 20px;\n  background-color: ",";\n  transition: background-color 300ms;\n  overflow: hidden;\n\n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  flex-grow: 1;\n  background-color: ",";\n  transition: background-color 300ms;\n\n  ","\n\n  ",";\n"]);return _templateObject3=function _templateObject(){return data},data}var StyledContainer=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){return param.$customStyles}),StyledSkip=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){var theme=param.theme;return null==theme?void 0:theme.tabletMinWidth},function(param){return param.$customStyles}),StyledBar=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var _theme_colors,theme=param.theme;return param.$isSegmented?"transparent":(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.progressBarBg)||"#fff"},function(param){return param.$customStyles}),StyledBarItem=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){var _theme_colors,theme=param.theme,$isActive=param.$isActive;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors["progressBar".concat($isActive?"Active":"Bg")]},function(param){return param.$isSegmented&&"\n    border-radius: 14px;\n    &:not(:first-child) {\n      margin-left: 5px;\n    }\n  "},function(param){return param.$customStyles});function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ProgressBar=function(_param){var styles,_param_isSegmented=_param.isSegmented,isSegmented=void 0!==_param_isSegmented&&_param_isSegmented,totalCount=_param.totalCount,currentRoute=_param.currentRoute,skipButton=_param.skipButton,customStyles=_param.customStyles,rest=_object_without_properties(_param,["isSegmented","totalCount","currentRoute","skipButton","customStyles"]),theme=null==rest?void 0:rest.theme,pages=Array(totalCount).fill(0);return styles="string"==typeof customStyles?{container:customStyles,bar:"",segment:"",skip:""}:customStyles,react.createElement(StyledContainer,{theme:theme,$customStyles:null==styles?void 0:styles.container},react.createElement(StyledBar,{$isSegmented:isSegmented,theme:theme,$customStyles:null==styles?void 0:styles.bar},pages.map(function(_,i){return react.createElement(StyledBarItem,{$isActive:i<=currentRoute,$isSegmented:isSegmented,theme:theme,$customStyles:null==styles?void 0:styles.segment,key:i})})),skipButton&&react.createElement(StyledSkip,{onClick:null==rest?void 0:rest.onContinueClick,theme:theme,$customStyles:null==styles?void 0:styles.skip},skipButton))};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{isSegmented:{defaultValue:{value:"false"},description:"",name:"isSegmented",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},currentRoute:{defaultValue:null,description:"",name:"currentRoute",required:!0,type:{name:"number"}},skipButton:{defaultValue:null,description:"",name:"skipButton",required:!1,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},onContinueClick:{defaultValue:null,description:"",name:"onContinueClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kH:()=>GlobalStyles,U_:()=>GlobalThemeProvider,O4:()=>theme.O,Zj:()=>theme.Z,MW:()=>utils.MW});var theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(['\n  :root {\n    --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--system-ui);\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: none;\n    overscroll-behavior: none;\n\n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }\n  }\n\n  html, body {\n    background-color: ',";\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: calc(var(--vh,1svh) * 100);\n    color: ",';\n    user-select: none;\n\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  input[type="text"],\n  input[type="tel"],\n  input[type="email"],\n  input[type="password"],\n  input[type="tel"],\n  input[type="textarea"],\n  input[type="radio"],\n  textarea,\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  input[type="radio"] {\n    display: none;\n  }\n\n  a, input, button {\n    font-family: var(--system-ui);\n  }\n  \n  .scrollable {\n    overflow-x: auto;\n    overflow-y: auto;\n    \n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n      display: none;\n    }\n  }\n  \n  ',";\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyles=(0,styled_components_browser_esm.DU)(_templateObject(),function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.text)||"#323232"},function(param){return param.$customStyles}),react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var GZ="Geozilla",FL="Family-Locator",FO="Familo",BB="BrainBloom",namesList={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,brainbloom:BB,bb:BB},fallback=namesList.gz,GlobalThemeProvider=function(param){var _namesList_projectTheme_toLowerCase,children=param.children,_param_projectTheme=param.projectTheme,projectTheme=void 0===_param_projectTheme?fallback:_param_projectTheme,_param_customTheme=param.customTheme,customGlobalStyles=param.customGlobalStyles,currentTheme="string"==typeof projectTheme?(0,theme.O)(null!==(_namesList_projectTheme_toLowerCase=namesList[projectTheme.toLowerCase()])&&void 0!==_namesList_projectTheme_toLowerCase?_namesList_projectTheme_toLowerCase:fallback):projectTheme;return(0,utils.MW)(),react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.NP,{theme:_object_spread({},currentTheme,{custom:void 0===_param_customTheme?{}:_param_customTheme})},react.createElement(GlobalStyles,{$customStyles:customGlobalStyles}),children))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"",displayName:"GlobalThemeProvider",props:{projectTheme:{defaultValue:{value:"namesList['gz']"},description:"",name:"projectTheme",required:!1,type:{name:"string | Theme"}},customGlobalStyles:{defaultValue:null,description:"",name:"customGlobalStyles",required:!1,type:{name:"string"}},customTheme:{defaultValue:{value:"{}"},description:"",name:"customTheme",required:!1,type:{name:"{ [propName: string]: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}__webpack_require__.d(__webpack_exports__,{O:()=>getTheme,Z:()=>themes});var defaultTheme={colors:{text:"#323232",bodyBackground:"#fff"},mobileWidth:"350",tabletMinWidth:"744",desktopMinWidth:"1280",maxContentWidth:"327"},themes={Geozilla:{colors:{primary:"#00BFA5",buttonHover:"#00A08B",buttonDisabled:"#9bdfd2",optionInactive:"#EBFAF8",optionActive:"#C2F0EA",optionBorderActive:"#00BFA5",optionImgActive:"#94E3D9",optionImgInactive:"#C2F0EA",optionCheckActive:"#00BFA5",optionCheckInactive:"#BBE1DC",threeDots:"#00BFA5",progressBarActive:"#00bfa5",progressBarBg:"#f0efef"}},"Family-Locator":{colors:{primary:"#3393EC",buttonHover:"#1F7ACE",buttonDisabled:"#9ec9f6",optionInactive:"#F0F8FF",optionActive:"#C5E3FF",optionBorderActive:"#007AFF",optionImgActive:"#8BB6DE",optionImgInactive:"#C3E1FF",optionCheckActive:"#007AFF",optionCheckInactive:"#CCDDF0",threeDots:"#5281BD",progressBarActive:"#3393ec",progressBarBg:"#f3f3f3"}},Familo:{colors:{primary:"#F58A3C",buttonHover:"#C56A28",buttonDisabled:"#fcc5a1",optionInactive:"#FEF7F1",optionActive:"#FFE5D2",optionBorderActive:"#F58A3C",optionImgActive:"#ECC6AA",optionImgInactive:"#FFE4D0",optionCheckActive:"#F58A3C",optionCheckInactive:"#EED6C5",threeDots:"#F58A3C",progressBarActive:"#f58a3c",progressBarBg:"#f3f3f3"}},BrainBloom:{colors:{text:"#fff",bodyBackground:"#292C44",primary:"#FDC21C",buttonHover:"#FDC21C",buttonDisabled:"#ffe29f",optionInactive:"#404464",optionActive:"#FDC21C",optionBorderActive:"#fdc21c",optionImgActive:"#292C44",optionImgInactive:"#898FBD",optionCheckActive:"#292C44",optionCheckInactive:"#898FBD",threeDots:"#fff",progressBarActive:"#FDC21C",progressBarBg:"#F0EFEF"},maxContentWidth:"343"}},getTheme=function(){var projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Geozilla",currentTheme=themes[projectName],mergedTheme=Object.keys(currentTheme).reduce(function(acc,key){return _object_spread({},acc,"object"==typeof currentTheme[key]?_define_property({},key,_object_spread({},defaultTheme[key],currentTheme[key])):{})},{});return _object_spread({},defaultTheme,currentTheme,mergedTheme)}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gs:()=>mergeStyleObjects,Lu:()=>reactChildrenMapping,MW:()=>useDynamicHeight,j1:()=>getTextAlign,nc:()=>getCssSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var getTextAlign=function(){var isArabic=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return isArabic?"left":"right"},reactChildrenMapping=function(children){var customProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(children)return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,function(child,index){if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)){var props=_object_spread({key:index},customProps,child.props);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,props)}})},useDynamicHeight=function(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var setDynamicVH=function(){var vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))};return setTimeout(function(){setDynamicVH(),window.addEventListener("resize",setDynamicVH,!1)},100),function(){return window.removeEventListener("resize",setDynamicVH,!1)}},[])},getCssSize=function(){var val=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(+val)?val.toString():"".concat(val||0,"px")},mergeStyleObjects=function(){var obj1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},obj2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedTheme=Object.keys(obj1).reduce(function(acc,key){return obj1[key]&&obj2[key]?_object_spread({},acc,_define_property({},key,[obj1[key],obj2[key]].join(";"))):acc},{});return _object_spread({},obj1,obj2,mergedTheme)}}}]);