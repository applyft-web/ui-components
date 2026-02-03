"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[361],{"./src/core/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.U_,ac:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.ac});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts")},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U_:()=>GlobalThemeProvider,ac:()=>GradientScrollable,Zj:()=>theme.Z});var theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  :root {
    --system-ui: Arial, system-ui, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--system-ui);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  html, body {
    background-color: `,`;
  }

  html {
    height: 100%;
    overscroll-behavior: none;
  }

  body {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    height: calc(var(--vh,1svh) * 100);
    color: `,`;
    user-select: none;

    > * {
      width: 100%;
      height: 100%;
    }
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="textarea"],
  input[type="radio"],
  textarea,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="radio"] {
    display: none;
  }

  a, input, button {
    font-family: var(--system-ui);
  }
  
  .scrollable {
    overflow-x: auto;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
  }
  
  `,`;
`]);return _templateObject=function _templateObject(){return data},data}var GlobalStyles=(0,styled_components_browser_esm.DU)(_templateObject(),function(param){var _theme_colors;return(null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){var _theme_colors;return(null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.text)||"#323232"},function(param){return param.$customStyles}),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var GZ="geozilla",FL="family-locator",FO="familo",BB="brainbloom",aliases={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,brainbloom:BB,bb:BB},fallback=aliases.gz,GlobalThemeProvider=function(param){var _aliases_projectTheme_toLowerCase,children=param.children,_param_projectTheme=param.projectTheme,projectTheme=void 0===_param_projectTheme?fallback:_param_projectTheme,_param_customTheme=param.customTheme,customGlobalStyles=param.customGlobalStyles,_param_isArabic=param.isArabic,_param_isRtl=param.isRtl,isRtl=void 0===_param_isRtl?void 0!==_param_isArabic&&_param_isArabic:_param_isRtl,_param_enableRTL=param.enableRTL,enableRTL=void 0!==_param_enableRTL&&_param_enableRTL,currentTheme="string"==typeof projectTheme?(0,theme.O)(null!=(_aliases_projectTheme_toLowerCase=aliases[projectTheme.toLowerCase()])?_aliases_projectTheme_toLowerCase:fallback):projectTheme;return(0,utils.MW)(),(0,react.useLayoutEffect)(function(){"undefined"!=typeof document&&document.documentElement.setAttribute("dir",isRtl&&enableRTL?"rtl":"ltr")},[isRtl,enableRTL]),react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.NP,{theme:_object_spread_props(_object_spread({},currentTheme),{isRtl:isRtl,isArabic:isRtl,enableRTL:enableRTL,custom:void 0===_param_customTheme?{}:_param_customTheme})},react.createElement(GlobalStyles,{$customStyles:customGlobalStyles}),children))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"Lets you wrap your app with theme context using {@link ThemeProvider}.",displayName:"GlobalThemeProvider",props:{projectTheme:{defaultValue:{value:"aliases.gz"},description:"",name:"projectTheme",required:!1,type:{name:"string | Theme"}},customGlobalStyles:{defaultValue:null,description:"",name:"customGlobalStyles",required:!1,type:{name:"string"}},customTheme:{defaultValue:{value:"{}"},description:"",name:"customTheme",required:!1,type:{name:"Record<string, string>"}},isArabic:{defaultValue:{value:"false"},description:`@since 1.5.4
@deprecated use \`isRtl\` instead of \`isArabic\` (still working for backward compatibility)`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:{value:"false"},description:"",name:"isRtl",required:!1,type:{name:"boolean"}},enableRTL:{defaultValue:{value:"false"},description:`@since 1.5.1
@experimental use in projects with \`dir\` attribute in \`<html>\` tag`,name:"enableRTL",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function GradientScrollable_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function GradientScrollable_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){GradientScrollable_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function GradientScrollable_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function GradientScrollable_templateObject(){var data=GradientScrollable_tagged_template_literal([`
  overflow-x: auto;
  overflow-y: auto;
  position: relative;
  padding: 10px 0;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  &:before, &:after {
    content: '';
    position: sticky;
    right: 0;
    left: 0;
    display: block;
    min-height: 1px;
    background-color: `,`;
    box-shadow: 0 0 30px 30px `,`;
    pointer-events: none;
    z-index: 10;
    transition: opacity 400ms ease;
  }

  &:before {
    opacity: `,`;
    top: -10px;
  }

  &:after {
    opacity: `,`;
    bottom: -10px;
    transform: rotate(180deg);
  }

  `,`;
`]);return GradientScrollable_templateObject=function _templateObject(){return data},data}var ScrollableContainer=(0,styled_components_browser_esm.Ay)("div")(GradientScrollable_templateObject(),function(param){var _theme_colors;return(null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){var _theme_colors;return(null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){return+!!param.$topGradient},function(param){return+!!param.$bottomGradient},function(param){return param.$customStyles}),GradientScrollable=function(_param){var children=_param.children,customStyles=_param.customStyles,customRef=_param.customRef,rest=_object_without_properties(_param,["children","customStyles","customRef"]),_useState=_sliced_to_array((0,react.useState)(!1),2),topGradient=_useState[0],setTopGradient=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),bottomGradient=_useState1[0],setBottomGradient=_useState1[1],ref=customRef||(0,react.useRef)(null);return(0,react.useEffect)(function(){if(ref.current){var _ref_current=ref.current;setBottomGradient(_ref_current.scrollHeight!==_ref_current.clientHeight)}},[]),react.createElement(ScrollableContainer,GradientScrollable_object_spread({$topGradient:topGradient,$bottomGradient:bottomGradient,$customStyles:customStyles,onScroll:function(e){var _e_target=e.target,scrollTop=_e_target.scrollTop,scrollHeight=_e_target.scrollHeight,clientHeight=_e_target.clientHeight;setTopGradient(scrollTop>1),setBottomGradient(scrollTop+clientHeight+1<scrollHeight)},ref:ref},rest),children)};try{GradientScrollable.displayName="GradientScrollable",GradientScrollable.__docgenInfo={description:"",displayName:"GradientScrollable",props:{customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},customRef:{defaultValue:null,description:"",name:"customRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GradientScrollable.tsx#GradientScrollable"]={docgenInfo:GradientScrollable.__docgenInfo,name:"GradientScrollable",path:"src/core/theme/GradientScrollable.tsx#GradientScrollable"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__.d(__webpack_exports__,{O:()=>getTheme,Z:()=>themes});var defaultTheme={colors:{text:"#323232",bodyBackground:"#fff",optionActiveText:"#323232",buttonColor:"#fff",buttonDisabledTextColor:"#fff",inputBg:"#fff",circularProgressBg:"#F2F2F2",reviewItemBg:"#f4f4f4",planItemBorder:"#c3c3c3",planItemBg:"#fff",planItemTextColorInactive:"#7F84A7",planItemCheckBg:"#fff",planItemLabelColorActive:"#fff",planItemLabelColorInactive:"#323232"},mobileWidth:"350",tabletMinWidth:"432",desktopMinWidth:"992",breakpoints:{mobile:350,tablet:432,desktop:992},maxContentWidth:"343",sidePadding:"16",buttonBorderRadius:"12px",buttonBottomPosition:"24px",planItemBorderRadius:"8px"},themes={geozilla:{colors:{primary:"#00BFA5",buttonHover:"#00A08B",buttonDisabled:"#9bdfd2",optionInactive:"#EBFAF8",optionBorderInactive:"#EBFAF8",optionActive:"#C2F0EA",optionBorderActive:"#00BFA5",optionImgActive:"#94E3D9",optionImgInactive:"#C2F0EA",optionCheckActive:"#00BFA5",optionCheckInactive:"#BBE1DC",threeDots:"#00BFA5",progressBarActive:"#00bfa5",progressBarBg:"#f0efef",planItemCheckBorder:"#00BFA5",planItemLabelBg:"#E5F6F3"}},"family-locator":{colors:{primary:"#3393EC",buttonHover:"#1F7ACE",buttonDisabled:"#9ec9f6",optionInactive:"#F0F8FF",optionBorderInactive:"#F0F8FF",optionActive:"#C5E3FF",optionBorderActive:"#007AFF",optionImgActive:"#8BB6DE",optionImgInactive:"#C3E1FF",optionCheckActive:"#007AFF",optionCheckInactive:"#CCDDF0",threeDots:"#5281BD",progressBarActive:"#3393ec",progressBarBg:"#f3f3f3",planItemCheckBorder:"#3393EC",planItemLabelBg:"#EBF3FE"}},familo:{colors:{primary:"#F58A3C",buttonHover:"#C56A28",buttonDisabled:"#fcc5a1",optionInactive:"#FEF7F1",optionBorderInactive:"#FEF7F1",optionActive:"#FFE5D2",optionBorderActive:"#F58A3C",optionImgActive:"#ECC6AA",optionImgInactive:"#FFE4D0",optionCheckActive:"#F58A3C",optionCheckInactive:"#EED6C5",threeDots:"#F58A3C",progressBarActive:"#f58a3c",progressBarBg:"#f3f3f3",planItemCheckBorder:"#F58A3C",planItemLabelBg:"#FEF3EB"}},brainbloom:{colors:{text:"#fff",bodyBackground:"#292C44",primary:"#FDC21C",buttonHover:"#FDC21C",buttonColor:"#292C44",buttonDisabled:"#494D6D",buttonDisabledTextColor:"#747794",optionInactive:"#404464",optionBorderInactive:"#404464",optionActive:"#FDC21C",optionBorderActive:"#fdc21c",optionActiveText:"#292C44",optionImgActive:"#292C44",optionImgInactive:"#898FBD",optionCheckActive:"#292C44",optionCheckInactive:"#898FBD",threeDots:"#fff",progressBarActive:"#FDC21C",progressBarBg:"#F0EFEF",circularProgressBg:"#404464",inputBg:"#404464",reviewItemBg:"#404464",planItemBg:"#404464",planItemBorder:"#5D638F",planItemLabelBg:"#515684",planItemCheckBorder:"#CF9B08",planItemCheckBg:"#292C44",planItemLabelColorActive:"#292C44",planItemLabelColorInactive:"#8A8FB2"}}},getTheme=function(){var _currentTheme_colors,projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"geozilla",currentTheme=themes[projectName];return _object_spread_props(_object_spread({},defaultTheme,currentTheme),{colors:_object_spread({},defaultTheme.colors,null!=(_currentTheme_colors=currentTheme.colors)?_currentTheme_colors:{})})}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gs:()=>mergeStyleObjects,Lu:()=>reactChildrenMapping,MW:()=>useDynamicHeight,j1:()=>getTextAlign,nc:()=>getCssSize,p5:()=>getFormattedStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var getTextAlign=function(){var isRtl=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return isRtl?"right":"left"},reactChildrenMapping=function(children){var customProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(children)return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,function(child,index){if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)){var props=_object_spread({key:index},customProps,child.props);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,props)}return null})},useDynamicHeight=function(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var setDynamicVH=function(){var vh=(.01*window.innerHeight).toFixed(2);document.documentElement.style.setProperty("--vh","".concat(vh,"px"))};return setTimeout(function(){setDynamicVH(),window.addEventListener("resize",setDynamicVH,!1)},100),function(){window.removeEventListener("resize",setDynamicVH,!1)}},[])},getCssSize=function(){var val=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(+val)?val.toString():"".concat(val||0,"px")},mergeStyleObjects=function(){var obj1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},obj2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedTheme=Object.keys(obj1).reduce(function(acc,key){return _object_spread({},acc,_define_property({},key,[obj1[key],obj2[key]].join(";")))},{});return _object_spread({},obj1,obj2,mergedTheme)},getFormattedStyles=function(styles,defaultKey){return styles?"string"==typeof styles?_define_property({},defaultKey,styles):styles:_define_property({},defaultKey,"")}}}]);