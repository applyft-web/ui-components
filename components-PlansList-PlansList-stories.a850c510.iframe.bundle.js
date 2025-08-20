"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[719],{"./src/components/PlansList/PlansList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlansListStoryTemplate:()=>PlansListStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PlansList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PlansList/PlansList.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlansList__WEBPACK_IMPORTED_MODULE_1__.x,props)))},parameters:{controls:{exclude:["plans","onPlanClick"]}},argTypes:function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_stories__WEBPACK_IMPORTED_MODULE_2__.W),{mt:{control:"number"},mb:{control:"number"},gap:{control:"number"}})};var PlansListStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),activePlan:"1-month",plans:[{id:"1-week",duration:"1 week",price:"0.99",oldPrice:"1.99",period:"per day",fullPrice:"6.99",oldFullPrice:"14.99",currencySign:"$",label:"Most popular"},{id:"1-month",duration:"1 month very long title",price:"0.36",oldPrice:"0.50",period:"per day",fullPrice:"10.99",oldFullPrice:"14.99",currencySign:"$",coupon:"discount_4_usd_off_onetime",label:"Most popular"},{id:"1-year",duration:"1 year",price:"0.08",oldPrice:"0.11",period:"per day",fullPrice:"29.99",oldFullPrice:"39.99",currencySign:"$",coupon:"discount_10_usd_off_onetime"}],isArabic:!1,gap:8,mt:0,mb:0,customStyles:{container:"",item:{default:"",active:"box-shadow: 0 6px 24px rgba(24,25,37,.1);"},label:"",check:"",title:"",fullPrice:"",oldPrice:"",price:""}}};PlansListStoryTemplate.storyName="PlansList",PlansListStoryTemplate.parameters={...PlansListStoryTemplate.parameters,docs:{...PlansListStoryTemplate.parameters?.docs,source:{originalSource:`{
  args: {
    theme: getTheme(),
    activePlan: '1-month',
    plans,
    isArabic: false,
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
  `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-`,`;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: `,`;
  `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
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
  `]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  text-decoration: line-through;
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  display: flex;
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
    color: `,`;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-decoration-color: #ff6363;
    align-self: flex-end;

    `,`;
  `]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
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
  `]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  min-width: 40px;
`]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: left;
  margin-left: 2px;
`]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  margin-top: 5px;
  white-space: nowrap;
