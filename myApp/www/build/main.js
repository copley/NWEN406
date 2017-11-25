webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 281;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_js_chart_js_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__chart_js_chart_js_component__["a" /* ChartJsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 124,
	"./af.js": 124,
	"./ar": 125,
	"./ar-dz": 126,
	"./ar-dz.js": 126,
	"./ar-kw": 127,
	"./ar-kw.js": 127,
	"./ar-ly": 128,
	"./ar-ly.js": 128,
	"./ar-ma": 129,
	"./ar-ma.js": 129,
	"./ar-sa": 130,
	"./ar-sa.js": 130,
	"./ar-tn": 131,
	"./ar-tn.js": 131,
	"./ar.js": 125,
	"./az": 132,
	"./az.js": 132,
	"./be": 133,
	"./be.js": 133,
	"./bg": 134,
	"./bg.js": 134,
	"./bn": 135,
	"./bn.js": 135,
	"./bo": 136,
	"./bo.js": 136,
	"./br": 137,
	"./br.js": 137,
	"./bs": 138,
	"./bs.js": 138,
	"./ca": 139,
	"./ca.js": 139,
	"./cs": 140,
	"./cs.js": 140,
	"./cv": 141,
	"./cv.js": 141,
	"./cy": 142,
	"./cy.js": 142,
	"./da": 143,
	"./da.js": 143,
	"./de": 144,
	"./de-at": 145,
	"./de-at.js": 145,
	"./de-ch": 146,
	"./de-ch.js": 146,
	"./de.js": 144,
	"./dv": 147,
	"./dv.js": 147,
	"./el": 148,
	"./el.js": 148,
	"./en-au": 149,
	"./en-au.js": 149,
	"./en-ca": 150,
	"./en-ca.js": 150,
	"./en-gb": 151,
	"./en-gb.js": 151,
	"./en-ie": 152,
	"./en-ie.js": 152,
	"./en-nz": 153,
	"./en-nz.js": 153,
	"./eo": 154,
	"./eo.js": 154,
	"./es": 155,
	"./es-do": 156,
	"./es-do.js": 156,
	"./es.js": 155,
	"./et": 157,
	"./et.js": 157,
	"./eu": 158,
	"./eu.js": 158,
	"./fa": 159,
	"./fa.js": 159,
	"./fi": 160,
	"./fi.js": 160,
	"./fo": 161,
	"./fo.js": 161,
	"./fr": 162,
	"./fr-ca": 163,
	"./fr-ca.js": 163,
	"./fr-ch": 164,
	"./fr-ch.js": 164,
	"./fr.js": 162,
	"./fy": 165,
	"./fy.js": 165,
	"./gd": 166,
	"./gd.js": 166,
	"./gl": 167,
	"./gl.js": 167,
	"./gom-latn": 168,
	"./gom-latn.js": 168,
	"./he": 169,
	"./he.js": 169,
	"./hi": 170,
	"./hi.js": 170,
	"./hr": 171,
	"./hr.js": 171,
	"./hu": 172,
	"./hu.js": 172,
	"./hy-am": 173,
	"./hy-am.js": 173,
	"./id": 174,
	"./id.js": 174,
	"./is": 175,
	"./is.js": 175,
	"./it": 176,
	"./it.js": 176,
	"./ja": 177,
	"./ja.js": 177,
	"./jv": 178,
	"./jv.js": 178,
	"./ka": 179,
	"./ka.js": 179,
	"./kk": 180,
	"./kk.js": 180,
	"./km": 181,
	"./km.js": 181,
	"./kn": 182,
	"./kn.js": 182,
	"./ko": 183,
	"./ko.js": 183,
	"./ky": 184,
	"./ky.js": 184,
	"./lb": 185,
	"./lb.js": 185,
	"./lo": 186,
	"./lo.js": 186,
	"./lt": 187,
	"./lt.js": 187,
	"./lv": 188,
	"./lv.js": 188,
	"./me": 189,
	"./me.js": 189,
	"./mi": 190,
	"./mi.js": 190,
	"./mk": 191,
	"./mk.js": 191,
	"./ml": 192,
	"./ml.js": 192,
	"./mr": 193,
	"./mr.js": 193,
	"./ms": 194,
	"./ms-my": 195,
	"./ms-my.js": 195,
	"./ms.js": 194,
	"./my": 196,
	"./my.js": 196,
	"./nb": 197,
	"./nb.js": 197,
	"./ne": 198,
	"./ne.js": 198,
	"./nl": 199,
	"./nl-be": 200,
	"./nl-be.js": 200,
	"./nl.js": 199,
	"./nn": 201,
	"./nn.js": 201,
	"./pa-in": 202,
	"./pa-in.js": 202,
	"./pl": 203,
	"./pl.js": 203,
	"./pt": 204,
	"./pt-br": 205,
	"./pt-br.js": 205,
	"./pt.js": 204,
	"./ro": 206,
	"./ro.js": 206,
	"./ru": 207,
	"./ru.js": 207,
	"./sd": 208,
	"./sd.js": 208,
	"./se": 209,
	"./se.js": 209,
	"./si": 210,
	"./si.js": 210,
	"./sk": 211,
	"./sk.js": 211,
	"./sl": 212,
	"./sl.js": 212,
	"./sq": 213,
	"./sq.js": 213,
	"./sr": 214,
	"./sr-cyrl": 215,
	"./sr-cyrl.js": 215,
	"./sr.js": 214,
	"./ss": 216,
	"./ss.js": 216,
	"./sv": 217,
	"./sv.js": 217,
	"./sw": 218,
	"./sw.js": 218,
	"./ta": 219,
	"./ta.js": 219,
	"./te": 220,
	"./te.js": 220,
	"./tet": 221,
	"./tet.js": 221,
	"./th": 222,
	"./th.js": 222,
	"./tl-ph": 223,
	"./tl-ph.js": 223,
	"./tlh": 224,
	"./tlh.js": 224,
	"./tr": 225,
	"./tr.js": 225,
	"./tzl": 226,
	"./tzl.js": 226,
	"./tzm": 227,
	"./tzm-latn": 228,
	"./tzm-latn.js": 228,
	"./tzm.js": 227,
	"./uk": 229,
	"./uk.js": 229,
	"./ur": 230,
	"./ur.js": 230,
	"./uz": 231,
	"./uz-latn": 232,
	"./uz-latn.js": 232,
	"./uz.js": 231,
	"./vi": 233,
	"./vi.js": 233,
	"./x-pseudo": 234,
	"./x-pseudo.js": 234,
	"./yo": 235,
	"./yo.js": 235,
	"./zh-cn": 236,
	"./zh-cn.js": 236,
	"./zh-hk": 237,
	"./zh-hk.js": 237,
	"./zh-tw": 238,
	"./zh-tw.js": 238
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 384;

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defobj__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartJsComponent = (function () {
    function ChartJsComponent(http) {
        this.http = http;
        this.jsons = [];
        this.cdata = [];
        this.clables = [];
        this.costs = [];
        this.ReqO = __WEBPACK_IMPORTED_MODULE_2__defobj__["a" /* Defobj */];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.reurl = 'http://35.163.140.165:5000/post';
    }
    ;
    ChartJsComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < parseInt(this.ReqO.times); i++) {
            this.cdata.push(0);
            this.clables.push(0);
            this.costs.push(0);
        }
        ;
        this.chartjs();
    };
    ;
    ChartJsComponent.prototype.chartjs = function () {
        // lineChart
        this.lineChartData = [{
                data: this.cdata,
                label: 'duration time  '
            },
            {
                data: this.costs,
                label: 'cost line per  0.00000001 $'
            }
            //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        ];
        this.lineChartLabels = this.clables;
        this.lineChartColors = [{
                backgroundColor: 'rgba(48,159,177,0.2)',
                borderColor: 'rgba(48,159,177,1)',
                pointBackgroundColor: 'rgba(48,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(48,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    };
    ChartJsComponent.prototype.getprice = function (mb, t) {
        var prices = [0.000000208, 0.000000417, 0.000000834, 0.000001667];
        var price = 0;
        switch (mb) {
            case 128:
                price = prices[0];
                break;
            case 256:
                price = prices[1];
                break;
            case 512:
                price = prices[2];
                break;
            case 1024:
                price = prices[3];
                break;
        }
        return price * t * 10000000;
    };
    ChartJsComponent.prototype.initaxis = function () {
        this.cdata = [];
        this.clables = [];
        this.costs = [];
        for (var i = 0; i < parseInt(this.ReqO.times); i++) {
            this.cdata.push(0);
            this.clables.push(0);
            this.costs.push(0);
        }
    };
    ChartJsComponent.prototype.post = function () {
        var _this = this;
        this.chartjs();
        this.http.post(this.reurl, this.ReqO).subscribe(function (res) {
            debugger;
            _this.jsons = res.json;
            var t = parseInt(_this.ReqO.times);
            var _lineChartData = new Array(t);
            //   this.clables = [] ;  this.cdata  = [] ; this.costs = [] ;
            var diff = _this.clables.length - t;
            _this.clables.splice(t, diff);
            for (var j = 0; j < 2; j++) {
                _lineChartData[j] = {
                    data: new Array(parseInt(_this.ReqO.times)),
                    label: _this.lineChartData[j].label
                };
                for (var i = 0; i < parseInt(_this.ReqO.times); i++) {
                    _lineChartData[j].data[i] = _this.jsons[i].durationSeconds;
                    if (j == 1)
                        _lineChartData[j].data[i] = _this.getprice(_this.jsons[i].MB, _this.jsons[i].durationSeconds);
                    _this.clables[i] = i + '.';
                }
            }
            _this.lineChartData = _lineChartData;
            //   this.lineChartLabels
            console.log(res);
        }, function (err) {
            alert("wrong apt key or other invalid input.......  ");
        });
        ;
        // this.initaxis() ;
    };
    /**
  public post2() :void {
          this.restService.restPost(this.ReqO).subscribe(
        res => {
             this.jsons = res.json ;     let _lineChartData:Array<any> = new Array(parseInt(this.ReqO.times));
                  _lineChartData[0] = {data: new Array(parseInt(this.ReqO.times)), label: this.lineChartData[0].label};
            for (let i = 0; i < parseInt(this.ReqO.times); i++) {
              
             _lineChartData[0].data[i] = this.jsons[i].durationSeconds  ;
             this.clables[i] = i  ;
              
            }
                       this.lineChartData = _lineChartData;
                     //   this.lineChartLabels
          console.log(res);
        },
        err => {
          alert("wrong apt key or other invalid input F ");
        }
      );;
    
  }
  
  

  
  
 
  
  
  
  
 
  public post1():void {
     this.http.get<ResponseObj>('http://35.163.140.165:5000/getSatisfactory').subscribe(data => {
           this.jsons =   data.task[0]     ;   console.log( "this.json" )  ;  console.log( this.jsons )   ;
            let _lineChartData:Array<any> = new Array(this.lineChartData.length);
            for (let i = 0; i < this.lineChartData.length; i++) {
              _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
              for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] =   this.jsons[j][0].durationSeconds;
              }
            }
               console.log (_lineChartData)
           // this.lineChartData = _lineChartData;
         
            
            
            
    });
 
  }
  
  **/
    // events
    ChartJsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartJsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-js',template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/app/chart-js/chart-js.component.html"*/` \n \n \n \n <div style = "width: 500px ; margin-top : -130px " >\n\n   \n\n  \n  \n\n</div>  \n  \n  \n  \n  \n<div class="container">\n  <div class="row">\n    <div class="col-md-2">\n                \n            \n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon1">last4 apikey:</span>\n            <input class="form-control" [(ngModel)]="ReqO.l4" style="border : 5px solid #800080" type="text" id="l4" value="Vvuc">\n          </div>\n          <br>\n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon2">Max  : </span>\n            <input class="form-control" [(ngModel)]="ReqO.maxi" type="text" id="maxi" value="10"   min="10" max="1000">\n          </div>\n          <br>\n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon2">loops : </span>\n            <input class="form-control" [(ngModel)]="ReqO.loops"  type="text" id="loop" value="1"  min="1" max="5">\n          </div>\n          <br>\n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon2">times :</span>\n            <input class="form-control" [(ngModel)]="ReqO.times" type="text" id="t" value="4"  min="1" max="100">\n          </div>\n          <br>\n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon2">Conmode:</span>\n            <input class="form-control" [(ngModel)]="ReqO.conc" type="text"  max="100">\n          </div>\n          <br>\n          <div class="input-group">\n            <span class="input-group-addon" id="basic-addon2">mb:</span>\n            <input class="form-control" [(ngModel)]="ReqO.mb" type="text" id="t" value="4"  min="1" max="100">\n          </div>\n          <br>\n          <button  class="btn btn-primary"  (click)="post()" >request lambda data</button>\n    </div>\n    <div class="col-md-10 canvasc  light">\n        \n    <canvas  baseChart  \n                [datasets]="lineChartData"\n                [labels]="lineChartLabels"\n                [options]="lineChartOptions"\n                [colors]="lineChartColors"\n                [legend]="lineChartLegend"\n                [chartType]="lineChartType"\n                (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n  \n    </div>\n    \n  </div>\n</div>\n \n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/app/chart-js/chart-js.component.html"*/,
            styleUrls: ['./chart-js.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ChartJsComponent);
    return ChartJsComponent;
    var _a;
}());

//# sourceMappingURL=chart-js.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Defobj; });
var Defobj = {
    l4: 'Vvuc',
    maxi: '100',
    loops: '1',
    times: '10',
    conc: 'on',
    mb: '1024'
};
//# sourceMappingURL=defobj.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.title = 'ngChart.js data visualisation,  AKA your AWS lambda live performance measurement platform ';
        this.subtitle = 'AKA your AWS lambda live performance measurement platform ';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ubuntu/workspace/NWEN406/myApp/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n<!--The content below is only a placeholder and can be replaced.-->\n<div style="text-align:center" >\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <h2>\n    Welcome to {{subtitle}}!\n  </h2>\n  \n    \n  <h3>derived from  <a href="http://35.163.140.165:5000/l/" target="_blank">NWEN406 lambda project</a> </h3>\n    <div  class="breath-light" >\n        <img  width="150"  style=" position: absolute; left: 10px;  top: 40px;" src="http://www.chartjs.org/img/chartjs-logo.svg">\n    </div>\n    \n    <div class="breath-light2"> \n      <img  width="150"  style="position: absolute;left: 10px;  top: 50px; z-index:-1"  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">\n    </div>\n </div>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!--<app-chart-js></app-chart-js>  -->\n\n\n\n\n\n<h5><a href="http://35.163.140.165:5000/getSatisfactory" target="_blank">EC2 REST API JSON endpoint @ lambda project</a>  </h5>\n\n<h5><a href="https://github.com/jconning/lambda-cpu-cost/blob/master/eratosthenes_lambda.py" target="_blank">python codes running on aws  lambda </a>  </h5>\n\n`/*ion-inline-end:"/home/ubuntu/workspace/NWEN406/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map