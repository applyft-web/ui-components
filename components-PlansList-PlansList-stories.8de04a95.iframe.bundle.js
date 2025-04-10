"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[719],{"./src/components/PlansList/PlansList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlansListStoryTemplate:()=>PlansListStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PlansList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PlansList/PlansList.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlansList__WEBPACK_IMPORTED_MODULE_1__.x,props)))},parameters:{controls:{exclude:["plans","onPlanClick"]}},argTypes:function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W),{mt:{control:"number"},mb:{control:"number"},gap:{control:"number"}})};var PlansListStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),activePlan:"1-month",plans:[{id:"1-week",duration:"1 week",price:"0.99",oldPrice:"1.99",period:"per day",fullPrice:"6.99",oldFullPrice:"14.99",currencySign:"$"},{id:"1-month",duration:"1 month",price:"0.36",oldPrice:"0.50",period:"per day",fullPrice:"10.99",oldFullPrice:"14.99",currencySign:"$",coupon:"discount_4_usd_off_onetime",label:"Most popular"},{id:"1-year",duration:"1 year",price:"0.08",oldPrice:"0.11",period:"per day",fullPrice:"29.99",oldFullPrice:"39.99",currencySign:"$",coupon:"discount_10_usd_off_onetime"}],isArabic:!1,gap:8,mt:0,mb:0,customStyles:{container:"",item:{default:"",active:"box-shadow: 0 6px 24px rgba(24,25,37,.1);"},label:"",check:"",title:"",fullPrice:"",oldPrice:"",price:""}}};PlansListStoryTemplate.storyName="PlansList",PlansListStoryTemplate.parameters={...PlansListStoryTemplate.parameters,docs:{...PlansListStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    activePlan: '1-month',\n    plans,\n    isArabic: false,\n    gap: 8,\n    mt: 0,\n    mb: 0,\n    customStyles: {\n      container: '',\n      item: {\n        default: '',\n        active: 'box-shadow: 0 6px 24px rgba(24,25,37,.1);'\n      },\n      label: '',\n      check: '',\n      title: '',\n      fullPrice: '',\n      oldPrice: '',\n      price: ''\n    }\n  }\n}",...PlansListStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["PlansListStoryTemplate"]},"./src/components/PlansList/PlansList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>PlansList});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Icons/index.tsx"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  list-style: none;\n  ",";\n  ",";\n  \n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n      &:before {\n        content: attr(data-label);\n        display: block;\n        width: calc(100% + (var(--border-width)*2));\n        height: var(--label-height);\n        position: absolute;\n        bottom: 100%;\n        left: calc(var(--border-width)*(-1));\n        background-color: ",";\n        border: var(--border-width) solid ",";\n        color: ",";\n        border-radius: var(--border-radius) var(--border-radius) 0 0;\n        font-weight: 600;\n        font-size: 12px;\n        line-height: var(--line-height);\n        box-sizing: border-box;\n        \n        ",";\n      }\n    "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n    --border-width: 1px;\n    --border-radius: ",";\n    --label-height: ",";\n    display: flex;\n    flex-direction: ",";\n    justify-content: space-between;\n    align-items: center;\n    background-color: ",";\n    border: var(--border-width) solid ",";\n    border-radius: "," var(--border-radius) var(--border-radius);\n    width: 100%;\n    height: 82px;\n    padding: 0 16px;\n    position: relative;\n    cursor: pointer;\n  \n    &:not(:first-child) {\n      margin-top: calc("," + (var(--label-height)));\n    }\n    \n    ",";\n  "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n      ",";\n      ",";\n    "]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  ","\n  \n  ",";\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  ","\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n    border: 1px solid ",";\n    background-color: ",";\n  "]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal(["\n  --check-size: 24px;\n  width: var(--check-size);\n  height: var(--check-size);\n  border-radius: 50%;\n  ",";\n  position: relative;\n  margin: ",";\n  flex-shrink: 0;\n\n  .check-icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  ",";\n"]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  color: ",";\n"]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal(["\n  ",";\n"]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: ",";\n  margin-top: 2px;\n\n  span {\n    margin-right: 6px;\n    color: ",";\n  }\n  \n  ",";\n"]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal(["\n  text-decoration: line-through;\n"]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal(["\n  display: flex;\n"]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal(["\n  color: ",";\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  text-decoration-color: #ff6363;\n  align-self: flex-end;\n  \n  ",";\n"]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal(["\n  display: flex;\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 46px;\n  text-align: center;\n  color: ",";\n  padding-left: 13px;\n  position: relative;\n\n  &:before {\n    content: attr(data-currency);\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 15px;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  ",";\n"]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal(["\n  min-width: 40px;\n"]);return _templateObject15=function _templateObject(){return data},data}function _templateObject16(){var data=_tagged_template_literal(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 15px;\n  text-align: left;\n  margin-left: 2px;\n"]);return _templateObject16=function _templateObject(){return data},data}function _templateObject17(){var data=_tagged_template_literal(["\n  font-weight: 600;\n  font-size: 8px;\n  line-height: 12px;\n  margin-top: 5px;\n"]);return _templateObject17=function _templateObject(){return data},data}var PlansBlock=styled_components_browser_esm.Ay.ul(_templateObject(),function(param){var $mt=param.$mt;return void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt))},function(param){var $mb=param.$mb;return void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb))},function(param){return param.$customStyles}),PlanLi=styled_components_browser_esm.Ay.li(_templateObject4(),function(param){var _theme_colors,_theme_colors1,_theme_colors2,_theme_colors3,_theme_colors4,theme=param.theme,$withLabel=param.$withLabel,$isActive=param.$isActive,$isArabic=param.$isArabic,$gap=param.$gap,$labelCustomStyles=param.$labelCustomStyles;return(0,styled_components_browser_esm.AH)(_templateObject2(),(null==theme?void 0:theme.planItemBorderRadius)||"8px",$withLabel?"18px":"0px",$isArabic?"row-reverse":"row",null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.planItemBg,null==theme?void 0:null===(_theme_colors1=theme.colors)||void 0===_theme_colors1?void 0:_theme_colors1[$isActive?"primary":"planItemBorder"],$withLabel?"0 0":"",void 0!==$gap?(0,utils.nc)($gap):"8px",$withLabel&&(0,styled_components_browser_esm.AH)(_templateObject1(),null==theme?void 0:null===(_theme_colors2=theme.colors)||void 0===_theme_colors2?void 0:_theme_colors2[$isActive?"primary":"planItemLabelBg"],null==theme?void 0:null===(_theme_colors3=theme.colors)||void 0===_theme_colors3?void 0:_theme_colors3[$isActive?"primary":"planItemBorder"],null==theme?void 0:null===(_theme_colors4=theme.colors)||void 0===_theme_colors4?void 0:_theme_colors4["planItemLabelColor".concat($isActive?"Active":"Inactive")],$labelCustomStyles))},function(param){var $customStyles=param.$customStyles,$isActive=param.$isActive,styles=(0,utils.p5)($customStyles,"default");return(0,styled_components_browser_esm.AH)(_templateObject3(),$isActive?null==styles?void 0:styles.active:"",null==styles?void 0:styles.default)}),StyledPeriod=styled_components_browser_esm.Ay.div(_templateObject5(),function(param){return param.$isArabic?"row-reverse":"row"},function(param){return param.$isArabic&&"\n    justify-content: space-between;\n    width: 51%;\n  "}),PlanCheck=styled_components_browser_esm.Ay.div(_templateObject7(),function(param){var _theme_colors,_theme_colors1,$isActive=param.$isActive,theme=param.theme;return(0,styled_components_browser_esm.AH)(_templateObject6(),null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors[$isActive?"planItemCheckBorder":"planItemBorder"],null==theme?void 0:null===(_theme_colors1=theme.colors)||void 0===_theme_colors1?void 0:_theme_colors1[$isActive?"primary":"bodyBackground"])},function(param){return param.$isArabic?"0 0 0 16px":"0 16px 0 0"},function(param){return param.$customStyles}),PlanTitle=styled_components_browser_esm.Ay.div(_templateObject8(),function(param){var _theme_colors,$isActive=param.$isActive,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors[$isActive?"text":"planItemTextColorInactive"]}),PlanTitleText=styled_components_browser_esm.Ay.div(_templateObject9(),function(param){return param.$customStyles}),StyledFullPrice=styled_components_browser_esm.Ay.div(_templateObject10(),function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.planItemTextColorInactive},function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.planItemTextColorInactive},function(param){return param.$customStyles}),Strike=styled_components_browser_esm.Ay.span(_templateObject11()),StyledPriceWrapper=styled_components_browser_esm.Ay.div(_templateObject12()),OldPrice=(0,styled_components_browser_esm.Ay)(Strike)(_templateObject13(),function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.planItemTextColorInactive},function(param){return param.$customStyles}),PriceWrapper=styled_components_browser_esm.Ay.div(_templateObject14(),function(param){var _theme_colors,$isActive=param.$isActive,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors[$isActive?"text":"planItemTextColorInactive"]},function(param){return param.$customStyles}),Price=styled_components_browser_esm.Ay.div(_templateObject15()),SmallItemsWrapper=styled_components_browser_esm.Ay.div(_templateObject16()),PerDay=styled_components_browser_esm.Ay.div(_templateObject17());function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var PlansList=function(_param){var activePlan=_param.activePlan,plans=_param.plans,onPlanClick=_param.onPlanClick,isArabic=_param.isArabic,gap=_param.gap,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["activePlan","plans","onPlanClick","isArabic","gap","mt","mb","customStyles"]),theme=null==rest?void 0:rest.theme,currentTheme=(0,styled_components_browser_esm.DP)(),styles=(0,utils.p5)(customStyles,"container");return react.createElement(PlansBlock,{$mt:mt,$mb:mb,theme:theme,$customStyles:null==styles?void 0:styles.container},plans.map(function(planInfo,index){var _currentTheme_colors,_splitPrice_,id=planInfo.id,duration=planInfo.duration,price=planInfo.price,period=planInfo.period,oldPrice=planInfo.oldPrice,fullPrice=planInfo.fullPrice,oldFullPrice=planInfo.oldFullPrice,_planInfo_currencySign=planInfo.currencySign,currencySign=void 0===_planInfo_currencySign?"$":_planInfo_currencySign,label=planInfo.label,isActive=id===activePlan,splitPrice=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.00";return str.split(".")},priceWithCurrency=function(){var price=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";return"".concat(currencySign).concat(price)};return react.createElement(PlanLi,{$isActive:isActive,$isArabic:isArabic,$withLabel:!!label,$gap:gap,"data-label":label,onClick:function(){return onPlanClick(planInfo)},id:"plan-button-"+(index+1),key:index,$customStyles:null==styles?void 0:styles.item,$labelCustomStyles:null==styles?void 0:styles.label},react.createElement(StyledPeriod,{$isArabic:isArabic},react.createElement(PlanCheck,{$isActive:isActive,$isArabic:isArabic,$customStyles:null==styles?void 0:styles.check},react.createElement(Icons.Sr,{customStyles:{path:"fill: ".concat(null==currentTheme?void 0:null===(_currentTheme_colors=currentTheme.colors)||void 0===_currentTheme_colors?void 0:_currentTheme_colors.planItemCheckBg,";")}})),react.createElement(PlanTitle,{$isActive:isActive},react.createElement(PlanTitleText,{$customStyles:null==styles?void 0:styles.title},duration),react.createElement(StyledFullPrice,{$customStyles:null==styles?void 0:styles.fullPrice},react.createElement(Strike,null,priceWithCurrency(oldFullPrice))," ",priceWithCurrency(fullPrice)))),react.createElement(StyledPriceWrapper,null,react.createElement(OldPrice,{$customStyles:null==styles?void 0:styles.oldPrice},priceWithCurrency(oldPrice)),react.createElement(PriceWrapper,{$isActive:isActive,"data-currency":currencySign,$customStyles:null==styles?void 0:styles.price},react.createElement(Price,null,splitPrice(price)[0]),react.createElement(SmallItemsWrapper,null,react.createElement("span",null,null!==(_splitPrice_=splitPrice(price)[1])&&void 0!==_splitPrice_?_splitPrice_:"00"),react.createElement(PerDay,null,period)))))}))};try{PlansList.displayName="PlansList",PlansList.__docgenInfo={description:"",displayName:"PlansList",props:{activePlan:{defaultValue:null,description:"",name:"activePlan",required:!0,type:{name:"string"}},plans:{defaultValue:null,description:"",name:"plans",required:!0,type:{name:"PlanProps[]"}},onPlanClick:{defaultValue:null,description:"",name:"onPlanClick",required:!0,type:{name:"(plan: PlanProps) => void"}},isArabic:{defaultValue:null,description:"",name:"isArabic",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlansList/PlansList.tsx#PlansList"]={docgenInfo:PlansList.__docgenInfo,name:"PlansList",path:"src/components/PlansList/PlansList.tsx#PlansList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);