"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[980],{"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var StyledAlert=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$show=param.$show,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),theme.maxContentWidth,(0,utils.j1)($isRtl),(0,utils.j1)($isRtl),$show?(0,styled_components_browser_esm.AH)(_templateObject()):(0,styled_components_browser_esm.AH)(_templateObject1()),$customStyles)}),CloseAlert=(0,styled_components_browser_esm.Ay)("div")(_templateObject3(),function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl;return"".concat((0,utils.j1)($isRtl),": auto")});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Alert=function(_param){var show=_param.show,message=_param.message,clearError=_param.clearError,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,customStyles=_param.customStyles,rest=_object_without_properties(_param,["show","message","clearError","isArabic","isRtl","customStyles"]),_useState=_sliced_to_array((0,react.useState)(!1),2),clear=_useState[0],setClear=_useState[1];return(0,react.useEffect)(function(){var timer;return show&&!clear&&(timer=setTimeout(clearError,3e3)),function(){setClear(!1),timer&&clearTimeout(timer)}},[show,clearError,clear]),react.createElement(StyledAlert,_object_spread({$show:show,$isRtl:isRtl,$customStyles:customStyles},rest),react.createElement("p",null,message),show&&react.createElement(CloseAlert,{onClick:function(){setClear(!0),clearError()},$isRtl:isRtl},"×"))};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},clearError:{defaultValue:null,description:"",name:"clearError",required:!0,type:{name:"() => void"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/ContinueButton/ContinueButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ContinueButton});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),utils=__webpack_require__("./src/utils/index.ts"),extractPositioningRules=function(cssString){var positioningRules=cssString.match(/(position|top|right|bottom|left|z-index)\s*:\s*[^;]+;?/g);return positioningRules?positioningRules.join(" "):""},extractPositioningRulesFromObject=function(style){if(!style)return{};var positioningProperties=["position","top","right","bottom","left","zIndex"],extractedStyles={};for(var property in style)positioningProperties.includes(property)&&(extractedStyles[property]=style[property]);return extractedStyles},styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
    width: 100%;
    position: fixed;
    bottom: `,`;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 `,`px;
  
    `,`;
  `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
    display: block;
    width: 100%;
    max-width: `,`px;
    height: 56px;
    min-height: 30px;
    flex-shrink: 0;
    background-color: `,`;
    border-radius: `,`;
    border: none;
    padding: 0 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: `,`;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: `,`;
    transition: .3s;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    `,`;
    `,`;
  
    &:disabled {
      background-color: `,`;
      color: `,`;
      pointer-events: none;

      `,`;
    }

    &:focus {
      outline: none;
    }

    @media screen and (min-width: `,`px) and (hover: hover) {
      &:hover {
        background-color: `,`;

        `,`;
      }
    }

    `,`;
  `]);return _templateObject1=function _templateObject(){return data},data}var FixedButtonWrapper=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject(),theme.buttonBottomPosition,theme.sidePadding||16,$customStyles)}),StyledButton=(0,styled_components_browser_esm.Ay)("button")(function(param){var _theme_colors,_theme_colors1,_theme_colors2,_theme_colors3,_theme_colors4,_theme_colors5,theme=param.theme,$customStyles=param.$customStyles,$mt=param.$mt,$mb=param.$mb,$centered=param.$centered;return(0,styled_components_browser_esm.AH)(_templateObject1(),theme.maxContentWidth,null==(_theme_colors=theme.colors)?void 0:_theme_colors.primary,theme.buttonBorderRadius,(null==(_theme_colors1=theme.colors)?void 0:_theme_colors1.buttonColor)||(null==(_theme_colors2=theme.colors)?void 0:_theme_colors2.bodyBackground),$centered?"center":(0,utils.j1)(!!theme.isRtl),void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),null==(_theme_colors3=theme.colors)?void 0:_theme_colors3.buttonDisabled,null==(_theme_colors4=theme.colors)?void 0:_theme_colors4.buttonDisabledTextColor,null==$customStyles?void 0:$customStyles.disabled,theme.desktopMinWidth,null==(_theme_colors5=theme.colors)?void 0:_theme_colors5.buttonHover,null==$customStyles?void 0:$customStyles.hover,null==$customStyles?void 0:$customStyles.default)});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ContinueButton=function(_param){var children=_param.children,onClick=_param.onClick,_param_customId=_param.customId,mt=_param.mt,mb=_param.mb,_param_centered=_param.centered,staticPosition=_param.staticPosition,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","onClick","customId","mt","mb","centered","staticPosition","customStyles"]),t=(0,es.Bd)().t,styles=(0,utils.p5)(customStyles,"default"),btn=react.createElement(StyledButton,_object_spread({onClick:onClick,id:void 0===_param_customId?"continue-button":_param_customId,$mt:mt,$mb:mb,$centered:void 0===_param_centered||_param_centered,$customStyles:styles},rest),null!=children?children:t("continue"));return staticPosition?btn:react.createElement(FixedButtonWrapper,{$customStyles:extractPositioningRules(styles.default),style:extractPositioningRulesFromObject(rest.style)},btn)};try{ContinueButton.displayName="ContinueButton",ContinueButton.__docgenInfo={description:"",displayName:"ContinueButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},customId:{defaultValue:{value:"continue-button"},description:"",name:"customId",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},centered:{defaultValue:{value:"true"},description:"",name:"centered",required:!1,type:{name:"boolean"}},staticPosition:{defaultValue:null,description:"",name:"staticPosition",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | ButtonCustomStylesWithStatesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/ContinueButton/ContinueButton.tsx#ContinueButton"]={docgenInfo:ContinueButton.__docgenInfo,name:"ContinueButton",path:"src/components/Buttons/ContinueButton/ContinueButton.tsx#ContinueButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/ContinueButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_ContinueButton__WEBPACK_IMPORTED_MODULE_0__.c});var _ContinueButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Buttons/ContinueButton/ContinueButton.tsx")},"./src/components/Buttons/MarketsButton/MarketsButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>MarketsButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ContinueButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Buttons/ContinueButton/index.ts"),_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icons/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var marketsImages={google:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.jR,null),apple:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.Ex,null)},typeStyles={default:"width:182px;background-color:#000;padding:0;border-radius:12px;",hover:"background-color:#000;"},MarketsButton=function(_param){var marketName=_param.marketName,onClick=_param.onClick,customStyles=_param.customStyles,rest=_object_without_properties(_param,["marketName","onClick","customStyles"]),styles=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p5)(customStyles,"default");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContinueButton__WEBPACK_IMPORTED_MODULE_1__.c,_object_spread({onClick:onClick,customId:"".concat(marketName,"MarketButton"),staticPosition:!0,customStyles:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Gs)(typeStyles,styles)},rest),marketsImages[marketName])};try{MarketsButton.displayName="MarketsButton",MarketsButton.__docgenInfo={description:"",displayName:"MarketsButton",props:{marketName:{defaultValue:null,description:"",name:"marketName",required:!0,type:{name:"enum",value:[{value:'"apple"'},{value:'"google"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},customId:{defaultValue:null,description:"",name:"customId",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},centered:{defaultValue:null,description:"",name:"centered",required:!1,type:{name:"boolean"}},staticPosition:{defaultValue:null,description:"",name:"staticPosition",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | ButtonCustomStylesWithStatesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/MarketsButton/MarketsButton.tsx#MarketsButton"]={docgenInfo:MarketsButton.__docgenInfo,name:"MarketsButton",path:"src/components/Buttons/MarketsButton/MarketsButton.tsx#MarketsButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/PaypalButton/PaypalButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PaypalButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ContinueButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Buttons/ContinueButton/index.ts"),_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icons/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var typeStyles={default:"background-color:#F9C456;padding:0 20px;border-radius:12px;",hover:"background-color:#F9C456;"},transparentStyles={default:"background-color:rgba(0,157,225,.13);border:1px solid #009DE1;border-radius:12px;",hover:"background-color:rgba(0,157,225,.13);"},PaypalButton=function(_param){var _param_transparentStyle=_param.transparentStyle,onClick=_param.onClick,customStyles=_param.customStyles,rest=_object_without_properties(_param,["transparentStyle","onClick","customStyles"]),localStyles=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Gs)(typeStyles,void 0!==_param_transparentStyle&&_param_transparentStyle?transparentStyles:{}),styles=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.p5)(customStyles,"default");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContinueButton__WEBPACK_IMPORTED_MODULE_1__.c,_object_spread({onClick:onClick,customId:"paypal-pay-button",staticPosition:!0,customStyles:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Gs)(localStyles,styles)},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.xt,null))};try{PaypalButton.displayName="PaypalButton",PaypalButton.__docgenInfo={description:"",displayName:"PaypalButton",props:{transparentStyle:{defaultValue:{value:"false"},description:"",name:"transparentStyle",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},customId:{defaultValue:null,description:"",name:"customId",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},centered:{defaultValue:null,description:"",name:"centered",required:!1,type:{name:"boolean"}},staticPosition:{defaultValue:null,description:"",name:"staticPosition",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | ButtonCustomStylesWithStatesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/PaypalButton/PaypalButton.tsx#PaypalButton"]={docgenInfo:PaypalButton.__docgenInfo,name:"PaypalButton",path:"src/components/Buttons/PaypalButton/PaypalButton.tsx#PaypalButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CircularProgress/CircularProgress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CircularProgress});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var ProgressWrapper=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,$size=param.$size,$mt=param.$mt,$mb=param.$mb,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject1(),$size&&(0,styled_components_browser_esm.AH)(_templateObject(),$size,$size),(null==(_theme_colors=theme.colors)?void 0:_theme_colors.circularProgressBg)||"#fff",$size<100?6:12,void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$customStyles)}),StyledSvg=(0,styled_components_browser_esm.Ay)("svg")(function(param){var _theme_colors,theme=param.theme,$size=param.$size;return(0,styled_components_browser_esm.AH)(_templateObject2(),null==(_theme_colors=theme.colors)?void 0:_theme_colors.primary,$size,$size,$size/2,$size/2)}),StyledCircle=(0,styled_components_browser_esm.Ay)("circle")(_templateObject3(),function(param){return param.$small?"transition-delay: 100ms":""});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CircularProgress=function(_param){var children=_param.children,_param_size=_param.size,size=void 0===_param_size?174:_param_size,_param_progress=_param.progress,progress=void 0===_param_progress?0:_param_progress,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","size","progress","mt","mb","customStyles"]),isSmall=size<100;return react.createElement(ProgressWrapper,_object_spread({$size:size,$customStyles:customStyles,$mt:mt,$mb:mb},rest),children,react.createElement(StyledSvg,{viewBox:"".concat(size/6," ").concat(size/6," ").concat(size/3," ").concat(size/3),xmlns:"http://www.w3.org/2000/svg",$size:size},("number"==typeof progress?[progress]:progress).map(function(el,i){return react.createElement(StyledCircle,{cx:size/3,cy:size/3,r:size/6-(isSmall?1:2),fill:"none",strokeWidth:isSmall?2:4,strokeDasharray:"".concat(size,"px"),strokeDashoffset:"".concat(size*(1-el/100),"px"),key:i,$small:isSmall})})))};try{CircularProgress.displayName="CircularProgress",CircularProgress.__docgenInfo={description:"",displayName:"CircularProgress",props:{size:{defaultValue:{value:"174"},description:"",name:"size",required:!1,type:{name:"number"}},progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number | number[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:CircularProgress.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CircularProgress/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>_CircularProgress__WEBPACK_IMPORTED_MODULE_0__.P});var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CircularProgress/CircularProgress.tsx")},"./src/components/CreatingAnimation/CreatingAnimation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>CreatingAnimation});var react=__webpack_require__("./node_modules/react/index.js"),CircularProgress=__webpack_require__("./src/components/CircularProgress/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject=function _templateObject(){return data},data}var Percentage=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)("p")(_templateObject(),function(param){var _theme_colors;return null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.text});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CreatingAnimation=function(_param){var _param_duration=_param.duration,doneCallback=_param.doneCallback,size=_param.size,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["duration","doneCallback","size","mt","mb","customStyles"]),_useState=_sliced_to_array((0,react.useState)(0),2),progress=_useState[0],setProgress=_useState[1],interval=1e3*(void 0===_param_duration?5:_param_duration)/100;return(0,react.useEffect)(function(){doneCallback&&100===progress&&doneCallback(!0)},[progress,doneCallback]),(0,react.useEffect)(function(){var timer=setInterval(function(){setProgress(function(prevProgress){return prevProgress>=100?100:prevProgress+1})},interval);return function(){clearInterval(timer)}},[interval]),react.createElement(CircularProgress.P,_object_spread({progress:progress,size:size,customStyles:customStyles,mt:mt,mb:mb},rest),react.createElement(Percentage,null,progress,react.createElement("span",null,"%")))};try{CreatingAnimation.displayName="CreatingAnimation",CreatingAnimation.__docgenInfo={description:"",displayName:"CreatingAnimation",props:{duration:{defaultValue:{value:"5"},description:"Duration of the animation in seconds",name:"duration",required:!1,type:{name:"number"}},doneCallback:{defaultValue:null,description:"",name:"doneCallback",required:!1,type:{name:"(a: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number | number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CreatingAnimation/CreatingAnimation.tsx#CreatingAnimation"]={docgenInfo:CreatingAnimation.__docgenInfo,name:"CreatingAnimation",path:"src/components/CreatingAnimation/CreatingAnimation.tsx#CreatingAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FallBack/FallBack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FallBack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Loader/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  height: calc(var(--vh,1svh) * 100);
  background-color: `,`;
  position: fixed;
  top: 0;
  left: 0;
`]);return _templateObject=function _templateObject(){return data},data}var FallBackWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)("div")(_templateObject(),function(param){var _theme_colors;return null==(_theme_colors=param.theme.colors)?void 0:_theme_colors.bodyBackground}),FallBack=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FallBackWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__.a,{show:!0,transparent:!0}))};try{FallBack.displayName="FallBack",FallBack.__docgenInfo={description:"",displayName:"FallBack",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FallBack/FallBack.tsx#FallBack"]={docgenInfo:FallBack.__docgenInfo,name:"FallBack",path:"src/components/FallBack/FallBack.tsx#FallBack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  to {
    transform: rotate(360deg);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
      position: absolute;
      background-color: transparent;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      padding: 8px;
    `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    `,`;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 1000;

    `,`;

    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
    width: 48px;
    height: 48px;
    animation: `,` 1.5s linear infinite;

    circle, path {
      fill: `,`;
    }

    `,`;
  `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  white-space: break-spaces;
  margin-top: 32px;
`]);return _templateObject4=function _templateObject(){return data},data}var spinning=(0,styled_components_browser_esm.i7)(_templateObject()),StyledSpinner=(0,styled_components_browser_esm.Ay)("div")(function(param){var $transparent=param.$transparent,$localPosition=param.$localPosition,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),!$transparent&&"background-color: rgba(0,0,0,.3)",$localPosition&&(0,styled_components_browser_esm.AH)(_templateObject1()),$customStyles)}),StyledSVG=(0,styled_components_browser_esm.Ay)("svg")(function(param){var _theme_colors,theme=param.theme,$fill=param.$fill,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject3(),spinning,$fill||(null==(_theme_colors=theme.colors)?void 0:_theme_colors.primary),$customStyles)}),Message=(0,styled_components_browser_esm.Ay)("span")(_templateObject4());function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SpinnerSvg=function(_param){var type=_param.type,rest=_object_without_properties(_param,["type"]);switch(type){case"dotted":return react.createElement(StyledSVG,_object_spread({width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react.createElement("circle",{cx:"24.5",cy:"4",r:"4",transform:"rotate(90 24.5 4)"}),react.createElement("circle",{cx:"24.5",cy:"44",r:"4",transform:"rotate(90 24.5 44)",fillOpacity:"0.3"}),react.createElement("circle",{opacity:"0.15",cx:"44.5",cy:"24",r:"4",transform:"rotate(90 44.5 24)"}),react.createElement("circle",{cx:"4.5",cy:"24",r:"4",transform:"rotate(90 4.5 24)",fillOpacity:"0.65"}),react.createElement("circle",{opacity:"0.2",cx:"38.642",cy:"38.1421",r:"4",transform:"rotate(135 38.642 38.1421)"}),react.createElement("circle",{cx:"10.3578",cy:"9.85779",r:"4",transform:"rotate(135 10.3578 9.85779)",fillOpacity:"0.85"}),react.createElement("circle",{cx:"10.3579",cy:"38.1421",r:"4",transform:"rotate(-135 10.3579 38.1421)",fillOpacity:"0.5"}),react.createElement("circle",{opacity:"0.05",cx:"38.6421",cy:"9.85779",r:"4",transform:"rotate(-135 38.6421 9.85779)"}));case"solid":return react.createElement(StyledSVG,_object_spread({width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react.createElement("path",{d:"M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM6.38657 24C6.38657 33.7276 14.2724 41.6134 24 41.6134C33.7276 41.6134 41.6134 33.7276 41.6134 24C41.6134 14.2724 33.7276 6.38657 24 6.38657C14.2724 6.38657 6.38657 14.2724 6.38657 24Z",fillOpacity:"0.5"}),react.createElement("path",{d:"M24 3.19329C24 1.42968 25.436 -0.0218585 27.184 0.21211C31.2157 0.751748 35.0628 2.31025 38.3511 4.76341C42.4966 7.85606 45.5321 12.2051 47.0055 17.1628C48.4789 22.1205 48.3114 27.4215 46.5279 32.2762C45.1131 36.1271 42.7417 39.5338 39.6591 42.1878C38.3226 43.3384 36.3269 42.9068 35.3637 41.4294C34.4005 39.9521 34.843 37.9919 36.1224 36.7781C38.0786 34.9223 39.5934 32.6316 40.533 30.0739C41.8419 26.511 41.9649 22.6206 40.8836 18.9822C39.8022 15.3438 37.5745 12.1521 34.5322 9.88241C32.3481 8.25305 29.8282 7.16147 27.1759 6.67524C25.4412 6.35723 24 4.95689 24 3.19329Z"}));default:return null}},Loader=function(_param){var _param_show=_param.show,message=_param.message,_param_transparent=_param.transparent,_param_type=_param.type,fill=_param.fill,localPosition=_param.localPosition,_param_customStyles=_param.customStyles,rest=_object_without_properties(_param,["show","message","transparent","type","fill","localPosition","customStyles"]),styles=(0,utils.p5)(void 0===_param_customStyles?"":_param_customStyles,"container");return void 0===_param_show||_param_show?react.createElement(StyledSpinner,_object_spread({id:localPosition?"":"loading-element",$transparent:void 0!==_param_transparent&&_param_transparent,$localPosition:localPosition,$customStyles:null==styles?void 0:styles.container},rest),react.createElement(SpinnerSvg,{type:void 0===_param_type?"dotted":_param_type,$fill:fill,$customStyles:null==styles?void 0:styles.svg}),!localPosition&&message&&react.createElement(Message,null,message)):null};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{show:{defaultValue:{value:"true"},description:"",name:"show",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},localPosition:{defaultValue:null,description:"",name:"localPosition",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},type:{defaultValue:{value:"dotted"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"dotted"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_Loader__WEBPACK_IMPORTED_MODULE_0__.a});var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Loader/Loader.tsx")},"./src/components/OptionsItem/OptionsItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>OptionsItem});var react=__webpack_require__("./node_modules/react/index.js"),Icons=__webpack_require__("./src/components/Icons/index.tsx"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: `,`;
    align-items: center;
    gap: 16px;
    column-gap: 16px;
    width: 100%;
    max-width: `,`px;
    border-radius: 12px;
    font-size: 16px;
    line-height: 1.5;
    color: `,`;
    text-align: `,`;
    position: relative;
    transition: .3s;
    cursor: pointer;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    `,`;
    background-color: `,`;
    border: 1px solid `,`;
    color: `,`;
    `,`;
    `,`;
  
    &:first-child {
      margin-top: 0;
    }
  
    &:focus {
      outline: none;
    }

    `,`;
    
    &:disabled {
      `,`;
    }
    
    &:active {
      `,`;
    }
  
    @media screen and (min-width: `,`px ) and (hover: hover) {
      &:hover {
        background-color: `,`;
        border-color: `,`;
        color: `,`;

        .check-element {
          background-color: `,`;

          path {
            fill: `,`;
          }
        }

        .option-img {
          background-color: `,`;
        }

        `,`;
      }
    }
  `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
      background-image: url(`,`);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    width: `,`;
    height: `,`;
    border-radius: 7px;
    background-color: `,`;
    `,`;
    position: relative;
    transition: background-color .3s;
  
    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: `,`;
    position: absolute;
    top: 50%;
    left: 16px;
    right: 16px;
    `,`: auto;
    transform: translateY(-50%);
    transition: background-color .3s;

    `,`;
  `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: `,`;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    zoom: calc(`,`/64);

    &:before, &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      position: absolute;
      top: 0;
      right: 12px;
    }
    
    &:before {
      right: -12px;
    }
  
    `,`;
  `]);return _templateObject4=function _templateObject(){return data},data}var StyledOption=(0,styled_components_browser_esm.Ay)("button")(function(param){var _theme_colors,_theme_colors1,_theme_colors2,_theme_colors3,_theme_colors4,_theme_colors5,_theme_colors6,theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$isActive=param.$isActive,$multiChoice=param.$multiChoice,$mt=param.$mt,$mb=param.$mb,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject(),$isRtl&&!theme.enableRTL?"row-reverse":"row",theme.maxContentWidth,null==(_theme_colors=theme.colors)?void 0:_theme_colors.text,(0,utils.j1)($isRtl),$multiChoice&&`
      padding: 16px 56px;
      padding-`.concat((0,utils.j1)($isRtl),`: 16px;
    `),theme.colors[$isActive?"optionActive":"optionInactive"],theme.colors[$isActive?"optionBorderActive":"optionBorderInactive"],theme.colors[$isActive?"optionActiveText":"text"],void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),null==$customStyles?void 0:$customStyles.default,null==$customStyles?void 0:$customStyles.disabled,null==$customStyles?void 0:$customStyles.active,theme.desktopMinWidth,null==(_theme_colors1=theme.colors)?void 0:_theme_colors1.optionActive,null==(_theme_colors2=theme.colors)?void 0:_theme_colors2.optionBorderActive,null==(_theme_colors3=theme.colors)?void 0:_theme_colors3.optionActiveText,null==(_theme_colors4=theme.colors)?void 0:_theme_colors4.optionCheckActive,null==(_theme_colors5=theme.colors)?void 0:_theme_colors5.optionActive,null==(_theme_colors6=theme.colors)?void 0:_theme_colors6.optionImgActive,null==$customStyles?void 0:$customStyles.hover)}),StyledImg=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$isActive=param.$isActive,$size=param.$size,$imgSrc=param.$imgSrc,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),(0,utils.nc)((null==$size?void 0:$size[0])||64),(0,utils.nc)((null==$size?void 0:$size[1])||64),theme.colors[$isActive?"optionImgActive":"optionImgInactive"],$imgSrc&&(0,styled_components_browser_esm.AH)(_templateObject1(),$imgSrc),$customStyles)}),StyledCheckIcon=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$isActive=param.$isActive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject3(),theme.colors[$isActive?"optionCheckActive":"optionCheckInactive"],(0,utils.j1)($isRtl),$customStyles)}),ThreeDots=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,$customStyles=param.$customStyles,$size=param.$size;return(0,styled_components_browser_esm.AH)(_templateObject4(),null==(_theme_colors=theme.colors)?void 0:_theme_colors.threeDots,(null==$size?void 0:$size[0])||64,$customStyles)});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OptionsItem=function(_param){var _param_children=_param.children,onClick=_param.onClick,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,_param_isActive=_param.isActive,isActive=void 0!==_param_isActive&&_param_isActive,_param_multiChoice=_param.multiChoice,multiChoice=void 0!==_param_multiChoice&&_param_multiChoice,_param_img=_param.img,img=void 0===_param_img?"":_param_img,imgSize=_param.imgSize,_param_customId=_param.customId,_param_id=_param.id,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","onClick","isArabic","isRtl","isActive","multiChoice","img","imgSize","customId","id","mt","mb","customStyles"]),imgSrc=img?img.trim():null,styles=(0,utils.p5)(customStyles,"option"),optionStyles=(0,utils.p5)(styles.option,"default"),size=function(){return"string"==typeof imgSize||"number"==typeof imgSize?[imgSize,imgSize]:imgSize};return react.createElement(StyledOption,_object_spread({onClick:onClick,$isRtl:isRtl,$isActive:isActive,$multiChoice:multiChoice,id:void 0===_param_id?void 0===_param_customId?"option-1":_param_customId:_param_id,$mt:mt,$mb:mb,$customStyles:optionStyles},rest),!!img&&react.createElement(StyledImg,{className:"option-img",$imgSrc:imgSrc,$size:size(),$isRtl:isRtl,$isActive:isActive,$customStyles:null==styles?void 0:styles.img},!imgSrc&&react.createElement(ThreeDots,{$customStyles:null==styles?void 0:styles.dots,$size:size()})),void 0===_param_children?"Other":_param_children,multiChoice&&react.createElement(StyledCheckIcon,{className:"check-element",$isRtl:isRtl,$isActive:isActive,$customStyles:null==styles?void 0:styles.check},react.createElement(Icons.Sr,{isActive:isActive,customStyles:null==styles?void 0:styles.checkIcon})))};try{OptionsItem.displayName="OptionsItem",OptionsItem.__docgenInfo={description:"",displayName:"OptionsItem",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},img:{defaultValue:{value:""},description:"",name:"img",required:!1,type:{name:"string"}},imgSize:{defaultValue:null,description:"",name:"imgSize",required:!1,type:{name:"string | number | SizeProps"}},multiChoice:{defaultValue:{value:"false"},description:"",name:"multiChoice",required:!1,type:{name:"boolean"}},customId:{defaultValue:{value:"option-1"},description:`@since 1.5.4
@deprecated use \`id\` instead.`,name:"customId",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsItem/OptionsItem.tsx#OptionsItem"]={docgenInfo:OptionsItem.__docgenInfo,name:"OptionsItem",path:"src/components/OptionsItem/OptionsItem.tsx#OptionsItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>_OptionsItem__WEBPACK_IMPORTED_MODULE_0__.W});var _OptionsItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/OptionsItem/OptionsItem.tsx")},"./src/components/OptionsList/OptionsList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>OptionsList});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),core=__webpack_require__("./src/core/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  overflow: auto;

  `,`;
`]);return _templateObject=function _templateObject(){return data},data}var StyledOptionsList=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)("div")(_templateObject(),function(param){return param.$customStyles});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OptionsList=function(_param){var children=_param.children,_param_gap=_param.gap,customStyles=_param.customStyles,_param_scrollable=_param.scrollable,scrollable=void 0===_param_scrollable||_param_scrollable,rest=_object_without_properties(_param,["children","gap","customStyles","scrollable"]),styles=(0,utils.p5)(customStyles,scrollable?"wrapper":"list"),content=react.createElement(StyledOptionsList,_object_spread({$customStyles:null==styles?void 0:styles.list},rest),(0,utils.Lu)(children,{mt:void 0===_param_gap?12:_param_gap}));return scrollable?react.createElement(core.ac,{customStyles:null==styles?void 0:styles.wrapper},content):content};try{OptionsList.displayName="OptionsList",OptionsList.__docgenInfo={description:"",displayName:"OptionsList",props:{gap:{defaultValue:{value:"12"},description:"",name:"gap",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},scrollable:{defaultValue:{value:"true"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsList/OptionsList.tsx#OptionsList"]={docgenInfo:OptionsList.__docgenInfo,name:"OptionsList",path:"src/components/OptionsList/OptionsList.tsx#OptionsList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PlansList/PlansList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>PlansList});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Icons/index.tsx"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    list-style: none;
    `,`;
    `,`;

    `,`;
  `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
        &:before {
          content: attr(data-label);
          display: block;
          width: calc(100% + (var(--border-width)*2));
          height: var(--label-height);
          position: absolute;
          bottom: 100%;
          left: calc(var(--border-width)*(-1));
          background-color: `,`;
          border: var(--border-width) solid `,`;
          color: `,`;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          font-weight: 600;
          font-size: 12px;
          line-height: var(--line-height);
          box-sizing: border-box;
          
          `,`;
        }
      `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
      --border-width: 1px;
      --border-radius: `,`;
      --label-height: `,`;
      --plan-mt: `,`;
      display: flex;
      flex-direction: `,`;
      justify-content: space-between;
      align-items: center;
      background-color: `,`;
      border: var(--border-width) solid `,`;
      border-radius: `,` var(--border-radius) var(--border-radius);
      width: 100%;
      height: 82px;
      padding: 0 16px;
      position: relative;
      cursor: pointer;
      margin-top: calc(var(--plan-mt) + (var(--label-height)));

      &:first-child {
        --plan-mt: 0px;
      }

      `,`;

      `,`;
      `,`;
    `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: `,`;
    text-align: `,`;
    align-items: center;
  `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
    --check-size: 24px;
    width: var(--check-size);
    height: var(--check-size);
    border-radius: 50%;
    border: 1px solid `,`;
    background-color: `,`;
    position: relative;
    margin: 0 16px;
    margin-`,`: 0;
    flex-shrink: 0;

    .check-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    `,`;
  `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["align-items: flex-end;"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `,`;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: `,`;
  `]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: `,`;
    margin-top: 2px;

    span {
      margin-right: 6px;
      color: `,`;
    }

    `,`;
  `]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  text-decoration: line-through;
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  display: flex;
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
    color: `,`;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-decoration-color: #ff6363;
    align-self: flex-end;

    `,`;
  `]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
    display: flex;
    font-weight: 600;
    font-size: 60px;
    line-height: 46px;
    text-align: center;
    color: `,`;
    padding-left: 13px;
    position: relative;

    &:before {
      content: attr(data-currency);
      font-weight: 600;
      font-size: 16px;
      line-height: 15px;
      position: absolute;
      top: 0;
      left: 0;
    }

    `,`;
  `]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
  min-width: 40px;
`]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: left;
  margin-left: 2px;
`]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal([`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  margin-top: 5px;
  white-space: nowrap;
`]);return _templateObject15=function _templateObject(){return data},data}var PlansBlock=(0,styled_components_browser_esm.Ay)("ul")(function(param){var $mt=param.$mt,$mb=param.$mb,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject(),void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$customStyles)}),PlanLi=(0,styled_components_browser_esm.Ay)("li")(function(param){var _theme_colors,theme=param.theme,$withLabel=param.$withLabel,$isActive=param.$isActive,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$gap=param.$gap,$labelCustomStyles=param.$labelCustomStyles,$customStyles=param.$customStyles,styles=(0,utils.p5)($customStyles,"default");return(0,styled_components_browser_esm.AH)(_templateObject2(),theme.planItemBorderRadius||"8px",$withLabel?"18px":"0px",void 0!==$gap?(0,utils.nc)($gap):"8px",$isRtl&&!theme.enableRTL?"row-reverse":"row",null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemBg,theme.colors[$isActive?"primary":"planItemBorder"],$withLabel?"0 0":"",$withLabel&&(0,styled_components_browser_esm.AH)(_templateObject1(),theme.colors[$isActive?"primary":"planItemLabelBg"],theme.colors[$isActive?"primary":"planItemBorder"],theme.colors[$isActive?"planItemLabelColorActive":"planItemLabelColorInactive"],$labelCustomStyles),$isActive?null==styles?void 0:styles.active:"",null==styles?void 0:styles.default)}),StyledPeriod=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl;return(0,styled_components_browser_esm.AH)(_templateObject3(),$isRtl&&!theme.enableRTL?"row-reverse":"row",(0,utils.j1)($isRtl))}),PlanCheck=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$isActive=param.$isActive,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject4(),theme.colors[$isActive?"planItemCheckBorder":"planItemBorder"],theme.colors[$isActive?"primary":"bodyBackground"],(0,utils.j1)($isRtl),$customStyles)}),PlanTitle=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$isActive=param.$isActive,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl;return(0,styled_components_browser_esm.AH)(_templateObject6(),$isRtl&&!theme.enableRTL&&(0,styled_components_browser_esm.AH)(_templateObject5()),theme.colors[$isActive?"text":"planItemTextColorInactive"])}),PlanTitleText=(0,styled_components_browser_esm.Ay)("div")(_templateObject7(),function(param){return param.$customStyles}),StyledFullPrice=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,_theme_colors1,theme=param.theme,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject8(),null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemTextColorInactive,null==(_theme_colors1=theme.colors)?void 0:_theme_colors1.planItemTextColorInactive,$customStyles)}),Strike=(0,styled_components_browser_esm.Ay)("span")(_templateObject9()),StyledPriceWrapper=(0,styled_components_browser_esm.Ay)("div")(_templateObject10()),OldPrice=(0,styled_components_browser_esm.Ay)(Strike)(function(param){var _theme_colors,theme=param.theme,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject11(),null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemTextColorInactive,$customStyles)}),PriceWrapper=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$isActive=param.$isActive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject12(),theme.colors[$isActive?"text":"planItemTextColorInactive"],$customStyles)}),Price=(0,styled_components_browser_esm.Ay)("div")(_templateObject13()),SmallItemsWrapper=(0,styled_components_browser_esm.Ay)("div")(_templateObject14()),PerDay=(0,styled_components_browser_esm.Ay)("div")(_templateObject15());function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var PlansList=function(_param){var activePlan=_param.activePlan,plans=_param.plans,onPlanClick=_param.onPlanClick,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,gap=_param.gap,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["activePlan","plans","onPlanClick","isArabic","isRtl","gap","mt","mb","customStyles"]),currentTheme=(0,styled_components_browser_esm.DP)(),styles=(0,utils.p5)(customStyles,"container");return react.createElement(PlansBlock,_object_spread({$mt:mt,$mb:mb,$customStyles:null==styles?void 0:styles.container},rest),plans.map(function(planInfo,index){var _currentTheme_colors,_splitPrice_,id=planInfo.id,duration=planInfo.duration,price=planInfo.price,period=planInfo.period,oldPrice=planInfo.oldPrice,fullPrice=planInfo.fullPrice,oldFullPrice=planInfo.oldFullPrice,_planInfo_currencySign=planInfo.currencySign,currencySign=void 0===_planInfo_currencySign?"$":_planInfo_currencySign,label=planInfo.label,isActive=id===activePlan,splitPrice=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.00";return str.split(".")},priceWithCurrency=function(){var price=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";return"".concat(currencySign).concat(price)};return react.createElement(PlanLi,{$isActive:isActive,$isRtl:isRtl,$withLabel:!!label,$gap:gap,"data-label":label,onClick:function(){onPlanClick(planInfo)},id:"plan-button-"+(index+1),key:index,$customStyles:null==styles?void 0:styles.item,$labelCustomStyles:null==styles?void 0:styles.label},react.createElement(StyledPeriod,{$isRtl:isRtl},react.createElement(PlanCheck,{$isActive:isActive,$isRtl:isRtl,$customStyles:null==styles?void 0:styles.check},react.createElement(Icons.Sr,{customStyles:{path:"fill: ".concat(null==(_currentTheme_colors=currentTheme.colors)?void 0:_currentTheme_colors.planItemCheckBg,";")}})),react.createElement(PlanTitle,{$isActive:isActive,$isRtl:isRtl},react.createElement(PlanTitleText,{$customStyles:null==styles?void 0:styles.title},duration),react.createElement(StyledFullPrice,{$customStyles:null==styles?void 0:styles.fullPrice},react.createElement(Strike,null,priceWithCurrency(oldFullPrice))," ",priceWithCurrency(fullPrice)))),react.createElement(StyledPriceWrapper,null,react.createElement(OldPrice,{$customStyles:null==styles?void 0:styles.oldPrice},priceWithCurrency(oldPrice)),react.createElement(PriceWrapper,{$isActive:isActive,"data-currency":currencySign,$customStyles:null==styles?void 0:styles.price},react.createElement(Price,null,splitPrice(price)[0]),react.createElement(SmallItemsWrapper,null,react.createElement("span",null,null!=(_splitPrice_=splitPrice(price)[1])?_splitPrice_:"00"),react.createElement(PerDay,null,period)))))}))};try{PlansList.displayName="PlansList",PlansList.__docgenInfo={description:"",displayName:"PlansList",props:{activePlan:{defaultValue:null,description:"",name:"activePlan",required:!0,type:{name:"string"}},plans:{defaultValue:null,description:"",name:"plans",required:!0,type:{name:"PlanProps[]"}},onPlanClick:{defaultValue:null,description:"",name:"onPlanClick",required:!0,type:{name:"(plan: PlanProps) => void"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlansList/PlansList.tsx#PlansList"]={docgenInfo:PlansList.__docgenInfo,name:"PlansList",path:"src/components/PlansList/PlansList.tsx#PlansList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressBar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
      width: calc(100% - `,`px);
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
    `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
    display: flex;
    align-items: center;
    flex-direction: `,`;
    max-width: `,`px;
    height: 20px;
    `,`;

    `,`;
  `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    font-size: 16px;
    line-height: 20px;
    margin-`,`: 20px;
    cursor: pointer;

    @media screen and (min-width: `,`px) and (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }

    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
      gap: 5px;
      column-gap: 5px;
      background-color: transparent;
    `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: `,`;
    flex: 1 0 auto;
    height: 8px;
    border-radius: 20px;
    background-color: `,`;
    transition: background-color 300ms;
    overflow: hidden;
    `,`

    `,`;
  `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
      border-radius: 14px;
    `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
    flex-grow: 1;
    background-color: `,`;
    `,`;
    transition: background-color 300ms;

    `,`;

    `,`;
  `]);return _templateObject6=function _templateObject(){return data},data}var StyledContainer=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$customStyles=param.$customStyles,$staticPosition=param.$staticPosition;return(0,styled_components_browser_esm.AH)(_templateObject1(),$isRtl&&!theme.enableRTL?"row-reverse":"row",theme.maxContentWidth,!$staticPosition&&(0,styled_components_browser_esm.AH)(_templateObject(),theme.sidePadding),$customStyles)}),StyledSkip=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),(0,utils.j1)($isRtl),theme.tabletMinWidth,$customStyles)}),StyledBar=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$isSegmented=param.$isSegmented,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject4(),$isRtl&&!theme.enableRTL?"row-reverse":"row",(null==(_theme_colors=theme.colors)?void 0:_theme_colors.progressBarBg)||"#fff",$isSegmented&&(0,styled_components_browser_esm.AH)(_templateObject3()),$customStyles)}),StyledBarItem=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$isActive=param.$isActive,$isLastActive=param.$isLastActive,$isSegmented=param.$isSegmented,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject6(),theme.colors[$isActive?"progressBarActive":"progressBarBg"],$isLastActive?"border-radius: ".concat(theme.isRtl?"14px 0 0 14px":"0 14px 14px 0",";"):"box-shadow: 1px 0 0 ".concat(theme.colors[$isActive?"progressBarActive":"progressBarBg"],";"),$isSegmented&&(0,styled_components_browser_esm.AH)(_templateObject5()),$customStyles)});function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ProgressBar=function(_param){var _param_isSegmented=_param.isSegmented,isSegmented=void 0!==_param_isSegmented&&_param_isSegmented,totalCount=_param.totalCount,currentRoute=_param.currentRoute,skipButton=_param.skipButton,customStyles=_param.customStyles,_param_staticPosition=_param.staticPosition,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,rest=_object_without_properties(_param,["isSegmented","totalCount","currentRoute","skipButton","customStyles","staticPosition","isArabic","isRtl"]),pages=Array.from({length:totalCount},function(_,i){return i}),styles=(0,utils.p5)(customStyles,"container");return react.createElement(StyledContainer,{$customStyles:null==styles?void 0:styles.container,$staticPosition:void 0!==_param_staticPosition&&_param_staticPosition,$isRtl:isRtl},react.createElement(StyledBar,{$isSegmented:isSegmented,$customStyles:null==styles?void 0:styles.bar,$isRtl:isRtl},pages.map(function(i){return react.createElement(StyledBarItem,{$isActive:i<=currentRoute,$isLastActive:i===currentRoute,$isSegmented:isSegmented,$customStyles:null==styles?void 0:styles.segment,key:i})})),skipButton&&react.createElement(StyledSkip,{onClick:null==rest?void 0:rest.onContinueClick,$isRtl:isRtl,$customStyles:null==styles?void 0:styles.skip},skipButton))};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{isSegmented:{defaultValue:{value:"false"},description:"",name:"isSegmented",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},currentRoute:{defaultValue:null,description:"",name:"currentRoute",required:!0,type:{name:"number"}},skipButton:{defaultValue:null,description:"",name:"skipButton",required:!1,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},staticPosition:{defaultValue:{value:"false"},description:"",name:"staticPosition",required:!1,type:{name:"boolean"}},onContinueClick:{defaultValue:null,description:"",name:"onContinueClick",required:!1,type:{name:"() => void"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ReviewsSlider/ReviewsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ReviewsSlider});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
      flex-direction: column;
      overflow: initial;
    `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
    display: flex;
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
    overflow: hidden;
    `,`;
    `,`;
    position: relative;
    flex-shrink: 0;
    `,`;

    `,`;
  `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: 100%;
  display: flex;
  transition: transform 0.5s ease;
  direction: ltr;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["direction: rtl;"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["margin-bottom: 12px;"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["margin-right: ","px"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
    background-color: `,`;
    border: 1px solid #DEDEDE;
    border-radius: 12px;
    `,`;
    max-width: `,`px;
    padding: 12px 16px;
    text-align: `,`;
    transition: transform 0.5s ease;
    `,`;

    &:not(:last-child) {
      `,`;
    }

    `,`;
  `]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: `,`;
    align-items: center;
    margin-bottom: 8px;
    padding-`,`: 38px;
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      `,`;
      background-color: `,`;
      position: absolute;
      top: 0;
      `,`: 0;
    }
  `]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  font-size: 14px;
  line-height: 19px;
`]);return _templateObject8=function _templateObject(){return data},data}var ReviewsContainer=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$mt=param.$mt,$mb=param.$mb,$staticMode=param.$staticMode,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject1(),theme.maxContentWidth,void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$staticMode&&(0,styled_components_browser_esm.AH)(_templateObject()),$customStyles)}),ReviewsBlock=(0,styled_components_browser_esm.Ay)("div")(_templateObject2()),ReviewsItem=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,_ref,theme=param.theme,$staticMode=param.$staticMode,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$sideMargin=param.$sideMargin,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject6(),null==(_theme_colors=theme.colors)?void 0:_theme_colors.reviewItemBg,!$staticMode&&"flex: 1 0 calc(100vw - ".concat(2*(parseInt(theme.sidePadding)||16),"px);"),theme.maxContentWidth,(0,utils.j1)($isRtl),$isRtl&&(0,styled_components_browser_esm.AH)(_templateObject3()),$staticMode?(0,styled_components_browser_esm.AH)(_templateObject4()):(0,styled_components_browser_esm.AH)(_templateObject5(),null!=(_ref=null!=$sideMargin?$sideMargin:theme.sidePadding)?_ref:16),$customStyles)}),Reviewer=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$image=param.$image;return(0,styled_components_browser_esm.AH)(_templateObject7(),$isRtl&&!theme.enableRTL?"row-reverse":"row",(0,utils.j1)($isRtl),$image&&"background: url(".concat($image,") center / contain no-repeat"),null==(_theme_colors=theme.colors)?void 0:_theme_colors.bodyBackground,(0,utils.j1)($isRtl))}),ReviewText=(0,styled_components_browser_esm.Ay)("div")(_templateObject8());function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ReviewsSlider=function(_param){var reviewsList=_param.reviewsList,mt=_param.mt,mb=_param.mb,_param_interval=_param.interval,sideMargin=_param.sideMargin,_param_staticMode=_param.staticMode,staticMode=void 0!==_param_staticMode&&_param_staticMode,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,customStyles=_param.customStyles,rest=_object_without_properties(_param,["reviewsList","mt","mb","interval","sideMargin","staticMode","isArabic","isRtl","customStyles"]),currentTheme=(0,styled_components_browser_esm.DP)(),styles=(0,utils.p5)(customStyles,"container"),sliderInterval=1e3*(void 0===_param_interval?2:_param_interval),sliderRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),stopAutoScroll=_useState[0],setStopAutoScroll=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),lastItemAdded=_useState1[0],setLastItemAdded=_useState1[1],items=reviewsList.map(function(r,index){var name=r.name,text=r.text,img=r.img;return react.createElement(ReviewsItem,{$staticMode:staticMode,$isRtl:isRtl,$customStyles:null==styles?void 0:styles.item,$sideMargin:sideMargin,key:index},react.isValidElement(r)||"string"==typeof r?r:react.createElement(react.Fragment,null,react.createElement(Reviewer,{$image:img,$isRtl:isRtl},name||" "),react.createElement(ReviewText,null,text)))});return(0,react.useEffect)(function(){if(!staticMode&&!lastItemAdded){var slider=sliderRef.current;slider&&(slider.appendChild(slider.children[0].cloneNode(!0)),setLastItemAdded(!0))}},[staticMode]),(0,react.useEffect)(function(){if(!staticMode){var _ref,slider=sliderRef.current;if(slider){var counter=0,sliderItemWidth=slider.children[0].offsetWidth,sliderItemMargin=null!=(_ref=null!=sideMargin?sideMargin:parseInt(currentTheme.sidePadding))?_ref:16,updateSlidePosition=function(){slider.style.cssText=`
        transform: translateX(calc(-`.concat(counter*sliderItemWidth,"px - ").concat(counter*sliderItemMargin,`px))
      `),counter===reviewsList.length&&setTimeout(function(){counter=0,slider.style.cssText="transition: none; transform: translateX(0)"},sliderInterval/2)},interval=setInterval(function(){stopAutoScroll||(counter++,updateSlidePosition())},sliderInterval);return function(){clearInterval(interval)}}}},[staticMode,stopAutoScroll,reviewsList.length,sliderInterval]),react.createElement(ReviewsContainer,_object_spread({$mt:mt,$mb:mb,$customStyles:null==styles?void 0:styles.container,$staticMode:staticMode},rest),staticMode?items:react.createElement(ReviewsBlock,{ref:sliderRef,id:"slider",onTouchStart:function(e){staticMode||setStopAutoScroll(!0)},onTouchMove:function(e){},onTouchEnd:function(e){staticMode||setStopAutoScroll(!1)}},items))};try{ReviewsSlider.displayName="ReviewsSlider",ReviewsSlider.__docgenInfo={description:"",displayName:"ReviewsSlider",props:{reviewsList:{defaultValue:null,description:"",name:"reviewsList",required:!0,type:{name:"ReviewProps[] | ReactNode[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},interval:{defaultValue:{value:"2"},description:"",name:"interval",required:!1,type:{name:"number"}},sideMargin:{defaultValue:null,description:"",name:"sideMargin",required:!1,type:{name:"number"}},staticMode:{defaultValue:{value:"false"},description:"",name:"staticMode",required:!1,type:{name:"boolean"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"]={docgenInfo:ReviewsSlider.__docgenInfo,name:"ReviewsSlider",path:"src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SignupInput/SignupInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>SignupInput});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
      &:after {
        content: attr(data-placeholder);
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: #8696A6;
        white-space: pre-line;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: var(--side-padding);
        left: var(--side-padding);
        //padding-`,`: 5px;
        text-align: `,`;

        `,`;
      }
    `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    --side-padding: 16px;
    display: block;
    position: relative;
    cursor: text;

    `,`;

    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
    width: 100%;
    border-radius: 12px;
    border: none;
    box-shadow: inset 0 0 0 1px `,`;
    background-color: `,`;
    padding: 12px var(--side-padding);
    font-size: 16px;
    line-height: 32px;
    color: `,`;
    text-align: `,`;
    position: relative;

    &:focus,
    &:active {
      outline: none;
      border: none;
      box-shadow: inset 0 0 0 1px `,`;
    }

    `,`;
  `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  color: #E55656;
  padding: 0 15px;
  position: absolute;
  left: 0;
  top: calc(var(--input-height) + 2px);

  `,`;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: `,`;
    margin-top: 16px;
    height: 28px;
    gap: 12px;
    row-gap: 12px;

    @media screen and (max-width: `,`px) {
      gap: 5px;
      row-gap: 5px;
    }

    `,`;
  `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  flex: 1 0 90px;
  height: 28px;
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgb(229,229,229);
  border-radius: 100px;
  font-size: 12px;
  line-height: 1;
  color: #8696A6;
  padding: 0 5px;
  cursor: pointer;
  
  &:only-child {
    max-width: 30%;
  }
  
  `,`;
`]);return _templateObject6=function _templateObject(){return data},data}var Wrapper=(0,styled_components_browser_esm.Ay)("div")(_templateObject(),function(param){return param.$customStyles}),InputWrapper=(0,styled_components_browser_esm.Ay)("label")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$showPlaceholder=param.$showPlaceholder,$placeholderStyles=param.$placeholderStyles,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),$showPlaceholder&&(0,styled_components_browser_esm.AH)(_templateObject1(),(0,utils.j1)($isRtl),(0,utils.j1)($isRtl),$placeholderStyles),$customStyles)}),Input=(0,styled_components_browser_esm.Ay)("input")(function(param){var _theme_colors,_theme_colors1,_theme_colors2,theme=param.theme,$error=param.$error,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject3(),$error?"#FF5B5B":"rgb(229,229,229)",null==(_theme_colors=theme.colors)?void 0:_theme_colors.inputBg,null==(_theme_colors1=theme.colors)?void 0:_theme_colors1.text,(0,utils.j1)($isRtl),$error?"#E55656":null==(_theme_colors2=theme.colors)?void 0:_theme_colors2.primary,$customStyles)}),ErrorState=(0,styled_components_browser_esm.Ay)("div")(_templateObject4(),function(param){return param.$customStyles}),BtnContainer=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isRtl=param.$isRtl,$isRtl=void 0===_param_$isRtl?!!theme.isRtl:_param_$isRtl,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject5(),$isRtl&&!theme.enableRTL?"row-reverse":"row",theme.mobileWidth,$customStyles)}),DomainBtn=(0,styled_components_browser_esm.Ay)("button")(_templateObject6(),function(param){return param.$customStyles});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SignupInput=function(_param){var _param_type=_param.type,_param_autoComplete=_param.autoComplete,value=_param.value,placeholder=_param.placeholder,isValid=_param.isValid,setValue=_param.setValue,submitEmail=_param.submitEmail,isArabic=_param.isArabic,_param_isRtl=_param.isRtl,isRtl=void 0===_param_isRtl?isArabic:_param_isRtl,_param_customStyles=_param.customStyles,_param_autoFocus=_param.autoFocus,_param_customId=_param.customId,_param_withDomainButtons=_param.withDomainButtons,withDomainButtons=void 0===_param_withDomainButtons||_param_withDomainButtons,_param_withWrapper=_param.withWrapper,_param_withError=_param.withError,_param_isDev=_param.isDev,isDev=void 0!==_param_isDev&&_param_isDev,rest=_object_without_properties(_param,["type","autoComplete","value","placeholder","isValid","setValue","submitEmail","isArabic","isRtl","customStyles","autoFocus","customId","withDomainButtons","withWrapper","withError","isDev"]),t=(0,es.Bd)().t,_useState=_sliced_to_array((0,react.useState)(null),2),selected=_useState[0],setSelected=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),error=_useState1[0],setError=_useState1[1],DOMAINS=(0,react.useMemo)(function(){return isDev?["mailinator.com","yopmail.com","temp-mail.org"]:["gmail.com","yahoo.com","hotmail.com"]},[isDev]),styles=(0,utils.p5)(void 0===_param_customStyles?"":_param_customStyles,"input");(0,react.useEffect)(function(){if(isValid){var currentDomain=value.split("@")[1];setSelected(DOMAINS.includes(currentDomain)?currentDomain:null)}},[value,DOMAINS,isValid]);var content=react.createElement(react.Fragment,null,react.createElement(InputWrapper,{$isRtl:isRtl,$showPlaceholder:!value,"data-placeholder":placeholder,$error:error,$customStyles:null==styles?void 0:styles.label,$placeholderStyles:null==styles?void 0:styles.placeholder},react.createElement(Input,_object_spread({type:void 0===_param_type?"email":_param_type,autoComplete:void 0===_param_autoComplete?"email":_param_autoComplete,value:value,onChange:function(event){setValue(event.target.value),setError(!1)},onBlur:function(event){var _event_relatedTarget_id,_event_relatedTarget;(null==(_event_relatedTarget=event.relatedTarget)||null==(_event_relatedTarget_id=_event_relatedTarget.id)?void 0:_event_relatedTarget_id.includes("domain"))||setError(!!value&&!isValid)},onKeyDown:function(e){"Enter"===e.key&&isValid&&(e.preventDefault(),submitEmail())},id:void 0===_param_customId?"sign-up-input":_param_customId,$error:error,$isRtl:isRtl,$customStyles:null==styles?void 0:styles.input,autoFocus:void 0===_param_autoFocus||_param_autoFocus},rest)),void 0!==_param_withError&&_param_withError&&react.createElement(ErrorState,{$customStyles:null==styles?void 0:styles.error},error?t("email_error_message_".concat(value.length>0?"invalid":"empty")):"")),react.createElement(function(param){var customStyles=param.customStyles;if(!withDomainButtons)return null;var buttonsStyles=(0,utils.p5)(customStyles,"wrapper"),onAddDomainClick=function(domain){value&&(setValue(function(prevState){return prevState.split("@")[0]+=domain}),setSelected(domain),setError(isValid))},list=DOMAINS.filter(function(d){return!value||!selected||d===selected});return react.createElement(BtnContainer,{$isRtl:isRtl,$customStyles:null==buttonsStyles?void 0:buttonsStyles.wrapper},list.map(function(d,index){return react.createElement(DomainBtn,{onClick:function(){onAddDomainClick("@"+d)},id:"domain-button-"+(index+1),tabIndex:index,key:d,$customStyles:null==buttonsStyles?void 0:buttonsStyles.button},"@",d)}))},{customStyles:null==styles?void 0:styles.buttons}));return void 0!==_param_withWrapper&&_param_withWrapper?react.createElement(Wrapper,{$customStyles:null==styles?void 0:styles.wrapper},content):content};try{SignupInput.displayName="SignupInput",SignupInput.__docgenInfo={description:"",displayName:"SignupInput",props:{type:{defaultValue:{value:"email"},description:"",name:"type",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"email"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!0,type:{name:"boolean"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},submitEmail:{defaultValue:null,description:"",name:"submitEmail",required:!0,type:{name:"() => void"}},isArabic:{defaultValue:null,description:`@since 1.5.4
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},customId:{defaultValue:{value:"sign-up-input"},description:"",name:"customId",required:!1,type:{name:"string"}},withDomainButtons:{defaultValue:{value:"true"},description:"",name:"withDomainButtons",required:!1,type:{name:"boolean"}},withWrapper:{defaultValue:{value:"false"},description:"",name:"withWrapper",required:!1,type:{name:"boolean"}},withError:{defaultValue:{value:"false"},description:"",name:"withError",required:!1,type:{name:"boolean"}},isDev:{defaultValue:{value:"false"},description:"",name:"isDev",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignupInput/SignupInput.tsx#SignupInput"]={docgenInfo:SignupInput.__docgenInfo,name:"SignupInput",path:"src/components/SignupInput/SignupInput.tsx#SignupInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c1:()=>ContinueButton.c,Od:()=>Layouts.O,Wl:()=>OptionsItem.W,v1:()=>OptionsList.v,z2:()=>ProgressBar.z}),__webpack_require__("./src/components/Icons/index.tsx");var ContinueButton=__webpack_require__("./src/components/Buttons/ContinueButton/index.ts");__webpack_require__("./src/components/Buttons/MarketsButton/MarketsButton.tsx"),__webpack_require__("./src/components/Buttons/PaypalButton/PaypalButton.tsx");var OptionsItem=__webpack_require__("./src/components/OptionsItem/index.ts"),OptionsList=__webpack_require__("./src/components/OptionsList/OptionsList.tsx"),ProgressBar=__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");__webpack_require__("./src/components/Loader/index.ts"),__webpack_require__("./src/components/FallBack/FallBack.tsx"),__webpack_require__("./src/components/CircularProgress/index.ts"),__webpack_require__("./src/components/CreatingAnimation/CreatingAnimation.tsx"),__webpack_require__("./src/components/ReviewsSlider/ReviewsSlider.tsx"),__webpack_require__("./src/components/Alert/Alert.tsx");var Layouts=__webpack_require__("./src/components/Layouts/index.ts");__webpack_require__("./src/components/SignupInput/SignupInput.tsx"),__webpack_require__("./src/components/PlansList/PlansList.tsx")}}]);
//# sourceMappingURL=980.b58b86a2.iframe.bundle.js.map