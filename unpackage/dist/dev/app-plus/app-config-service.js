
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/work/index","pages/service/index","pages/publish/index","pages/mine/index","pages/404/404","pages/details/details","pages/search/search","pages/chooseAddress/chooseAddress","pages/release/release","pages/releaseService/releaseService","pages/login/login","pages/register/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"乐享零工","navigationBarBackgroundColor":"#FFD200","backgroundColor":"#EFEFEF","enablePullDownRefresh":true,"renderingMode":"seperated","pageOrientation":"portrait","rpxCalcMaxDeviceWidth":960,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750},"tabBar":{"color":"#333333","selectedColor":"#FFD200","backgroundColor":"#FFFFFF","borderStyle":"white","list":[{"pagePath":"pages/work/index","text":"找零工","iconPath":"static/image/tab/icon_work.png","selectedIconPath":"static/image/tab/icon_work_ac.png"},{"pagePath":"pages/service/index","text":"便民服务","iconPath":"static/image/tab/icon_service.png","selectedIconPath":"static/image/tab/icon_service_ac.png"},{"pagePath":"pages/publish/index","text":"我要发布","iconPath":"static/image/tab/icon_publish.png","selectedIconPath":"static/image/tab/icon_publish_ac.png"},{"pagePath":"pages/mine/index","text":"我的","iconPath":"static/image/tab/icon_me.png","selectedIconPath":"static/image/tab/icon_me_ac.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"lex-pro","compilerVersion":"3.7.9","entryPagePath":"pages/work/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/work/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","onReachBottomDistance":100}},{"path":"/pages/service/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/publish/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"我的"}},{"path":"/pages/404/404","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"scrollIndicator":"none"}},{"path":"/pages/chooseAddress/chooseAddress","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/release/release","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/releaseService/releaseService","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
