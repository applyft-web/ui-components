"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[671],{"./src/components/SignupInput/SignupInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SignupInputStoryTemplate:()=>SignupInputStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SignupInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SignupInput/SignupInput.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SignupInput__WEBPACK_IMPORTED_MODULE_1__.x,props)))},parameters:{controls:{exclude:["setValue","submitEmail","placeholder","value"]}},argTypes:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var SignupInputStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),setValue:function(value){return window.sessionStorage.setItem("email",value.toString())},submitEmail:function(){return alert("email submitted: "+window.sessionStorage.getItem("email"))},placeholder:"Enter your email",isArabic:!1}};SignupInputStoryTemplate.storyName="SignupInput",SignupInputStoryTemplate.parameters={...SignupInputStoryTemplate.parameters,docs:{...SignupInputStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    setValue: value => window.sessionStorage.setItem('email', value.toString()),\n    submitEmail: () => alert('email submitted: ' + window.sessionStorage.getItem('email')),\n    // value: window.sessionStorage.getItem('email'),\n    placeholder: 'Enter your email',\n    isArabic: false\n  }\n}",...SignupInputStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["SignupInputStoryTemplate"]},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  max-width: ","px;\n  margin: 0 auto;\n  ",";\n  ",";\n  ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n\n  & > * {\n    width: 100%;\n  }\n\n  @media screen and (min-width: ","px) {\n    justify-content: center;\n\n    ",";\n  }\n\n  @media screen and (max-width: ","px) {\n    ",";\n  }\n  \n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $pt=param.$pt;return $pt&&"padding-top: ".concat((0,utils.nc)($pt))},function(param){var $pb=param.$pb;return $pb&&"padding-bottom: ".concat((0,utils.nc)($pb))},function(param){var theme=param.theme;return"\n    padding-right: ".concat((null==theme?void 0:theme.sidePadding)||16,"px;\n    padding-left: ").concat((null==theme?void 0:theme.sidePadding)||16,"px;\n  ")},function(param){var theme=param.theme;return null==theme?void 0:theme.tabletMinWidth},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.tablet},function(param){var theme=param.theme;return null==theme?void 0:theme.mobileWidth},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.mobile},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.default});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","pt","pb","customStyles"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/SignupInput/SignupInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>SignupInput});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  --side-padding: 15px;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  box-shadow: inset 0 0 0 1px ",";\n  background-color: ",";\n  padding: 12px var(--side-padding);\n  font-size: 16px;\n  line-height: 32px;\n  color: ",";\n  text-align: ",";\n  position: relative;\n  \n  &::placeholder {\n    font-size: 12px;\n    color: #8696A6;\n    white-space: pre-line;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    padding-left: 3px;\n    ",";\n  }\n  \n  &:focus,\n  &:active {\n    outline: none;\n    border: none;\n  }\n  \n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 90px;\n  height: 28px;\n  min-width: 90px;\n  background-color: transparent;\n  border: 1px solid rgb(229,229,229);\n  border-radius: 10px;\n  font-size: 12px;\n  line-height: 28px;\n  color: #8696A6;\n  padding: 0 5px;\n  cursor: pointer;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: ",";\n  margin-top: 16px;\n  height: 28px;\n  gap: 9px;\n  row-gap: 9px;\n\n  @media screen and (max-width: ","px) {\n    gap: 5px;\n    row-gap: 5px;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}var Input=styled_components_browser_esm.Ay.input(_templateObject(),function(param){return param.$error?"#FF5B5B":"rgb(229,229,229)"},function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.inputBg},function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.text},function(param){var $isArabic=param.$isArabic;return(0,utils.j1)($isArabic)},function(param){var $isArabic=param.$isArabic;return"\n      text-align: ".concat((0,utils.j1)($isArabic),";\n      ").concat((0,utils.j1)($isArabic),": var(--side-padding);\n    ")},function(param){return param.$customStyles}),DomainBtn=styled_components_browser_esm.Ay.button(_templateObject1()),BtnContainer=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){return param.$isArabic?"row-reverse":"row"},function(param){var theme=param.theme;return null==theme?void 0:theme.mobileWidth});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SignupInput=function(_param){var value=_param.value,placeholder=_param.placeholder,isValid=_param.isValid,setValue=_param.setValue,submitEmail=_param.submitEmail,_param_isArabic=_param.isArabic,isArabic=void 0!==_param_isArabic&&_param_isArabic,_param_customStyles=_param.customStyles,rest=_object_without_properties(_param,["value","placeholder","isValid","setValue","submitEmail","isArabic","customStyles"]),theme=null==rest?void 0:rest.theme,_useState=_sliced_to_array((0,react.useState)(null),2),selected=_useState[0],setSelected=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),error=_useState1[0],setError=_useState1[1],DOMAINS=(0,react.useMemo)(function(){return["gmail.com","yahoo.com","hotmail.com"]},[]);return(0,react.useEffect)(function(){if(isValid){var currentDomain=value.split("@")[1];setSelected(-1!==DOMAINS.indexOf(currentDomain)?currentDomain:null)}},[value,DOMAINS,isValid]),react.createElement(react.Fragment,null,react.createElement(Input,{type:"email",autoComplete:"email",value:value,onChange:function(event){setValue(event.target.value),setError(!1)},onBlur:function(event){var _event_relatedTarget_id,_event_relatedTarget;(null===(_event_relatedTarget=event.relatedTarget)||void 0===_event_relatedTarget?void 0:null===(_event_relatedTarget_id=_event_relatedTarget.id)||void 0===_event_relatedTarget_id?void 0:_event_relatedTarget_id.includes("domain"))||setError(!!value&&!isValid)},onKeyPress:function(e){"Enter"===e.key&&isValid&&(e.preventDefault(),submitEmail())},placeholder:placeholder,id:"sign-up-input",$error:error,$isArabic:isArabic,$customStyles:void 0===_param_customStyles?"":_param_customStyles,theme:theme}),react.createElement(function(){var onAddDomainClick=function(domain){value&&(setValue(function(prevState){return prevState.split("@")[0]+=domain}),setSelected(domain),setError(isValid))},list=DOMAINS.filter(function(d){return!value||!selected||d===selected});return react.createElement(BtnContainer,{$isArabic:isArabic},list.map(function(d,index){return react.createElement(DomainBtn,{onClick:function(){return onAddDomainClick("@"+d)},id:"domain-button-"+(index+1),tabIndex:index,key:d,theme:theme},"@",d)}))},null))};try{SignupInput.displayName="SignupInput",SignupInput.__docgenInfo={description:"",displayName:"SignupInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!0,type:{name:"boolean"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},submitEmail:{defaultValue:null,description:"",name:"submitEmail",required:!0,type:{name:"() => void"}},isArabic:{defaultValue:{value:"false"},description:"",name:"isArabic",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignupInput/SignupInput.tsx#SignupInput"]={docgenInfo:SignupInput.__docgenInfo,name:"SignupInput",path:"src/components/SignupInput/SignupInput.tsx#SignupInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.O4,U_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.U_});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts")},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kH:()=>GlobalStyles,U_:()=>GlobalThemeProvider,O4:()=>theme.O,Zj:()=>theme.Z,MW:()=>utils.MW});var theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(['\n  :root {\n    --system-ui: Arial, system-ui, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--system-ui);\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: none;\n    overscroll-behavior: none;\n\n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }\n  }\n\n  html, body {\n    background-color: ',";\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: calc(var(--vh,1svh) * 100);\n    color: ",';\n    user-select: none;\n\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  input[type="text"],\n  input[type="tel"],\n  input[type="email"],\n  input[type="password"],\n  input[type="tel"],\n  input[type="textarea"],\n  input[type="radio"],\n  textarea,\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  input[type="radio"] {\n    display: none;\n  }\n\n  a, input, button {\n    font-family: var(--system-ui);\n  }\n  \n  .scrollable {\n    overflow-x: auto;\n    overflow-y: auto;\n    \n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n      display: none;\n    }\n  }\n  \n  ',";\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyles=(0,styled_components_browser_esm.DU)(_templateObject(),function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.text)||"#323232"},function(param){return param.$customStyles}),react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var GZ="geozilla",FL="family-locator",FO="familo",BB="brainbloom",namesList={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,brainbloom:BB,bb:BB},fallback=namesList.gz,GlobalThemeProvider=function(param){var _namesList_projectTheme_toLowerCase,children=param.children,_param_projectTheme=param.projectTheme,projectTheme=void 0===_param_projectTheme?fallback:_param_projectTheme,_param_customTheme=param.customTheme,customGlobalStyles=param.customGlobalStyles,currentTheme="string"==typeof projectTheme?(0,theme.O)(null!==(_namesList_projectTheme_toLowerCase=namesList[projectTheme.toLowerCase()])&&void 0!==_namesList_projectTheme_toLowerCase?_namesList_projectTheme_toLowerCase:fallback):projectTheme;return(0,utils.MW)(),react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.NP,{theme:_object_spread({},currentTheme,{custom:void 0===_param_customTheme?{}:_param_customTheme})},react.createElement(GlobalStyles,{$customStyles:customGlobalStyles}),children))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"",displayName:"GlobalThemeProvider",props:{projectTheme:{defaultValue:{value:"namesList['gz']"},description:"",name:"projectTheme",required:!1,type:{name:"string | Theme"}},customGlobalStyles:{defaultValue:null,description:"",name:"customGlobalStyles",required:!1,type:{name:"string"}},customTheme:{defaultValue:{value:"{}"},description:"",name:"customTheme",required:!1,type:{name:"{ [propName: string]: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}__webpack_require__.d(__webpack_exports__,{O:()=>getTheme,Z:()=>themes});var defaultTheme={colors:{text:"#323232",bodyBackground:"#fff"},mobileWidth:"350",tabletMinWidth:"744",desktopMinWidth:"1280",maxContentWidth:"327",sidePadding:"24",buttonBorderRadius:"12px",buttonBottomPosition:"24px"},themes={geozilla:{colors:{primary:"#00BFA5",buttonHover:"#00A08B",buttonDisabled:"#9bdfd2",buttonDisabledTextColor:"#323232",optionInactive:"#EBFAF8",optionBorderInactive:"#EBFAF8",optionActive:"#C2F0EA",optionBorderActive:"#00BFA5",optionActiveText:"#323232",optionImgActive:"#94E3D9",optionImgInactive:"#C2F0EA",optionCheckActive:"#00BFA5",optionCheckInactive:"#BBE1DC",threeDots:"#00BFA5",progressBarActive:"#00bfa5",progressBarBg:"#f0efef",circularProgressBg:"#F2F2F2",inputBg:"#fff",reviewItemBg:"#f4f4f4",planItemBg:"#fff",planItemBorder:"#c3c3c3",planItemLabelBg:"#fff",planItemCheckBorder:"#00BFA5"}},"family-locator":{colors:{primary:"#3393EC",buttonHover:"#1F7ACE",buttonDisabled:"#9ec9f6",buttonDisabledTextColor:"#323232",optionInactive:"#F0F8FF",optionBorderInactive:"#F0F8FF",optionActive:"#C5E3FF",optionBorderActive:"#007AFF",optionActiveText:"#323232",optionImgActive:"#8BB6DE",optionImgInactive:"#C3E1FF",optionCheckActive:"#007AFF",optionCheckInactive:"#CCDDF0",threeDots:"#5281BD",progressBarActive:"#3393ec",progressBarBg:"#f3f3f3",circularProgressBg:"#F2F2F2",inputBg:"#fff",reviewItemBg:"#f4f4f4",planItemBg:"#fff",planItemBorder:"#c3c3c3",planItemLabelBg:"#fff",planItemCheckBorder:"#3393EC"}},familo:{colors:{primary:"#F58A3C",buttonHover:"#C56A28",buttonDisabled:"#fcc5a1",buttonDisabledTextColor:"#323232",optionInactive:"#FEF7F1",optionBorderInactive:"#FEF7F1",optionActive:"#FFE5D2",optionBorderActive:"#F58A3C",optionActiveText:"#323232",optionImgActive:"#ECC6AA",optionImgInactive:"#FFE4D0",optionCheckActive:"#F58A3C",optionCheckInactive:"#EED6C5",threeDots:"#F58A3C",progressBarActive:"#f58a3c",progressBarBg:"#f3f3f3",circularProgressBg:"#F2F2F2",inputBg:"#fff",reviewItemBg:"#f4f4f4",planItemBg:"#fff",planItemBorder:"#c4c4c4",planItemLabelBg:"#fff",planItemCheckBorder:"#F58A3C"}},brainbloom:{colors:{text:"#fff",bodyBackground:"#292C44",primary:"#FDC21C",buttonHover:"#FDC21C",buttonDisabled:"#494D6D",buttonDisabledTextColor:"#747794",optionInactive:"#404464",optionBorderInactive:"#404464",optionActive:"#FDC21C",optionBorderActive:"#fdc21c",optionActiveText:"#292C44",optionImgActive:"#292C44",optionImgInactive:"#898FBD",optionCheckActive:"#292C44",optionCheckInactive:"#898FBD",threeDots:"#fff",progressBarActive:"#FDC21C",progressBarBg:"#F0EFEF",circularProgressBg:"#404464",inputBg:"#404464",reviewItemBg:"#404464",planItemBg:"#404464",planItemBorder:"#5D638F",planItemLabelBg:"#515684",planItemCheckBorder:"#CF9B08"},maxContentWidth:"343",sidePadding:"16"}},getTheme=function(){var projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"geozilla",currentTheme=themes[projectName.toLowerCase()],mergedTheme=Object.keys(currentTheme).reduce(function(acc,key){return _object_spread({},acc,"object"==typeof currentTheme[key]?_define_property({},key,_object_spread({},defaultTheme[key],currentTheme[key])):{})},{});return _object_spread({},defaultTheme,currentTheme,mergedTheme)}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gs:()=>mergeStyleObjects,Lu:()=>reactChildrenMapping,MW:()=>useDynamicHeight,j1:()=>getTextAlign,nc:()=>getCssSize,p5:()=>getFormattedStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var getTextAlign=function(){var isArabic=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return isArabic?"right":"left"},reactChildrenMapping=function(children){var customProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(children)return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,function(child,index){if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)){var props=_object_spread({key:index},customProps,child.props);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,props)}})},useDynamicHeight=function(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var setDynamicVH=function(){var vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))};return setTimeout(function(){setDynamicVH(),window.addEventListener("resize",setDynamicVH,!1)},100),function(){return window.removeEventListener("resize",setDynamicVH,!1)}},[])},getCssSize=function(){var val=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(+val)?val.toString():"".concat(val||0,"px")},mergeStyleObjects=function(){var obj1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},obj2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedTheme=Object.keys(obj1).reduce(function(acc,key){return _object_spread({},acc,_define_property({},key,[obj1[key],obj2[key]].join(";")))},{});return _object_spread({},obj1,obj2,mergedTheme)},getFormattedStyles=function(styles,defaultKey){return styles?"string"==typeof styles?_define_property({},defaultKey,styles):styles:_define_property({},defaultKey,"")}}}]);