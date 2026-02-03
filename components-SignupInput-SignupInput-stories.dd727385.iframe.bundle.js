"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[671],{"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`

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
    `]);return _templateObject2=function _templateObject(){return data},data}var StyledLayout=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,$pt=param.$pt,$pb=param.$pb,$adaptive=param.$adaptive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt)),void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb)),$adaptive?(0,styled_components_browser_esm.AH)(_templateObject(),theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,theme.desktopMinWidth,theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile):(0,styled_components_browser_esm.AH)(_templateObject1(),parseInt(theme.maxContentWidth||"375")+2*parseInt(theme.sidePadding||"0"),theme.sidePadding||16,theme.sidePadding||16,theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile),null==$customStyles?void 0:$customStyles.default)});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,_param_adaptive=_param.adaptive,rest=_object_without_properties(_param,["children","pt","pb","customStyles","adaptive"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles,$adaptive:void 0!==_param_adaptive&&_param_adaptive},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}},adaptive:{defaultValue:{value:"false"},description:"",name:"adaptive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/SignupInput/SignupInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SignupInputStoryTemplate:()=>SignupInputStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SignupInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SignupInput/SignupInput.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={component:function(_param){var theme=_param.theme,isRtl=_param.isRtl,rest=_object_without_properties(_param,["theme","isRtl"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:theme,isRtl:isRtl,enableRTL:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SignupInput__WEBPACK_IMPORTED_MODULE_1__.x,rest)))},parameters:{controls:{exclude:["setValue","submitEmail","value"]}},argTypes:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var SignupInputStoryTemplate={args:{theme:"",setValue:function(value){window.sessionStorage.setItem("email",value.toString())},submitEmail:function(){alert("email submitted: "+window.sessionStorage.getItem("email"))},placeholder:"Enter your email address here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",isRtl:!1,withDomainButtons:!0,withWrapper:!0,customStyles:{wrapper:"",label:"",placeholder:"",input:"",error:"",buttons:{wrapper:"",button:""}}}};SignupInputStoryTemplate.storyName="SignupInput",SignupInputStoryTemplate.parameters={...SignupInputStoryTemplate.parameters,docs:{...SignupInputStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: '',
    setValue: value => {
      window.sessionStorage.setItem('email', value.toString());
    },
    submitEmail: () => {
      alert('email submitted: ' + window.sessionStorage.getItem('email'));
    },
    // value: window.sessionStorage.getItem('email'),
    placeholder: 'Enter your email address here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRtl: false,
    withDomainButtons: true,
    withWrapper: true,
    customStyles: {
      wrapper: '',
      label: '',
      placeholder: '',
      input: '',
      error: '',
      buttons: {
        wrapper: '',
        button: ''
      }
    }
  }
}`,...SignupInputStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["SignupInputStoryTemplate"]},"./src/components/SignupInput/SignupInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>SignupInput});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),utils=__webpack_require__("./src/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},customId:{defaultValue:{value:"sign-up-input"},description:"",name:"customId",required:!1,type:{name:"string"}},withDomainButtons:{defaultValue:{value:"true"},description:"",name:"withDomainButtons",required:!1,type:{name:"boolean"}},withWrapper:{defaultValue:{value:"false"},description:"",name:"withWrapper",required:!1,type:{name:"boolean"}},withError:{defaultValue:{value:"false"},description:"",name:"withError",required:!1,type:{name:"boolean"}},isDev:{defaultValue:{value:"false"},description:"",name:"isDev",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignupInput/SignupInput.tsx#SignupInput"]={docgenInfo:SignupInput.__docgenInfo,name:"SignupInput",path:"src/components/SignupInput/SignupInput.tsx#SignupInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var themesToControls={theme:{options:Object.keys(__webpack_require__("./src/core/theme/index.ts").Zj),control:"inline-radio"}}}}]);
//# sourceMappingURL=components-SignupInput-SignupInput-stories.dd727385.iframe.bundle.js.map