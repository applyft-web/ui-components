"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[719],{"./src/components/PlansList/PlansList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlansListStoryTemplate:()=>PlansListStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PlansList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PlansList/PlansList.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={component:function(_param){var theme=_param.theme,isRtl=_param.isRtl,rest=_object_without_properties(_param,["theme","isRtl"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:theme,isRtl:isRtl,enableRTL:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlansList__WEBPACK_IMPORTED_MODULE_1__.x,rest)))},parameters:{controls:{exclude:["plans","onPlanClick"]}},argTypes:function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W),{mt:{control:"number"},mb:{control:"number"},gap:{control:"number"}})};var PlansListStoryTemplate={args:{theme:"",activePlan:"1-month",plans:[{id:"1-week",duration:"1 week",price:"0.99",oldPrice:"1.99",period:"per day",fullPrice:"6.99",oldFullPrice:"14.99",currencySign:"$",label:"Most popular"},{id:"1-month",duration:"1 month very long title",price:"0.36",oldPrice:"0.50",period:"per day",fullPrice:"10.99",oldFullPrice:"14.99",currencySign:"$",coupon:"discount_4_usd_off_onetime",label:"Most popular"},{id:"1-year",duration:"1 year",price:"0.08",oldPrice:"0.11",period:"per day",fullPrice:"29.99",oldFullPrice:"39.99",currencySign:"$",coupon:"discount_10_usd_off_onetime"}],isRtl:!1,gap:8,mt:0,mb:0,customStyles:{container:"",item:{default:"",active:"box-shadow: 0 6px 24px rgba(24,25,37,.1);"},label:"",check:"",title:"",fullPrice:"",oldPrice:"",price:""}}};PlansListStoryTemplate.storyName="PlansList",PlansListStoryTemplate.parameters={...PlansListStoryTemplate.parameters,docs:{...PlansListStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: '',
    activePlan: '1-month',
    plans,
    isRtl: false,
    gap: 8,
    mt: 0,
    mb: 0,
    customStyles: {
      container: '',
      item: {
        default: '',
        active: 'box-shadow: 0 6px 24px rgba(24,25,37,.1);'
      },
      label: '',
      check: '',
      title: '',
      fullPrice: '',
      oldPrice: '',
      price: ''
    }
  }
}`,...PlansListStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["PlansListStoryTemplate"]},"./src/components/PlansList/PlansList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>PlansList});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Icons/index.tsx"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
@deprecated use \`isRtl\` instead. or use GlobalThemeProvider with \`isRtl\` flag`,name:"isArabic",required:!1,type:{name:"boolean"}},isRtl:{defaultValue:null,description:"",name:"isRtl",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlansList/PlansList.tsx#PlansList"]={docgenInfo:PlansList.__docgenInfo,name:"PlansList",path:"src/components/PlansList/PlansList.tsx#PlansList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var themesToControls={theme:{options:Object.keys(__webpack_require__("./src/core/theme/index.ts").Zj),control:"inline-radio"}}}}]);
//# sourceMappingURL=components-PlansList-PlansList-stories.e5361db4.iframe.bundle.js.map