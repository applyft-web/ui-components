"use strict";(self.webpackChunk_geozilla_web_ui_components=self.webpackChunk_geozilla_web_ui_components||[]).push([[661],{"./src/core/theme/GlobalThemeProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GlobalThemeProviderStoryTemplate:()=>GlobalThemeProviderStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GlobalThemeProvider_stories});var react=__webpack_require__("./node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),theme=__webpack_require__("./src/core/theme/index.ts"),theme_theme=__webpack_require__("./src/core/theme/theme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 100vw;\n  height: 100vh;\n  padding: 5rem;\n  position: relative;\n  \n  &:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: ",";\n    opacity: .3;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var TestWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject(),function(param){return param.theme.colors.colorPrimary});let GlobalThemeProvider_stories={title:"core/GlobalThemeProvider",component:theme.YO,argTypes:{projectName:{options:Object.keys(theme_theme.n),control:"inline-radio"}},parameters:{controls:{exclude:["children"]}}};var GlobalThemeProviderStoryTemplate={args:{projectName:"Geozilla",children:react.createElement(function(){return react.createElement(TestWrapper,null,react.createElement(components.rK,{onClick:null,customStyles:"margin-bottom: 20px",img:"other",multiChoice:!0,isActive:!0}),react.createElement(components.fY,{onClick:null,staticPosition:!0}))},null)}};GlobalThemeProviderStoryTemplate.storyName="GlobalThemeProvider",GlobalThemeProviderStoryTemplate.parameters={...GlobalThemeProviderStoryTemplate.parameters,docs:{...GlobalThemeProviderStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    projectName: 'Geozilla',\n    children: <Test />\n  }\n}",...GlobalThemeProviderStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["GlobalThemeProviderStoryTemplate"]},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nz:()=>globalStyles,YO:()=>GlobalThemeProvider,gh:()=>theme_theme.g,np:()=>theme_theme.n});var theme_theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(['\n  :root {\n    --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--system-ui);\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: none;\n    color: ',";\n\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: calc(var(--vh,1svh) * 100);\n    background-color: ",';\n\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  input[type="text"],\n  input[type="tel"],\n  input[type="email"],\n  input[type="password"],\n  input[type="tel"],\n  input[type="textarea"],\n  input[type="radio"],\n  textarea,\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  input[type="radio"] {\n    display: none;\n  }\n\n  a, input, button {\n    font-family: var(--system-ui);\n  }\n']);return _templateObject=function _templateObject(){return data},data}let globalStyles=(0,styled_components_browser_esm.vJ)(_templateObject(),function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.colorText)||"#323232"},function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.colorBodyBackground)||"#fff"});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),GZ="Geozilla",FL="Family-Locator",FO="Familo",CL="Closer",namesList={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,closer:CL,cl:CL},fallback=namesList.gz,GlobalThemeProvider=function(param){var _namesList_projectName_toLowerCase,children=param.children,_param_projectName=param.projectName,projectName=void 0===_param_projectName?fallback:_param_projectName,theme=param.theme,currentTheme=null!=theme?theme:(0,theme_theme.g)(null!==(_namesList_projectName_toLowerCase=namesList[projectName.toLowerCase()])&&void 0!==_namesList_projectName_toLowerCase?_namesList_projectName_toLowerCase:fallback);return react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.f6,{theme:currentTheme},react.createElement(globalStyles,null),(0,utils.I)(children,{theme:currentTheme})))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"",displayName:"GlobalThemeProvider",props:{projectName:{defaultValue:{value:"namesList['gz']"},description:"",name:"projectName",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}__webpack_require__.d(__webpack_exports__,{g:()=>getTheme,n:()=>themes});var defaultTheme={colors:{colorText:"#323232",colorBodyBackground:"#fff"},mobileWidth:"350",tabletMinWidth:"744",desktopMinWidth:"1280"},mergeKeys=function(k,obj){return _define_property({},k,_object_spread({},defaultTheme[k],obj))},themes={Geozilla:_object_spread({},mergeKeys("colors",{colorPrimary:"#00BFA5",colorButtonHover:"#00A08B",colorButtonDisabled:"#9bdfd2",colorOptionInactive:"#EBFAF8",colorOptionActive:"#C2F0EA",colorOptionBorderActive:"#00BFA5",colorOptionImgActive:"#94E3D9",colorOptionImgInactive:"#C2F0EA",colorOptionCheckActive:"#00BFA5",colorOptionCheckInactive:"#BBE1DC",colorThreeDots:"#00BFA5"})),"Family-Locator":_object_spread({},mergeKeys("colors",{colorPrimary:"#3393EC",colorButtonHover:"#1F7ACE",colorButtonDisabled:"#9ec9f6",colorOptionInactive:"#F0F8FF",colorOptionActive:"#C5E3FF",colorOptionBorderActive:"#007AFF",colorOptionImgActive:"#8BB6DE",colorOptionImgInactive:"#C3E1FF",colorOptionCheckActive:"#007AFF",colorOptionCheckInactive:"#CCDDF0",colorThreeDots:"#5281BD"})),Familo:_object_spread({},mergeKeys("colors",{colorPrimary:"#F58A3C",colorButtonHover:"#C56A28",colorButtonDisabled:"#fcc5a1",colorOptionInactive:"#FEF7F1",colorOptionActive:"#FFE5D2",colorOptionBorderActive:"#F58A3C",colorOptionImgActive:"#ECC6AA",colorOptionImgInactive:"#FFE4D0",colorOptionCheckActive:"#F58A3C",colorOptionCheckInactive:"#EED6C5",colorThreeDots:"#F58A3C"})),Closer:_object_spread({},mergeKeys("colors",{colorPrimary:"#00BFA5",colorButtonHover:"#00A08B",colorButtonDisabled:"#9bdfd2",colorOptionInactive:"#EBFAF8",colorOptionActive:"#C2F0EA",colorOptionBorderActive:"#00BFA5",colorOptionImgActive:"#94E3D9",colorOptionImgInactive:"#C2F0EA",colorOptionCheckActive:"#00BFA5",colorOptionCheckInactive:"#BBE1DC",colorThreeDots:"#00BFA5"}))},getTheme=function(){var projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Geozilla";return _object_spread({},defaultTheme,themes[projectName])}}}]);