`]);return _templateObject14=function _templateObject(){return data},data}var PlansBlock=(0,styled_components_browser_esm.Ay)("ul")(function(param){var $mt=param.$mt,$mb=param.$mb,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject(),void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt)),void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb)),$customStyles)}),PlanLi=(0,styled_components_browser_esm.Ay)("li")(function(param){var _theme_colors,_theme_colors1,_theme_colors2,_theme_colors3,_theme_colors4,theme=param.theme,$withLabel=param.$withLabel,$isActive=param.$isActive,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic,$gap=param.$gap,$labelCustomStyles=param.$labelCustomStyles,$customStyles=param.$customStyles,styles=(0,utils.p5)($customStyles,"default");return(0,styled_components_browser_esm.AH)(_templateObject2(),(null==theme?void 0:theme.planItemBorderRadius)||"8px",$withLabel?"18px":"0px",void 0!==$gap?(0,utils.nc)($gap):"8px",$isArabic&&!theme.enableRTL?"row-reverse":"row",null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemBg,null==theme||null==(_theme_colors1=theme.colors)?void 0:_theme_colors1[$isActive?"primary":"planItemBorder"],$withLabel?"0 0":"",$withLabel&&(0,styled_components_browser_esm.AH)(_templateObject1(),null==theme||null==(_theme_colors2=theme.colors)?void 0:_theme_colors2[$isActive?"primary":"planItemLabelBg"],null==theme||null==(_theme_colors3=theme.colors)?void 0:_theme_colors3[$isActive?"primary":"planItemBorder"],null==theme||null==(_theme_colors4=theme.colors)?void 0:_theme_colors4["planItemLabelColor".concat($isActive?"Active":"Inactive")],$labelCustomStyles),$isActive?null==styles?void 0:styles.active:"",null==styles?void 0:styles.default)}),StyledPeriod=(0,styled_components_browser_esm.Ay)("div")(function(param){var theme=param.theme,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic;return(0,styled_components_browser_esm.AH)(_templateObject3(),$isArabic&&!theme.enableRTL?"row-reverse":"row",(0,utils.j1)($isArabic))}),PlanCheck=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,_theme_colors1,theme=param.theme,$isActive=param.$isActive,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject4(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors[$isActive?"planItemCheckBorder":"planItemBorder"],null==theme||null==(_theme_colors1=theme.colors)?void 0:_theme_colors1[$isActive?"primary":"bodyBackground"],(0,utils.j1)($isArabic),$customStyles)}),PlanTitle=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,$isActive=param.$isActive,_param_$isArabic=param.$isArabic,$isArabic=void 0===_param_$isArabic?theme.isArabic:_param_$isArabic;return(0,styled_components_browser_esm.AH)(_templateObject5(),$isArabic?"end":"start",null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors[$isActive?"text":"planItemTextColorInactive"])}),PlanTitleText=(0,styled_components_browser_esm.Ay)("div")(_templateObject6(),function(param){return param.$customStyles}),StyledFullPrice=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,_theme_colors1,theme=param.theme,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject7(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemTextColorInactive,null==theme||null==(_theme_colors1=theme.colors)?void 0:_theme_colors1.planItemTextColorInactive,$customStyles)}),Strike=(0,styled_components_browser_esm.Ay)("span")(_templateObject8()),StyledPriceWrapper=(0,styled_components_browser_esm.Ay)("div")(_templateObject9()),OldPrice=(0,styled_components_browser_esm.Ay)(Strike)(function(param){var _theme_colors,theme=param.theme,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject10(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors.planItemTextColorInactive,$customStyles)}),PriceWrapper=(0,styled_components_browser_esm.Ay)("div")(function(param){var _theme_colors,theme=param.theme,$isActive=param.$isActive,$customStyles=param.$customStyles;return(0,styled_components_browser_esm.AH)(_templateObject11(),null==theme||null==(_theme_colors=theme.colors)?void 0:_theme_colors[$isActive?"text":"planItemTextColorInactive"],$customStyles)}),Price=(0,styled_components_browser_esm.Ay)("div")(_templateObject12()),SmallItemsWrapper=(0,styled_components_browser_esm.Ay)("div")(_templateObject13()),PerDay=(0,styled_components_browser_esm.Ay)("div")(_templateObject14());function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var PlansList=function(_param){var activePlan=_param.activePlan,plans=_param.plans,onPlanClick=_param.onPlanClick,isArabic=_param.isArabic,gap=_param.gap,mt=_param.mt,mb=_param.mb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["activePlan","plans","onPlanClick","isArabic","gap","mt","mb","customStyles"]),theme=null==rest?void 0:rest.theme,currentTheme=(0,styled_components_browser_esm.DP)(),styles=(0,utils.p5)(customStyles,"container");return react.createElement(PlansBlock,{$mt:mt,$mb:mb,theme:theme,$customStyles:null==styles?void 0:styles.container},plans.map(function(planInfo,index){var _currentTheme_colors,_splitPrice_,id=planInfo.id,duration=planInfo.duration,price=planInfo.price,period=planInfo.period,oldPrice=planInfo.oldPrice,fullPrice=planInfo.fullPrice,oldFullPrice=planInfo.oldFullPrice,_planInfo_currencySign=planInfo.currencySign,currencySign=void 0===_planInfo_currencySign?"$":_planInfo_currencySign,label=planInfo.label,isActive=id===activePlan,splitPrice=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.00";return str.split(".")},priceWithCurrency=function(){var price=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";return"".concat(currencySign).concat(price)};return react.createElement(PlanLi,{$isActive:isActive,$isArabic:isArabic,$withLabel:!!label,$gap:gap,"data-label":label,onClick:function(){return onPlanClick(planInfo)},id:"plan-button-"+(index+1),key:index,$customStyles:null==styles?void 0:styles.item,$labelCustomStyles:null==styles?void 0:styles.label},react.createElement(StyledPeriod,{$isArabic:isArabic},react.createElement(PlanCheck,{$isActive:isActive,$isArabic:isArabic,$customStyles:null==styles?void 0:styles.check},react.createElement(Icons.Sr,{customStyles:{path:"fill: ".concat(null==currentTheme||null==(_currentTheme_colors=currentTheme.colors)?void 0:_currentTheme_colors.planItemCheckBg,";")}})),react.createElement(PlanTitle,{$isActive:isActive,$isArabic:isArabic},react.createElement(PlanTitleText,{$customStyles:null==styles?void 0:styles.title},duration),react.createElement(StyledFullPrice,{$customStyles:null==styles?void 0:styles.fullPrice},react.createElement(Strike,null,priceWithCurrency(oldFullPrice))," ",priceWithCurrency(fullPrice)))),react.createElement(StyledPriceWrapper,null,react.createElement(OldPrice,{$customStyles:null==styles?void 0:styles.oldPrice},priceWithCurrency(oldPrice)),react.createElement(PriceWrapper,{$isActive:isActive,"data-currency":currencySign,$customStyles:null==styles?void 0:styles.price},react.createElement(Price,null,splitPrice(price)[0]),react.createElement(SmallItemsWrapper,null,react.createElement("span",null,null!=(_splitPrice_=splitPrice(price)[1])?_splitPrice_:"00"),react.createElement(PerDay,null,period)))))}))};try{PlansList.displayName="PlansList",PlansList.__docgenInfo={description:"",displayName:"PlansList",props:{activePlan:{defaultValue:null,description:"",name:"activePlan",required:!0,type:{name:"string"}},plans:{defaultValue:null,description:"",name:"plans",required:!0,type:{name:"PlanProps[]"}},onPlanClick:{defaultValue:null,description:"",name:"onPlanClick",required:!0,type:{name:"(plan: PlanProps) => void"}},isArabic:{defaultValue:null,description:"",name:"isArabic",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | CustomStylesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlansList/PlansList.tsx#PlansList"]={docgenInfo:PlansList.__docgenInfo,name:"PlansList",path:"src/components/PlansList/PlansList.tsx#PlansList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);
//# sourceMappingURL=components-PlansList-PlansList-stories.a850c510.iframe.bundle.js.map