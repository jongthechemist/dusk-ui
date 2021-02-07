(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1100:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1101);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1101:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1102);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"dusk 2",values:[{name:"dusk 1",value:"#1a1d27"},{name:"dusk 2",value:"#222633"}]}}},1102:function(module,exports,__webpack_require__){},1103:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(364).configure)([__webpack_require__(1104),__webpack_require__(1105)],module,!1)}).call(this,__webpack_require__(104)(module))},1104:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1104},1105:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":1112,"./components/Color/Color.stories.tsx":1113};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1105},1112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"WithIcon",(function(){return WithIcon}));var _templateObject,_templateObject2,objectSpread2=__webpack_require__(127),index_esm=(__webpack_require__(0),__webpack_require__(484)),taggedTemplateLiteral=__webpack_require__(321),styled_components_browser_esm=__webpack_require__(322),Button=styled_components_browser_esm.a.button.attrs((function(props){return{className:"dusk-ui-btn ".concat(props.className||"")}}))(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(['\n  font-family: "Overpass", sans-serif;\n  border-radius: 4px;\n  border-width: 0px;\n  border-style: inset;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  > * {\n    display: block;\n  }\n  ',"\n  ","\n"])),(function(props){switch(props.btnType){case"primary":return"\n          background-image: var(--primary_gradient);\n          color: var(--primary_text);\n          transition: background-position ease-in-out 200ms;\n          box-shadow: 10px 10px 15px -3px rgba(235, 115, 108, 0.1), -10px 10px 15px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: 10px 15px 25px -3px rgba(235, 115, 108, 0.1), -10px 15px 25px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"secondary":return"\n          background-color: var(--primary_accent);\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"outline":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 4px var(--primary_border);\n          transition: background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--primary_accent);\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 4px var(--primary_border);\n          }\n        ";case"plain":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 4px var(--secondary_border);\n          transition: box-shadow ease-in-out 0ms, background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--contrast_background);\n            color: var(--contrast_text);\n            box-shadow: 0 15px 25px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 4px transparent;\n\n          }\n        "}}),(function(props){switch(props.size){case"small":return"\n          font-size: 0.8rem;\n          padding: 0.8rem 1rem;\n          ".concat(ButtonIcon," {\n            height: 1.5rem;\n            font-size: 1.2rem;\n            margin: -0.75rem 0;\n            padding-right: 0.3rem;\n          }\n        ");case"medium":return"\n          font-size: 1rem;\n          padding: 1.2rem 1.8rem;\n          ".concat(ButtonIcon," {\n            height: 1.8rem;\n            font-size: 1.5rem;\n            margin: -0.75rem 0;\n            padding-right: 0.5rem;\n          }\n        ");case"large":return"\n          font-size: 1.5rem;\n          padding: 1.8rem 2.5rem;\n          ".concat(ButtonIcon," {\n            height: 2.5rem;\n            font-size: 2.2rem;\n            margin: -1.25rem 0;\n            padding-right: 1rem;\n          }\n        ")}}));Button.defaultProps={btnType:"plain",size:"medium"};var ButtonIcon=styled_components_browser_esm.a.span.attrs((function(props){return{className:"dusk-ui-btn-icon ".concat(props.className||"")}}))(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)([""])));try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{btnType:{defaultValue:{value:"plain"},description:"Type of button",name:"btnType",required:!1,type:{name:'"primary" | "secondary" | "outline" | "plain"'}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{ButtonIcon.displayName="ButtonIcon",ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonIcon"]={docgenInfo:ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/components/Button/Button.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(39),Button_stories_Template=(__webpack_exports__.default={title:"Components/Button",component:Button},function Template(args){return Object(jsx_runtime.jsx)(Button,Object(objectSpread2.a)({},args))}),Primary=Button_stories_Template.bind({});Primary.args={btnType:"primary",children:"Button"};var WithIcon=Button_stories_Template.bind({});WithIcon.args={size:"small",btnType:"primary",children:[Object(jsx_runtime.jsx)(ButtonIcon,{children:Object(jsx_runtime.jsx)(index_esm.a,{})}),"Play"]},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),WithIcon.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},WithIcon.parameters)},1113:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Color_stories_Template}));var objectSpread2=__webpack_require__(127),ColorPalette=(__webpack_require__(0),{PRIMARY_ACCENT:"#6405ff",PRIMARY_GRADIENT:"linear-gradient(to right, #6405ff, #eb736c)",PRIMARY_BACKGROUND:"#1a1d27",SECONDARY_BACKGROUND:"#222633",TERTIARY_BACKGROUND:"#212939",PRIMARY_BORDER:"#6405ff",SECONDARY_BORDER:"#54586c",PRIMARY_COLOR:"#ffffff",SECONDARY_COLOR:"#b1b3be",TERTIARY_COLOR:"#696c7c"}),jsx_runtime=__webpack_require__(39),Color_stories_ColorPaletteItem=(__webpack_exports__.default={title:"Util/Color"},function ColorPaletteItem(props){return Object(jsx_runtime.jsxs)("div",{style:{width:200,paddingRight:40,paddingBottom:40},children:[Object(jsx_runtime.jsx)("div",{style:{backgroundColor:props.color,backgroundImage:props.color,border:props.label.toLowerCase().includes("background")?"".concat(ColorPalette.SECONDARY_BORDER," solid 1px"):"none",width:160,height:60,borderRadius:8}}),Object(jsx_runtime.jsx)("p",{style:{color:ColorPalette.PRIMARY_COLOR,whiteSpace:"break-spaces"},children:props.color.toUpperCase()}),Object(jsx_runtime.jsxs)("p",{style:{color:ColorPalette.SECONDARY_COLOR,whiteSpace:"break-spaces"},children:[props.label,Object(jsx_runtime.jsx)("br",{})]}),Object(jsx_runtime.jsx)("p",{children:"JS:"}),Object(jsx_runtime.jsx)("pre",{children:"ColorPalette.".concat(props.name)}),Object(jsx_runtime.jsx)("p",{children:"CSS:"}),Object(jsx_runtime.jsx)("pre",{children:"var(--".concat(props.name.toLowerCase(),")")})]})}),PALETTE_DETAILS=[{color:"SECONDARY_COLOR",description:"Footer navigation, paragraph text"},{color:"TERTIARY_COLOR",description:"Footer navigation sec., member icons"},{color:"SECONDARY_BORDER",description:"Border for secondary buttons"},{color:"TERTIARY_BACKGROUND",description:"Third background"},{color:"SECONDARY_BACKGROUND",description:"Secondary background"},{color:"PRIMARY_BACKGROUND",description:"Primary background"},{color:"PRIMARY_ACCENT",description:"Capital headers, highlight line"},{color:"PRIMARY_GRADIENT",description:"Primary buttons, community icons"}],Color_stories_Template=function Template(){return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)("header",{children:Object(jsx_runtime.jsx)("h1",{children:"Color palette"})}),Object(jsx_runtime.jsx)("section",{style:{display:"flex",flexWrap:"wrap"},children:PALETTE_DETAILS.map((function(_ref){var color=_ref.color,description=_ref.description;return Object(jsx_runtime.jsx)(Color_stories_ColorPaletteItem,{label:description,color:ColorPalette[color],name:color},color)}))})]})};Color_stories_Template.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <article>\n    <header>\n      <h1>Color palette</h1>\n    </header>\n    <section style={{ display: "flex", flexWrap: "wrap" }}>\n      {PALETTE_DETAILS.map(({ color, description }) => (\n        <ColorPaletteItem\n          key={color}\n          label={description}\n          color={ColorPalette[color]}\n          name={color}\n        />\n      ))}\n    </section>\n  </article>\n)'}},Color_stories_Template.parameters)},487:function(module,exports,__webpack_require__){__webpack_require__(488),__webpack_require__(652),__webpack_require__(653),__webpack_require__(818),__webpack_require__(1038),__webpack_require__(1071),__webpack_require__(1079),__webpack_require__(1091),__webpack_require__(1093),__webpack_require__(1098),__webpack_require__(1100),module.exports=__webpack_require__(1103)},561:function(module,exports){},653:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(364)}},[[487,1,2]]]);
//# sourceMappingURL=main.227fa788351a75cc16b6.bundle.js.map