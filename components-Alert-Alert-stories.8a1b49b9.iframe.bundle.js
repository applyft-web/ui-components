"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[287],{"./src/components/Alert/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertStoryTemplate:()=>AlertStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Alert/Alert.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__.F,props)))},parameters:{controls:{exclude:["show","clearError"]}},argTypes:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var AlertStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),show:!0,message:"This is an alert message",isArabic:!1,customStyles:""}};AlertStoryTemplate.storyName="Alert",AlertStoryTemplate.parameters={...AlertStoryTemplate.parameters,docs:{...AlertStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: getTheme(),
    show: true,
    message: 'This is an alert message',
    isArabic: false,
    customStyles: ''
  }
}`,...AlertStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["AlertStoryTemplate"]},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
        opacity: 1;
        visibility: visible;
      `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
        opacity: 0;
        visibility: hidden;
      `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    width: 90%;
    height: auto;
    max-width: `,`px;
    min-height: 50px;
    padding: 16px 40px;
    border-radius: 8px;
    background-color: #FF5B5B;
    position: fixed;
    left: 50%;
    top: 6%;
    transform: translate(-50%, -20%);
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    text-align: `,`;
    padding-`,`: 16px;
    z-index: 100;
    `,`;
    transition: 150ms ease;
    box-sizing: border-box;
    
    p {
      margin: 0;
    }
  
    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  content: '\xd7';
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 16px;
  left: 16px;
  `,`;
  margin-top: -12px;
  font-size: 24px;
  line-height: 1;
  color: #fff;
  text-align: center;
  cursor: pointer;
`]);return _templateObject3=function _templateObject(){return data},data}var StyledAlert=styled_components_browser_esm.Ay.div(function(param){var theme=param.theme,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic,$show=param.$show,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),null==theme?void 0:theme.maxContentWidth,(0,utils.j1)($isArabic),(0,utils.j1)($isArabic),$show?(0,styled_components_browser_esm.AH)(_templateObject()):(0,styled_components_browser_esm.AH)(_templateObject1()),$customStyles)}),CloseAlert=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){var theme=param.theme,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic;return"".concat((0,utils.j1)($isArabic),": auto")});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Alert=function(_param){var show=_param.show,message=_param.message,clearError=_param.clearError,isArabic=_param.isArabic,customStyles=_param.customStyles,rest=_object_without_properties(_param,["show","message","clearError","isArabic","customStyles"]),theme=null==rest?void 0:rest.theme,_useState=_sliced_to_array((0,react.useState)(!1),2),clear=_useState[0],setClear=_useState[1];return(0,react.useEffect)(function(){if(show&&!clear)var timer=setTimeout(clearError,3e3);return function(){setClear(!1),clearTimeout(timer)}},[show,clearError,clear]),react.createElement(StyledAlert,_object_spread({$show:show,$isArabic:isArabic,$customStyles:customStyles,theme:theme},rest),react.createElement("p",null,message),show&&react.createElement(CloseAlert,{onClick:function(){setClear(!0),clearError()},$isArabic:isArabic,theme:theme},"×"))};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},clearError:{defaultValue:null,description:"",name:"clearError",required:!0,type:{name:"() => void"}},isArabic:{defaultValue:null,description:"",name:"isArabic",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`

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
//# sourceMappingURL=components-Alert-Alert-stories.8a1b49b9.iframe.bundle.js.map