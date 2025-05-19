"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[367],{"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`

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
  `]);return _templateObject2=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(function(param){var theme=param.theme,$pt=param.$pt,$pb=param.$pb,$adaptive=param.$adaptive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt)),void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb)),$adaptive?(0,styled_components_browser_esm.AH)(_templateObject(),null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.desktopMinWidth,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile):(0,styled_components_browser_esm.AH)(_templateObject1(),parseInt((null==theme?void 0:theme.maxContentWidth)||375)+2*parseInt((null==theme?void 0:theme.sidePadding)||0),(null==theme?void 0:theme.sidePadding)||16,(null==theme?void 0:theme.sidePadding)||16,null==theme?void 0:theme.tabletMinWidth,null==$customStyles?void 0:$customStyles.tablet,null==theme?void 0:theme.mobileWidth,null==$customStyles?void 0:$customStyles.mobile),null==$customStyles?void 0:$customStyles.default)});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,_param_adaptive=_param.adaptive,rest=_object_without_properties(_param,["children","pt","pb","customStyles","adaptive"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles,$adaptive:void 0!==_param_adaptive&&_param_adaptive},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}},adaptive:{defaultValue:{value:"false"},description:"",name:"adaptive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/ReviewsSlider/ReviewsSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReviewsSliderStoryTemplate:()=>ReviewsSliderStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ReviewsSlider/ReviewsSlider.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var reviewsList2=[react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"5"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"6")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"https://placehold.co/100x100",width:100,height:100,alt:"placeholder"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi."];let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.ac,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__.z,_object_spread_props(_object_spread({},props),{reviewsList:reviewsList2}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{fontSize:"12px",whiteSpace:"nowrap",color:"gray",marginTop:30}},"Edit ReviewsSlider.stories.tsx to see classic reviews")))},parameters:{controls:{exclude:["mt","mb"]}},argTypes:_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var ReviewsSliderStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),interval:3,sideMargin:16,staticMode:!0,isArabic:!1,customStyles:{container:"",item:""}}};ReviewsSliderStoryTemplate.storyName="ReviewsSlider",ReviewsSliderStoryTemplate.parameters={...ReviewsSliderStoryTemplate.parameters,docs:{...ReviewsSliderStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: getTheme(),
    interval: 3,
    sideMargin: 16,
    staticMode: true,
    isArabic: false,
    customStyles: {
      container: '',
      item: ''
    }
  }
}`,...ReviewsSliderStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["ReviewsSliderStoryTemplate"]},"./src/components/ReviewsSlider/ReviewsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ReviewsSlider});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
  `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  width: 100%;
  display: flex;
  transition: transform 0.5s ease;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
    background-color: `,`;
    border: 1px solid #DEDEDE;
    border-radius: 12px;
    `,`;
    max-width: `,`px;
    padding: 12px 16px;
    text-align: `,`;
    transition: transform 0.5s ease;

    &:not(:last-child) {
      `,`;
    }

    `,`;
  `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
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
  `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  font-size: 14px;
  line-height: 19px;
