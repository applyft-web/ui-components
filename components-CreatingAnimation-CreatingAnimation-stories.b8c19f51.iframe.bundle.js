"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[535],{"./src/components/CircularProgress/CircularProgress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CircularProgress});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
      width: `,`px!important;
      height: `,`px!important;
    `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
    `,`;
    color: `,`;
    box-shadow: inset 0 0 0 `,`px;
    border-radius: 50%;
    position: relative;
    `,`;
    `,`;
    `,`;
  `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    stroke: `,`;
    stroke-linecap: round;
    width: `,`px;
    height: `,`px;
    top: calc(50% - `,`px);
    left: calc(50% - `,`px);
    position: absolute;
    transform: rotate(-90deg);
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  transition: stroke-dashoffset 300ms linear 0ms;
  opacity: .38;

  &:first-child {
    opacity: 1;
    `,`;
  }
`]);return _templateObject3=function _templateObject(){return data},data}var ProgressWrapper=styled_components_browser_esm.Ay.div(function(param){var _theme_colors,theme=param.theme,$size=param.$size,$mt=param.$mt,$mb=param.$mb,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject1(),$size&&(0,styled_components_browser_esm.AH)(_templateObject(),$size,$size),(null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.circularProgressBg)||"$fff",$size<100?6:12,void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$customStyles)}),StyledSvg=styled_components_browser_esm.Ay.svg(function(param){var _theme_colors,theme=param.theme,$size=param.$size;return(0,styled_components_browser_esm.AH)(_templateObject2(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.primary,$size,$size,$size/2,$size/2)}),StyledCircle=styled_components_browser_esm.Ay.circle(_templateObject3(),function(param){return param.$small?"transition-delay: 100ms":""});function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CircularProgress=function(_param){var children=_param.children,_param_size=_param.size,size=void 0===_param_size?174:_param_size,_param_progress=_param.progress,progress=void 0===_param_progress?0:_param_progress,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","size","progress","mt","mb","customStyles"]),theme=null==rest?void 0:rest.theme,isSmall=size<100;return react.createElement(ProgressWrapper,{$size:size,$customStyles:customStyles,$mt:mt,$mb:mb,theme:theme},children,react.createElement(StyledSvg,{viewBox:"".concat(size/6," ").concat(size/6," ").concat(size/3," ").concat(size/3),xmlns:"http://www.w3.org/2000/svg",$size:size,theme:theme},("number"==typeof progress?[progress]:progress).map(function(el,i){return react.createElement(StyledCircle,{cx:size/3,cy:size/3,r:size/6-(isSmall?1:2),fill:"none",strokeWidth:isSmall?2:4,strokeDasharray:"".concat(size,"px"),strokeDashoffset:"".concat(size*(1-el/100),"px"),key:i,$small:isSmall,theme:theme})})))};try{CircularProgress.displayName="CircularProgress",CircularProgress.__docgenInfo={description:"",displayName:"CircularProgress",props:{size:{defaultValue:{value:"174"},description:"",name:"size",required:!1,type:{name:"number"}},progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number | number[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:CircularProgress.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CircularProgress/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>_CircularProgress__WEBPACK_IMPORTED_MODULE_0__.P});var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CircularProgress/CircularProgress.tsx")},"./src/components/CreatingAnimation/CreatingAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircularProgressStoryTemplate:()=>CircularProgressStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CreatingAnimation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CreatingAnimation/CreatingAnimation.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CreatingAnimation__WEBPACK_IMPORTED_MODULE_1__.O,props)))},parameters:{controls:{exclude:["doneCallback"]}},argTypes:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var CircularProgressStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),doneCallback:function(){return alert("Done!")},duration:100,size:174,mt:0,mb:0,customStyles:""}};CircularProgressStoryTemplate.storyName="CreatingAnimation",CircularProgressStoryTemplate.parameters={...CircularProgressStoryTemplate.parameters,docs:{...CircularProgressStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: getTheme(),
    doneCallback: () => alert('Done!'),
    duration: 100,
    size: 174,
    mt: 0,
    mb: 0,
    customStyles: ''
  }
}`,...CircularProgressStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["CircularProgressStoryTemplate"]},"./src/components/CreatingAnimation/CreatingAnimation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>CreatingAnimation});var react=__webpack_require__("./node_modules/react/index.js"),CircularProgress=__webpack_require__("./src/components/CircularProgress/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  color: `,`;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  
  span {
    font-size: 24px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Percentage=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.p(_templateObject(),function(param){var _theme_colors,theme=param.theme;return null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.text});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CreatingAnimation=function(_param){var _param_duration=_param.duration,doneCallback=_param.doneCallback,size=_param.size,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["duration","doneCallback","size","mt","mb","customStyles"]),theme=null==rest?void 0:rest.theme,_useState=_sliced_to_array((0,react.useState)(0),2),progress=_useState[0],setProgress=_useState[1],timeout=1e3*(void 0===_param_duration?5:_param_duration)/100;return(0,react.useEffect)(function(){doneCallback&&100===progress&&doneCallback(!0)},[progress,doneCallback]),(0,react.useEffect)(function(){var timer=setInterval(function(){setProgress(function(prevProgress){return prevProgress>=100?100:prevProgress+1})},timeout);return function(){return clearInterval(timer)}},[timeout]),react.createElement(CircularProgress.P,{progress:progress,size:size,customStyles:customStyles,theme:theme,mt:mt,mb:mb},react.createElement(Percentage,{theme:theme},progress,react.createElement("span",null,"%")))};try{CreatingAnimation.displayName="CreatingAnimation",CreatingAnimation.__docgenInfo={description:"",displayName:"CreatingAnimation",props:{duration:{defaultValue:{value:"5"},description:"",name:"duration",required:!1,type:{name:"number"}},doneCallback:{defaultValue:null,description:"",name:"doneCallback",required:!1,type:{name:"(a: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CreatingAnimation/CreatingAnimation.tsx#CreatingAnimation"]={docgenInfo:CreatingAnimation.__docgenInfo,name:"CreatingAnimation",path:"src/components/CreatingAnimation/CreatingAnimation.tsx#CreatingAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`

      & > *:not(.ignore-inheritance) {
        max-width: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (min-width: `,`px) {
        & > *:not(.ignore-inheritance) {
          max-width: 432px;
        }

        `,`;
      }

      @media screen and (min-width: `,`px) {
        & > *:not(.ignore-inheritance) {
          max-width: 960px;
          padding-left: 0;
          padding-right: 0;
        }
      }

      @media screen and (max-width: `,`px) {
        `,`;
      }

    `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`

      max-width: `,`px;
      padding-right: `,`px;
      padding-left: `,`px;
      
      & > * {
        width: 100%;
      }
      
      @media screen and (min-width: `,`px) {
        justify-content: center;
        
        `,`;
      }
      
      @media screen and (max-width: `,`px) {
        `,`;
      }
      
    `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    `,`;
    `,`;
    `,`;
    
    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(function(param){var theme=param.theme,$pt=param.$pt,$pb=param.$pb,$adaptive=param.$adaptive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt)),void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb)),$adaptive?(0,styled_components_browser_esm.AH)(_templateObject(),null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.desktopMinWidth,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile):(0,styled_components_browser_esm.AH)(_templateObject1(),parseInt((null==theme?void 0:theme.maxContentWidth)||375)+2*parseInt((null==theme?void 0:theme.sidePadding)||0),(null==theme?void 0:theme.sidePadding)||16,(null==theme?void 0:theme.sidePadding)||16,null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile),null==$customStyles?void 0:$customStyles.default)});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,_param_adaptive=_param.adaptive,rest=_object_without_properties(_param,["children","pt","pb","customStyles","adaptive"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles,$adaptive:void 0!==_param_adaptive&&_param_adaptive},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}},adaptive:{defaultValue:{value:"false"},description:"",name:"adaptive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);
//# sourceMappingURL=components-CreatingAnimation-CreatingAnimation-stories.b8c19f51.iframe.bundle.js.map