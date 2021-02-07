(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1103:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1104);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1105);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"dusk 2",values:[{name:"dusk 1",value:"#1a1d27"},{name:"dusk 2",value:"#222633"}]}}},1105:function(module,exports,__webpack_require__){},1106:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(367).configure)([__webpack_require__(1107),__webpack_require__(1108)],module,!1)}).call(this,__webpack_require__(106)(module))},1107:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1107},1108:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":1116,"./components/Color/Color.stories.tsx":1117,"./components/Icon/Icon.stories.tsx":1118,"./components/Typography/Typography.stories.tsx":1111};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1108},1111:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Headings",(function(){return Headings}));var _home_runner_work_dusk_ui_dusk_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1),__webpack_require__(7));__webpack_exports__.default={title:"Util/Typography"};var TypographyItem=function TypographyItem(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(props.tag,{children:props.label}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{style:{color:"var(--secondary_text)",display:"flex",alignItems:"center"},children:props.description})]})},TYPOGRAPHY_DETAILS=[{tag:"h1",label:"Heading 1",description:"Banner text"},{tag:"h2",label:"Heading 2",description:"Main header"},{tag:"h3",label:"Heading 3",description:"Capital header, Labels"},{tag:"h4",label:"Heading 4",description:"Large paragraph text"},{tag:"h5",label:"Heading 5",description:"Paragraph titles"},{tag:"h6",label:"Heading 6",description:"Paragraph subtitles"},{tag:"p",label:"Paragraph",description:"Paragraph text"}],Headings=function Headings(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("article",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Typography"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section",{children:TYPOGRAPHY_DETAILS.map((function(_ref){var tag=_ref.tag,label=_ref.label,description=_ref.description;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TypographyItem,{label:label,description:description,tag:tag},tag)}))})]})};Headings.parameters=Object(_home_runner_work_dusk_ui_dusk_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => (\n  <article>\n    <header>\n      <h3>Typography</h3>\n    </header>\n    <section>\n      {TYPOGRAPHY_DETAILS.map(({ tag, label, description }) => (\n        <TypographyItem\n          key={tag}\n          label={label}\n          description={description}\n          tag={tag}\n        />\n      ))}\n    </section>\n  </article>\n)"}},Headings.parameters)},1116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"WithIcon",(function(){return WithIcon}));var _templateObject,_templateObject2,objectSpread2=__webpack_require__(31),index_esm=(__webpack_require__(1),__webpack_require__(487)),taggedTemplateLiteral=__webpack_require__(161),styled_components_browser_esm=__webpack_require__(162),Button=styled_components_browser_esm.a.button.attrs((function(props){return{className:"dusk-ui-btn ".concat(props.className||"")}}))(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(['\n  font-family: "Overpass", sans-serif;\n  border-radius: 4px;\n  border-width: 0px;\n  border-style: inset;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  > * {\n    display: block;\n  }\n  ',"\n  ","\n"])),(function(props){switch(props.btnType){case"primary":return"\n          background-image: var(--primary_gradient);\n          color: var(--primary_text);\n          transition: background-position ease-in-out 200ms;\n          box-shadow: 10px 10px 15px -3px rgba(235, 115, 108, 0.1), -10px 10px 15px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: 10px 15px 25px -3px rgba(235, 115, 108, 0.1), -10px 15px 25px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"secondary":return"\n          background-color: var(--primary_accent);\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"outline":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);\n          transition: background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--primary_accent);\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);\n          }\n        ";case"plain":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px var(--secondary_border);\n          transition: box-shadow ease-in-out 0ms, background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--contrast_background);\n            color: var(--contrast_text);\n            box-shadow: 0 15px 25px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px transparent;\n\n          }\n        "}}),(function(props){switch(props.size){case"small":return"\n          font-size: 0.8rem;\n          padding: 0.8rem 1rem;\n          ".concat(ButtonIcon," {\n            height: 1.5rem;\n            font-size: 1.2rem;\n            margin: -0.75rem 0;\n            padding-right: 0.3rem;\n          }\n        ");case"medium":return"\n          font-size: 1rem;\n          padding: 1.2rem 1.8rem;\n          ".concat(ButtonIcon," {\n            height: 1.8rem;\n            font-size: 1.5rem;\n            margin: -0.75rem 0;\n            padding-right: 0.5rem;\n          }\n        ");case"large":return"\n          font-size: 1.5rem;\n          padding: 1.8rem 2.5rem;\n          ".concat(ButtonIcon," {\n            height: 2.5rem;\n            font-size: 2.2rem;\n            margin: -1.25rem 0;\n            padding-right: 1rem;\n          }\n        ")}}));Button.defaultProps={btnType:"plain",size:"medium"};var ButtonIcon=styled_components_browser_esm.a.span.attrs((function(props){return{className:"dusk-ui-btn-icon ".concat(props.className||"")}}))(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)([""])));try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{btnType:{defaultValue:{value:"plain"},description:"Type of button",name:"btnType",required:!1,type:{name:'"primary" | "secondary" | "outline" | "plain"'}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{ButtonIcon.displayName="ButtonIcon",ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonIcon"]={docgenInfo:ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/components/Button/Button.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(7),Button_stories_Template=(__webpack_exports__.default={title:"Components/Button",component:Button},function Template(args){return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)("h3",{children:"Button"}),Object(jsx_runtime.jsx)(Button,Object(objectSpread2.a)({},args))]})}),Primary=Button_stories_Template.bind({});Primary.args={btnType:"primary",children:"Button"};var WithIcon=Button_stories_Template.bind({});WithIcon.args={btnType:"primary",children:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(ButtonIcon,{children:Object(jsx_runtime.jsx)(index_esm.a,{})}),"Play"]})},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <article>\n    <h3>Button</h3>\n    <Button {...args} />\n  </article>\n)"}},Primary.parameters),WithIcon.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <article>\n    <h3>Button</h3>\n    <Button {...args} />\n  </article>\n)"}},WithIcon.parameters)},1117:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Palette",(function(){return Color_stories_Palette}));var objectSpread2=__webpack_require__(31),ColorPalette=(__webpack_require__(1),{PRIMARY_ACCENT:"#6405ff",PRIMARY_GRADIENT:"linear-gradient(to right, #6405ff, #eb736c)",PRIMARY_BACKGROUND:"#1a1d27",SECONDARY_BACKGROUND:"#222633",TERTIARY_BACKGROUND:"#212939",PRIMARY_BORDER:"#6405ff",SECONDARY_BORDER:"#54586c",PRIMARY_COLOR:"#ffffff",SECONDARY_COLOR:"#b1b3be",TERTIARY_COLOR:"#696c7c"}),jsx_runtime=__webpack_require__(7),Color_stories_ColorPaletteItem=(__webpack_exports__.default={title:"Util/Color"},function ColorPaletteItem(props){return Object(jsx_runtime.jsxs)("div",{style:{width:200,paddingRight:40,paddingBottom:40},children:[Object(jsx_runtime.jsx)("div",{style:{backgroundColor:props.color,backgroundImage:props.color,border:props.label.toLowerCase().includes("background")?"".concat(ColorPalette.SECONDARY_BORDER," solid 1px"):"none",width:160,height:60,borderRadius:8}}),Object(jsx_runtime.jsx)("p",{style:{color:ColorPalette.PRIMARY_COLOR,whiteSpace:"break-spaces"},children:props.color.toUpperCase()}),Object(jsx_runtime.jsxs)("p",{style:{color:ColorPalette.SECONDARY_COLOR,whiteSpace:"break-spaces"},children:[props.label,Object(jsx_runtime.jsx)("br",{})]}),Object(jsx_runtime.jsx)("p",{children:"JS:"}),Object(jsx_runtime.jsx)("pre",{children:"ColorPalette.".concat(props.name)}),Object(jsx_runtime.jsx)("p",{children:"CSS:"}),Object(jsx_runtime.jsx)("pre",{children:"var(--".concat(props.name.toLowerCase(),")")})]})}),PALETTE_DETAILS=[{color:"SECONDARY_COLOR",description:"Footer navigation, paragraph text"},{color:"TERTIARY_COLOR",description:"Footer navigation sec., member icons"},{color:"SECONDARY_BORDER",description:"Border for secondary buttons"},{color:"TERTIARY_BACKGROUND",description:"Third background"},{color:"SECONDARY_BACKGROUND",description:"Secondary background"},{color:"PRIMARY_BACKGROUND",description:"Primary background"},{color:"PRIMARY_ACCENT",description:"Capital headers, highlight line"},{color:"PRIMARY_GRADIENT",description:"Primary buttons, community icons"}],Color_stories_Palette=function Palette(){return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)("header",{children:Object(jsx_runtime.jsx)("h3",{children:"Color palette"})}),Object(jsx_runtime.jsx)("section",{style:{display:"flex",flexWrap:"wrap"},children:PALETTE_DETAILS.map((function(_ref){var color=_ref.color,description=_ref.description;return Object(jsx_runtime.jsx)(Color_stories_ColorPaletteItem,{label:description,color:ColorPalette[color],name:color},color)}))})]})};Color_stories_Palette.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <article>\n    <header>\n      <h3>Color palette</h3>\n    </header>\n    <section style={{ display: "flex", flexWrap: "wrap" }}>\n      {PALETTE_DETAILS.map(({ color, description }) => (\n        <ColorPaletteItem\n          key={color}\n          label={description}\n          color={ColorPalette[color]}\n          name={color}\n        />\n      ))}\n    </section>\n  </article>\n)'}},Color_stories_Palette.parameters)},1118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var _templateObject,objectSpread2=__webpack_require__(31),index_esm=(__webpack_require__(1),__webpack_require__(164)),bs_index_esm=__webpack_require__(165),taggedTemplateLiteral=__webpack_require__(161),Icon=__webpack_require__(162).a.span.attrs((function(props){return{className:"dusk-ui-icon ".concat(props.className||"")}}))(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  ","\n  ","\n"])),(function(props){switch(props.type){case"primary":return"\n          background-image: var(--vertical_gradient);\n          color: var(--primary_text);\n          transition: background-position ease-in-out 200ms;\n          box-shadow: -10px 10px 15px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: -10px 15px 25px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"secondary":return"\n          background-color: var(--primary_accent);\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          transition: box-shadow ease-in-out 200ms;\n          &:hover {\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);\n          }\n        ";case"outline":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);\n          transition: background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--primary_accent);\n            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);\n          }\n        ";case"plain":return"\n          background-color: transparent;\n          color: var(--primary_text);\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px var(--secondary_border);\n          transition: box-shadow ease-in-out 0ms, background-color ease-in-out 200ms;\n          &:hover {\n            background-color: var(--contrast_background);\n            color: var(--contrast_text);\n            box-shadow: 0 15px 25px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px transparent;\n\n          }\n        "}}),(function(props){switch(props.size){case"small":return"\n          width: 3rem;\n          height: 3rem;\n          font-size: 1rem;\n          > * {\n            margin-top: -0.2rem;\n          }\n        ";case"medium":return"\n          width: 8rem;\n          height: 8rem;\n          font-size: 2.5rem;\n          > * {\n            margin-top: -0.2rem;\n          }\n        ";case"large":return"\n          width: 10rem;\n          height: 10rem;\n          font-size: 4rem;\n          > * {\n            margin-top: -0.4rem;\n          }\n        "}}));Icon.defaultProps={type:"plain",size:"medium"};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{type:{defaultValue:{value:"plain"},description:"Type of button",name:"type",required:!1,type:{name:'"primary" | "secondary" | "outline" | "plain"'}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(7),Primary=(__webpack_exports__.default={title:"Components/Icon",component:Icon},function Template(args){return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)("header",{children:Object(jsx_runtime.jsx)("h3",{children:"Icons"})}),Object(jsx_runtime.jsxs)("section",{style:{display:"flex",marginBottom:20},children:[Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(index_esm.a,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(index_esm.c,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(index_esm.d,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(index_esm.b,{})}))]}),Object(jsx_runtime.jsxs)("section",{style:{display:"flex"},children:[Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(bs_index_esm.c,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(bs_index_esm.b,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(bs_index_esm.a,{})})),Object(jsx_runtime.jsx)(Icon,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{marginRight:20},children:Object(jsx_runtime.jsx)(bs_index_esm.d,{})}))]})]})}.bind({}));Primary.args={type:"primary"},Primary.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => (\n  <article>\n    <header>\n      <h3>Icons</h3>\n    </header>\n    <section style={{ display: "flex", marginBottom: 20 }}>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <AiOutlineMessage />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <AiOutlinePhone />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <AiOutlineTeam />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <AiOutlineMobile />\n      </Icon>\n    </section>\n    <section style={{ display: "flex" }}>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <BsController />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <BsCompass />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <BsAppIndicator />\n      </Icon>\n      <Icon {...args} style={{ marginRight: 20 }}>\n        <BsHouseDoor />\n      </Icon>\n    </section>\n  </article>\n)'}},Primary.parameters)},490:function(module,exports,__webpack_require__){__webpack_require__(491),__webpack_require__(655),__webpack_require__(656),__webpack_require__(821),__webpack_require__(1041),__webpack_require__(1074),__webpack_require__(1082),__webpack_require__(1094),__webpack_require__(1096),__webpack_require__(1101),__webpack_require__(1103),module.exports=__webpack_require__(1106)},564:function(module,exports){},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(367)}},[[490,1,2]]]);
//# sourceMappingURL=main.5a952bd55a8506a4e940.bundle.js.map