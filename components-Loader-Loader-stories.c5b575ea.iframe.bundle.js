"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[943],{"./src/components/Loader/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoaderStoryTemplate:()=>LoaderStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Loader/Loader.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Nullam nec"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor, consectetur adipiscing elit. Nullam nec"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Nullam nec"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_1__.a,props))},parameters:{controls:{exclude:["show"]}},argTypes:function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W),{type:{options:["solid","dotted"],control:"inline-radio"},fill:{control:"color"}})};var LoaderStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),transparent:!1,message:"Loading..."}};LoaderStoryTemplate.storyName="Loader",LoaderStoryTemplate.parameters={...LoaderStoryTemplate.parameters,docs:{...LoaderStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    transparent: false,\n    message: 'Loading...'\n  }\n}",...LoaderStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["LoaderStoryTemplate"]},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n    \n    & > *:not(.ignore-inheritance) {\n      max-width: 100%;\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    \n    @media screen and (min-width: ","px) {\n      & > *:not(.ignore-inheritance) {\n        max-width: 432px;\n      }\n    }\n    \n    @media screen and (min-width: ","px) {\n      & > *:not(.ignore-inheritance) {\n        max-width: 960px;\n        padding-left: 0;\n        padding-right: 0;\n      }\n    }\n    \n  "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    \n    max-width: ","px;\n    padding-right: ","px;\n    padding-left: ","px;\n    \n    & > * {\n      width: 100%;\n    }\n    \n    @media screen and (min-width: ","px) {\n      justify-content: center;\n      \n      ",";\n    }\n    \n    @media screen and (max-width: ","px) {\n      ",";\n    }\n    \n  "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n  ",";\n  ",";\n  ",";\n  \n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var $pt=param.$pt;return void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt))},function(param){var $pb=param.$pb;return void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb))},function(param){var $adaptive=param.$adaptive,$customStyles=param.$customStyles,theme=param.theme;return $adaptive?(0,styled_components_browser_esm.AH)(_templateObject(),null==theme?void 0:theme.tabletMinWidth,null==theme?void 0:theme.desktopMinWidth):(0,styled_components_browser_esm.AH)(_templateObject1(),parseInt((null==theme?void 0:theme.maxContentWidth)||375)+2*parseInt((null==theme?void 0:theme.sidePadding)||0),(null==theme?void 0:theme.sidePadding)||16,(null==theme?void 0:theme.sidePadding)||16,null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile)},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.default});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,_param_adaptive=_param.adaptive,rest=_object_without_properties(_param,["children","pt","pb","customStyles","adaptive"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles,$adaptive:void 0!==_param_adaptive&&_param_adaptive},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}},adaptive:{defaultValue:{value:"false"},description:"",name:"adaptive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/Loader/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  to {\n    transform: rotate(360deg);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  ",";\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  z-index: 1000;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 48px;\n  height: 48px;\n  animation: "," 1.5s linear infinite;\n    \n  circle, path {\n    fill: ",";\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  white-space: break-spaces;\n  margin-top: 32px;\n"]);return _templateObject3=function _templateObject(){return data},data}var spinning=(0,styled_components_browser_esm.i7)(_templateObject()),StyledSpinner=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){return!param.$transparent&&"background-color: rgba(0,0,0,.3)"}),StyledSVG=styled_components_browser_esm.Ay.svg(_templateObject2(),spinning,function(param){var _theme_colors,theme=param.theme;return param.$fill||(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.primary)}),Message=styled_components_browser_esm.Ay.span(_templateObject3());function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SpinnerSvg=function(param){var type=param.type,fill=param.fill,theme=param.theme;switch(type){case"dotted":return react.createElement(StyledSVG,{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",theme:theme,$fill:fill},react.createElement("circle",{cx:"24.5",cy:"4",r:"4",transform:"rotate(90 24.5 4)"}),react.createElement("circle",{cx:"24.5",cy:"44",r:"4",transform:"rotate(90 24.5 44)",fillOpacity:"0.3"}),react.createElement("circle",{opacity:"0.15",cx:"44.5",cy:"24",r:"4",transform:"rotate(90 44.5 24)"}),react.createElement("circle",{cx:"4.5",cy:"24",r:"4",transform:"rotate(90 4.5 24)",fillOpacity:"0.65"}),react.createElement("circle",{opacity:"0.2",cx:"38.642",cy:"38.1421",r:"4",transform:"rotate(135 38.642 38.1421)"}),react.createElement("circle",{cx:"10.3578",cy:"9.85779",r:"4",transform:"rotate(135 10.3578 9.85779)",fillOpacity:"0.85"}),react.createElement("circle",{cx:"10.3579",cy:"38.1421",r:"4",transform:"rotate(-135 10.3579 38.1421)",fillOpacity:"0.5"}),react.createElement("circle",{opacity:"0.05",cx:"38.6421",cy:"9.85779",r:"4",transform:"rotate(-135 38.6421 9.85779)"}));case"solid":return react.createElement(StyledSVG,{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",theme:theme,$fill:fill},react.createElement("path",{d:"M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM6.38657 24C6.38657 33.7276 14.2724 41.6134 24 41.6134C33.7276 41.6134 41.6134 33.7276 41.6134 24C41.6134 14.2724 33.7276 6.38657 24 6.38657C14.2724 6.38657 6.38657 14.2724 6.38657 24Z",fillOpacity:"0.5"}),react.createElement("path",{d:"M24 3.19329C24 1.42968 25.436 -0.0218585 27.184 0.21211C31.2157 0.751748 35.0628 2.31025 38.3511 4.76341C42.4966 7.85606 45.5321 12.2051 47.0055 17.1628C48.4789 22.1205 48.3114 27.4215 46.5279 32.2762C45.1131 36.1271 42.7417 39.5338 39.6591 42.1878C38.3226 43.3384 36.3269 42.9068 35.3637 41.4294C34.4005 39.9521 34.843 37.9919 36.1224 36.7781C38.0786 34.9223 39.5934 32.6316 40.533 30.0739C41.8419 26.511 41.9649 22.6206 40.8836 18.9822C39.8022 15.3438 37.5745 12.1521 34.5322 9.88241C32.3481 8.25305 29.8282 7.16147 27.1759 6.67524C25.4412 6.35723 24 4.95689 24 3.19329Z"}));default:return null}},Loader=function(_param){var _param_show=_param.show,message=_param.message,_param_transparent=_param.transparent,_param_type=_param.type,fill=_param.fill,rest=_object_without_properties(_param,["show","message","transparent","type","fill"]),theme=null==rest?void 0:rest.theme;return void 0===_param_show||_param_show?react.createElement(StyledSpinner,{id:"loading-element",$transparent:void 0!==_param_transparent&&_param_transparent,theme:theme},react.createElement(SpinnerSvg,{type:void 0===_param_type?"dotted":_param_type,fill:fill,theme:theme}),react.createElement(Message,{theme:theme},message)):null};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{show:{defaultValue:{value:"true"},description:"",name:"show",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"dotted"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"dotted"'},{value:'"solid"'}]}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);