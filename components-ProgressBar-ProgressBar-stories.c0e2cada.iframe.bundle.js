"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[427],{"./src/components/ProgressBar/ProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressBarStoryTemplate:()=>ProgressBarStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ProgressBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.z,props)))},parameters:{controls:{exclude:["onContinueClick"]}},argTypes:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var ProgressBarStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),isSegmented:!0,staticPosition:!1,totalCount:15,currentRoute:5,skipButton:"skip",customStyles:{container:"",bar:"",segment:"",skip:""}}};ProgressBarStoryTemplate.storyName="ProgressBar",ProgressBarStoryTemplate.parameters={...ProgressBarStoryTemplate.parameters,docs:{...ProgressBarStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    isSegmented: true,\n    staticPosition: false,\n    totalCount: 15,\n    currentRoute: 5,\n    skipButton: 'skip',\n    customStyles: {\n      container: '',\n      bar: '',\n      segment: '',\n      skip: ''\n    }\n  }\n}",...ProgressBarStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["ProgressBarStoryTemplate"]},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n    \n    & > *:not(.ignore-inheritance) {\n      max-width: 100%;\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    \n    @media screen and (min-width: ","px) {\n      & > *:not(.ignore-inheritance) {\n        max-width: 432px;\n      }\n    }\n    \n    @media screen and (min-width: ","px) {\n      & > *:not(.ignore-inheritance) {\n        max-width: 960px;\n        padding-left: 0;\n        padding-right: 0;\n      }\n    }\n    \n  "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    \n    max-width: ","px;\n    padding-right: ","px;\n    padding-left: ","px;\n    \n    & > * {\n      width: 100%;\n    }\n    \n    @media screen and (min-width: ","px) {\n      justify-content: center;\n      \n      ",";\n    }\n    \n    @media screen and (max-width: ","px) {\n      ",";\n    }\n    \n  "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n  ",";\n  ",";\n  ",";\n  \n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var $pt=param.$pt;return void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt))},function(param){var $pb=param.$pb;return void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb))},function(param){var $adaptive=param.$adaptive,$customStyles=param.$customStyles,theme=param.theme;return $adaptive?(0,styled_components_browser_esm.AH)(_templateObject(),null==theme?void 0:theme.tabletMinWidth,null==theme?void 0:theme.desktopMinWidth):(0,styled_components_browser_esm.AH)(_templateObject1(),parseInt((null==theme?void 0:theme.maxContentWidth)||375)+2*parseInt((null==theme?void 0:theme.sidePadding)||0),(null==theme?void 0:theme.sidePadding)||16,(null==theme?void 0:theme.sidePadding)||16,null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile)},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.default});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,_param_adaptive=_param.adaptive,rest=_object_without_properties(_param,["children","pt","pb","customStyles","adaptive"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles,$adaptive:void 0!==_param_adaptive&&_param_adaptive},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}},adaptive:{defaultValue:{value:"false"},description:"",name:"adaptive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/ProgressBar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n    width: calc(100% - ","px);\n    position: fixed;\n    top: 16px;\n    left: 50%;\n    transform: translateX(-50%);\n  "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  max-width: ","px;\n  height: 20px;\n  ",";\n\n  ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  font-size: 16px;\n  line-height: 20px;\n  margin-left: 20px;\n  cursor: pointer;\n\n  @media screen and (min-width: ","px) and (hover: hover) {\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n\n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  flex: 1 0 auto;\n  height: 8px;\n  border-radius: 20px;\n  background-color: ",";\n  transition: background-color 300ms;\n  overflow: hidden;\n\n  ",";\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n    background-color: ",";\n    ",";\n  "]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n    border-radius: 14px;\n\n    &:not(:first-child) {\n      margin-left: 5px;\n    }\n  "]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n  flex-grow: 1;\n  ",";\n  transition: background-color 300ms;\n\n  ",";\n\n  ",";\n"]);return _templateObject6=function _templateObject(){return data},data}var StyledContainer=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $staticPosition=param.$staticPosition,theme=param.theme;return!$staticPosition&&(0,styled_components_browser_esm.AH)(_templateObject(),theme.sidePadding)},function(param){return param.$customStyles}),StyledSkip=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var theme=param.theme;return null==theme?void 0:theme.tabletMinWidth},function(param){return param.$customStyles}),StyledBar=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){var _theme_colors,theme=param.theme;return param.$isSegmented?"transparent":(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.progressBarBg)||"#fff"},function(param){return param.$customStyles}),StyledBarItem=styled_components_browser_esm.Ay.div(_templateObject6(),function(param){var _theme_colors,_theme_colors1,theme=param.theme,$isActive=param.$isActive,$isLastActive=param.$isLastActive;return(0,styled_components_browser_esm.AH)(_templateObject4(),null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors["progressBar".concat($isActive?"Active":"Bg")],$isLastActive?"border-radius: 0 14px 14px 0;":"box-shadow: 1px 0 0 ".concat(null==theme?void 0:null===(_theme_colors1=theme.colors)||void 0===_theme_colors1?void 0:_theme_colors1["progressBar".concat($isActive?"Active":"Bg")],";"))},function(param){return param.$isSegmented&&(0,styled_components_browser_esm.AH)(_templateObject5())},function(param){return param.$customStyles});function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ProgressBar=function(_param){var _param_isSegmented=_param.isSegmented,isSegmented=void 0!==_param_isSegmented&&_param_isSegmented,totalCount=_param.totalCount,currentRoute=_param.currentRoute,skipButton=_param.skipButton,customStyles=_param.customStyles,_param_staticPosition=_param.staticPosition,rest=_object_without_properties(_param,["isSegmented","totalCount","currentRoute","skipButton","customStyles","staticPosition"]),theme=null==rest?void 0:rest.theme,pages=Array(totalCount).fill(0),styles=(0,utils.p5)(customStyles,"container");return react.createElement(StyledContainer,{$customStyles:null==styles?void 0:styles.container,$staticPosition:void 0!==_param_staticPosition&&_param_staticPosition,theme:theme},react.createElement(StyledBar,{$isSegmented:isSegmented,theme:theme,$customStyles:null==styles?void 0:styles.bar},pages.map(function(_,i){return react.createElement(StyledBarItem,{$isActive:i<=currentRoute,$isLastActive:i===currentRoute,$isSegmented:isSegmented,theme:theme,$customStyles:null==styles?void 0:styles.segment,key:i})})),skipButton&&react.createElement(StyledSkip,{onClick:null==rest?void 0:rest.onContinueClick,theme:theme,$customStyles:null==styles?void 0:styles.skip},skipButton))};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{isSegmented:{defaultValue:{value:"false"},description:"",name:"isSegmented",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},currentRoute:{defaultValue:null,description:"",name:"currentRoute",required:!0,type:{name:"number"}},skipButton:{defaultValue:null,description:"",name:"skipButton",required:!1,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},staticPosition:{defaultValue:{value:"false"},description:"",name:"staticPosition",required:!1,type:{name:"boolean"}},onContinueClick:{defaultValue:null,description:"",name:"onContinueClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);