`]);return _templateObject4=function _templateObject(){return data},data}var ReviewsContainer=styled_components_browser_esm.Ay.div(function(param){var theme=param.theme,$mt=param.$mt,$mb=param.$mb,$staticMode=param.$staticMode,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject(),null==theme?void 0:theme.maxContentWidth,void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$staticMode&&"flex-direction: column;",$customStyles)}),ReviewsBlock=styled_components_browser_esm.Ay.div(_templateObject1()),ReviewsItem=styled_components_browser_esm.Ay.div(function(param){var _theme_colors,_ref,theme=param.theme,$staticMode=param.$staticMode,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic,$sideMargin=param.$sideMargin,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.reviewItemBg,!$staticMode&&"flex: 1 0 calc(100vw - ".concat(2*((null==theme?void 0:theme.sidePadding)||16),"px);"),null==theme?void 0:theme.maxContentWidth,(0,utils.j1)($isArabic),$staticMode?`
        margin-bottom: 12px;
      `:`
        margin-right: `.concat(null!=(_ref=null!=$sideMargin?$sideMargin:null==theme?void 0:theme.sidePadding)?_ref:16,`px
      `),$customStyles)}),Reviewer=styled_components_browser_esm.Ay.div(function(param){var _theme_colors,theme=param.theme,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic,$image=param.$image;return(0,styled_components_browser_esm.AH)(_templateObject3(),$isArabic?"row-reverse":"row",(0,utils.j1)($isArabic),$image&&"background: url(".concat($image,") center / contain no-repeat"),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.bodyBackground,(0,utils.j1)($isArabic))}),ReviewText=styled_components_browser_esm.Ay.div(_templateObject4());function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ReviewsSlider=function(_param){var reviewsList=_param.reviewsList,mt=_param.mt,mb=_param.mb,_param_interval=_param.interval,sideMargin=_param.sideMargin,_param_staticMode=_param.staticMode,staticMode=void 0!==_param_staticMode&&_param_staticMode,isArabic=_param.isArabic,customStyles=_param.customStyles,rest=_object_without_properties(_param,["reviewsList","mt","mb","interval","sideMargin","staticMode","isArabic","customStyles"]),theme=null==rest?void 0:rest.theme,currentTheme=(0,styled_components_browser_esm.DP)(),styles=(0,utils.p5)(customStyles,"container"),sliderInterval=1e3*(void 0===_param_interval?2:_param_interval),sliderRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),stopAutoScroll=_useState[0],setStopAutoScroll=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),lastItemAdded=_useState1[0],setLastItemAdded=_useState1[1],items=reviewsList.map(function(r,index){var name=r.name,text=r.text,img=r.img;return react.createElement(ReviewsItem,{$staticMode:staticMode,$isArabic:isArabic,theme:theme,$customStyles:null==styles?void 0:styles.item,$sideMargin:sideMargin,key:index},react.isValidElement(r)||"string"==typeof r?r:react.createElement(react.Fragment,null,react.createElement(Reviewer,{$image:img,theme:theme,$isArabic:isArabic},name||" "),react.createElement(ReviewText,{theme:theme},text)))});return(0,react.useEffect)(function(){if(!staticMode&&!lastItemAdded){var slider=sliderRef.current;slider&&(slider.appendChild(slider.children[0].cloneNode(!0)),setLastItemAdded(!0))}},[staticMode]),(0,react.useEffect)(function(){if(!staticMode){var _ref,slider=sliderRef.current;if(slider){var counter=0,sliderItemWidth=slider.children[0].offsetWidth,sliderItemMargin=null!=(_ref=null!=sideMargin?sideMargin:null==currentTheme?void 0:currentTheme.sidePadding)?_ref:16,updateSlidePosition=function(){slider.style.cssText=`
        transform: translateX(calc(-`.concat(counter*sliderItemWidth,"px - ").concat(counter*sliderItemMargin,`px))
      `),counter===reviewsList.length&&setTimeout(function(){counter=0,slider.style.cssText="transition: none; transform: translateX(0)"},sliderInterval/2)},interval=setInterval(function(){stopAutoScroll||(counter++,updateSlidePosition())},sliderInterval);return function(){return clearInterval(interval)}}}},[staticMode,stopAutoScroll,reviewsList.length,sliderInterval]),react.createElement(ReviewsContainer,_object_spread({$mt:mt,$mb:mb,$customStyles:null==styles?void 0:styles.container,$staticMode:staticMode},rest),staticMode?items:react.createElement(ReviewsBlock,{ref:sliderRef,id:"slider",onTouchStart:function(e){staticMode||setStopAutoScroll(!0)},onTouchMove:function(e){if(staticMode)return},onTouchEnd:function(e){staticMode||setStopAutoScroll(!1)},theme:theme},items))};try{ReviewsSlider.displayName="ReviewsSlider",ReviewsSlider.__docgenInfo={description:"",displayName:"ReviewsSlider",props:{reviewsList:{defaultValue:null,description:"",name:"reviewsList",required:!0,type:{name:"ReviewProps[] | ReactNode[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},interval:{defaultValue:{value:"2"},description:"",name:"interval",required:!1,type:{name:"number"}},sideMargin:{defaultValue:null,description:"",name:"sideMargin",required:!1,type:{name:"number"}},staticMode:{defaultValue:{value:"false"},description:"",name:"staticMode",required:!1,type:{name:"boolean"}},isArabic:{defaultValue:null,description:"",name:"isArabic",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"]={docgenInfo:ReviewsSlider.__docgenInfo,name:"ReviewsSlider",path:"src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);
//# sourceMappingURL=components-ReviewsSlider-ReviewsSlider-stories.affa10d6.iframe.bundle.js.map