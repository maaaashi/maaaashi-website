(self.webpackChunkmaaaashi_website=self.webpackChunkmaaaashi_website||[]).push([[487],{"./src/pages/Page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{View:()=>View,default:()=>Page_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),sweetalert2_all=__webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js"),sweetalert2_all_default=__webpack_require__.n(sweetalert2_all),__jsx=react.createElement,Scene=dynamic_default()((function(){return Promise.all([__webpack_require__.e(11),__webpack_require__.e(723)]).then(__webpack_require__.bind(__webpack_require__,"./src/components/Scene/index.tsx"))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./src/components/Scene/index.tsx"]}}});function App(){return sweetalert2_all_default().fire({title:"<strong>TRY NOW</strong>",html:'<div class="mouseArea"><div class="moveMouse"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" color="white" style="color: white;"><path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z"></path></svg></div></div>',showCloseButton:!1,showCancelButton:!1,focusConfirm:!1,confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonAriaLabel:"Thumbs down"}),__jsx("div",{className:"container mx-auto flex-1 overflow-y-auto bg-base-200 p-5"},__jsx("div",{className:"h-full p-5"},__jsx("div",{className:"h-full w-full bg-black",style:{cursor:"grab"}},__jsx(Scene,null))))}App.displayName="App",App.__docgenInfo={description:"",methods:[],displayName:"App"};var _View$parameters,_View$parameters2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Page_stories={component:App,parameters:{layout:"fullscreen"}};var View={};View.parameters=_objectSpread(_objectSpread({},View.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_View$parameters=View.parameters)||void 0===_View$parameters?void 0:_View$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_View$parameters2=View.parameters)||void 0===_View$parameters2||null===(_View$parameters2=_View$parameters2.docs)||void 0===_View$parameters2?void 0:_View$parameters2.source)})})},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function dynamic(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions={loading:({error,isLoading,pastDelay})=>null};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions));loadableOptions=_extends({},loadableOptions,options);const loaderFn=loadableOptions.loader;loadableOptions.loadableGenerated&&(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated),delete loadableOptions.loadableGenerated);if("boolean"==typeof loadableOptions.ssr&&!loadableOptions.ssr)return delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions);return loadableFn(_extends({},loadableOptions,{loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}))},exports.noSSR=noSSR;var _extends=__webpack_require__("./node_modules/@swc/helpers/lib/_extends.js").Z,_interop_require_default=__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z,_react=_interop_require_default(__webpack_require__("./node_modules/react/index.js")),_loadable=_interop_require_default(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.js"));const isServerSide="undefined"==typeof window;function convertModule(mod){var ref;return{default:(null==(ref=mod)?void 0:ref.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;const LoadableContext=(0,__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/react/index.js")).default.createContext(null);exports.LoadableContext=LoadableContext},"./node_modules/next/dist/shared/lib/loadable.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__("./node_modules/@swc/helpers/lib/_extends.js").Z,_react=(0,__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/react/index.js")),_loadableContext=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=(ids=[])=>new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);var _default=Loadable;exports.default=_default},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);